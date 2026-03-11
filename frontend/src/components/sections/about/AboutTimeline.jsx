import { motion } from 'framer-motion';

const milestones = [
    { year: "2025", title: "Idea Born", desc: "The vision of BoldVizByte was conceptualized." },
    { year: "2025", title: "First Client", desc: "Successfully delivered our first digital solution." },
    { year: "2025", title: "Expansion", desc: "Grew our team and expanded service offerings." },
    { year: "Present", title: "Market Leader", desc: "Empowering 100+ businesses across the region." }
];

const AboutTimeline = () => {
    return (
        <section className="py-20 bg-dark-bg/30 border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">Our Journey</h2>
                    <p className="text-gray-400 font-outfit">From a bold idea to a digital powerhouse.</p>
                </div>

                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent md:block hidden" />

                    <div className="space-y-12 relative">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full md:w-auto" />

                                {/* Node */}
                                <div className="w-8 h-8 rounded-full bg-neon-blue/20 border-2 border-neon-blue z-10 flex-shrink-0 shadow-[0_0_15px_rgba(0,243,255,0.5)] bg-black" />

                                <div className={`flex-1 w-full md:w-auto p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-neon-blue/30 transition-colors text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="text-neon-blue font-orbitron font-bold text-xl block mb-2">{item.year}</span>
                                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm font-outfit">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTimeline;
