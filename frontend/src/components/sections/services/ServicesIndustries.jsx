import { motion } from 'framer-motion';

const industries = [
    "Startups", "Small Businesses", "E-commerce", "Education", "Healthcare", "Real Estate", "Local Businesses"
];

const ServicesIndustries = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-12">
                    Industries We <span className="text-neon-green">Serve</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((ind, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-lg font-outfit text-gray-300 hover:bg-neon-green/10 hover:border-neon-green hover:text-white transition-all cursor-default"
                        >
                            {ind}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesIndustries;
