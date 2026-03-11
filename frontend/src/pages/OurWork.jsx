import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MobileShowcase from '../components/our-work/MobileShowcase';
import LaptopShowcase from '../components/our-work/LaptopShowcase';
import ImpactProcess from '../components/our-work/ImpactProcess';
import EnquirySection from '../components/sections/EnquirySection';
import { Code, PenTool, BarChart3, Globe, Smartphone, Users, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

const OurWork = () => {
    const containerRef = useRef(null);
    const laptopSectionRef = useRef(null); // Ref for scrolling to laptop
    // const [activeLaptopProject, setActiveLaptopProject] = useState(null); // Logic moved to internal WorkHighlights or independent

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    // Handler for Grid Interactions - Removed as WorkHighlights is self-contained
    // const handleGridProjectClick = (project) => {
    //     if (project.category === 'websites' || project.category === 'web-apps') {
    //         setActiveLaptopProject(project);
    //         // Smooth scroll to laptop section
    //         laptopSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }
    // };

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-neon-blue selection:text-black overflow-x-hidden font-sans">

            {/* 1. HERO SECTION */}
            <section className="pt-40 pb-20 px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
                        Our Work
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-neon-blue mb-8 tracking-wide">
                        Real Projects. Real Results.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We showcase projects that represent our creativity, strategy, and technical strength.
                    </p>
                </motion.div>

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            </section>

            {/* 2. INTRO BRAND STATEMENT */}
            <section className="py-12 px-4 text-center border-b border-zinc-900">
                <p className="text-xl md:text-2xl font-serif italic text-gray-300">
                    "We don't showcase everything. Only work we're proud of."
                </p>
            </section>

            {/* 3. PROCESS & IMPACT (NEW REDESIGN) */}
            <ImpactProcess />

            {/* 4. MOBILE SHOWCASE SECTION (FEATURED) */}
            <section className="py-24 flex flex-col items-center justify-center min-h-[850px] relative bg-gradient-to-b from-black to-zinc-950">
                <div className="text-center mb-12 relative z-10">
                    <span className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 block">Featured Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Vertical Impact</h2>
                    <p className="text-gray-500">Engaging mobile-first experiences.</p>
                </div>
                <MobileShowcase />
            </section>

            {/* 5. PHILOSOPHY & DIFFERENTIATION */}
            <section className="py-24 px-4 bg-zinc-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Philosophy */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-white border-l-4 border-neon-blue pl-4">Our Philosophy</h2>
                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Every project is handled with a <strong className="text-white">strategy-first approach</strong>.
                            </p>
                            <p>
                                We focus on quality, performance, and long-term value rather than shortcuts. We don't just build; we engineer growth.
                            </p>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-xl font-bold text-white mb-4">What Makes Us Different</h3>
                            <ul className="space-y-3">
                                {[
                                    "Strategy-driven execution",
                                    "Performance-focused builds",
                                    "Creative + technical balance",
                                    "Client-oriented outcomes",
                                    "Scalable solutions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <CheckCircle2 size={20} className="text-neon-blue mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Results / Why It Matters */}
                    <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]" />
                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Driven by Results</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {[
                                { label: "Engagement", desc: "Higher viewer retention on reels" },
                                { label: "Presence", desc: "Stronger digital footprint" },
                                { label: "Conversions", desc: "Optimized user journeys" },
                                { label: "Growth", desc: "Scalable brand visibility" }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-black/40 rounded-xl border border-white/5">
                                    <h4 className="text-neon-blue font-bold text-lg mb-1">{stat.label}</h4>
                                    <p className="text-sm text-gray-400">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HOW WE WORK (NEW) */}
            <section className="py-24 px-4 bg-black border-t border-zinc-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Collaboration Snapshot */}
                        <div className="bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800">
                            <div className="flex items-center mb-6">
                                <HeartHandshake className="text-neon-blue mr-3" size={32} />
                                <h3 className="text-xl font-bold text-white">Client Partnership</h3>
                            </div>
                            <ul className="space-y-4 relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-zinc-800 -z-10" />
                                {[
                                    "Requirement Discussion & Strategy",
                                    "Transparent Review Calls",
                                    "Continuous Feedback Loops",
                                    "Final Delivery & Handover"
                                ].map((step, i) => (
                                    <li key={i} className="flex items-center text-gray-400 text-sm">
                                        <div className="w-6 h-6 rounded-full bg-zinc-900 border border-neon-blue/50 flex items-center justify-center text-[10px] text-neon-blue mr-4 font-bold">
                                            {i + 1}
                                        </div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Work Quality Promise */}
                        <div className="bg-zinc-900/20 p-8 rounded-2xl border border-zinc-800">
                            <div className="flex items-center mb-6">
                                <ShieldCheck className="text-neon-blue mr-3" size={32} />
                                <h3 className="text-xl font-bold text-white">Our Quality Promise</h3>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We don't believe in generic templates. Every line of code and pixel of design is crafted with intention.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "No copy-paste solutions",
                                    "Custom Execution",
                                    "Rigorous Quality Checks",
                                    "Performance Focus"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. LAPTOP SHOWCASE SECTION */}
            <section ref={laptopSectionRef} className="py-24 flex flex-col items-center justify-center min-h-[850px] relative bg-gradient-to-b from-zinc-950 to-black">
                <div className="text-center mb-12 relative z-10">
                    <span className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 block">Featured Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Digital Platforms</h2>
                    <p className="text-gray-500">Robust websites & applications.</p>
                </div>
                <LaptopShowcase />
            </section>

            {/* 8. TECH STACK & INDUSTRIES */}
            <section className="py-24 px-4 bg-black">
                <div className="max-w-6xl mx-auto">

                    {/* Tech Stack */}
                    <div className="mb-20">
                        <h2 className="text-center text-3xl font-bold mb-12">Tools & Technologies</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { title: "Frontend", items: "React, Next.js, Tailwind, Motion" },
                                { title: "Backend", items: "Node.js, Python, Firebase, Supabase" },
                                { title: "Design", items: "Figma, Adobe Suite, Blender" },
                                { title: "Marketing", items: "SEO Tools, Analytics, Meta Ads" }
                            ].map((group, i) => (
                                <div key={i} className="text-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/20">
                                    <h3 className="text-lg font-bold text-white mb-2">{group.title}</h3>
                                    <p className="text-gray-400 text-sm">{group.items}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-zinc-800 pt-16">

                        {/* Industries */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Startups', 'Local Businesses', 'Personal Brands', 'E-commerce', 'Service Companies'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-zinc-900 text-gray-300 rounded-full text-sm border border-zinc-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-6">
                            <div className="flex items-start bg-zinc-900/30 p-6 rounded-xl border border-zinc-800">
                                <MapPin className="w-8 h-8 text-neon-blue mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Serving Clients Across India</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Delivering impactful projects for clients in <strong className="text-white">Kovilpatti, Thoothukudi, Tirunelveli, Madurai, Virudhunagar</strong>, and nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9. FINAL POWER CLOSING */}
            <section className="py-40 px-4 text-center bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-black to-black opacity-40" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                        This is not a showcase.<br />
                        <span className="text-neon-blue">This is proof.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <a href="/services" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Apply for Service
                        </a>
                        <a href="/contact" className="w-full sm:w-auto px-10 py-5 border border-zinc-700 text-white font-medium text-lg rounded-full hover:bg-zinc-900 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            <EnquirySection />

        </div>
    );
};

export default OurWork;
