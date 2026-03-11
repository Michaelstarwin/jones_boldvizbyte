import { motion } from 'framer-motion';
import { Calendar, BarChart3, ShieldAlert } from 'lucide-react';

const CareersExpectations = () => {
    return (
        <section className="py-20 bg-dark-bg border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Weekly Routine */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-neon-blue">
                            <Calendar size={24} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Weekly Routine</h3>
                        </div>
                        <ul className="space-y-4 font-outfit text-gray-400 border-l-2 border-white/10 pl-6">
                            <li><strong className="text-white block">Daily:</strong> Updates & Task Execution</li>
                            <li><strong className="text-white block">Weekly:</strong> Review & Feedback Session</li>
                            <li><strong className="text-white block">Balance:</strong> Learning + Implementation</li>
                        </ul>
                    </div>

                    {/* Performance Metrics */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-neon-green">
                            <BarChart3 size={24} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Growth Metrics</h3>
                        </div>
                        <ul className="space-y-4 font-outfit text-gray-400 border-l-2 border-white/10 pl-6">
                            <li>📈 Skill Improvement Speed</li>
                            <li>✅ Task Completion Rate</li>
                            <li>🤝 Team Contribution</li>
                            <li>🧠 Learning Attitude</li>
                        </ul>
                    </div>

                    {/* Conduct */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-red-400">
                            <ShieldAlert size={24} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Code of Conduct</h3>
                        </div>
                        <ul className="space-y-4 font-outfit text-gray-400 border-l-2 border-white/10 pl-6">
                            <li>🚫 No ghosting (Communication is key)</li>
                            <li>⏱️ Respect for deadlines</li>
                            <li>🤐 Confidentiality of client data</li>
                            <li>🚀 Ownership of tasks</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersExpectations;
