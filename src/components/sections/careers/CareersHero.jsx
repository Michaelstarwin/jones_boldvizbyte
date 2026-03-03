import { motion } from 'framer-motion';

const CareersHero = () => {
    return (
        <section className="pt-32 pb-20 bg-dark-bg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-7xl font-orbitron font-bold text-white mb-6">
                        Careers at <span className="text-neon-purple">BoldVizByte</span>
                    </h1>

                    <h2 className="text-xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-8">
                        Build Your Career. Build the Future.
                    </h2>

                    <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
                        We’re always looking for passionate individuals who want to <span className="text-white font-bold">learn, grow, and create real impact</span> in the digital world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CareersHero;
