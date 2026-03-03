import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you work with startups?",
        answer: "Absolutely! We love building brands from the ground up, providing scalable web and marketing solutions tailored for growth."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we ensure your digital assets continue to perform with our dedicated maintenance and optimization support packages."
    },
    {
        question: "Can clients from outside Tamil Nadu work with you?",
        answer: "Currently, we serve clients globally! While our roots are in Tamil Nadu, our digital solutions have no borders."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Frequently Asked <span className="text-neon-blue">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg md:text-xl font-orbitron font-bold text-white pr-8">
                                    {faq.question}
                                </span>
                                {activeIndex === index ? (
                                    <Minus className="text-neon-blue flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 font-outfit leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
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

export default FAQ;
