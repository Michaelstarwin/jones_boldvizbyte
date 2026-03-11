import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const techStack = [
    { name: "C", color: "text-blue-500", border: "border-blue-500/30" },
    { name: "C++", color: "text-blue-600", border: "border-blue-600/30" },
    { name: "JavaScript", color: "text-yellow-400", border: "border-yellow-400/30" },
    { name: "React", color: "text-cyan-400", border: "border-cyan-400/30" },
    { name: "TypeScript", color: "text-blue-400", border: "border-blue-400/30" },
    { name: "Node.js", color: "text-green-500", border: "border-green-500/30" },
    { name: "Next.js", color: "text-white", border: "border-white/30" },
    { name: "Java", color: "text-red-500", border: "border-red-500/30" },
    { name: "Python", color: "text-yellow-300", border: "border-yellow-300/30" },
    { name: "Express.js", color: "text-gray-400", border: "border-gray-400/30" },
    { name: "MongoDB", color: "text-green-400", border: "border-green-400/30" },
    { name: "Git", color: "text-orange-500", border: "border-orange-500/30" },
    { name: "GitHub", color: "text-purple-400", border: "border-purple-400/30" },
    { name: "HTML", color: "text-orange-600", border: "border-orange-600/30" },
    { name: "CSS", color: "text-blue-500", border: "border-blue-500/30" },
    { name: "PHP", color: "text-purple-500", border: "border-purple-500/30" },
    { name: "Ruby", color: "text-red-600", border: "border-red-600/30" },
    { name: "SQL", color: "text-blue-300", border: "border-blue-300/30" },
    { name: "NoSQL", color: "text-green-300", border: "border-green-300/30" }
];

const TechTicker = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        // Simplified seamless loop for Right-to-Left (standard ticker)
        // If user wants Left-to-Right, we swap from/to values, but typically tickers go Right-to-Left.
        // Assuming user wants standard ticker flow for Tech Stack unless specified otherwise 
        // (prompt said "This loop should go from the left side to the right side" for BRAND marquee, keeping default here unless requested).
        // EDIT: User asked to "check and fix what was in the our Tech stack loop properly". 
        // I will implement standard Right-to-Left (Leftward motion) which is -50% to 0%? No, actually 0 to -50% is standard.
        // Wait, standard marquee moves to the left ( <<<< ). That means x goes from 0 to -50%.

        gsap.to(wrapper, {
            xPercent: -50,
            ease: "none",
            duration: 40, // Slower for readability
            repeat: -1
        });

    }, []);

    // Create a quadrupled array to ensure absolutely no gaps on huge screens
    const displayStack = [...techStack, ...techStack, ...techStack, ...techStack];

    return (
        <section className="py-20 bg-dark-bg overflow-hidden relative border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-neon-blue/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                    Our <span className="text-neon-blue">Tech Stack</span>
                </h2>
                <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
                    We use cutting-edge technologies to build scalable and high-performance solutions.
                </p>
            </div>

            <div className="w-full overflow-hidden">
                <div ref={wrapperRef} className="flex relative items-center py-4 w-fit">
                    {displayStack.map((tech, i) => (
                        <div
                            key={i}
                            className={`tech-item flex-shrink-0 mx-6 px-10 py-6 bg-white/5 backdrop-blur-sm border ${tech.border} rounded-2xl cursor-pointer hover:bg-white/10 transition-colors group`}
                        >
                            <span className={`text-2xl md:text-4xl font-bold font-orbitron ${tech.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all`}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechTicker;
