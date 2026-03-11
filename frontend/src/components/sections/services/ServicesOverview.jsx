import { motion } from 'framer-motion';
import { PenTool, CreditCard, Bot, Monitor, Megaphone, Image, BookOpen, Layers, Book } from 'lucide-react';

const services = [
    { id: 'logo-design', name: "Logo Design", icon: PenTool, desc: "Memorable brand identities." },
    { id: 'business-cards', name: "Business Cards", icon: CreditCard, desc: "Professional first impressions." },
    { id: 'agentic-ai', name: "Agentic AI", icon: Bot, desc: "Intelligent automation." },
    { id: 'web-development', name: "Web Design & Dev", icon: Monitor, desc: "High-performance websites." },
    { id: 'ads', name: "Meta & Google Ads", icon: Megaphone, desc: "Targeted ROI campaigns." },
    { id: 'social-posts', name: "Posts & Banners", icon: Image, desc: "Engaging social content." },
    { id: 'brochures', name: "Brochures", icon: BookOpen, desc: "Impactful marketing materials." },
    { id: 'posters', name: "Posters", icon: Layers, desc: "Eye-catching visual displays." },
    { id: 'book-covers', name: "Book Covers", icon: Book, desc: "Stories that sell at a glance." }
];

const ServicesOverview = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all hover:bg-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-colors">
                                    <item.icon size={28} />
                                </div>
                                <span className="text-xs font-outfit text-gray-500 uppercase tracking-wider">Service</span>
                            </div>

                            <h3 className="text-xl font-orbitron font-bold text-white mb-2">{item.name}</h3>
                            <p className="text-gray-400 font-outfit text-sm mb-6">{item.desc}</p>

                            <button
                                onClick={() => handleScroll(item.id)}
                                className="inline-block text-sm font-bold text-neon-blue hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 uppercase"
                            >
                                Learn More →
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
