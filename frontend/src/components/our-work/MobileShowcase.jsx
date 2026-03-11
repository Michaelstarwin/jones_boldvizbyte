import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
    {
        id: 1,
        client: 'Aarthi A',
        title: 'aarthientrepreneur',
        videoUrl: '/videos/reel1.mp4',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 2,
        client: 'CHARRAN',
        title: 'charrantraders',
        videoUrl: '/videos/reel2.mp4',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 3,
        client: 'Raju',
        title: 'a.s.r_enterprises',
        videoUrl: '/videos/reel3.mp4',
        color: 'from-amber-500 to-orange-500',
    },
    {
        id: 4,
        client: 'Jones',
        title: 'jones_boldvizbyte',
        videoUrl: '/videos/reel4.mp4',
        color: 'from-emerald-500 to-teal-500',
    }
];

// DEFAULT PROJECT (Always active when nothing selected)
const defaultProject = {
    id: 'default',
    client: 'Reels Project',
    title: 'Featured Work',
    videoUrl: '/videos/reel1.mp4'
};

const MobileShowcase = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeProject, setActiveProject] = useState(null); // Null means showing DEFAULT
    const containerRef = useRef(null);

    // Handle click outside -> Reset to Default
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsExpanded(false);
                setActiveProject(null); // Return to default
            }
        };

        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isExpanded]);

    const handleMobileClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleProjectClick = (project) => {
        setActiveProject(project);
        setIsExpanded(true);
    };

    const currentVideo = activeProject || defaultProject;

    // New "Right Stack" Logic for Desktop
    const getPositionStyles = (index, expanded) => {
        if (!expanded) return { x: 0, y: 0, opacity: 0, scale: 0.8, pointerEvents: 'none' };

        // Stack Position Calculation
        const xOffset = 380; // Push to right side (Clear the phone ~140px + gap)
        const startY = -180; // Start high
        const gapY = 120; // Vertical spacing
        const yOffset = startY + (index * gapY);

        return {
            x: xOffset,
            y: yOffset,
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto'
        };
    };

    return (
        <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center p-4 min-h-[700px] overflow-hidden">

            {/* BACKGROUND CLICK AREA (Desktop) */}
            {isExpanded && (
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 hidden md:block"
                    onClick={() => { setIsExpanded(false); setActiveProject(null); }}
                />
            )}

            {/* 
          =============================================
          DESKTOP PROJECT CARDS (Right Side Stack)
          Hidden on Mobile (< md)
          =============================================
      */}
            <div className="absolute z-10 hidden md:flex items-center justify-center pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {projects.map((project, index) => (
                    <motion.div
                        key={`desktop-${project.id}`}
                        initial={{ x: 100, y: 0, opacity: 0, scale: 0.8 }}
                        animate={getPositionStyles(index, isExpanded)}
                        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: index * 0.05 }}
                        onClick={() => handleProjectClick(project)}
                        className={`
                absolute w-64 h-28 bg-zinc-900/90 backdrop-blur-md border rounded-xl overflow-hidden cursor-pointer hover:border-white transition-all group shadow-2xl
                ${activeProject?.id === project.id ? 'border-neon-blue ring-1 ring-neon-blue' : 'border-zinc-700'}
            `}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                        <div className="p-4 flex flex-col justify-between h-full relative">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{project.client}</p>
                                <h3 className="font-bold text-white leading-tight text-lg">{project.title}</h3>
                            </div>
                            <div className="flex items-center text-xs text-white/60 group-hover:text-white transition-colors">
                                <Play size={12} className="mr-1 fill-current" />
                                <span>Play Reel</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 
          =============================================
          MOBILE MOCKUP CENTERPIECE
          Scaled Down on Mobile (0.65) to not dominate
          =============================================
      */}
            <motion.div
                layout
                onClick={handleMobileClick}
                className={`relative z-20 w-[280px] h-[580px] bg-zinc-950 border-8 border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden cursor-pointer transition-transform duration-500 ease-out 
            transform scale-[0.65] md:scale-100 origin-center mb-0
        `}
                style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.1)'
                }}
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30" />

                {/* SCREEN CONTENT (Always playing something) */}
                <div className="w-full h-full bg-zinc-900 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentVideo.id} // Re-mount when video changes
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black"
                        >
                            <video
                                src={currentVideo.videoUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted={!activeProject} // Muted if default, Unmuted if active
                                playsInline
                            />

                            {/* Overlay details */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-lg">{currentVideo.client}</p>
                                <p className="text-gray-300 text-sm">{currentVideo.title}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30" />
            </motion.div>

            {/* 
          =============================================
          MOBILE PROJECT LIST (Stacked BELOW)
          Visible ONLY on Mobile (< md) AND when Expanded
          Always Visible Details
          =============================================
      */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full max-w-[320px] mt-2 md:hidden flex flex-col gap-3 z-30"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={`mobile-${project.id}`}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * project.id }}
                                onClick={() => handleProjectClick(project)}
                                className={`
                    w-full min-h-[5rem] bg-zinc-900 border rounded-xl overflow-hidden cursor-pointer relative flex items-center p-4 shadow-lg
                    ${activeProject?.id === project.id ? 'border-neon-blue ring-1 ring-neon-blue' : 'border-zinc-700'}
                 `}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`} />

                                {/* TEXT CONTENT: Always visible, never hidden */}
                                <div className="relative z-10 flex-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{project.client}</p>
                                    <h3 className="font-bold text-white text-sm">{project.title}</h3>
                                </div>

                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-3">
                                    <Play size={14} className="text-white fill-current" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default MobileShowcase;
