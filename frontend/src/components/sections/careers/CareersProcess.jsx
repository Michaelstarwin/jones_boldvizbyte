import { motion } from 'framer-motion';

const steps = [
    { num: "01", title: "Apply Online", desc: "Submit your resume/portfolio." },
    { num: "02", title: "Review", desc: "We check your skills & fit." },
    { num: "03", title: "Interaction", desc: "A casual chat to know you." },
    { num: "04", title: "Onboarding", desc: "Welcome to the team!" }
];

const CareersProcess = () => {
    return (
        <section className="py-20 bg-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        How We <span className="text-neon-green">Hire</span>
                    </h2>
                    <p className="text-gray-400 font-outfit">Simple. Transparent. Fast.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 relative text-center group">
                            <div className="w-16 h-16 bg-dark-bg border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-neon-green font-bold text-xl group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all">
                                {step.num}
                            </div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm font-outfit">{step.desc}</p>

                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersProcess;
