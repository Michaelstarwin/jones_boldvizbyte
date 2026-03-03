import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import ApplicationLayout from '../../components/layout/ApplicationLayout';
import { Link } from 'react-router-dom';
import { submitLead } from '../../services/leadService';

const budgets = ["Please Select", "Low (Starter)", "Medium (Standard)", "High (Premium)", "Custom"];
const timelines = ["Urgent", "1-2 Weeks", "1 Month+", "Flexible"];

const ServiceApplication = ({ isModal = false, onClose = () => { }, initialData = {} }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        company: '',
        location: '',
        service: initialData.service || '',
        description: '',
        budget: '',
        timeline: ''
    });

    useEffect(() => {
        if (initialData?.service) {
            setFormData(prev => ({ ...prev, service: initialData.service }));
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const response = await submitLead({
            name: formData.fullName,
            email: formData.email,
            phone: formData.mobile,
            service: formData.service,
            formType: 'Service Application',
            message: `Description: ${formData.description} | Budget: ${formData.budget} | Timeline: ${formData.timeline} | Company: ${formData.company}`
        });

        if (response.success) {
            setIsSubmitting(false);
            setIsSuccess(true);
        } else {
            setIsSubmitting(false);
            alert(response.message);
        }
    };

    if (isSuccess) {
        return (
            <div className={`text-center ${isModal ? 'py-4' : 'py-12'}`}>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6 text-neon-green"
                >
                    <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-gray-300 font-outfit mb-6 max-w-sm mx-auto text-sm">
                    Thank you, {formData.fullName.split(' ')[0]}. We will review your request for <span className="text-neon-blue">{formData.service}</span> and contact you shortly.
                </p>
                {isModal ? (
                    <button onClick={onClose} className="px-6 py-2 bg-neon-blue text-black rounded-lg font-bold font-orbitron text-sm">
                        CLOSE
                    </button>
                ) : (
                    <div className="flex justify-center gap-4">
                        <Link to="/" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-bold font-orbitron text-sm">
                            GO BACK HOME
                        </Link>
                        <Link to="/services" className="px-6 py-3 bg-neon-blue text-black rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all font-bold font-orbitron text-sm">
                            EXPLORE SERVICES
                        </Link>
                    </div>
                )}
            </div>
        );
    }

    const Content = (
        <form onSubmit={handleSubmit} className={isModal ? "" : "max-w-3xl mx-auto"}>
            {!isModal && (
                <Helmet>
                    <title>Apply for {formData.service || 'Service'} | BoldVizByte Connect</title>
                </Helmet>
            )}

            {/* Progress Bar */}
            <div className="flex h-1 mb-8 bg-white/10 rounded-full overflow-hidden" >
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 2) * 100}%` }}
                    className="h-full bg-neon-blue"
                />
            </div >

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        {/* Dynamic Heading inside form if not modal, or just context */}
                        {!isModal && (
                            <div className="mb-6">
                                <h2 className="text-2xl font-orbitron font-bold text-white">
                                    Apply for <span className="text-neon-blue">{formData.service || 'Service'}</span>
                                </h2>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Selected Service - Read Only */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-gray-400 text-xs md:text-sm">Selected Service <span className="text-neon-blue">(Locked)</span></label>
                                <div className="w-full bg-neon-blue/10 border border-neon-blue/30 rounded-xl px-4 py-3 text-white text-sm font-semibold flex items-center">
                                    <CheckCircle2 size={16} className="text-neon-blue mr-2" />
                                    {formData.service || 'No Service Selected'}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Full Name <span className="text-red-500">*</span></label>
                                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Email <span className="text-red-500">*</span></label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="john.doe@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Mobile <span className="text-red-500">*</span></label>
                                <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="+1 123 456 7890" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Company (Optional)</label>
                                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="Acme Corp" />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="button" onClick={handleNext} disabled={!formData.fullName || !formData.email || !formData.mobile} className="bg-white disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-sm md:text-base">
                                Next Step <ChevronRight size={16} className="ml-2" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs md:text-sm">Project Description <span className="text-red-500">*</span></label>
                            <textarea required name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors resize-none" placeholder="Briefly describe your requirements..." />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Budget Range</label>
                                <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                    {budgets.map(b => <option key={b} value={b} className="bg-dark-bg text-gray-300">{b}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Timeline</label>
                                <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer">
                                    {timelines.map(t => <option key={t} value={t} className="bg-dark-bg text-gray-300">{t}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between pt-8 border-t border-white/10">
                            <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-2 md:py-3 px-4 md:px-6 flex items-center text-sm md:text-base">
                                <ChevronLeft size={16} className="mr-2" /> Back
                            </button>
                            <button type="submit" disabled={isSubmitting || !formData.description} className="bg-neon-blue text-black font-bold font-orbitron tracking-wider py-3 md:py-4 px-8 md:px-10 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center disabled:opacity-70 text-sm md:text-base">
                                {isSubmitting ? 'SUBMITTING...' : <>APPLY FOR SERVICE <Send size={18} className="ml-2" /></>}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );

    if (isModal) {
        return Content;
    }

    return (
        <ApplicationLayout title={`Apply for ${formData.service || 'Service'}`} subtitle="Tell us about your project. Serious inquiries only.">
            <Helmet>
                <title>Apply for {formData.service || 'Service'} | BoldVizByte Connect</title>
            </Helmet>

            {/* Progress Bar */}
            <div className="flex h-1 mb-8 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 2) * 100}%` }}
                    className="h-full bg-neon-blue"
                />
            </div>
            {Content}
        </ApplicationLayout>
    );
};

export default ServiceApplication;
