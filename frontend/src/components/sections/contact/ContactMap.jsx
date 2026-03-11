import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Globe } from 'lucide-react';

const ContactMap = () => {
    return (
        <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* 1. Click-to-Action Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { icon: Phone, label: "Call Now", action: "tel:+917708994392", color: "text-neon-blue" },
                        { icon: MessageCircle, label: "WhatsApp", action: "https://wa.me/917708994392", color: "text-green-500" },
                        { icon: Mail, label: "Email Us", action: "mailto:founder.boldvizbyte@gmail.com", color: "text-yellow-400" },
                        { icon: MapPin, label: "Navigate", action: "https://maps.google.com/?q=BoldVizByte,Kovilpatti", color: "text-red-500" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.action}
                            target={item.action.startsWith('http') ? "_blank" : "_self"}
                            rel="noreferrer"
                            className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                            <div className={`mb-3 p-3 rounded-full bg-black/50 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <span className="text-white font-bold font-orbitron text-sm">{item.label}</span>
                        </a>
                    ))}
                </div>

                {/* 2. Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                >
                    {/* Google Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.241513233633!2d77.86377755!3d9.1764353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b2658864746d%3A0x608920a671c6070!2sKovilpatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709462837265!5m2!1sen!2sin&maptype=satellite"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BoldVizByte Location"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Custom Overlay Badge */}
                    <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                        <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue animate-pulse">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-white font-bold font-orbitron text-sm">BoldVizByte HQ</p>
                            <p className="text-gray-400 text-xs text-nowrap">Kovilpatti, Tamil Nadu</p>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Local Presence Statement */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-bold mb-4">
                        <Globe size={16} /> Serving Clients Globally
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
                        Proudly serving clients from <span className="text-neon-blue">Kovilpatti, Thoothukudi, Tirunelveli, Madurai, Virudhunagar</span> & across India.
                    </p>

                    {/* Optional Mini-Testimonial */}
                    <div className="mt-8 flex justify-center">
                        <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 max-w-md">
                            <p className="text-gray-300 italic text-sm">"Quick response and clear communication."</p>
                            <p className="text-gray-500 text-xs mt-2 font-bold">– Client Feedback</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactMap;
