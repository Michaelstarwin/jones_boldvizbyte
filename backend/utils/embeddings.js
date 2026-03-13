import { pipeline } from '@xenova/transformers';

/**
 * Utility to wrap @xenova/transformers pipeline for easy consumption.
 * This runs the Hugging Face `all-MiniLM-L6-v2` model locally without hitting an API.
 */
class EmbeddingGenerator {
    static task = 'feature-extraction';
    static model = 'Xenova/all-MiniLM-L6-v2';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            // Lazy load the model on first use
            this.instance = pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }

    /**
     * Convert given text (or array of texts) to embedding vectors array
     */
    static async embed(text) {
        try {
            const embedder = await this.getInstance();
            const result = await embedder(text, { pooling: 'mean', normalize: true });
            
            // Xenova returns a Tensor object. We need a flat float array for Pinecone (expected rank 1).
            return Array.from(result.data);
        } catch (error) {
            console.error("Embedding generation failed:", error);
            throw error;
        }
    }
}

export default EmbeddingGenerator;
