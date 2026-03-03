import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Are you a marketing agency or IT company?",
        answer: "We are both! We are a hybrid agency that blends IT development with digital marketing strategy to offer complete business growth solutions."
    },
    {
        question: "Do you work with small businesses?",
        answer: "Yes, we love helping small businesses and startups scale. We offer tailored packages specifically for growing brands."
    },
    {
        question: "Do you take long-term projects?",
        answer: "Absolutely. We prefer long-term partnerships where we can continuously optimize and grow your digital presence."
    }
];

const AboutFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                        Common Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-orbitron font-bold text-white pr-8">
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

export default AboutFAQ;
