import OpenAI from 'openai';

try {
    const openai = new OpenAI({
        apiKey: 'dummy-key',
    });
    console.log("OpenAI initialized successfully.");
} catch (e) {
    console.error("OpenAI initialization failed: ", e.message);
}
