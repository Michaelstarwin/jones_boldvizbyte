import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { services } from '../assets/data/services';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.slug === slug);

    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    return (
        <>
            <Helmet>
                <title>{service.title} | BoldVizByte Services</title>
                <meta name="description" content={service.longDescription} />
            </Helmet>

            <section className="pt-32 pb-20 bg-dark-bg min-h-screen">
                <div className="container mx-auto px-6">
                    <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <div className="w-20 h-20 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue mb-8 border border-neon-blue/20">
                            <service.icon size={40} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-400 font-outfit max-w-3xl leading-relaxed">
                            {service.longDescription}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        {/* Offerings */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 border-b border-white/10 pb-4">
                                What We Offer
                            </h3>
                            <ul className="space-y-4">
                                {service.offerings.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3 text-gray-300 font-outfit p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                                        <CheckCircle2 className="text-neon-blue flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-6 border-b border-white/10 pb-4">
                                Key Benefits
                            </h3>
                            <ul className="space-y-4">
                                {service.benefits.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3 text-gray-300 font-outfit p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                                        <CheckCircle2 className="text-neon-purple flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-3xl font-orbitron font-bold text-white mb-6 relative z-10">
                            Ready to elevate your {service.title}?
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/services" state={{ selectedService: service.title }}>
                                <button className="px-8 py-4 bg-neon-blue text-black font-orbitron font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all rounded-none flex items-center justify-center gap-2">
                                    GET QUOTE <ArrowRight size={20} />
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-transparent border border-white text-white font-orbitron font-bold tracking-wider hover:bg-white hover:text-black transition-all rounded-none flex items-center justify-center gap-2">
                                    <MessageCircle size={20} /> TALK TO EXPERT
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;
