import axios from 'axios';
import * as cheerio from 'cheerio';
import { Pinecone } from '@pinecone-database/pinecone';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import EmbeddingGenerator from '../utils/embeddings.js';

dotenv.config();

// The public pages we want the AI to know about
const URLS_TO_CRAWL = [
    'https://boldvizbyte.com/',
    'https://boldvizbyte.com/services',
    'https://boldvizbyte.com/about',
    // Add additional URLs here if necessary
];

// Split text into roughly 500 token chunks (using simple word splitting as an approximation)
const CHUNK_SIZE = 400; 

const crawlPage = async (url) => {
    try {
        console.log(`Crawling: ${url}...`);
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        
        // Remove scripts, styles, and empty elements
        $('script, style, noscript, nav, footer, header').remove();

        // Extract raw text
        let text = $('body').text();
        
        // Clean up text (remove excessive newlines, tabs)
        text = text.replace(/\s+/g, ' ').trim();
        return { url, text };
    } catch (error) {
        console.error(`Failed to crawl ${url}:`, error.message);
        return { url, text: '' };
    }
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

    let allChunks = [];

    // 1. Crawl Sites
    for (const url of URLS_TO_CRAWL) {
        const result = await crawlPage(url);
        if (result.text) {
            const chunks = chunkText(result.text, result.url);
            allChunks = [...allChunks, ...chunks];
            console.log(`Extracted ${chunks.length} chunks from ${url}`);
        }
    }

    console.log(`Total chunks across all pages: ${allChunks.length}`);
    console.log("Generating Embeddings. This may take a minute as it downloads the model on first run...");

    const vectorsToUpsert = [];

    // 2. Generate Embeddings & Prepare for DB
    for (let i = 0; i < allChunks.length; i++) {
        const chunk = allChunks[i];
        try {
            const embedding = await EmbeddingGenerator.embed(chunk.text);
            
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
        await index.upsert(vectorsToUpsert);
        console.log("✅ Successfully saved vectors to Pinecone!");
    } catch (e) {
         console.error("Failed to upload to Pinecone:", e.message);
    }
};

// Run if executed directly
runCrawlerAndEmbedder();
