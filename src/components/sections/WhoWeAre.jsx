import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhoWeAre = () => {
    const points = [
        "Digital Marketing Experts",
        "IT & Web Development Team",
        "Creative & Branding Specialists",
        "AI-Driven Growth Solutions"
    ];

    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Who We <span className="text-neon-blue">Are</span>
                    </h2>
                    <p className="text-gray-400 font-outfit text-lg mb-8 leading-relaxed">
                        BoldVizByte is a creative-driven digital marketing and IT solutions company helping startups, businesses, and enterprises build powerful online presence and scalable technology solutions.
                    </p>

                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-3 text-white font-outfit"
                            >
                                <CheckCircle2 className="text-neon-green" size={20} />
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Visual / Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 mix-blend-overlay z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                        alt="Team at work"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAre;
