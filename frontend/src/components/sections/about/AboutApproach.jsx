import { motion } from 'framer-motion';
import { Ear, Heart, TrendingUp } from 'lucide-react';

const AboutApproach = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-dark-bg to-black border-y border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-12">
                        Our Approach to <span className="text-neon-purple">Clients</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <Ear className="w-12 h-12 text-neon-blue mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">We Listen First</h3>
                            <p className="text-gray-400 text-sm">Understanding your vision is our priority before writing a single line of code.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <Heart className="w-12 h-12 text-neon-pink mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">We Care</h3>
                            <p className="text-gray-400 text-sm">We treat your business like our own. Your success is our reputation.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                            <TrendingUp className="w-12 h-12 text-neon-green mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Growth Focused</h3>
                            <p className="text-gray-400 text-sm">We suggest what’s right for your growth, not just what’s costly.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Client Success Philosophy</h3>
                        <p className="text-lg text-gray-300 italic font-outfit">
                            "Your success is our success. We measure our growth by the results we deliver to you."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutApproach;
