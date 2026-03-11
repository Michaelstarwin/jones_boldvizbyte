import { motion } from 'framer-motion';
import { Layers, Briefcase } from 'lucide-react';

const expertise = [
    "Digital Marketing & Advertising",
    "Web & App Development",
    "Branding & Design",
    "AI-powered solutions",
    "Performance optimization & SEO"
];

const industries = [
    "Startups",
    "Small & Medium Businesses",
    "E-commerce",
    "Education",
    "Healthcare",
    "Real Estate",
    "Personal Brands"
];

const AboutExpertise = () => {
    return (
        <section className="py-20 bg-dark-bg/50 border-y border-white/5">
            <div className="container mx-auto px-6">

                {/* 1. Expertise & Philosophy Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Expertise */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Layers className="text-neon-pink" size={28} />
                            <h2 className="text-3xl font-orbitron font-bold text-white">Our Expertise</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {expertise.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/10 p-5 rounded-xl text-gray-200 font-outfit hover:border-neon-pink/50 transition-colors"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Work Philosophy */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl" />
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Our Work Philosophy</h3>
                            <p className="text-xl text-gray-300 font-outfit leading-relaxed italic border-l-4 border-neon-blue pl-6">
                                "We don’t believe in shortcuts. Every project at BoldVizByte is handled with a structured process, clear communication, and a focus on long-term value."
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Industries We Serve */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Briefcase className="text-neon-green" size={28} style={{ color: '#4ade80' }} />
                        <h2 className="text-3xl font-orbitron font-bold text-white">Industries We Serve</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((ind, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-white/5 rounded-full text-gray-300 font-outfit border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all cursor-default"
                            >
                                {ind}
                            </motion.span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutExpertise;
