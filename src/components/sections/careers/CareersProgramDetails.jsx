import { motion } from 'framer-motion';
import { Briefcase, Users, PenTool, MessageSquare, TrendingUp, Award, Clock } from 'lucide-react';

const skills = [
    { icon: Briefcase, text: "Real Client Projects" },
    { icon: Users, text: "Team Collaboration" },
    { icon: PenTool, text: "Industry Tools Usage" },
    { icon: MessageSquare, text: "Pro Communication" },
    { icon: Clock, text: "Deadline Handling" }
];

const CareersProgramDetails = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">

                {/* Skills Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-orbitron font-bold text-white mb-10 text-center">
                        Skills You Will <span className="text-neon-blue">Actually Learn</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 px-8 py-6 rounded-2xl flex flex-col items-center gap-3 min-w-[160px] cursor-default"
                            >
                                <s.icon className="text-neon-blue" size={32} />
                                <span className="text-white font-outfit font-bold text-center">{s.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Conversion & Mentorship */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="bg-gradient-to-br from-neon-purple/10 to-transparent p-8 rounded-3xl border border-neon-purple/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-neon-purple/20 rounded-xl text-neon-purple"><TrendingUp size={28} /></div>
                            <h3 className="text-2xl font-orbitron font-bold text-white">Internship → Job Path</h3>
                        </div>
                        <p className="text-gray-300 font-outfit leading-relaxed mb-6">
                            We don't just train; we hire. Top-performing interns who demonstrate skill, discipline, and culture fit are offered full-time roles.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400 font-outfit">
                            <li className="flex items-center gap-2">🔹 Performance-based conversion</li>
                            <li className="flex items-center gap-2">🔹 Priority hiring for interns</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-neon-green/10 to-transparent p-8 rounded-3xl border border-neon-green/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-neon-green/20 rounded-xl text-neon-green"><Award size={28} /></div>
                            <h3 className="text-2xl font-orbitron font-bold text-white">Certificates & Mentorship</h3>
                        </div>
                        <p className="text-gray-300 font-outfit leading-relaxed mb-6">
                            You get dedicated senior mentorship, regular code/design reviews, and a verified certificate + Letter of Recommendation upon completion.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-white">1-on-1 Mentoring</span>
                            <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-white">Weekly Reviews</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersProgramDetails;
