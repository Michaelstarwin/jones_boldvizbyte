import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Users, TrendingUp, Heart } from 'lucide-react';

const reasons = [
    { icon: Briefcase, title: "Real Project Experience", desc: "Work on live client projects, not just dummy tasks." },
    { icon: BookOpen, title: "Learning-Focused", desc: "Access to premium courses and mentorship." },
    { icon: Users, title: "Collaborative Team", desc: "A supportive culture that helps you win." },
    { icon: TrendingUp, title: "Career Growth", desc: "Clear path from intern to full-time roles." },
    { icon: Heart, title: "Transparent Culture", desc: "Open communication and mutual respect." }
];

const CareersWhy = () => {
    return (
        <section className="py-20 bg-dark-bg/50 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Why Work With <span className="text-neon-purple">Us?</span>
                    </h2>
                    <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
                        We don't just offer jobs; we offer careers built on learning and impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-neon-purple/50 text-center group transition-all hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-purple/20 transition-colors">
                                <item.icon className="text-white group-hover:text-neon-purple transition-colors" size={24} />
                            </div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 font-outfit text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersWhy;
