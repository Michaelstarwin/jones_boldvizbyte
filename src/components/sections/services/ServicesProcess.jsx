import { motion } from 'framer-motion';

const steps = [
    { num: "01", title: "Requirement", desc: "We listen & understand your goals." },
    { num: "02", title: "Strategy", desc: "Planning the roadmap to success." },
    { num: "03", title: "Execution", desc: "Design & development kick-off." },
    { num: "04", title: "Review", desc: "Refining based on your feedback." },
    { num: "05", title: "Launch", desc: "Final delivery & ongoing support." }
];

const ServicesProcess = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-dark-bg to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Our Work <span className="text-neon-purple">Process</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-1 bg-white/10 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative z-10 w-full md:w-auto text-center"
                        >
                            <div className="w-20 h-20 bg-dark-bg border-2 border-neon-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                <span className="text-2xl font-orbitron font-bold text-white">{step.num}</span>
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 font-outfit text-sm max-w-[150px] mx-auto">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesProcess;
