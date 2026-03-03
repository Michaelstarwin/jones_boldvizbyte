import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const donts = [
    "Fake promises",
    "Copy–paste designs",
    "One-time delivery & disappear",
    "Short-term thinking"
];

const standards = [
    "Clean code standards",
    "SEO best practices",
    "Performance-focused builds",
    "Mobile-first approach",
    "Clear pricing & No hidden charges"
];

const AboutStandards = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* What We Don't Do */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-orbitron font-bold text-white mb-8 border-l-4 border-red-500 pl-4">
                            What We <span className="text-red-500">Don't</span> Do
                        </h3>
                        <div className="space-y-4">
                            {donts.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                                    <X className="text-red-500" size={24} />
                                    <span className="text-gray-300 font-outfit text-lg del">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-400 italic">"We focus on long-term growth, not shortcuts."</p>
                    </motion.div>

                    {/* Quality & Ethics */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-orbitron font-bold text-white mb-8 border-l-4 border-neon-green pl-4">
                            Our <span className="text-neon-green">Standards</span>
                        </h3>
                        <div className="space-y-4">
                            {standards.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-green-500/5 p-4 rounded-xl border border-green-500/10">
                                    <Check className="text-neon-green" size={24} />
                                    <span className="text-white font-outfit text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutStandards;
