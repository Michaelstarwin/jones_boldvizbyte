import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Building2, User } from 'lucide-react';

const clientTypes = [
    {
        id: 'startup',
        title: "Startup",
        icon: Rocket,
        need: "Basic Brand & Launch",
        recommendation: ["Logo Design", "Business Cards", "Basic Website"],
        desc: "Get off the ground quickly with essential branding and a digital presence."
    },
    {
        id: 'growing',
        title: "Growing Business",
        icon: Briefcase,
        need: "Leads & Expansion",
        recommendation: ["Digital Marketing (Ads)", "Social Media", "Web Optimization"],
        desc: "Scale your operations and attract new customers with targeted campaigns."
    },
    {
        id: 'enterprise',
        title: "Enterprise",
        icon: Building2,
        need: "Automation & Dominance",
        recommendation: ["Agentic AI", "Custom App Dev", "Full-Funnel Strategy"],
        desc: "Optimize efficiency and dominate the market with cutting-edge tech."
    },
    {
        id: 'personal',
        title: "Personal Brand",
        icon: User,
        need: "Authority & Reach",
        recommendation: ["Personal Website", "Social Content", "Book Covers"],
        desc: "Establish yourself as a thought leader with a professional image."
    }
];

const ServiceMatcher = () => {
    const [active, setActive] = useState(clientTypes[0]);

    return (
        <section className="py-20 bg-dark-bg border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Find Your <span className="text-neon-blue">Perfect Fit</span>
                    </h2>
                    <p className="text-gray-400 font-outfit">Select your business stage to see what we recommend.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {clientTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setActive(type)}
                            className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-3 ${active.id === type.id
                                    ? 'bg-neon-blue/20 border-neon-blue text-white'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <type.icon size={24} className={active.id === type.id ? 'text-neon-blue' : 'text-gray-500'} />
                            <span className="font-orbitron font-bold text-sm">{type.title}</span>
                        </button>
                    ))}
                </div>

                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">{active.need}</h3>
                    <p className="text-gray-300 font-outfit mb-8 max-w-2xl mx-auto">{active.desc}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {active.recommendation.map((rec, i) => (
                            <span key={i} className="px-5 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue font-bold font-outfit text-sm">
                                {rec}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceMatcher;
