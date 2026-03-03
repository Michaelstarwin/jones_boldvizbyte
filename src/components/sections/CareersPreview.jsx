import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPreview = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-orbitron text-white mb-6">
                            <Briefcase size={16} className="text-neon-blue" /> WE ARE HIRING
                        </div>
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-tight">
                            Build Your Career with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Real-World Projects</span>
                        </h2>
                        <ul className="text-gray-300 space-y-2 mb-8 font-outfit text-lg inline-block text-left">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-neon-blue rounded-full" /> Expert Mentorship
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-neon-purple rounded-full" /> Live Project Experience
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-neon-pink rounded-full" /> Professional Certification
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="/careers">
                                <button className="px-8 py-4 bg-white text-black font-orbitron font-bold tracking-wider hover:bg-gray-200 transition-colors w-full sm:w-auto">
                                    VIEW CAREERS
                                </button>
                            </Link>
                            <Link to="/careers">
                                <button className="px-8 py-4 bg-transparent border border-white text-white font-orbitron font-bold tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                                    APPLY FOR INTERNSHIP <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Visual / Image (Abstract Representation) */}
                    <div className="flex-1 flex justify-center w-full md:w-auto">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Rotating Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-neon-blue/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-2 border-dashed border-neon-purple/30 rounded-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <span className="block text-5xl font-black font-orbitron text-white">Join</span>
                                    <span className="block text-2xl font-bold font-orbitron text-neon-blue">Us</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersPreview;
