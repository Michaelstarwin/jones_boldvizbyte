import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Laptop, Lock, ExternalLink } from 'lucide-react';

const webProjects = [
    {
        id: 1,
        client: 'AM Comfort Inn',
        project: 'Guest house Website',
        url: 'https://www.amcinn.in/',
        color: 'from-blue-600 to-indigo-700',
    },
    {
        id: 2,
        client: 'St. Michael church',
        project: 'Church Website',
        url: 'https://stmicheal.netlify.app/',
        color: 'from-green-500 to-emerald-700',
    },
    {
        id: 3,
        client: 'Management App',
        project: 'Internal Dashboard',
        url: 'https://bold-viz-byte-management.vercel.app/',
        color: 'from-zinc-500 to-gray-700',
    },
    {
        id: 4,
        client: 'Michael Starwin',
        project: 'Developer Portfolio',
        url: 'https://michaelstarwin.github.io/portfolio/',
        color: 'from-cyan-500 to-blue-600',
    }
];

const LaptopShowcase = ({ externalActiveProject }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const containerRef = useRef(null);
    const laptopRef = useRef(null);
    const mobileCardsRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Sync with external project selection (from Grid)
    useEffect(() => {
        if (externalActiveProject) {
            setActiveProject(externalActiveProject);
        }
    }, [externalActiveProject]);

    // Detect mobile for click disable logic
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile Outside Click Reset (Close List Only)
    useEffect(() => {
        const handleMobileOutsideClick = (event) => {
            if (!isMobile || !isExpanded) return;

            const clickedLaptop = laptopRef.current && laptopRef.current.contains(event.target);
            const clickedCards = mobileCardsRef.current && mobileCardsRef.current.contains(event.target);

            if (!clickedLaptop && !clickedCards) {
                setIsExpanded(false); // Only close the list
            }
        };

        if (isMobile && isExpanded) {
            document.addEventListener('mousedown', handleMobileOutsideClick);
        }
        return () => document.removeEventListener('mousedown', handleMobileOutsideClick);
    }, [isMobile, isExpanded]);

    // Auto-Reset logic (Desktop - Minimize List)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                if (!isMobile) {
                    setIsExpanded(false);
                    // Do NOT reset project, keep it running
                }
            }
        };

        if (isExpanded && !isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isExpanded, isMobile]);

    const currentProject = activeProject || webProjects[0];

    const handleLaptopClick = () => {
        // Toggle project list visibility on both Mobile and Desktop
        setIsExpanded(!isExpanded);
    };

    const handleProjectClick = (project) => {
        setActiveProject(project);
        if (!isMobile) setIsExpanded(true);
    };

    // Right Stack Logic (Desktop)
    const getPositionStyles = (index, expanded) => {
        if (!expanded) return { x: 0, y: 0, opacity: 0, scale: 0.8, pointerEvents: 'none' };

        const xOffset = 550;
        const startY = -200;
        const gapY = 130;
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
        <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center p-4 min-h-[280px] md:min-h-[600px] overflow-visible md:overflow-hidden">

            {/* BACKGROUND CLICK AREA (Desktop) */}
            {isExpanded && !isMobile && (
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 hidden md:block"
                    onClick={() => { setIsExpanded(false); setActiveProject(null); }}
                />
            )}

            {/* DESKTOP PROJECT CARDS (Hidden on Mobile) */}
            <div className="absolute z-10 hidden md:flex items-center justify-center pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {webProjects.map((project, index) => (
                    <motion.div
                        key={`desktop-${project.id}`}
                        initial={{ x: 100, y: 0, opacity: 0, scale: 0.8 }}
                        animate={getPositionStyles(index, isExpanded)}
                        transition={{ type: 'spring', damping: 25, stiffness: 120, delay: index * 0.05 }}
                        onClick={() => handleProjectClick(project)}
                        className={`
                absolute w-72 h-32 bg-zinc-900/90 backdrop-blur-md border rounded-xl overflow-hidden cursor-pointer hover:border-white transition-all group shadow-2xl z-30
                ${activeProject?.id === project.id ? 'border-neon-blue ring-1 ring-neon-blue' : 'border-zinc-700'}
            `}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                        <div className="p-5 flex flex-col justify-between h-full relative">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{project.client}</p>
                                <h3 className="font-bold text-white text-lg leading-tight">{project.project}</h3>
                            </div>
                            <div className="flex items-center text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                                <Globe size={12} className="mr-1" />
                                <span className="truncate max-w-[180px]">{project.url.replace('https://', '')}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 
          =============================================
          REALISTIC CSS MACBOOK PRO M3
          =============================================
      */}
            <motion.div
                // removed generic 'layout' prop to prevent mobile jumping
                ref={laptopRef}
                layout={!isMobile}
                onClick={handleLaptopClick}
                className={`relative z-10 flex flex-col items-center cursor-pointer transition-transform duration-500 ease-out origin-center
            transform scale-[0.30] sm:scale-[0.60] md:scale-[0.85] xl:scale-[1.0] -my-24 md:my-0
        `}
            >
                {/* 
            ------------------------------------------
            LID ASSMEBLY (Screen Container)
            ------------------------------------------
        */}
                <div className="w-[640px] h-[400px] bg-[#0d0d0d] rounded-[24px] p-[12px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative border border-[#333] flex flex-col">

                    {/* Outer Bezel Gloss */}
                    <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10 pointer-events-none z-50"></div>

                    {/* NOTCH with Camera */}
                    <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[22px] bg-black rounded-b-[10px] z-50 flex items-center justify-center">
                        <div className="w-[6px] h-[6px] bg-[#1a1a1a] rounded-full border border-[#333]"></div> {/* Camera Lens */}
                        <div className="absolute right-4 w-1 h-1 bg-green-500/50 rounded-full blur-[1px]"></div> {/* LED */}
                    </div>

                    {/* SCREEN (Inner Display) */}
                    <div className="w-full h-full bg-black rounded-[14px] overflow-hidden relative group border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-40 pointer-events-none opacity-20"></div>

                        {/* Content */}
                        {/* Content */}
                        <div className="w-full h-full bg-white relative overflow-hidden flex flex-col z-20">
                            {/* Browser Chrome */}
                            <div className="h-8 bg-[#1e1e1e] flex items-center px-4 space-x-2 flex-shrink-0 z-30 relative select-none">
                                <div className="flex space-x-1.5 opacity-50 hover:opacity-100 transition-opacity">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <a
                                        href={currentProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#2a2a2a] h-5 rounded-md px-3 w-3/5 flex items-center justify-between text-[10px] text-gray-500 font-medium font-mono hover:bg-[#333] hover:text-gray-300 transition-all cursor-pointer group/url no-underline"
                                        title="Open in new tab"
                                    >
                                        <Lock size={8} className="text-gray-600" />
                                        <span className="truncate mx-2">{currentProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                                        <ExternalLink size={8} className="text-gray-500 opacity-0 group-hover/url:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>

                            {/* Iframe */}
                            <iframe
                                src={currentProject.url}
                                className="w-full h-full border-none bg-white pointer-events-auto"
                                title={currentProject.project}
                                loading="eager" // Load immediately
                                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                {/* BASE ASSEMBLY */}
                <div className="w-full flex justify-center -mt-[2px] z-10 relative">
                    <div className="w-[500px] h-[16px] bg-[#1a1a1a] rounded-b-[12px] border-b border-[#333] shadow-inner"></div>
                </div>
                <div className="relative w-[700px] h-[18px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-[20px] -mt-[14px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] border-t border-black/50 flex justify-center items-center">
                    <div className="w-[80px] h-[4px] bg-[#111] rounded-full opacity-50 -mt-2"></div>
                </div>
                <div className="w-[680px] h-6 bg-gradient-to-b from-gray-800 to-transparent opacity-20 blur-xl -mt-1 mx-auto" />
            </motion.div>

            {/* MOBILE PROJECT CARDS - ONLY VISIBLE WHEN EXPANDED */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        ref={mobileCardsRef}
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        className="w-full mt-4 md:hidden flex flex-col gap-3 z-[100] relative"
                    >
                        {webProjects.map((project) => (
                            <motion.div
                                key={`mobile-${project.id}`}
                                onClick={() => handleProjectClick(project)}
                                className={`
                    w-full min-h-[5rem] bg-zinc-900 border rounded-xl overflow-hidden cursor-pointer relative flex items-center p-4 shadow-lg
                    ${activeProject?.id === project.id ? 'border-neon-blue ring-1 ring-neon-blue' : 'border-zinc-700'}
                 `}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`} />
                                <div className="relative z-10 w-full">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{project.client}</p>
                                    <h3 className="font-bold text-white text-base">{project.project}</h3>
                                </div>
                                <Globe size={16} className="text-gray-500 ml-auto" />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default LaptopShowcase;
