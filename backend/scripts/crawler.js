import axios from 'axios';
import * as cheerio from 'cheerio';
import { Pinecone } from '@pinecone-database/pinecone';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import EmbeddingGenerator from '../utils/embeddings.js';

dotenv.config();

// Because the site is a React SPA, `axios.get` only returns `<div id="root"></div>`.
// For the most accurate RAG injection, we define the core knowledge chunks manually or read them from source.
const COMPANY_KNOWLEDGE = [
    {
        url: "https://boldvizbyte.com/",
        text: "BoldVizByte is a premium digital agency based in Kovilpatti and Thoothukudi, India. We empower brands to succeed online with high-performance websites and cutting-edge digital marketing."
    },
    {
        url: "https://boldvizbyte.com/services",
        text: "Our core services include: 1. Digital Marketing: Comprehensive strategies to grow your audience. 2. SEO & Ranking: We help businesses rank on the first page of Google to increase organic traffic. 3. Web Development: Custom, fast, and responsive websites. 4. Branding & Design: Logo creation and brand identity. 5. Video Editing: Professional video production for social media. 6. IT Solutions: Custom software and technical support."
    },
    {
        url: "https://boldvizbyte.com/about",
        text: "The Founder of BoldVizByte is committed to helping local and global businesses scale dynamically. You can contact us directly at +91 7708994392 or email founder.boldvizbyte@gmail.com for a free consultation or quote."
    },
    {
         url: "https://boldvizbyte.com/pricing",
         text: "Pricing at BoldVizByte is custom-tailored to each project's specific scope and requirements. We offer free audits and quotes. Please provide your contact details and our experts will reach out with a detailed proposal."
    }
];

const getKnowledgeChunks = () => {
    return COMPANY_KNOWLEDGE;
};

const chunkText = (text, url) => {
    const words = text.split(' ');
    const chunks = [];
    
    for (let i = 0; i < words.length; i += CHUNK_SIZE) {
        const chunkStr = words.slice(i, i + CHUNK_SIZE).join(' ');
        if (chunkStr.length > 50) { // Ignore tiny fragmented chunks
            chunks.push({
                text: chunkStr,
                url: url
            });
        }
    }
    return chunks;
};

const runCrawlerAndEmbedder = async () => {
    if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX) {
        console.error("PINECONE_API_KEY and PINECONE_INDEX must be set in your .env file!");
        process.exit(1);
    }

    console.log("Initializing Pinecone Client...");
    const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
    const index = pc.index(process.env.PINECONE_INDEX);

    const allChunks = getKnowledgeChunks();

    console.log(`Total chunks across all pages: ${allChunks.length}`);
    console.log("Generating Embeddings. This may take a minute as it downloads the model on first run...");

    const vectorsToUpsert = [];

    // 2. Generate Embeddings & Prepare for DB
    for (let i = 0; i < allChunks.length; i++) {
        const chunk = allChunks[i];
        try {
            const embedding = await EmbeddingGenerator.embed(chunk.text);
            
            if (embedding.length !== 384) {
                 throw new Error(`Invalid Dimension: expected 384, got ${embedding.length}`);
            }

            vectorsToUpsert.push({
                id: `chunk-${uuidv4()}`,
                values: embedding,
                metadata: {
                    text: chunk.text,
                    sourceUrl: chunk.url
                }
            });
            console.log(`Embedded chunk ${i + 1}/${allChunks.length}`);
        } catch(e) {
            console.error(`Failed to embed chunk ${i+1}: `, e.message);
        }
    }

    // 3. Upsert to Vector DB
    console.log(`Pushing ${vectorsToUpsert.length} vectors to Pinecone Index: ${process.env.PINECONE_INDEX}...`);
    try {
        await index.upsert({ records: vectorsToUpsert });
        console.log("✅ Successfully saved vectors to Pinecone!");
    } catch (e) {
         console.error("Failed to upload to Pinecone:", e.message);
    }
};

// Run if executed directly
runCrawlerAndEmbedder();
