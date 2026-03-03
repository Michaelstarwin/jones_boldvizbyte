import { motion } from 'framer-motion';
import { Search, Map, PenTool, Rocket, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <Search size={32} />,
        title: "Understand Your Goal",
        desc: "We analyze your business needs and objectives to define success."
    },
    {
        icon: <Map size={32} />,
        title: "Plan Strategy",
        desc: "We roadmap the most effective path to achieve your digital goals."
    },
    {
        icon: <PenTool size={32} />,
        title: "Design & Develop",
        desc: "Our creative and tech teams build your solution with precision."
    },
    {
        icon: <Rocket size={32} />,
        title: "Launch & Optimize",
        desc: "We deploy your project and fine-tune for maximum performance."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Scale & Support",
        desc: "We help you grow continuously with data-driven insights."
    }
];

const ProcessPreview = () => {
    return (
        <section className="py-20 bg-dark-bg border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6"
                    >
                        How We <span className="text-neon-purple">Work</span>
                    </motion.h2>
                    <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
                        Professional clarity at every step. We turn complexity into results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl relative group hover:bg-white/10 transition-colors text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-neon-purple/20 rounded-full flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                                {step.icon}
                            </div>
                            <div className="absolute top-4 right-4 text-4xl font-black text-white/5 font-orbitron">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-400 font-outfit leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessPreview;
