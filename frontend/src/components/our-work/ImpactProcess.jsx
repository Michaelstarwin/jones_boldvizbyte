import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Code, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const steps = [
    {
        id: '01',
        title: 'Strategy',
        icon: Target,
        desc: "We don't guess. We engineer roadmaps.",
        details: "Every project starts with deep market analysis and user behavior study. We identify the gap in your market and build a bridge directly to it."
    },
    {
        id: '02',
        title: 'Design',
        icon: Zap,
        desc: "Visuals that demand attention.",
        details: "Our design philosophy is simple: It must look dangerous to ignore. We blend futuristic aesthetics with intuitive usability to keep users hooked."
    },
    {
        id: '03',
        title: 'Development',
        icon: Code,
        desc: "Clean code. Scalable architecture.",
        details: "We build on modern stacks (React, Node, Next.js) ensuring your platform is fast, secure, and ready to scale from day one."
    },
    {
        id: '04',
        title: 'Growth',
        icon: TrendingUp,
        desc: "Launch is just the beginning.",
        details: "We integrate analytics, SEO loops, and performance tracking to ensure your product doesn't just exist—it dominates."
    }
];

const ImpactProcess = () => {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-neon-blue uppercase tracking-[0.2em] mb-4 block"
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-orbitron text-white leading-tight"
                    >
                        We Don't Just Deliver Projects.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">We Build Impact.</span>
                    </motion.h2>
                </div>

                {/* Stacked Process Blocks */}
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                            className={cn(
                                "group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer",
                                activeStep === step.id
                                    ? "bg-zinc-900 border-neon-blue/50 shadow-[0_0_30px_rgba(0,243,255,0.1)]"
                                    : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-600"
                            )}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 relative z-10">
                                {/* Number */}
                                <span className={cn(
                                    "text-4xl md:text-5xl font-bold font-orbitron transition-colors duration-300",
                                    activeStep === step.id ? "text-neon-blue" : "text-zinc-700 group-hover:text-zinc-500"
                                )}>
                                    {step.id}
                                </span>

                                {/* Main Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className={cn(
                                            "text-2xl md:text-3xl font-bold text-white transition-colors",
                                            activeStep === step.id ? "text-white" : "text-gray-200"
                                        )}>
                                            {step.title}
                                        </h3>
                                        {/* Mobile Expansion Icon */}
                                        <ChevronDown
                                            className={cn(
                                                "w-6 h-6 text-gray-400 transition-transform duration-300 md:hidden",
                                                activeStep === step.id ? "rotate-180 text-neon-blue" : ""
                                            )}
                                        />
                                    </div>
                                    <p className="text-gray-400 text-lg md:text-xl font-light">{step.desc}</p>

                                    {/* Expandable Details */}
                                    <AnimatePresence>
                                        {activeStep === step.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-300 leading-relaxed max-w-2xl text-lg border-t border-zinc-800 pt-6">
                                                    {step.details}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Desktop Icon/Action */}
                                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-neon-blue/30 transition-colors">
                                    <step.icon className={cn(
                                        "w-6 h-6 transition-all duration-300",
                                        activeStep === step.id ? "text-neon-blue" : "text-gray-500 group-hover:text-white"
                                    )} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-neon-blue hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        Start Your Project <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ImpactProcess;
