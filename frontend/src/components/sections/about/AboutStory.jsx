import { motion } from 'framer-motion';
import { Target, Eye, BookOpen } from 'lucide-react';

const AboutStory = () => {
    return (
        <section className="py-20 bg-dark-bg border-b border-white/5">
            <div className="container mx-auto px-6">
                {/* Our Story */}
                <div className="max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-neon-purple font-orbitron text-sm mb-6">
                            <BookOpen size={16} /> OUR STORY
                        </div>
                        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                            Bridging the Gap Between <br className="hidden md:block" />
                            <span className="text-gray-400">Marketing & Technology</span>
                        </h2>
                        <p className="text-gray-300 font-outfit text-lg leading-relaxed mb-6">
                            BoldVizByte was founded with a clear vision – to combine creative thinking, powerful technology, and result-driven marketing into one unified digital force.
                        </p>
                        <p className="text-gray-400 font-outfit leading-relaxed">
                            We noticed that businesses struggled when marketing and technology worked separately. BoldVizByte was created to bridge that gap, ensuring your brand looks great, runs smoothly, and reaches the right audience.
                        </p>
                    </motion.div>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-3xl border border-white/10 hover:border-neon-blue/30 transition-colors"
                    >
                        <div className="w-14 h-14 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue mb-6">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 font-outfit leading-relaxed">
                            To empower businesses with innovative digital solutions that deliver measurable growth and long-term success.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-3xl border border-white/10 hover:border-neon-purple/30 transition-colors"
                    >
                        <div className="w-14 h-14 bg-neon-purple/20 rounded-xl flex items-center justify-center text-neon-purple mb-6">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 font-outfit leading-relaxed">
                            To become a trusted digital partner for businesses across Tamil Nadu and India, known for innovation, quality, and results.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
