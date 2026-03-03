import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
    { q: "How soon will you respond?", a: "We commit to responding within 24 hours on business days." },
    { q: "Do you offer free consultation?", a: "Yes! The initial discussion to understand your needs is completely free." },
    { q: "Can I call directly?", a: "Absolutely. You can reach us at +91 7708994392 during business hours (10 AM - 7 PM)." },
    { q: "Do you work with clients outside Tamil Nadu?", a: "Yes, we serve clients across India and globally via remote collaboration tools." },
    { q: "Can I apply for an internship here?", a: "Yes, please select the 'Internship' option in the contact form selector above." }
];

const ContactFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-orbitron font-bold text-white mb-10 text-center">Common Questions</h2>
                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-outfit font-bold text-white pr-4">{item.q}</span>
                                {activeIndex === index ? <Minus className="text-neon-purple" /> : <Plus className="text-gray-500" />}
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

export default ContactFAQ;
