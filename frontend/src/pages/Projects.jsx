import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Neon Realty',
        category: 'Web Development',
        description: "A high-conversion real estate platform with virtual 3D tours.",
        outcome: "40% Increase in Leads",
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: 'Future Finance AI',
        category: 'App Design',
        description: "AI-powered personal finance tracker with predictive analytics.",
        outcome: "10k+ Downloads in Month 1",
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        title: 'Eco Energy',
        category: 'Branding',
        description: "Complete rebrand for a renewable energy startup focusing on sustainability.",
        outcome: "Brand Awareness grew by 200%",
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
];

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Our Projects | BoldVizByte</title>
                <meta name="description" content="View our portfolio of high-performance websites and digital campaigns." />
            </Helmet>

            <section className="pt-32 pb-20 bg-dark-bg min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6">
                            Our <span className="text-neon-green">Work</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-outfit max-w-2xl mx-auto">
                            We take pride in delivering results that matter. Here are some of our success stories.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neon-green/50 transition-all duration-500"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden md:flex">
                                        <button className="px-6 py-3 bg-neon-green text-black font-orbitron font-bold tracking-wider rounded-none transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                            VIEW CASE STUDY <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Only Button */}
                                <div className="md:hidden px-6 pt-6">
                                    <button className="w-full py-3 border border-neon-green/30 text-neon-green font-orbitron font-bold text-sm tracking-wider hover:bg-neon-green hover:text-black transition-all flex items-center justify-center gap-2">
                                        VIEW CASE STUDY <ArrowUpRight size={16} />
                                    </button>
                                </div>

                                <div className="p-6">
                                    <p className="text-neon-green text-xs font-bold tracking-widest uppercase mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 font-outfit line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-white text-sm font-bold">
                                            Outcome: <span className="text-gray-400 font-normal">{project.outcome}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
