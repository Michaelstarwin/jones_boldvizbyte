import { motion } from 'framer-motion';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

const FloatingContactIcons = () => {
    const icons = [
        {
            Icon: Phone,
            label: "Call Us",
            href: "tel:+917708994392",
            color: "bg-blue-600",
            delay: 0
        },
        {
            Icon: MessageCircle,
            label: "WhatsApp",
            href: "https://wa.me/917708994392",
            color: "bg-green-500",
            delay: 0.1
        },
        {
            Icon: Instagram,
            label: "Instagram",
            href: "https://instagram.com",
            color: "bg-pink-600",
            delay: 0.2
        }
    ];

    return (
        <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-4">
            {icons.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + item.delay, duration: 0.5 }}
                    className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300 group relative`}
                    aria-label={item.label}
                >
                    <item.Icon size={20} />

                    {/* Tooltip */}
                    <span className="absolute left-12 px-2 py-1 bg-dark-bg border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {item.label}
                    </span>
                </motion.a>
            ))}
        </div>
    );
};

export default FloatingContactIcons;
