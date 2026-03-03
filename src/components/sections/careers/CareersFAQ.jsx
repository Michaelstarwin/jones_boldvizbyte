import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
    { q: "Is this internship paid?", a: "It depends on the role and skill level. We have performace-based stipends. Exceptional work is always rewarded." },
    { q: "Will I get hands-on work?", a: "Yes. 100%. We don't hire interns to make coffee. You will work on live projects under supervision." },
    { q: "Can I manage college + internship?", a: "Yes, our internships are flexible, but you must commit to the required weekly hours and deadlines." },
    { q: "Do you offer a job after internship?", a: "We prioritize our interns for full-time roles. If you perform well and show growth, we'd love to keep you." },
    { q: "Is it remote or onsite?", a: "We have Remote, Hybrid, and Onsite options tailored to the position and your location." },
    { q: "Will I get a certificate?", a: "Yes! All interns receive a completion certificate and a letter of recommendation upon successful completion." }
];

const CareersFAQ = () => {
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

export default CareersFAQ;
