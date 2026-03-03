import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { submitLead } from '../../../services/leadService';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });



    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const response = await submitLead({
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            formType: 'Contact Form',
            message: `Subject: ${formData.subject} | Message: ${formData.message}`
        });

        if (response.success) {
            setStatus('success');
            setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
        } else {
            setStatus('error');
            alert(response.message); // Simple fallback for now
            setStatus('idle');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md relative overflow-hidden"
        >
            {/* Success Overlay */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-dark-bg/90 z-20 flex flex-col items-center justify-center text-center p-8"
                    >
                        <CheckCircle size={60} className="text-neon-green mb-4" />
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 font-outfit">Thank you. We will get back to you within 24 hours.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 text-neon-blue font-bold hover:underline">Send Another</button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold mb-4">
                ⏱️ Response within 24 hours
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">Send Message</h3>
            <p className="text-gray-400 mb-8 font-outfit border-b border-white/10 pb-4">
                For sales, business, or general contact. For jobs or services, please use their respective pages.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group">
                        <input
                            type="text" name="name" required value={formData.name} onChange={handleChange}
                            className="w-full bg-dark-bg border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-neon-blue transition-colors focus:ring-1 focus:ring-neon-blue/50"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="tel" name="mobile" required value={formData.mobile} onChange={handleChange}
                            className="w-full bg-dark-bg border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-neon-blue transition-colors focus:ring-1 focus:ring-neon-blue/50"
                            placeholder="Mobile Number"
                        />
                    </div>
                </div>

                <div className="relative group">
                    <input
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-neon-blue transition-colors focus:ring-1 focus:ring-neon-blue/50"
                        placeholder="Email Address"
                    />
                </div>

                <div className="relative group">
                    <input
                        type="text" name="subject" required value={formData.subject} onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-neon-blue transition-colors focus:ring-1 focus:ring-neon-blue/50"
                        placeholder="Subject (e.g. Partnership Proposal)"
                    />
                </div>

                <div className="relative group">
                    <textarea
                        name="message" required rows="4" value={formData.message} onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-neon-blue transition-colors resize-none focus:ring-1 focus:ring-neon-blue/50"
                        placeholder="Your Message..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-black font-orbitron font-bold py-4 rounded-xl hover:bg-neon-blue transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Sending...' : <>SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>

                <p className="text-xs text-center text-gray-600 mt-4 flex items-center justify-center gap-2">
                    <CheckCircle size={12} className="text-green-500" /> Your details are safe with us. No spam.
                </p>
            </form>
        </motion.div>
    );
};

export default ContactForm;
