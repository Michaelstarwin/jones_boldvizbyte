import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuth } from '../../context/AuthContext';
import Modal from '../ui/Modal';
import EnquiryForm from '../forms/EnquiryForm';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsEnquiryOpen(false); // Close modal on route change too, just in case
    }, [location]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                    scrolled
                        ? "bg-dark-bg/80 backdrop-blur-lg border-white/10 py-3"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="relative z-50 group">
                        <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-white tracking-widest">
                            BOLD<span className="text-neon-blue">VIZ</span>BYTE
                        </h1>
                        <motion.div
                            className="h-0.5 bg-neon-blue w-0 group-hover:w-full transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Links - Centered */}
                    <div className="hidden md:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "font-outfit text-sm font-medium tracking-wide transition-colors duration-300 relative group overflow-hidden",
                                    location.pathname === link.path ? "text-neon-blue" : "text-gray-300 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsEnquiryOpen(true)}
                            className="px-6 py-2 border border-neon-blue text-neon-blue font-orbitron text-xs font-bold tracking-wider hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] flex items-center justify-center cursor-pointer"
                        >
                            ENQUIRY
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50 flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "text-white hover:text-neon-blue transition-colors p-2",
                                isOpen && location.pathname === '/our-work' && "mt-4"
                            )}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center h-screen w-screen md:hidden"
                        >
                            <div className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="font-orbitron text-3xl text-white hover:text-neon-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsEnquiryOpen(true);
                                    }}
                                    className="mt-8 px-8 py-3 bg-neon-blue text-black font-orbitron font-bold tracking-wider rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.4)] active:scale-95 transition-transform"
                                >
                                    ENQUIRY
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <Modal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                title="General Enquiry"
            >
                <EnquiryForm onClose={() => setIsEnquiryOpen(false)} />
            </Modal>
        </>
    );
};

export default Navbar;
