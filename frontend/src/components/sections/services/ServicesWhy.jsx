import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Zap, TrendingUp } from 'lucide-react';

const reasons = [
    { icon: TrendingUp, title: "Strategy First", desc: "We don't just execute; we plan for long-term growth." },
    { icon: Users, title: "Experienced Team", desc: "Experts who understand both tech and marketing." },
    { icon: Zap, title: "Transparent Pricing", desc: "No hidden costs. You pay for value." },
    { icon: Clock, title: "Timely Delivery", desc: "We respect deadlines as much as quality." },
    { icon: ShieldCheck, title: "Ongoing Support", desc: "We don't disappear after delivery." }
];

const ServicesWhy = () => {
    return (
        <section className="py-20 bg-dark-bg border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Why Choose <span className="text-neon-blue">Us?</span>
                    </h2>
                    <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
                        We build trust through transparency and results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-neon-blue/50 text-center group transition-colors"
                        >
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-blue/20 transition-colors">
                                <item.icon className="text-white group-hover:text-neon-blue transition-colors" size={24} />
                            </div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 font-outfit text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesWhy;
