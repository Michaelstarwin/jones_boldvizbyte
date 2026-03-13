import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';

const ProjectCards = () => {
    // Current live projects
    const projects = [
        {
            id: 1,
            name: "A.M. Comfort Inn",
            desc: "Guest house Website",
            url: "https://www.amcinn.in/",
            color: "from-blue-500/20 to-cyan-500/5",
            themeColor: "#00f3ff"
        },
        {
            id: 2,
            name: "A.M. Comfort Inn",
            desc: "Super Admin",
            url: "https://pongal-wishes3d.netlify.app/", 
            color: "from-green-500/20 to-emerald-500/5",
            themeColor: "#10b981"
        },
        {
            id: 3,
            name: "St. Michael church",
            desc: "Church Website",
            url: "https://boldvizbyte.com",
            color: "from-purple-500/20 to-fuchsia-500/5",
            themeColor: "#a855f7"
        },
        {
            id: 4,
            name: "Management App",
            desc: "Internal Dashboard",
            url: "https://bold-viz-byte-management.vercel.app/",
            color: "from-orange-500/20 to-amber-500/5",
            themeColor: "#f59e0b"
        },
        {
            id: 5,
            name: "Michael Starwin Raj",
            desc: "Developer Portfolio",
            url: "https://michaelstarwin.github.io/portfolio/",
            color: "from-pink-500/20 to-rose-500/5",
            themeColor: "#ec4899"
        }
    ];

    return (
        <section className="py-24 px-4 bg-zinc-950 border-b border-zinc-900 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-16 relative">
                    <span className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 block">Live Sites</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">View Our Work Live</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Click on the cards below to explore some of our interactive digital deployments in the wild.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="group relative block w-full h-[300px] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer transform hover:-translate-y-2 transition-transform duration-500 shadow-xl"
                        >
                            {/* Electric Border Background using spinning conic gradient */}
                            <div className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,var(--tw-gradient-from)_50%,#000000_100%)] opacity-30 group-hover:opacity-100 animate-[spin_3s_linear_infinite] transition-opacity duration-500" style={{ '--tw-gradient-from': project.themeColor }} />
                            
                            {/* Inner Container to mask the spinning background, creating the border */}
                            <div className="absolute inset-[2px] bg-zinc-950 rounded-[14px] overflow-hidden flex flex-col">
                                
                                {/* Screenshot Container with a colorful fallback gradient */}
                                <div className={`h-[160px] w-full relative overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                    
                                    {/* Fallback Icon behind the image in case it takes a second to load */}
                                    <Globe className="absolute text-white/10 w-12 h-12" />

                                    {/* Using WordPress mshots for faster dynamic live screenshots */}
                                    <img 
                                        src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=600&h=450`} 
                                        alt={`${project.name} Screenshot`} 
                                        className="w-full h-full object-cover object-top relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide broken images to show the gradient fallback
                                    />
                                    
                                    {/* Subtle Overlay to make the image blend better */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-20" />
                                </div>

                                {/* Content Details */}
                                <div className="flex-1 p-5 flex flex-col justify-between relative z-10 bg-gradient-to-b from-zinc-900/50 to-zinc-950 backdrop-blur-sm">
                                    <div>
                                        <h3 className="text-base font-bold text-white mb-1 group-hover:text-neon-blue transition-colors truncate tracking-wide" style={{ textShadow: `0 0 10px ${project.themeColor}30` }}>
                                            {project.name}
                                        </h3>
                                        <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-end mt-4">
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">Visit Site</span>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-transparent group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45 shadow-none group-hover:shadow-[0_0_15px_var(--tw-gradient-from)]" style={{ '--tw-gradient-from': project.themeColor, backgroundColor: 'var(--tw-gradient-from)' }}>
                                            {/* We apply the background color inline on hover by leveraging group-hover utilities implicitly, but forcing the icon color to contrast */}
                                            <ExternalLink size={14} className="text-zinc-300 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
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
