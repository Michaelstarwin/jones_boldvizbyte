import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, TrendingUp, Globe, Instagram, ArrowUpRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

const leaders = [
    {
        name: "Micheal Jones J",
        role: "Founder & CEO",
        focus: "Vision & Technology",
        tagline: "Architecting the Future",
        desc: "A visionary technologist with a relentless drive for innovation. Micheal leads the engineering dynamics of BoldVizByte, ensuring every line of code translates into business growth. With a deep passion for scalable architecture and user-centric design, he bridges the gap between complex backend logic and stunning frontend experiences.",
        details: [
            "Full Stack Architecture",
            "Technical Strategy",
            "Product Innovation",
            "Client Solutions"
        ],
        // Professional Tech Portrait
        image: "/Founder.jpg",
        imageGradient: "from-blue-600 to-cyan-500",
        roleColor: "text-neon-blue",
        glowColor: "shadow-neon-blue/40",
        socials: {
            linkedin: "https://www.linkedin.com/in/michealjonesj",
            instagram: "https://www.instagram.com/jones_boldvizbyte?utm_source=qr&igsh=ZHY5MDhsOGtlemw1",
            email: "mailto:founder.boldvizbyte@gmail.com",
            whatsapp: "https://wa.me/+91 9791759371" // Placeholder - User to update
        }
    },
    {
        name: "Michael Starwin Raj M",
        role: "Co-Founder & CFO",
        focus: "Strategy & Operations",
        tagline: "Building Sustainable Growth",
        desc: "The strategic backbone of the company. Michael oversees financial planning, operational efficiency, and long-term sustainability. His expertise lies in optimizing resources and scaling business operations without compromising quality. He ensures BoldVizByte remains financially robust while delivering premium value to global clients.",
        details: [
            "Financial Planning",
            "Business Operations",
            "Market Expansion",
            "Sustainability"
        ],
        // Professional Business Portrait
        image: "/Co_Founder.jpeg",
        imageGradient: "from-purple-600 to-pink-500",
        roleColor: "text-neon-purple",
        glowColor: "shadow-neon-purple/40",
        socials: {
            linkedin: "https://www.linkedin.com/in/michaelstarwinraj",
            instagram: "https://www.instagram.com/ds_sails_boy?igsh=c2J0ang1aXJuZnNo",
            email: "mailto:cofounder.boldvizbyte@gmail.com",
            whatsapp: "https://wa.me/+91 9342064130" // Placeholder - User to update
        }
    }
];

const AboutFounder = () => {
    return (
        <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden">

            {/* Optimized Static Background - Removed Infinite Animation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px] opacity-20" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header - Simplified Animation */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="text-neon-blue font-bold text-xs uppercase tracking-[0.2em]">Leadership</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6"
                    >
                        The Minds Behind <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-purple-400 to-neon-purple">
                            The Vision
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 font-outfit text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Two distinct perspectives. One shared goal. Driving digital excellence through technology and strategy.
                    </motion.p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="group relative will-change-transform"
                        >
                            {/* Glass Card - Reduced Blur for Performance */}
                            <div className="relative h-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden md:hover:border-white/20 transition-all duration-300">

                                {/* Hover Gradient Fill - Desktop Only */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 md:group-hover:opacity-10 transition-opacity duration-500",
                                    leader.imageGradient
                                )} />

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Top Section */}
                                    <div className="mb-8 border-b border-white/10 pb-6">
                                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-2">
                                            <h3 className={cn("text-lg font-bold uppercase tracking-widest", leader.roleColor)}>
                                                {leader.role}
                                            </h3>
                                            <span className="text-gray-500 text-xs font-outfit uppercase tracking-wider">{leader.focus}</span>
                                        </div>
                                        <h4 className="text-3xl md:text-4xl font-orbitron font-bold text-white mt-2 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-gray-400 transition-all">
                                            {leader.name}
                                        </h4>
                                        <p className="text-sm text-gray-400 italic mt-2 opacity-80">"{leader.tagline}"</p>
                                    </div>

                                    {/* Middle Section */}
                                    <div className="flex-1 flex flex-col md:flex-row gap-8 items-start">

                                        {/* Image Container - Optimized */}
                                        <div className="relative flex-shrink-0 mx-auto md:mx-0 md:group-hover:scale-105 transition-transform duration-500 will-change-transform">
                                            <div className={cn(
                                                "w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg relative z-10",
                                                `md:group-hover:${leader.glowColor} md:group-hover:border-transparent transition-all duration-500`
                                            )}>
                                                <img
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    loading="lazy"
                                                    width="144"
                                                    height="144"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Static Decorative Dots - Removed Opacity Animation */}
                                            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                                        </div>

                                        {/* Text Content */}
                                        <div className="space-y-4">
                                            <p className="text-gray-300 font-outfit leading-relaxed text-base">
                                                {leader.desc}
                                            </p>

                                            {/* Expertise Tags */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {leader.details.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom: Social Actions */}
                                    <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex gap-4">
                                            <a href={leader.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors md:hover:scale-110 transform">
                                                <Linkedin size={20} />
                                            </a>
                                            <a href={leader.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors md:hover:scale-110 transform">
                                                <Instagram size={20} />
                                            </a>
                                            <a href={leader.socials.email} className="text-gray-500 hover:text-white transition-colors md:hover:scale-110 transform">
                                                <Mail size={20} />
                                            </a>
                                        </div>

                                        <a href={leader.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                            Connect <ArrowUpRight size={14} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutFounder;
