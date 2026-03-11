import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, User, Phone, ArrowRight, Loader } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            await signup(formData.name, formData.email, formData.password, formData.mobile);
            navigate('/');
        } catch (err) {
            setError('Failed to create account. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Sign Up | BoldVizByte</title>
            </Helmet>

            <div className="min-h-screen bg-dark-bg flex items-center justify-center relative overflow-hidden px-6 pt-20">
                {/* Background Decor */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10"
                >
                    <div className="text-center mb-8">
                        <Link to="/">
                            <h2 className="text-2xl font-orbitron font-bold text-white tracking-widest mb-2">
                                BOLD<span className="text-neon-blue">VIZ</span>BYTE
                            </h2>
                        </Link>
                        <p className="text-gray-400 font-outfit text-sm">Join the revolution.</p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg mb-6 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-base focus:border-neon-blue focus:outline-none transition-colors placeholder-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-base focus:border-neon-blue focus:outline-none transition-colors placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Mobile Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="tel"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-base focus:border-neon-blue focus:outline-none transition-colors placeholder-gray-600"
                                    placeholder="+91 9876543210"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white text-base focus:border-neon-blue focus:outline-none transition-colors placeholder-gray-600"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-neon-blue text-black font-orbitron font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                        >
                            {isSubmitting ? <Loader className="animate-spin" size={20} /> : <>CREATE ACCOUNT <ArrowRight size={18} /></>}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-neon-blue hover:underline font-bold">
                            Login
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Signup;
