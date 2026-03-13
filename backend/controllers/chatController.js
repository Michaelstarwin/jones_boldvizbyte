import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'your-api-key',
});

const SYSTEM_PROMPT = `You are a highly professional, helpful, and energetic digital agency assistant for "BoldVizByte". 

Company Information:
- Location: Kovilpatti & Thoothukudi, India.
- Services: Digital Marketing, SEO (Ranking on Google/Page 1), Web Development, Branding & Design, Video Editing, and IT Solutions.
- Goal: Help businesses grow online, build their brand, and scale dynamically.
- Contact info: +91 7708994392, founder.boldvizbyte@gmail.com

Your Core Responsibilities:
1. Answer questions about BoldVizByte's services concisely.
2. Maintain an energetic and professional tone using appropriate emojis (🚀, 💡, 💻).
3. If users ask for pricing, let them know pricing depends on project scope, but encourage them to provide their contact information so an expert can provide a free quote or audit.
4. Try to guide the conversation towards collecting their Name, Phone Number, Business Type, and desired Service so the sales team can follow up.

Important Rules:
- Keep your responses relatively short (under 4 sentences usually). The user is reading this on a small chat widget.
- Do NOT make up services or prices.
- If and ONLY if you have collected all their details (Name, Phone, Business, Service), thank them and tell them an expert will call them shortly.
`;

export const handleChat = async (req, res) => {
    try {
        const { messages } = req.body; // Expects an array of previous messages in OpenAI format

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "Invalid messages format." });
        }

        // Check if API key is actually configured vs default
        if (process.env.OPENAI_API_KEY === undefined) {
             console.warn("OPENAI_API_KEY is not set in environment variables.");
             // Fallback response for development/missing key
             return res.json({ 
                 message: { 
                     role: 'assistant', 
                     content: "I'm currently undergoing maintenance, but you can reach our experts directly at +91 7708994392 or founder.boldvizbyte@gmail.com! How can we help you?" 
                 }
             });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or gpt-4o-mini
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 250,
        });

        res.json({ message: completion.choices[0].message });
    } catch (error) {
        console.error("OpenAI Error:", error);
        res.status(500).json({ error: "Failed to communicate with AI service." });
    }
};
