import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMarquee from '../ui/BrandMarquee';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8"
                >
                    Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Powerful</span> Together
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link to="/contact">
                        <button className="px-8 py-4 bg-neon-blue text-black font-orbitron font-bold tracking-wider rounded-none hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                            CONTACT US <Mail size={20} />
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="px-8 py-4 bg-transparent border border-white text-white font-orbitron font-bold tracking-wider hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                            START YOUR PROJECT <ArrowRight size={20} />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Infinite Brand Marquee */}
            <div className="mt-10">
                <BrandMarquee />
            </div>
        </section>
    );
};

export default CTA;
