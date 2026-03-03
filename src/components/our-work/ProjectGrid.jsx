import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Globe, Code, PenTool, BarChart3, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const allProjects = [
    // --- REAL WEBSITES (From LaptopShowcase) ---
    {
        id: 101,
        category: 'websites',
        title: 'Guest House Website',
        client: 'AM Comfort Inn',
        industry: 'Hospitality',
        goal: 'Increase direct bookings and showcase amenities.',
        solution: 'Modern, responsive design with clear call-to-actions.',
        result: '30% increase in direct inquiries.',
        tools: ['React', 'Tailwind', 'Framing'],
        duration: '3 Weeks',
        scope: 'Full Website Design',
        before: 'Offline / Aggregators',
        after: 'Direct Digital Presence',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
        url: 'https://www.amcinn.in/',
        project: 'Guest House Website', // Matching LaptopShowcase prop name if needed, though we use currentProject.url usually
        color: 'from-blue-600 to-indigo-700', // For Laptop gradient
        typeIcon: Globe
    },
    {
        id: 102,
        category: 'websites',
        title: 'Church Parish Website',
        client: 'St. Michael Church',
        industry: 'Non-Profit / Community',
        goal: 'Digitalize parish announcements and events.',
        solution: 'Easy-to-update CMS with event calendar.',
        result: 'Improved community engagement.',
        tools: ['Web Tech', 'Responsive Design'],
        duration: '2 Weeks',
        scope: 'Community Portal',
        before: 'Paper Bulletins',
        after: 'Digital Hub',
        image: 'https://images.unsplash.com/photo-1548625361-ec8f3d178f7e?auto=format&fit=crop&q=80&w=800',
        url: 'https://stmicheal.netlify.app/',
        color: 'from-green-500 to-emerald-700',
        typeIcon: Globe
    },
    {
        id: 103,
        category: 'web-apps',
        title: 'Internal Management Dashboard',
        client: 'Management App',
        industry: 'Business Operations',
        goal: 'Streamline internal tracking and resource management.',
        solution: 'Secure, role-based dashboard.',
        result: 'Reduced admin time by 40%.',
        tools: ['React', 'Firebase', 'Charts'],
        duration: '1 Month',
        scope: 'Web Application',
        before: 'Spreadsheets',
        after: 'Centralized Dashboard',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        url: 'https://bold-viz-byte-management.vercel.app/',
        color: 'from-zinc-500 to-gray-700',
        typeIcon: Code
    },
    {
        id: 104,
        category: 'websites',
        title: 'Developer Portfolio',
        client: 'Michael Starwin',
        industry: 'Personal Brand',
        goal: 'Showcase development skills and projects.',
        solution: 'Interactive, motion-heavy portfolio.',
        result: 'High client conversion.',
        tools: ['React', 'Framer Motion'],
        duration: '2 Weeks',
        scope: 'Portfolio Site',
        before: 'Static Resume',
        after: 'Interactive Showcase',
        image: 'https://images.unsplash.com/photo-1545665277-5095d3a5a3AA?auto=format&fit=crop&q=80&w=800',
        url: 'https://michaelstarwin.github.io/portfolio/',
        color: 'from-cyan-500 to-blue-600',
        typeIcon: Globe
    },

    // --- REEL / VIDEO PROJECTS ---
    {
        id: 1,
        category: 'reels',
        title: 'Neon Energy Launch',
        client: 'Neon Energy',
        industry: 'Fitness / Beverages',
        goal: 'Launch a new energy drink to a Gen Z audience.',
        solution: 'High-energy, fast-paced reel edits with neon aesthetics.',
        result: '200% increase in social engagement in week 1.',
        tools: ['After Effects', 'Premiere Pro', 'DaVinci Resolve'],
        duration: '2 Weeks',
        scope: 'Video Production',
        before: 'Low engagement',
        after: 'Viral Reach',
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
        solution: 'Targeted Meta ads + Influencer reels.',
        result: 'Lowest CPA (Cost Per Acquisition) in company history.',
        tools: ['Meta Ads', 'Google Analytics'],
        duration: '1 Month',
        scope: 'Digital Marketing',
        before: 'High Ad Spend',
        after: 'Optimized ROI',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        typeIcon: BarChart3
    }
];

const filters = [
    { id: 'all', label: 'All' },
    { id: 'reels', label: 'Reels / Video' },
    { id: 'websites', label: 'Websites' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'marketing', label: 'Marketing' }
];

const ProjectGrid = ({ onProjectClick }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === activeFilter);

    const handleCardClick = (project) => {
        if (project.category === 'websites' || project.category === 'web-apps') {
            // Load in Laptop
            if (onProjectClick) onProjectClick(project);
        } else {
            // Open Modal (Video/Case Study)
            setSelectedProject(project);
        }
    };

    return (
        <div className="py-12">

            {/* 1. FILTER TABS */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                            ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                            : 'bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* 2. PROJECT GRID */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer hover:border-zinc-600 transition-colors"
                            onClick={() => handleCardClick(project)}
                        >
                            {/* Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />

                                {/* Type Badge */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 group-hover:bg-neon-blue group-hover:text-black transition-colors">
                                    <project.typeIcon size={16} className="text-white group-hover:text-black" />
                                </div>

                                {/* PLAY OVERLAY for REELS */}
                                {project.category === 'reels' && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                            <Play className="text-white fill-white ml-1" size={32} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-neon-blue font-bold tracking-wider uppercase">{project.category}</span>
                                    <span className="text-xs text-gray-500 bg-zinc-800 px-2 py-0.5 rounded-full">{project.industry}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-2">{project.goal}</p>

                                <div className="mt-4 flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                                    {(project.category === 'websites' || project.category === 'web-apps') ? 'Launch Preview' : 'View Case Study'}
                                    <ArrowRight size={14} className="ml-2 text-neon-blue" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* 3. CASE STUDY / VIDEO MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-y-auto shadow-2xl no-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-24 md:top-4 right-4 z-[80] p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* MODAL HEADER: VIDEO OR IMAGE */}
                            <div className="relative w-full aspect-video md:aspect-[21/9] bg-black overflow-hidden">
                                {selectedProject.category === 'reels' && selectedProject.videoUrl ? (
                                    <video
                                        src={selectedProject.videoUrl}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                            <span className="px-3 py-1 bg-neon-blue text-black font-bold text-xs rounded-full uppercase mb-4 inline-block">
                                                {selectedProject.industry}
                                            </span>
                                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                            <p className="text-gray-300 text-lg">{selectedProject.client}</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                                {/* Left Column: Story */}
                                <div className="md:col-span-2 space-y-8">
                                    <div className="space-y-6">
                                        <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                                            <h4 className="text-neon-blue text-sm uppercase tracking-widest mb-3 font-bold">The Challenge</h4>
                                            <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.goal}</p>
                                        </div>
                                        <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                                            <h4 className="text-neon-blue text-sm uppercase tracking-widest mb-3 font-bold">Our Solution</h4>
                                            <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Specs */}
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-gray-400 text-xs uppercase font-bold mb-4">Tech Stack & Tools</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tools.map(tool => (
                                                <span key={tool} className="px-3 py-1 bg-zinc-900 text-gray-300 text-xs rounded border border-zinc-800">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-zinc-900">
                                        <a
                                            href="/contact"
                                            className="block w-full py-4 text-center bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors"
                                        >
                                            Start a Project like this
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ProjectGrid;
