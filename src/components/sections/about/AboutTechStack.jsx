import { motion } from 'framer-motion';

const stack = [
    { category: "Frontend", tools: ["React", "Next.js", "Tailwind CSS", "GSAP", "Three.js"] },
    { category: "Backend", tools: ["Node.js", "Express", "Python", "MongoDB", "SQL"] },
    { category: "Design", tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { category: "Marketing", tools: ["Google Ads", "Meta Ads", "SEO Tools", "Analytics"] }
];

const AboutTechStack = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Tools & Technologies <span className="text-neon-blue">We Trust</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-neon-blue/30 transition-colors"
                        >
                            <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-4 border-b border-white/10 pb-2">
                                {item.category}
                            </h3>
                            <ul className="space-y-2">
                                {item.tools.map((tool, i) => (
                                    <li key={i} className="text-gray-300 font-outfit text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" /> {tool}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTechStack;
