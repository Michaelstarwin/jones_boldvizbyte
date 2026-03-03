import { MapPin } from 'lucide-react';

const ServicesLocation = () => {
    return (
        <section className="py-10 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <MapPin className="text-neon-blue animate-bounce" size={24} />
                    <h3 className="text-xl font-orbitron font-bold text-white">Local & Global Reach</h3>
                </div>
                <p className="text-gray-400 font-outfit">
                    Serving businesses in <span className="text-white">Kovilpatti, Thoothukudi, Tirunelveli, Madurai, Virudhunagar, Tamil Nadu</span>, and across India.
                </p>
            </div>
        </section>
    );
};

export default ServicesLocation;
