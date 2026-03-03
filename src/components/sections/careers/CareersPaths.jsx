import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

const paths = [
    {
        id: 'fulltime',
        title: "Full-Time Jobs",
        icon: Briefcase,
        desc: "For experienced professionals ready to lead.",
        cta: "View Openings",
        target: "open-positions"
    },
    {
        id: 'internship',
        title: "Internships",
        icon: GraduationCap,
        desc: "For students & freshers starting their journey.",
        cta: "Apply for Internship",
        target: "open-positions"
    },
    {
        id: 'freelance',
        title: "Freelance / Contract",
        icon: Zap,
        desc: "Flexible work for specialized experts.",
        cta: "Partner With Us",
        target: "contact-footer"
    }
];

const CareersPaths = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {paths.map((path, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors text-center"
                        >
                            <div className="w-16 h-16 bg-neon-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <path.icon className="text-neon-blue" size={32} />
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{path.title}</h3>
                            <p className="text-gray-400 font-outfit mb-8">{path.desc}</p>

                            <button
                                onClick={() => handleScroll(path.target)}
                                className="inline-block px-6 py-2 border border-white/20 rounded-full text-white font-bold font-orbitron text-sm hover:bg-neon-blue hover:text-black hover:border-neon-blue transition-all cursor-pointer bg-transparent"
                            >
                                {path.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersPaths;
