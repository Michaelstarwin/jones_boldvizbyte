import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, X } from 'lucide-react';

const roles = [
    { id: 1, title: "Web Development Intern", type: "Internship", loc: "Remote / Hybrid", desc: "Build modern websites using React & Tailwind." },
    { id: 2, title: "Video Editing Intern", type: "Internship", loc: "Remote", desc: "Create engaging reels and promo videos." },
    { id: 3, title: "Sales Intern", type: "Internship", loc: "Onsite", desc: "Client acquisition and relationship management." },
    { id: 4, title: "Graphic Designing Intern", type: "Internship", loc: "Remote", desc: "Design social media posts and branding." },
    { id: 5, title: "Outreach Intern", type: "Internship", loc: "Remote", desc: "Connect with potential partners and leads." },
    { id: 6, title: "Business Analyst Intern", type: "Internship", loc: "Hybrid", desc: "Analyze market trends and business data." },
    { id: 7, title: "HR Intern", type: "Internship", loc: "Onsite", desc: "Assist in recruitment and team management." },
    { id: 8, title: "Accountant Intern", type: "Internship", loc: "Onsite", desc: "Manage invoices and financial records." },
    { id: 9, title: "Legal Advisor Intern", type: "Internship", loc: "Remote", desc: "Assist with contracts and compliance." },
    { id: 10, title: "Digital Marketing Intern", type: "Internship", loc: "Remote", desc: "Run ads and manage SEO campaigns." },
    { id: 11, title: "Social Media Manager Intern", type: "Internship", loc: "Remote", desc: "Manage and grow social communities." },
    { id: 12, title: "Content Writer Intern", type: "Internship", loc: "Remote", desc: "Write blogs, copy, and scripts." }
];

const CareersRoles = ({ onApply }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <section id="open-positions" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Open <span className="text-neon-green">Positions</span>
                    </h2>
                    <p className="text-gray-400 font-outfit">Find the role that fits your passion.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roles.map((role) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-neon-green/50 transition-all group cursor-pointer"
                            onClick={() => setSelectedRole(role)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-full uppercase">
                                    {role.type}
                                </span>
                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                    <MapPin size={12} /> {role.loc}
                                </span>
                            </div>
                            <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                {role.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-outfit mb-6 line-clamp-2">
                                {role.desc}
                            </p>
                            <button className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                VIEW DETAILS <ArrowRight size={16} className="text-neon-green" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for Details */}
                <AnimatePresence>
                    {selectedRole && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedRole(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-[#0f0f13] border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedRole(null)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-white"
                                >
                                    <X size={24} />
                                </button>

                                <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-full uppercase mb-4 inline-block">
                                    {selectedRole.type}
                                </span>
                                <h2 className="text-3xl font-orbitron font-bold text-white mb-2">{selectedRole.title}</h2>
                                <p className="text-gray-400 text-sm flex items-center gap-2 mb-8">
                                    <MapPin size={14} /> {selectedRole.loc}
                                </p>

                                <div className="space-y-6 font-outfit text-gray-300">
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Role Overview</h4>
                                        <p>{selectedRole.desc} You will work closely with our core team to deliver high-quality results.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">What You'll Do</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Work on real-world projects.</li>
                                            <li>Collaborate with cross-functional teams.</li>
                                            <li>Learn industry-standard tools and workflows.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2">Requirements</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Passion for learning and growth.</li>
                                            <li>Basic knowledge in the relevant field.</li>
                                            <li>Good communication skills.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                                    <button
                                        onClick={() => {
                                            onApply(selectedRole);
                                            setSelectedRole(null);
                                        }}
                                        className="flex-1 bg-neon-green text-black font-bold font-orbitron py-3 rounded-xl hover:bg-white transition-colors text-center"
                                    >
                                        APPLY NOW
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CareersRoles;
