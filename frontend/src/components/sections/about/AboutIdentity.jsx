import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Heart, Users } from 'lucide-react';

const identityPoints = [
    "Digital Marketing Agency",
    "IT & Web Development Company",
    "Brand & Creative Strategists",
    "Growth Partners for Businesses"
];

const values = [
    { icon: <Zap size={20} />, title: "Innovation First" },
    { icon: <Shield size={20} />, title: "Transparency" },
    { icon: <Star size={20} />, title: "Performance & Results" },
    { icon: <Heart size={20} />, title: "Creativity" },
    { icon: <Users size={20} />, title: "Client Success" }
];

const differentiators = [
    "Strategy before execution",
    "Creative + technical expertise under one roof",
    "Data-driven decision making",
    "Transparent communication",
    "Long-term support mindset"
];

const AboutIdentity = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">

                {/* 1. Who We Are */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-10">Who We Are</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {identityPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-2 h-2 rounded-full bg-neon-blue flex-shrink-0" />
                                <span className="text-white font-orbitron font-medium text-left">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* 2. Core Values */}
                    <div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-8 border-l-4 border-neon-blue pl-4">Core Values</h3>
                        <div className="space-y-4">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl"
                                >
                                    <div className="text-neon-blue">{val.icon}</div>
                                    <span className="text-gray-200 font-outfit text-lg">{val.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 3. What Makes Us Different */}
                    <div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-8 border-l-4 border-neon-purple pl-4">What Makes Us Different</h3>
                        <div className="bg-gradient-to-br from-neon-purple/10 to-transparent p-8 rounded-2xl border border-neon-purple/20">
                            <ul className="space-y-6">
                                {differentiators.map((diff, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="bg-neon-purple rounded-full p-1 mt-1 text-black">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-white font-outfit text-lg">{diff}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutIdentity;
