import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const reasons = [
    { icon: Target, title: "Strategy-Driven Approach", desc: "We don't guess, we plan." },
    { icon: Zap, title: "Creative + Technical Blend", desc: "Design meets functionality." },
    { icon: TrendingUp, title: "Result-Focused Marketing", desc: "ROI is our priority." },
    { icon: ShieldCheck, title: "Transparent Process", desc: "No hidden costs or delays." },
    { icon: Clock, title: "Long-Term Support", desc: "We grow with you." },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Why Choose <span className="text-neon-purple">Us</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all hover:-translate-y-2 group"
                        >
                            <div className="mb-6 w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                                <reason.icon size={24} />
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3">{reason.title}</h3>
                            <p className="text-gray-400 font-outfit">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
