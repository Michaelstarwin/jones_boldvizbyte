import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Video } from 'lucide-react'; // 'Video' is placeholder for zap/action icons
import { Link } from 'react-router-dom';

const trustFactors = [
    "Client-focused approach",
    "Clear timelines",
    "Honest pricing",
    "Scalable solutions",
    "Ongoing support"
];

const AboutTrust = () => {
    return (
        <section className="py-20 bg-dark-bg relative pb-40 md:pb-20">
            <div className="container mx-auto px-6">

                {/* 1. Location & Presence */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <MapPin className="w-12 h-12 text-neon-blue mx-auto mb-6 animate-bounce" />
                    <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Location & Presence</h2>
                    <p className="text-xl text-gray-300 font-outfit leading-relaxed">
                        Based in <span className="text-white font-bold">Kovilpatti, Tamil Nadu</span>, BoldVizByte serves clients across Thoothukudi, Tirunelveli, Madurai, Virudhunagar, all over Tamil Nadu, and across India.
                    </p>
                </div>

                {/* 2. Why Trust Us */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-16 text-center max-w-5xl mx-auto mb-20 relative z-10">
                    <h2 className="text-3xl font-orbitron font-bold text-white mb-10">Why Trust BoldVizByte?</h2>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
                        {trustFactors.map((factor, i) => (
                            <div key={i} className="flex items-center justify-center gap-3">
                                <CheckCircle className="text-neon-purple flex-shrink-0" size={24} />
                                <span className="text-white font-outfit text-lg text-left">{factor}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Final Call To Action */}
                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-10">
                            Let’s build something impactful together.
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/contact">
                                <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-orbitron font-bold tracking-wider rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                                    CONTACT US
                                </button>
                            </Link>
                            <Link to="/services">
                                <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-orbitron font-bold tracking-wider rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                                    APPLY FOR SERVICE <ArrowRight size={20} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutTrust;
