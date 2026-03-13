import { motion } from 'framer-motion';

const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';
    const timestamp = new Date(message.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-4`}
        >
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-outfit leading-relaxed whitespace-pre-line ${isUser
                ? 'bg-neon-blue text-black rounded-tr-none'
                : 'bg-white/10 text-white rounded-tl-none'
                }`}>
                {message.text}
            </div>
            
            {/* Timestamp */}
            <span className="text-[10px] text-gray-500 mt-1 px-1">
                {timestamp}
            </span>

            {/* Options Buttons (if any) */}
            {message.options && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {message.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => message.onOptionClick && message.onOptionClick(option)}
                            className="px-3 py-1.5 text-xs font-bold border border-neon-blue/50 text-neon-blue rounded-full hover:bg-neon-blue hover:text-black transition-colors"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default ChatMessage;
