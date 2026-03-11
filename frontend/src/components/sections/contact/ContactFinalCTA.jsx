import { ArrowRight } from 'lucide-react';

const ContactFinalCTA = () => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-20 bg-gradient-to-t from-neon-blue/10 to-transparent text-center border-t border-white/10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8 leading-tight">
                    Every great project starts with a <span className="text-neon-blue">conversation.</span>
                </h2>

                <button
                    onClick={handleScroll}
                    className="px-12 py-4 bg-white text-black font-bold font-orbitron rounded-full hover:bg-neon-blue hover:text-white transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Send a Message <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default ContactFinalCTA;
