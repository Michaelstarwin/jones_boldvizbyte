import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
    "No online visibility",
    "No leads from website",
    "Ads waste money"
];

const solutions = [
    "SEO-driven websites",
    "Conversion-focused design",
    "Smart digital marketing"
];

const ProblemSolution = () => {
    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-green-900/10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        Stop Losing <span className="text-red-500">Business</span>. Start <span className="text-green-500">Dominating</span>.
                    </h2>
                    <p className="text-gray-400 font-outfit max-w-2xl mx-auto">
                        We don't just build websites. We solve the problems that hold your business back.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Problems Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full" />
                        <h3 className="text-2xl font-orbitron font-bold text-red-500 mb-6 flex items-center gap-3">
                            <span className="text-4xl">⚠️</span> The Struggle
                        </h3>
                        <ul className="space-y-4">
                            {problems.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 font-outfit text-lg">
                                    <XCircle className="text-red-500 flex-shrink-0" size={24} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solutions Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-green-500/5 border border-green-500/20 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 -ml-10 -mt-10 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full" />
                        <h3 className="text-2xl font-orbitron font-bold text-green-500 mb-6 flex items-center gap-3">
                            <span className="text-4xl">🚀</span> The Solution
                        </h3>
                        <ul className="space-y-4">
                            {solutions.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-outfit text-lg font-medium">
                                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
