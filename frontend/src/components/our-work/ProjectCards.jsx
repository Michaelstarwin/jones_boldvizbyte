import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCards = () => {
    // Modify these 5 placeholders with your exact links or text later
    const projects = [
        {
            id: 1,
            name: "A.M. Comfort Inn",
            desc: "Guest house Website",
            url: "https://www.amcinn.in/",
            color: "from-blue-500/20 to-cyan-500/5",
            border: "border-blue-500/30"
        },
        {
            id: 2,
            name: "A.M. Comfort Inn",
            desc: "Super Admin Dashboard",
            url: "https://pongal-wishes3d.netlify.app/",
            color: "from-green-500/20 to-emerald-500/5",
            border: "border-green-500/30"
        },
        {
            id: 3,
            name: "St. Michael church",
            desc: "Church Website",
            url: "https://boldvizbyte.com",
            color: "from-purple-500/20 to-fuchsia-500/5",
            border: "border-purple-500/30"
        },
        {
            id: 4,
            name: "Management App",
            desc: "Internal Dashboard",
            url: "https://bold-viz-byte-management.vercel.app/",
            color: "from-orange-500/20 to-amber-500/5",
            border: "border-orange-500/30"
        },
        {
            id: 5,
            name: "Michael Starwin Raj",
            desc: "Developer Portfolio",
            url: "https://michaelstarwin.github.io/portfolio/",
            color: "from-pink-500/20 to-rose-500/5",
            border: "border-pink-500/30"
        }
    ];

    return (
        <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative">
                    <span className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 block">Live Sites</span>
                    <h2 className="text-3xl font-bold text-white mb-4">View Our Work Live</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Click on the cards below to explore some of our interactive digital deployments in the wild.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`group relative flex flex-col justify-between p-6 h-[220px] rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} backdrop-blur-md overflow-hidden hover:-translate-y-2 transition-transform duration-300`}
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-neon-blue transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-400 leading-snug">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="relative z-10 flex justify-between items-end mt-4">
                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">Visit</span>
                                <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue group-hover:border-neon-blue transition-all duration-300 transform group-hover:rotate-45">
                                    <ExternalLink size={18} className="text-gray-300 group-hover:text-black transition-colors" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCards;
