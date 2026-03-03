import { motion } from 'framer-motion';
import { Send, PhoneCall, FileText, Rocket } from 'lucide-react';

const steps = [
    { icon: Send, title: "1. You send a message", desc: "Fill the form or call directly." },
    { icon: FileText, title: "2. We review requirements", desc: "Our team analyzes your needs." },
    { icon: PhoneCall, title: "3. Our team contacts you", desc: "We discuss the best approach." },
    { icon: Rocket, title: "4. Next steps & discussion", desc: "Strategy plan & kickoff." }
];

const ContactProcess = () => {
    return (
        <section className="py-20 bg-black border-y border-white/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                        What Happens <span className="text-gray-500">Next?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all duration-300">
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-lg font-orbitron font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm font-outfit">{step.desc}</p>

                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-white/10 border-t border-dashed border-gray-700" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactProcess;
