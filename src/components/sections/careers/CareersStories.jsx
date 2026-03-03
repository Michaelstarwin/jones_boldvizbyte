import { Quote } from 'lucide-react';

const CareersStories = () => {
    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
                        Growth <span className="text-neon-purple">Stories</span>
                    </h2>
                    <p className="text-gray-400 font-outfit">See how people grow with us.</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative">
                    <Quote className="absolute top-8 left-8 text-neon-purple opacity-20 transform -scale-x-100" size={60} />
                    <div className="relative z-10 text-center">
                        <p className="text-lg md:text-xl text-gray-300 font-outfit italic mb-6 leading-relaxed">
                            "I joined as a Web Development Intern with just basic HTML/CSS knowledge. Within 3 months, I was building React components for live client sites. Now, I lead a small frontend module. The mentorship here is real."
                        </p>
                        <div>
                            <h4 className="text-white font-bold font-orbitron">Priya S.</h4>
                            <p className="text-neon-purple text-sm font-bold uppercase">Intern to Junior Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersStories;
