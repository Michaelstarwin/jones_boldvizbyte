import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyServiceCTA = ({ onApply }) => {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-neon-blue/30 z-50 py-4 px-6 md:hidden"
        >
            <div className="flex justify-between items-center gap-4">
                <button
                    onClick={onApply}
                    className="flex-1 bg-neon-blue text-black font-bold font-orbitron py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                    APPLY NOW <ArrowRight size={16} />
                </button>
                <Link to="/contact" className="flex-1 bg-white/10 text-white font-bold font-orbitron py-3 rounded-xl flex items-center justify-center gap-2 text-sm border border-white/20">
                    <MessageCircle size={16} /> EXPERT HELP
                </Link>
            </div>
        </motion.div>
    );
};

export default StickyServiceCTA;
