import { motion } from 'framer-motion';
import { Users, Globe, BookOpen } from 'lucide-react';

const AboutCulture = () => {
    return (
        <section className="py-20 bg-dark-bg border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Culture & <span className="text-neon-purple">Community</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Community & Learning */}
                    <div className="p-8 bg-gradient-to-br from-purple-900/10 to-transparent rounded-2xl border border-purple-500/20">
                        <BookOpen className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-orbitron font-bold text-white mb-3">Continuous Learning</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We foster a culture of mentorship, internships, and skill development to keep our team future-ready.
                        </p>
                    </div>

                    {/* Social Impact */}
                    <div className="p-8 bg-gradient-to-br from-blue-900/10 to-transparent rounded-2xl border border-blue-500/20">
                        <Globe className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-orbitron font-bold text-white mb-3">Social Impact</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Supporting startups, students, and local businesses in Tamil Nadu to grow and compete digitally.
                        </p>
                    </div>

                    {/* Behind the Brand */}
                    <div className="p-8 bg-gradient-to-br from-pink-900/10 to-transparent rounded-2xl border border-pink-500/20">
                        <Users className="w-10 h-10 text-pink-400 mb-4" />
                        <h3 className="text-xl font-orbitron font-bold text-white mb-3">Passion-Driven</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We are a team of dreamers and doers, united by a passion for technology and creativity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCulture;
