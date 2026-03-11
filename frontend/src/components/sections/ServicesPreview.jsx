import { motion } from 'framer-motion';
import { Palette, Globe, Bot, Megaphone, Image, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    { icon: Palette, title: "Logo Design", desc: "Memorable brand identities.", color: "text-purple-400" },
    { icon: Globe, title: "Web Design & Dev", desc: "High-performance websites.", color: "text-blue-400" },
    { icon: Bot, title: "Agentic AI", desc: "Autonomous business agents.", color: "text-green-400" },
    { icon: Megaphone, title: "Meta & Google Ads", desc: "ROI-driven campaigns.", color: "text-pink-400" },
    { icon: Image, title: "Posters & Branding", desc: "Creative visual assets.", color: "text-yellow-400" },
];

const ServicesPreview = () => {
    return (
        <section className="py-20 bg-dark-bg/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        <span className="text-neon-blue">Services</span> We Offer
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group text-center"
                        >
                            <div className={`w-12 h-12 mx-auto rounded-full bg-black/50 flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{service.desc}</p>

                            <Link to="/services" className="inline-flex items-center text-xs font-bold text-neon-blue hover:underline">
                                EXPLORE SERVICE <ArrowRight size={12} className="ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
