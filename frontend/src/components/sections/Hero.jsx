import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThreeBackground from '../animations/ThreeBackground';
import MagicRings from '../ui/MagicRings';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Link } from 'react-router-dom';

const Hero = () => {
    const typingText = useTypewriter("Websites | 3D Experiences | AI Agents | Digital Growth", 100);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
            {/* 3D Background - Keep existing, but add MagicRings on top as an overlay */}
            <ThreeBackground />
            
            {/* Magic Rings Animation Overlay */}
            <div className="absolute inset-0 pointer-events-none z-[5] opacity-60 flex items-center justify-center">
                <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
                    <MagicRings
                        color="#00f3ff"       // matching neon-blue
                        colorTwo="#a855f7"    // matching neon-purple
                        ringCount={8}
                        speed={0.8}
                        attenuation={10}
                        lineThickness={2}
                        baseRadius={0.3}
                        radiusStep={0.15}
                        scaleRate={0.08}
                        opacity={0.8}
                        blur={0}
                        noiseAmount={0.1}
                        rotation={0}
                        ringGap={1.5}
                        fadeIn={0.7}
                        fadeOut={0.5}
                        followMouse={true}
                        mouseInfluence={0.1}
                        hoverScale={1.1}
                        parallax={0.05}
                        clickBurst={false}
                    />
                </div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-neon-blue font-orbitron tracking-[0.2em] text-xs sm:text-sm md:text-base mb-4 uppercase glow-text relative z-20 mt-24 md:mt-0">
                        Welcome to the Future
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-orbitron font-black text-white mb-6 tracking-tighter leading-tight"
                >
                    We Build Digital Brands That <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse-glow">Dominate</span> the Internet
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-10 max-w-3xl mx-auto"
                >
                    <p className="text-lg md:text-xl font-outfit text-gray-300 leading-relaxed">
                        BoldVizByte is a next-gen Digital Marketing & IT Company delivering high-impact websites, AI solutions, and growth marketing.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-sm md:max-w-none mx-auto"
                >
                    <Link to="/contact" className="w-full md:w-auto">
                        <button className="w-full md:w-auto group relative px-8 py-4 bg-neon-blue text-black font-orbitron font-bold tracking-wider overflow-hidden hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                            <span className="relative flex items-center justify-center gap-2">
                                GET STARTED <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </Link>

                    <Link to="/our-work" className="w-full md:w-auto">
                        <button className="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-orbitron font-bold tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                            VIEW OUR WORKS
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
