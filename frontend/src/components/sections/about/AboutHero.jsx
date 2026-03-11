import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] flex flex-col justify-start pt-32 md:justify-center md:pt-0 items-center overflow-hidden bg-dark-bg">
            {/* Background Animation/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20" /> {/* Optional grid if available, else plain */}

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-orbitron font-bold text-white mb-6"
                >
                    About <span className="text-neon-blue">BoldVizByte</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl font-orbitron font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8"
                >
                    Where Creativity Meets Technology
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-gray-400 font-outfit text-lg leading-relaxed">
                        BoldVizByte is a digital marketing and IT solutions company helping businesses grow with strategy, design, and technology.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
