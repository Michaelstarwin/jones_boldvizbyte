import { CheckCircle2 } from 'lucide-react';

const criteria = ["Passionate Learners", "Growth Mindset", "Responsibility-Driven", "Team Players"];

const CareersFilter = () => {
    return (
        <section className="py-16 bg-dark-bg/50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-8">
                    Who Should <span className="text-gray-500">Apply?</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {criteria.map((c, i) => (
                        <div key={i} className="flex items-center gap-2 text-white font-outfit text-lg">
                            <CheckCircle2 className="text-neon-green" size={20} />
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareersFilter;
