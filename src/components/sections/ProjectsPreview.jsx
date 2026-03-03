import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Neon Nexus",
        category: "Web Development",
        result: "300% User Growth",
        image: "linear-gradient(45deg, #1a1a2e, #16213e)" // Placeholder gradient
    },
    {
        title: "Future Finance",
        category: "Branding & UI/UX",
        result: "Award Winning Design",
        image: "linear-gradient(45deg, #0f0c29, #302b63)"
    },
    {
        title: "AutoStream AI",
        category: "AI Solutions",
        result: "Automated Workflow",
        image: "linear-gradient(45deg, #000000, #434343)"
    }
];

const ProjectsPreview = () => {
    return (
        <section className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4"
                        >
                            Featured <span className="text-neon-blue">Projects</span>
                        </motion.h2>
                        <p className="text-gray-400 font-outfit">Proof of our capability and digital craftsmanship.</p>
                    </div>
                    <Link to="/projects">
                        <button className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors font-orbitron font-bold">
                            VIEW ALL WORK <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-colors"
                        >
                            {/* Image Placeholder */}
                            <div
                                className="h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ background: project.image }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-neon-blue font-orbitron text-xs tracking-widest mb-2 uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm font-outfit mb-6 border-l-2 border-neon-purple pl-3">
                                    {project.result}
                                </p>
                                <Link to="/projects" className="inline-flex items-center gap-2 text-white text-sm font-bold hover:text-neon-blue transition-colors">
                                    View Project <ExternalLink size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
