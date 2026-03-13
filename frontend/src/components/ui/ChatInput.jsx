import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
    };

    return (
        <div className="p-4 border-t border-white/10 bg-black/20">
            <form onSubmit={handleSend} className="flex space-x-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-sm text-white outline-none focus:border-neon-blue transition-colors"
                />
                <button
                    type="submit"
                    className="p-2 bg-neon-blue rounded-full text-black hover:scale-105 transition-transform"
                >
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
