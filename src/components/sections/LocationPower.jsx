import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
    "Kovilpatti",
    "Thoothukudi",
    "Tirunelveli",
    "Madurai",
    "Virudhunagar",
    "Tamil Nadu",
    "India"
];

const LocationPower = () => {
    return (
        <section className="py-20 bg-dark-bg/50 border-y border-white/5 relative">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                        Serving Businesses Across <span className="text-neon-blue">Every Location</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
                        {locations.map((loc, i) => (
                            <div key={i} className="flex items-center gap-2 group cursor-default">
                                <MapPin size={18} className="text-neon-blue group-hover:animate-bounce" />
                                <span className="text-gray-300 font-orbitron tracking-wider text-sm md:text-lg group-hover:text-white transition-colors">
                                    {loc}
                                </span>
                                {i < locations.length - 1 && (
                                    <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-white/20 mx-2" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationPower;
