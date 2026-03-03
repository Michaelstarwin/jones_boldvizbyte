import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BrandMarquee = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        // Calculate duration based on width for consistent speed
        // or just use a fixed duration for simplicity given uniform text
        const totalWidth = wrapper.scrollWidth;
        const duration = totalWidth * 0.05; // Adjust factor for speed

        // Simplified endless loop for Left to Right (>>>>)
        // Start at -50% (shifted left), animate to 0% (original position)
        gsap.fromTo(wrapper,
            { xPercent: -50 },
            {
                xPercent: 0,
                ease: "none",
                duration: 20, // Fixed duration for smoothness
                repeat: -1
            }
        );

    }, []);

    // Create 20 items to ensure we have enough width for 2 halves
    const items = Array(20).fill("★ BoldVizByte ★");

    return (
        <div className="w-full overflow-hidden py-10 opacity-30 select-none pointer-events-none">
            {/* Wrapper must be wide enough to contain all items in one line */}
            <div ref={wrapperRef} className="flex whitespace-nowrap w-fit">
                {items.map((text, i) => (
                    <div key={i} className="brand-item px-8">
                        <span className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                            {text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandMarquee;
