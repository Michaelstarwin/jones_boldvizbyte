import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Play, Code, BarChart3, ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';

// Reuse existing project data structure
// In a real app, this should be in a separate data file
const allProjects = [
    {
        id: 101,
        category: 'websites',
        title: 'Guest House Website',
        client: 'AM Comfort Inn',
        industry: 'Hospitality',
        goal: 'Increase direct bookings and showcase amenities.',
        tags: ['React', 'Tailwind', 'Framing'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        url: 'https://www.amcinn.in/',
        typeIcon: Globe
    },
    {
        id: 102,
        category: 'websites',
        title: 'Church Parish Website',
        client: 'St. Michael Church',
        industry: 'Non-Profit / Community',
        goal: 'Digitalize parish announcements and events.',
        tags: ['Web Tech', 'Responsive'],
        image: 'https://images.unsplash.com/photo-1548625361-ec8f3d178f7e?auto=format&fit=crop&q=80&w=800',
        url: 'https://stmicheal.netlify.app/',
        typeIcon: Globe
    },
    {
        id: 103,
        category: 'web-apps',
        title: 'Management Dashboard',
        client: 'Management App',
        industry: 'Business Operations',
        goal: 'Streamline internal tracking and resource management.',
        tags: ['React', 'Firebase', 'Charts'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        url: 'https://bold-viz-byte-management.vercel.app/',
        typeIcon: Code
    },
    {
        id: 104,
        category: 'websites',
        title: 'Developer Portfolio',
        client: 'Michael Starwin',
        industry: 'Personal Brand',
        goal: 'Showcase development skills and projects.',
        tags: ['React', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1545665277-5095d3a5a3AA?auto=format&fit=crop&q=80&w=800',
        url: 'https://michaelstarwin.github.io/portfolio/',
        typeIcon: Globe
    },
    {
        id: 1,
        category: 'reels',
        title: 'Neon Energy Launch',
        client: 'Neon Energy',
        industry: 'Fitness',
        goal: 'Launch a new energy drink to a Gen Z audience.',
        tags: ['After Effects', 'Premiere'],
        image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-athlete-running-on-a-treadmill-in-a-gym-442-large.mp4',
        typeIcon: Play
    },
    {
        id: 5,
        category: 'marketing',
        title: 'Urban Fitness Campaign',
        client: 'Urban Fitness',
        industry: 'Health & Wellness',
        goal: 'Drive gym memberships in Q1.',
        tags: ['Meta Ads', 'Google Analytics'],
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        typeIcon: BarChart3
    }
];

const WorkHighlights = () => {
    const [activeId, setActiveId] = useState(allProjects[0].id);
    const activeProject = allProjects.find(p => p.id === activeId) || allProjects[0];

    // Scroll to section logic could go here if needed

    return (
        <div className="py-20 relative">

            {/* Header */}
            <div className="text-center mb-16 px-4">
                <span className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-3 block">Selected Projects</span>
                <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">Our work Highlights</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    A snapshot of what we build, design, and deliver. From high-performance sites to viral brand moments.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">

                {/* Left Column: Timeline List */}
                <div className="lg:col-span-4 space-y-2 relative">
                    {/* Vertical Line for Timeline Effect (Desktop) */}
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-zinc-800 hidden lg:block -z-10" />

                    {allProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveId(project.id)}
                            className={cn(
                                "relative pl-12 pr-6 py-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent group",
                                activeId === project.id
                                    ? "bg-zinc-900/80 border-zinc-800 shadow-xl"
                                    : "hover:bg-zinc-900/30 hover:border-zinc-800/50"
                            )}
                        >
                            {/* Timeline Dot */}
                            <div className={cn(
                                "absolute left-[20px] top-9 w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 hidden lg:block",
                                activeId === project.id
                                    ? "bg-neon-blue border-neon-blue scale-125 shadow-[0_0_10px_#00f3ff]"
                                    : "bg-zinc-950 border-zinc-700 group-hover:border-zinc-500"
                            )} />

                            <div className="flex items-center gap-3 mb-2">
                                <span className={cn(
                                    "text-xs font-bold uppercase tracking-wider transition-colors",
                                    activeId === project.id ? "text-neon-blue" : "text-gray-500"
                                )}>
                                    {project.category}
                                </span>
                            </div>

                            <h3 className={cn(
                                "text-lg md:text-xl font-bold mb-2 transition-colors",
                                activeId === project.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                            )}>
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed mb-3">
                                {project.goal}
                            </p>

                            <div className="flex flex-wrap gap-2 opacity-60">
                                {project.tags.slice(0, 2).map((tag, i) => (
                                    <span key={i} className="text-[10px] bg-black px-2 py-1 rounded text-gray-300 border border-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column: Sticky Preview Area */}
                <div className="lg:col-span-8 lg:sticky lg:top-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl aspect-[4/3] md:aspect-[16/9] relative group"
                        >
                            {/* Preview Media */}
                            <div className="absolute inset-0 bg-black">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative z-10"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-neon-blue/10 rounded-full backdrop-blur-md border border-neon-blue/20">
                                            <activeProject.typeIcon className="text-neon-blue" size={24} />
                                        </div>
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur text-white text-xs font-bold rounded-full border border-white/10 uppercase">
                                            {activeProject.industry}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        {activeProject.title}
                                    </h2>

                                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                                        {activeProject.solution}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {activeProject.url || activeProject.videoUrl ? (
                                            <a
                                                href={activeProject.url || activeProject.videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-8 py-3 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neon-blue hover:scale-105 transition-all duration-300"
                                            >
                                                {activeProject.category === 'reels' ? 'Watch Full Reel' : 'Visit Live Project'}
                                                <ExternalLink size={18} />
                                            </a>
                                        ) : null}

                                        <a href="/contact" className="px-8 py-3 bg-transparent border border-zinc-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:border-white hover:bg-white/5 transition-all">
                                            Start a Project <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* Bottom Section CTA */}
            <div className="mt-20 text-center">
                <a href="/contact" className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors text-sm font-bold uppercase tracking-widest border-b border-gray-800 hover:border-neon-blue pb-1">
                    View All Case Studies <ArrowRight size={14} className="ml-2" />
                </a>
            </div>
        </div>
    );
};

export default WorkHighlights;
