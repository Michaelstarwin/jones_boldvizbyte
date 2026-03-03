import { Laptop, Building, Globe } from 'lucide-react';

const modes = [
    { icon: Globe, title: "Remote", desc: "Work from anywhere with stable internet." },
    { icon: Building, title: "Onsite", desc: "For roles requiring physical teamwork (Kovilpatti)." },
    { icon: Laptop, title: "Hybrid", desc: "Best of both worlds. Flexible days." }
];

const CareersWorkMode = () => {
    return (
        <section className="py-16 bg-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-10">
                    Work Mode <span className="text-white/50">Clarity</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {modes.map((m, i) => (
                        <div key={i} className="flex flex-col items-center gap-3">
                            <div className="p-4 bg-dark-bg rounded-full border border-white/10 text-white">
                                <m.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-orbitron font-bold text-white">{m.title}</h4>
                                <p className="text-xs text-gray-400 font-outfit">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersWorkMode;
