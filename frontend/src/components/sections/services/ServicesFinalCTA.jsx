import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

const ServicesFinalCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 relative overflow-hidden">

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-8">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Grow?</span>
                    </h2>
                    <p className="text-xl text-gray-300 font-outfit mb-12 max-w-2xl mx-auto">
                        Don't just compete. Dominate your market with BoldVizByte's expert digital solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-10 py-4 bg-white text-black font-bold font-orbitron rounded-full hover:bg-neon-blue transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            APPLY FOR SERVICE <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="px-10 py-4 border border-white text-white font-bold font-orbitron rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            GET FREE CONSULTATION <MessageSquare size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesFinalCTA;
