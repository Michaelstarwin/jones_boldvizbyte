import React from 'react';
import EnquiryForm from '../forms/EnquiryForm';
import { motion } from 'framer-motion';

const EnquirySection = () => {
    return (
        <section className="py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4"
                        >
                            Have a Question? <span className="text-neon-blue">Send an Enquiry</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 font-outfit"
                        >
                            Whether you're curious about our features, pricing, or just want to say hello.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <EnquiryForm />
                    </motion.div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default EnquirySection;
