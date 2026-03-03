import { motion } from 'framer-motion';
import { Headset, PlusCircle } from 'lucide-react';

const addons = ["SEO Packages", "Monthly Maintenance", "Content Marketing"];

const ServicePostDelivery = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Post Support */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/20 rounded-3xl"
                    >
                        <Headset className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Post-Service Support</h3>
                        <p className="text-gray-400 font-outfit leading-relaxed">
                            We don’t disappear after delivery. We offer ongoing support, updates, and optimization to ensure your digital assets continue to perform at their best.
                        </p>
                    </motion.div>

                    {/* Add-ons */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 rounded-3xl"
                    >
                        <PlusCircle className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Smart Add-ons</h3>
                        <p className="text-gray-400 font-outfit mb-6">Boost your results with our recommended extras:</p>
                        <div className="flex flex-wrap gap-3">
                            {addons.map((a, i) => (
                                <span key={i} className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-bold">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServicePostDelivery;
