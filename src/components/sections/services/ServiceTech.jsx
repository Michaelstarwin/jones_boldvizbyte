import { motion } from 'framer-motion';

const tools = [
    "React", "Next.js", "Tailwind", "Figma", "Adobe Suite", "Google Analytics", "Meta Business Suite"
];

const ServiceTech = () => {
    return (
        <section className="py-20 bg-black border-y border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                    Powered by <span className="text-neon-blue">Advanced Tech</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
                    {tools.map((tool, index) => (
                        <span key={index} className="text-xl font-outfit font-bold text-gray-500 hover:text-white transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTech;
