import { ShieldCheck, MessageCircle, Map } from 'lucide-react';

const reasons = [
    { icon: ShieldCheck, title: "Data Privacy", desc: "Your details are 100% safe with us." },
    { icon: MessageCircle, title: "Quick Response", desc: "We usually reply within 24 hours." },
    { icon: Map, title: "Local & Global", desc: "Based in TN, serving clients worldwide." }
];

const ContactTrust = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reasons.map((item, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center group hover:border-neon-blue/30 transition-colors">
                    <div className="mx-auto w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center text-neon-blue mb-3 group-hover:bg-neon-blue group-hover:text-black transition-colors">
                        <item.icon size={20} />
                    </div>
                    <h4 className="text-white font-bold font-orbitron text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs font-outfit">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default ContactTrust;
