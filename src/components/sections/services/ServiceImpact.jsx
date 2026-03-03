import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, ArrowUpRight } from 'lucide-react';

const scenarios = [
    {
        title: "Local Business Needs Leads",
        solution: "Meta Ads + SEO Optimized Site",
        result: "Increased foot traffic & calls."
    },
    {
        title: "Startup Launching Product",
        solution: "Branding + Web + Launch Campaign",
        result: "Strong market entry & buzz."
    }
];

const metrics = [
    { label: "Lead Growth", val: "3x", desc: "Average increase in qualified leads" },
    { label: "Conversion", val: "+45%", desc: "Improvement in sales funnel efficiency" },
    { label: "Engagement", val: "10x", desc: "Boost in social media interactions" }
];

const ServiceImpact = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ROI Section */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8">
                            Real <span className="text-neon-green">Results</span> & ROI
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            {metrics.map((m, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                                    <div className="text-3xl font-orbitron font-bold text-neon-green mb-2">{m.val}</div>
                                    <div className="text-white font-bold text-sm mb-1">{m.label}</div>
                                    <div className="text-gray-500 text-xs">{m.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 font-outfit italic border-l-4 border-neon-green pl-4">
                            "We don't just deliver services; we deliver measurable business growth."
                        </p>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                            Real World <span className="text-neon-purple">Scenarios</span>
                        </h2>
                        <div className="space-y-6">
                            {scenarios.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4"
                                >
                                    <div className="p-3 bg-neon-purple/20 rounded-full text-neon-purple">
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold font-orbitron text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm mb-2">Solution: <span className="text-white">{item.solution}</span></p>
                                        <p className="text-neon-green text-sm font-bold">Result: {item.result}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceImpact;
