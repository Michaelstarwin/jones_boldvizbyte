import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMarquee from '../ui/BrandMarquee';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />

            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white mb-8 tracking-tight">
                        Ready to Grow Your Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">BoldVizByte?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <Link to="/services">
                            <button className="w-full sm:w-auto px-10 py-5 bg-neon-blue text-black font-orbitron font-bold tracking-wider rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                                <Zap fill="black" size={20} /> APPLY FOR SERVICE
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-orbitron font-bold tracking-wider rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                                CONTACT US <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Infinite Brand Marquee - Reintegrated from Previous CTA */}
            <div className="mt-4">
                <BrandMarquee />
            </div>
        </section>
    );
};

export default FinalCTA;
