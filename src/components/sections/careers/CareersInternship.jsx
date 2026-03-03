import { motion } from 'framer-motion';
import { Award, Target, Users } from 'lucide-react';

const CareersInternship = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-dark-bg to-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-neon-blue font-bold tracking-widest uppercase text-sm mb-2 block">Student Program</span>
                            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                                Not Just Theory. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">Real Experience.</span>
                            </h2>
                            <p className="text-gray-300 font-outfit text-lg mb-8 leading-relaxed">
                                Our internship programs are designed to give you hands-on experience with real projects. No coffee runs here—you build, you create, and you ship.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-neon-blue/20 rounded-lg text-neon-blue"><Award size={20} /></div>
                                    <span className="text-white font-outfit">Completion Certificate & Letter of Rec.</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-neon-blue/20 rounded-lg text-neon-blue"><Users size={20} /></div>
                                    <span className="text-white font-outfit">Direct Mentorship from Founders</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-neon-blue/20 rounded-lg text-neon-blue"><Target size={20} /></div>
                                    <span className="text-white font-outfit">Job Offer Potential based on performance</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/30 w-full h-64 rounded-2xl border border-white/10 flex items-center justify-center text-gray-600 font-orbitron text-xl">
                            {/* Placeholder for Internship Image/Graphic */}
                            [Internship Action Shot]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersInternship;
