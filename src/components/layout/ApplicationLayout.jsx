import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ApplicationLayout = ({ title, subtitle, children }) => {
    return (
        <div className="min-h-screen bg-dark-bg relative overflow-x-hidden selection:bg-neon-blue selection:text-black">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-2">
                            BoldVizByte <span className="text-neon-blue">Connect</span>
                        </h1>
                        <p className="text-gray-400 font-outfit tracking-widest text-sm md:text-base uppercase">
                            Apply. Build. Grow with BoldVizByte
                        </p>
                    </motion.div>
                </div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />

                        <h2 className="text-2xl font-orbitron font-bold text-white mb-2">{title}</h2>
                        <p className="text-gray-400 font-outfit mb-8">{subtitle}</p>

                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ApplicationLayout;
