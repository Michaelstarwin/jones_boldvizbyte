import { motion } from 'framer-motion';
import { DollarSign, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPricing = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-dark-bg to-gray-900 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <DollarSign className="text-neon-blue" size={32} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                        Transparent & Flexible Pricing
                    </h2>

                    <p className="text-xl text-gray-300 font-outfit mb-8 leading-relaxed">
                        "Our pricing is flexible and based on your project requirements. We focus on delivering value rather than fixed packages."
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-8 py-3 bg-neon-blue text-black font-bold font-orbitron rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2">
                            GET A FREE QUOTE
                        </Link>
                    </div>
                </motion.div>

                {/* Service Specific CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-neon-purple/5 border border-neon-purple/20 p-8 rounded-2xl"
                >
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Not sure which service you need?</h3>
                    <p className="text-gray-400 font-outfit mb-6">Talk to our experts for a custom roadmap.</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact" className="text-neon-purple font-bold font-orbitron underline flex items-center gap-2 hover:text-white transition-colors">
                            <MessageCircle size={20} /> Talk to Experts
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPricing;
