import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (!cursorDot || !cursorOutline) return;

        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            // Move dot instantly
            gsap.to(cursorDot, {
                x: clientX,
                y: clientY,
                duration: 0,
                ease: "none"
            });

            // Move outline with delay/smoothing
            gsap.to(cursorOutline, {
                x: clientX,
                y: clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', moveCursor);

        // Add hover effects for interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursorOutline, {
                scale: 1.5,
                backgroundColor: "rgba(0, 243, 255, 0.1)",
                border: "1px solid rgba(0, 243, 255, 0)",
                duration: 0.2
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursorOutline, {
                scale: 1,
                backgroundColor: "transparent",
                border: "1px solid rgba(0, 243, 255, 0.5)",
                duration: 0.2
            });
        };

        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .interactive');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot hidden md:block pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999]" />
            <div ref={cursorOutlineRef} className="cursor-outline hidden md:block pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999]" />
        </>
    );
};

export default CustomCursor;
