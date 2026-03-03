import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
    { q: "How do I choose the right service?", a: "Analyze your current business goals. If you need brand awareness, go for ads/social. If you need credibility, web design & branding." },
    { q: "Do you offer custom solutions?", a: "Yes. Every business is different. We customize every service based on your goals and budget." },
    { q: "Will you provide post-delivery support?", a: "Absolutely. We don’t disappear after delivery. We offer support, updates, and optimization." },
    { q: "Can startups afford your services?", a: "We love startups! We have flexible pricing models designed to help you scale without breaking the bank." },
    { q: "Can I upgrade later?", a: "Yes! Our solutions are scalable. You can start small and add advanced features or services as you grow." },
    { q: "Do you offer Annual Maintenance (AMC)?", a: "Yes, we offer AMC packages for websites and apps to ensure security, updates, and performance." },
    { q: "Can I pause services?", a: "For monthly services like marketing, you can pause with prior notice. We value flexibility." }
];

const ServicesFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-orbitron font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-outfit font-bold text-white pr-4">{item.q}</span>
                                {activeIndex === index ? <Minus className="text-neon-blue" /> : <Plus className="text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t border-white/5"
                                    >
                                        <p className="p-6 pt-0 text-gray-400 font-outfit mt-4">{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesFAQ;
