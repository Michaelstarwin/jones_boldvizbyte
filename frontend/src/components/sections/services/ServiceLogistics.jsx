import { motion } from 'framer-motion';
import { Clock, ShieldCheck, FileText, Settings, Gift } from 'lucide-react';

const timelines = [
    { service: "Logo Design", time: "5–7 Days" },
    { service: "Website", time: "2–4 Weeks" },
    { service: "Ads Setup", time: "3 Days" }
];

const guarantees = [
    "Quality Assurance", "On-time Delivery", "Transparent Comm."
];

const ServiceLogistics = () => {
    return (
        <section className="py-20 bg-dark-bg/50 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Delivery Time */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="text-neon-blue" size={28} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Delivery Time</h3>
                        </div>
                        <ul className="space-y-4">
                            {timelines.map((t, i) => (
                                <li key={i} className="flex justify-between items-center text-gray-300 font-outfit border-b border-white/5 pb-2 last:border-0">
                                    <span>{t.service}</span>
                                    <span className="font-bold text-white">{t.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements & Guarantees */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="text-neon-green" size={28} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Our Promise</h3>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {guarantees.map((g, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-300 font-outfit">
                                    <span className="w-1.5 h-1.5 bg-neon-green rounded-full" /> {g}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <FileText className="text-gray-400" size={16} />
                                <span className="text-sm font-bold text-white font-orbitron">Pre-Service Reqs:</span>
                            </div>
                            <p className="text-xs text-gray-400">Brand info, Goals, Content access.</p>
                        </div>
                    </div>

                    {/* Flexibility & Deliverables */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="text-neon-purple" size={28} />
                            <h3 className="text-xl font-orbitron font-bold text-white">Flexibility</h3>
                        </div>
                        <p className="text-gray-300 font-outfit mb-6 text-sm leading-relaxed">
                            "Every business is different. We customize every service based on your goals and budget."
                        </p>
                        <div className="bg-neon-purple/10 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2 text-neon-purple">
                                <Gift size={18} />
                                <span className="font-bold font-orbitron text-sm">What You Get (Example)</span>
                            </div>
                            <p className="text-xs text-gray-400">UI/UX Design, SEO Setup, Responsive Pages, Implementation.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceLogistics;
