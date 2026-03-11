import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const notFor = [
    "Just looking for a certificate",
    "Not willing to put in effort",
    "Looking for shortcuts / easy wins",
    "Not open to feedback"
];

const forWho = [
    "Passionate about building real things",
    "Ready to learn & unlearn",
    "Commitment-driven mindset",
    "Team players who help others win"
];

const CareersClarity = () => {
    return (
        <section className="py-20 bg-dark-bg border-b border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Who This Is NOT For */}
                    <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                            <XCircle className="text-red-500" /> Who This Is <span className="text-red-500">NOT</span> For
                        </h3>
                        <ul className="space-y-4">
                            {notFor.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-400 font-outfit">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-red-400 font-bold border-t border-red-500/20 pt-4 uppercase tracking-wider">
                            We look for commitment, not excuses.
                        </p>
                    </div>

                    {/* Who This IS For */}
                    <div className="bg-green-500/5 border border-green-500/20 p-8 rounded-3xl">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-3">
                            <CheckCircle className="text-green-500" /> Who This <span className="text-green-500">IS</span> For
                        </h3>
                        <ul className="space-y-4">
                            {forWho.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-400 font-outfit">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-sm text-green-400 font-bold border-t border-green-500/20 pt-4 uppercase tracking-wider">
                            If this is you, you're in the right place.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersClarity;
