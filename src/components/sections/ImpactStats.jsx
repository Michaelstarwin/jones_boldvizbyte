import { motion } from 'framer-motion';

const stats = [
    { number: "100+", label: "Projects Delivered", color: "text-neon-blue" },
    { number: "90+", label: "Happy Clients", color: "text-neon-purple" },
    { number: "10+", label: "Active Campaigns", color: "text-neon-pink" },
    { number: "150+", label: "Interns Trained", color: "text-green-400" }
];

const ImpactStats = () => {
    return (
        <section className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6">
                {/* Visual Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group"
                        >
                            <h3 className={`text-4xl md:text-5xl font-black font-orbitron mb-2 ${stat.color} drop-shadow-lg`}>
                                {stat.number}
                            </h3>
                            <p className="text-gray-400 font-outfit text-sm md:text-base font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
