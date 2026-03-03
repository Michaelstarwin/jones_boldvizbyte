import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, ChevronLeft, Upload } from 'lucide-react';
import ApplicationLayout from '../../components/layout/ApplicationLayout';
import { Link } from 'react-router-dom';
import { submitLead } from '../../services/leadService';


const jobRoles = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer",
    "Digital Marketing Specialist", "Content Writer", "Business Development Executive"
];

const JobApplication = ({ isModal = false, onClose = () => { }, initialData = {} }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        location: '',
        role: '',
        experienceLevel: 'Fresher',
        yearsOfExperience: '',
        portfolio: '',
        skills: '',
        whyJoin: ''
    });

    useEffect(() => {
        if (initialData?.role) {
            setFormData(prev => ({ ...prev, role: initialData.role }));
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size exceeds 5MB");
                return;
            }
            if (file.type !== "application/pdf") {
                alert("Only PDF files are allowed");
                return;
            }
            setResumeFile(file);
        }
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
            role: formData.role,
            formType: 'Job Application',
            message: `Experience: ${formData.experienceLevel} ${formData.yearsOfExperience || ''} | Location: ${formData.location} | Why: ${formData.whyJoin} | Portfolio: ${formData.portfolio}`,
            file: resumeFile
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
                    We have received your application for <span className="text-neon-blue">{formData.role}</span>. Our HR team will review your profile shortly.
                </p>
                {isModal ? (
                    <button onClick={onClose} className="px-6 py-2 bg-neon-blue text-black rounded-lg font-bold font-orbitron text-sm">
                        CLOSE
                    </button>
                ) : (
                    <Link to="/careers" className="px-6 py-3 bg-neon-blue text-black rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all font-bold font-orbitron text-sm">
                        BACK TO CAREERS
                    </Link>
                )}
            </div>
        );
    }

    // Modal Wrapper (or standalone layout)
    const Content = (
        <form onSubmit={handleSubmit} className={isModal ? "" : "max-w-3xl mx-auto"}>
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {!isModal && <h3 className="text-xl font-bold text-white border-l-4 border-neon-blue pl-3">Personal Info</h3>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Full Name <span className="text-red-500">*</span></label>
                                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Current Location</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="City, State" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Email Address <span className="text-red-500">*</span></label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Mobile Number <span className="text-red-500">*</span></label>
                                <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="+91 9876543210" />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button type="button" onClick={handleNext} className="bg-white text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-sm md:text-base">
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
                        {!isModal && <h3 className="text-xl font-bold text-white border-l-4 border-neon-purple pl-3">Job Details</h3>}

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs md:text-sm">Job Role <span className="text-red-500">*</span></label>
                            <select name="role" value={formData.role} onChange={handleChange} disabled={isModal && initialData?.role} className={`w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors appearance-none ${isModal && initialData?.role ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                                <option value="">Select Role</option>
                                {jobRoles.map(r => <option key={r} value={r} className="bg-dark-bg text-gray-300">{r}</option>)}
                            </select>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs md:text-sm">Experience Level</label>
                                <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-colors appearance-none cursor-pointer text-sm">
                                    <option value="Fresher">Fresher</option>
                                    <option value="Experienced">Experienced</option>
                                </select>
                            </div>
                            {formData.experienceLevel === 'Experienced' && (
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-xs md:text-sm">Years of Experience</label>
                                    <input type="text" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="e.g. 2 Years" />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between pt-4">
                            <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-2 md:py-3 px-4 md:px-6 flex items-center text-sm md:text-base">
                                <ChevronLeft size={16} className="mr-2" /> Back
                            </button>
                            <button type="button" onClick={handleNext} disabled={!formData.role} className="bg-white disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center text-sm md:text-base">
                                Next Step <ChevronRight size={16} className="ml-2" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {!isModal && <h3 className="text-xl font-bold text-white border-l-4 border-neon-pink pl-3">Professional Info</h3>}

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs md:text-sm">Resume Upload (PDF) <span className="text-red-500">*</span></label>
                            <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 md:p-8 text-center hover:border-neon-blue transition-colors cursor-pointer group">
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {resumeFile ? (
                                    <div className="flex flex-col items-center text-neon-blue">
                                        <CheckCircle2 size={32} className="mb-2" />
                                        <p className="text-sm font-bold">{resumeFile.name}</p>
                                        <p className="text-xs text-gray-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                ) : (
                                    <>
                                        <Upload className="mx-auto text-gray-500 group-hover:text-neon-blue mb-2 transition-colors" size={32} />
                                        <p className="text-gray-400 text-xs md:text-sm">Click to upload or drag & drop</p>
                                        <p className="text-gray-600 text-[10px] md:text-xs mt-1">PDF only (Max 5MB)</p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs md:text-sm">Portfolio / LinkedIn URL</label>
                            <input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors" placeholder="https://" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs md:text-sm">Why do you want to join BoldVizByte? <span className="text-red-500">*</span></label>
                            <textarea required name="whyJoin" value={formData.whyJoin} onChange={handleChange} rows="3" className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-neon-blue transition-colors resize-none" placeholder="Tell us about yourself..." />
                        </div>

                        <div className="flex justify-between pt-8 border-t border-white/10">
                            <button type="button" onClick={handlePrev} className="text-gray-400 hover:text-white font-bold py-2 md:py-3 px-4 md:px-6 flex items-center text-sm md:text-base">
                                <ChevronLeft size={16} className="mr-2" /> Back
                            </button>
                            <button type="submit" disabled={isSubmitting} className="bg-neon-blue text-black font-bold font-orbitron tracking-wider py-3 md:py-4 px-8 md:px-10 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center disabled:opacity-70 text-sm md:text-base">
                                {isSubmitting ? 'SENDING...' : <>APPLY <Send size={18} className="ml-2" /></>}
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
        <ApplicationLayout title="Apply for Job" subtitle="We hire people with passion, not just resumes.">
            <Helmet>
                <title>Apply for Job | BoldVizByte Connect</title>
            </Helmet>

            {/* Progress Bar */}
            <div className="flex h-1 mb-8 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    className="h-full bg-neon-blue"
                />
            </div>
            {Content}
        </ApplicationLayout>
    );
};

export default JobApplication;
