import { motion } from 'framer-motion';

const values = [
    { title: "Collaborative Team", desc: "No silos. We win together." },
    { title: "Learning-First", desc: "Mistakes are proof of trying." },
    { title: "Respect & Transparency", desc: "Honesty is our policy." },
    { title: "Growth-Oriented", desc: "We push you to your best." }
];

const CareersCulture = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-12">
                    Our Work <span className="text-neon-purple">Culture</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, index) => (
                        <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-neon-purple/10 transition-colors">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-gray-400 font-outfit">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersCulture;
