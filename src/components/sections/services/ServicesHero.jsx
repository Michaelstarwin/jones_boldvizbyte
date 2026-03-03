import { motion } from 'framer-motion';

const ServicesHero = () => {
    return (
        <section className="pt-32 pb-20 bg-dark-bg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6">
                        Our <span className="text-neon-blue">Services</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white/90 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
                        Digital Marketing & IT Solutions That Drive Growth
                    </h2>

                    <p className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed">
                        We offer end-to-end digital services designed to help businesses <br className="hidden md:block" />
                        <span className="text-white font-bold">build, grow, and scale</span> in the digital world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
