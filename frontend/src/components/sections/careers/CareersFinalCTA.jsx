import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CareersFinalCTA = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-neon-purple/20 to-transparent relative overflow-hidden" id="contact-footer">
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8">
                    Ready or <span className="text-gray-500">Not?</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-outfit text-gray-300 italic mb-12 max-w-2xl mx-auto">
                    "If you’re serious about learning and growing, apply now. If not, don't waste your potential."
                </h3>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => handleScroll('open-positions')}
                        className="px-10 py-4 bg-white text-black font-bold font-orbitron rounded-full hover:bg-neon-purple hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        APPLY FOR JOB <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => handleScroll('open-positions')}
                        className="px-10 py-4 border border-white text-white font-bold font-orbitron rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        APPLY FOR INTERNSHIP
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CareersFinalCTA;
