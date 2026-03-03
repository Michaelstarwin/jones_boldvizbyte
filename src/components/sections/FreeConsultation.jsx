import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeConsultation = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-y border-neon-blue/20">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
                    <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-white mb-6">
                        Unlock Your Brand's Potential 🔓
                    </h2>
                    <p className="text-xl text-gray-300 font-outfit mb-8">
                        Get a <span className="text-white font-bold">Free Website / Marketing Consultation</span> worth ₹5000. No strings attached.
                    </p>
                    <Link to="/contact">
                        <button className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-orbitron font-black tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(255,200,0,0.5)] transition-all transform hover:-translate-y-1">
                            GET FREE CONSULTATION
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FreeConsultation;
