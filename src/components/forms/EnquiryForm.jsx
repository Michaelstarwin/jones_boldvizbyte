import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { submitLead } from '../../services/leadService';

const enquiryTypes = [
    "General Question",
    "Partnership/Collaboration",
    "Technical Support",
    "Feedback",
    "Other"
];

const EnquiryForm = ({ onClose }) => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        type: '', // Enquiry Type
        message: '',
        source: ''
    });
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setFormData(prev => ({ ...prev, source: location.pathname }));
    }, [location]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });



    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const response = await submitLead({
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            formType: 'Enquiry Form',
            message: `Type: ${formData.type} | Message: ${formData.message}`
        });

        if (response.success) {
            setStatus('success');
            setFormData({ name: '', email: '', mobile: '', type: '', message: '' });
        } else {
            setStatus('error');
            alert(response.message);
            setStatus('idle');
        }
    };

    return (
        <div className="bg-dark-bg/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Success Overlay */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-dark-bg z-20 flex flex-col items-center justify-center text-center p-8"
                    >
                        <CheckCircle size={50} className="text-neon-blue mb-4" />
                        <h3 className="text-xl font-orbitron font-bold text-white mb-2">Enquiry Sent!</h3>
                        <p className="text-gray-400 text-sm font-outfit">We'll get back to you shortly.</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 text-neon-blue text-sm font-bold hover:underline">Send Another</button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <HelpCircle size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-orbitron font-bold text-white">General Enquiry</h3>
                    <p className="text-xs text-gray-400">Have a question? We're here to help.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                    <input
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors"
                        placeholder="Your Name"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors"
                            placeholder="Email"
                        />
                        <input
                            type="tel" name="mobile" required value={formData.mobile} onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors"
                            placeholder="Mobile No."
                        />
                    </div>

                    <div className="relative">
                        <select
                            name="type" required value={formData.type} onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer"
                        >
                            <option value="" disabled className="text-gray-500">Select Enquiry Type</option>
                            {enquiryTypes.map(t => <option key={t} value={t} className="bg-dark-bg text-gray-300">{t}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>

                    <textarea
                        name="message" required rows="3" value={formData.message} onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors resize-none"
                        placeholder="What would you like to know?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-black font-orbitron font-bold py-3 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                >
                    {status === 'submitting' ? 'Sending...' : <>SEND ENQUIRY <Send size={16} /></>}
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
