import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="pt-32 pb-20 bg-dark-bg text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6">
                        Get in <span className="text-neon-blue">Touch</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-8">
                        Every great project starts with a conversation.
                    </h2>
                    <p className="text-xl text-gray-400 font-outfit max-w-2xl mx-auto mb-4">
                        Ready to start your next project? We are here to help you grow.
                    </p>
                    <p className="text-neon-blue font-outfit text-sm font-bold uppercase tracking-widest">
                        "We usually reply faster than you expect."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
