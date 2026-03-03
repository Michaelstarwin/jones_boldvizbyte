import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Phone, Briefcase } from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi 👋 Welcome to BoldVizByte! Looking to grow your business online? 🚀 How can we help you today?",
            sender: 'bot',
            type: 'options',
            options: ["Our Services", "Pricing", "SEO & Ranking", "Contact Support"]
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [leadStep, setLeadStep] = useState(0); // 0: Idle, 1: Name, 2: Mobile, 3: Business, 4: Service
    const [leadData, setLeadData] = useState({ name: '', mobile: '', business: '', service: '' });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        processResponse(input);
    };

    const handleOptionClick = (option) => {
        const userMsg = { id: Date.now(), text: option, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        processResponse(option);
    };

    const addBotMessage = (text, type = 'text', options = []) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                { id: Date.now() + 1, text, sender: 'bot', type, options }
            ]);
            setIsTyping(false);
        }, 1000);
    };

    const processResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();

        // Lead Collection Flow
        if (leadStep > 0) {
            handleLeadCollection(userInput);
            return;
        }

        // Generic Responses
        if (lowerInput.includes('services') || lowerInput.includes('what do you do')) {
            addBotMessage(
                "We provide top-notch digital solutions! Here’s what we offer:\n\n✅ Digital Marketing\n✅ SEO (Ranking on Google)\n✅ Web Development\n✅ Branding & Design\n✅ Video Editing\n✅ IT Solutions\n\nWe are experts in Kovilpatti & Thoothukudi! Which one are you interested in?",
                "options",
                ["Web Development", "Digital Marketing", "SEO", "Branding"]
            );
        } else if (lowerInput.includes('seo') || lowerInput.includes('rank') || lowerInput.includes('google')) {
            addBotMessage(
                "Great question! 🚀 We use advanced SEO strategies to rank websites on Page 1 of Google. \n\nWe specialize in Local SEO for businesses in Kovilpatti & Thoothukudi to dominate local searches. Want a free SEO audit?",
                "options",
                ["Yes, Audit my site", "How much does it cost?"]
            );
        } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
            addBotMessage(
                "Our pricing depends on your specific business goals and requirements. We believe in providing value! 💎\n\nLet's discuss your needs. Can I have your mobile number for a quick free consultation?",
                "options",
                ["Yes, sure", "View Contact Page"]
            );
            setLeadStep(1); // Start lead collection if they agree
        } else if (lowerInput.includes('contact') || lowerInput.includes('support') || lowerInput.includes('call')) {
            addBotMessage(
                "You can reach us directly at +91 7708994392 or email founder.boldvizbyte@gmail.com. \n\nOr shall we call you back?",
                "options",
                ["Call me back", "I will call you"]
            );
            if (lowerInput.includes('call me')) setLeadStep(1);
        } else if (lowerInput.includes('yes') || lowerInput.includes('sure')) {
            addBotMessage("Awesome! Let's get started. May I know your Name?");
            setLeadStep(1);
        } else {
            addBotMessage(
                "I'm here to help you grow your business! 🚀 \n\nWould you like to get a free consultation or see our services?",
                "options",
                ["Free Consultation", "Our Services"]
            );
        }
    };

    const handleLeadCollection = (input) => {
        if (leadStep === 1) {
            // Asking Name -> Got Name, Ask Mobile
            setLeadData(prev => ({ ...prev, name: input }));
            addBotMessage(`Nice to meet you, ${input}! 👋 Can you please share your Mobile Number so our experts can connect?`);
            setLeadStep(2);
        } else if (leadStep === 2) {
            // Asking Mobile -> Got Mobile, Ask Business
            setLeadData(prev => ({ ...prev, mobile: input }));
            addBotMessage("Thanks! What type of business do you run?");
            setLeadStep(3);
        } else if (leadStep === 3) {
            // Asking Business -> Got Business, Ask Service
            setLeadData(prev => ({ ...prev, business: input }));
            addBotMessage("Got it. And which service are you mainly looking for right now?", "options", ["Web Design", "Marketing", "SEO", "Everything"]);
            setLeadStep(4);
        } else if (leadStep === 4) {
            // Got Service -> Finish
            setLeadData(prev => ({ ...prev, service: input }));
            addBotMessage("Perfect! 🎉 We have received your details. One of our digital experts will call you shortly to discuss a growth strategy.\n\nLet’s grow your business! 🚀");
            setLeadStep(0); // Reset or End

            // Here you would typically send this data to a backend
            console.log("Lead Collected:", { ...leadData, service: input });
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neon-blue rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)] flex items-center justify-center text-black hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[350px] h-[500px] bg-dark-bg border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-neon-blue/10 border-b border-white/10 flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center">
                                <Bot size={24} className="text-black" />
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-white text-sm">BoldVizByte AI</h3>
                                <p className="text-xs text-green-400 flex items-center"><span className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>Online</p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-outfit leading-relaxed whitespace-pre-line ${msg.sender === 'user'
                                            ? 'bg-neon-blue text-black rounded-tr-none'
                                            : 'bg-white/10 text-white rounded-tl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Options Buttons */}
                            {messages[messages.length - 1]?.sender === 'bot' && messages[messages.length - 1].options && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {messages[messages.length - 1].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(option)}
                                            className="px-3 py-1.5 text-xs font-bold border border-neon-blue/50 text-neon-blue rounded-full hover:bg-neon-blue hover:text-black transition-colors"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex space-x-2"
                            >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
