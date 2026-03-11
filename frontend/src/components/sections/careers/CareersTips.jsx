import { Lightbulb } from 'lucide-react';

const CareersTips = () => {
    return (
        <section className="py-12 bg-yellow-400/5 border-y border-yellow-400/10">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                    <Lightbulb className="text-yellow-400" size={24} />
                    <h3 className="text-xl font-orbitron font-bold text-white">Application Tip</h3>
                </div>
                <p className="text-gray-300 font-outfit max-w-2xl mx-auto text-lg">
                    "When applying, tell us <span className="text-white font-bold underline decoration-yellow-400/50">why</span> you want to learn, not just what you know. We value passion and potential over a perfect resume."
                </p>
            </div>
        </section>
    );
};

export default CareersTips;
