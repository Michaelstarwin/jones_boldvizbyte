import { MapPin } from 'lucide-react';

const CareersLocation = () => {
    return (
        <section className="py-10 bg-black border-t border-white/10 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-400 font-outfit flex items-center justify-center gap-2">
                    <MapPin className="text-neon-purple" size={18} />
                    Based in <span className="text-white font-bold">Kovilpatti, Tamil Nadu</span>. Open to candidates across India.
                </p>
            </div>
        </section>
    );
};

export default CareersLocation;
