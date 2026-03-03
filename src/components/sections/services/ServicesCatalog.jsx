import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
    {
        id: 'logo-design',
        title: "Logo Design",
        desc: "A logo is the face of your brand. We create timeless, memorable identities.",
        offer: ["Custom Concepts", "Vector Files (AI, EPS, SVG)", "Brand Guidelines", "Multiple Revisions"],
        benefits: ["Instant Recognition", "Professional Trust", "Brand Consistency"],
        bestFor: "Startups, Rebranding, Personal Brands"
    },
    {
        id: 'business-cards',
        title: "Business Cards",
        desc: "Make a lasting first impression with premium, tactile business card designs.",
        offer: ["Double-sided Design", "Print-Ready Files", "QR Code Integration", "Luxury Finishes"],
        benefits: ["Memorable Networking", "Professional Image", "Direct Contact Sharing"],
        bestFor: "Professionals, Sales Teams, Networking Events"
    },
    {
        id: 'agentic-ai',
        title: "Agentic AI",
        desc: "Automate your workflows with intelligent AI agents that work 24/7.",
        offer: ["Custom AI Bots", "Workflow Automation", "Customer Support Agents", "Data Analysis"],
        benefits: ["24/7 Availability", "Reduced Costs", "Scalable Operations"],
        bestFor: "SaaS, E-commerce, Customer Service"
    },
    {
        id: 'web-development',
        title: "Web Design & Development",
        desc: "High-performance websites that convert visitors into loyal customers.",
        offer: ["Responsive Design", "SEO Optimization", "Fast Loading Speed", "CMS Integration"],
        benefits: ["Higher Conversions", "Global Reach", "24/7 Sales Machine"],
        bestFor: "Small Businesses, Enterprises, E-commerce"
    },
    {
        id: 'ads',
        title: "Meta & Google Ads",
        desc: "Stop guessing. Start growing. Data-driven ad campaigns that deliver ROI.",
        offer: ["Audience Targeting", "Ad Creative & Copy", "A/B Testing", "Performance Reporting"],
        benefits: ["Immediate Traffic", "Targeted Leads", "Measurable ROI"],
        bestFor: "E-commerce, Lead Gen, Local Businesses"
    },
    {
        id: 'social-posts',
        title: "Posts & Banners",
        desc: "Stop the scroll with visually stunning social media content.",
        offer: ["Platform-Specific Sizes", "On-Brand Visuals", "Carousel Designs", "Promotional Banners"],
        benefits: ["Increased Engagement", "Brand Awareness", "Community Growth"],
        bestFor: "Influencers, Brands, Social Media Managers"
    },
    {
        id: 'brochures',
        title: "Brochures",
        desc: "Tangible marketing assets that tell your full story in detail.",
        offer: ["Trifold/Bifold layouts", "Print-Ready High Res", "Copywriting Assistance", "Visual Storytelling"],
        benefits: ["Detailed Info Sharing", "Physical Brand Touchpoint", "Event Marketing"],
        bestFor: "Real Estate, Healthcare, Education"
    },
    {
        id: 'posters',
        title: "Posters",
        desc: "Large-format visuals designed to capture attention from a distance.",
        offer: ["High-Impact Type", "Custom Illustration", "Event Promos", "Campaign Visuals"],
        benefits: ["High Visibility", "Local Awareness", "Event Hype"],
        bestFor: "Events, Retail, Local Promotions"
    },
    {
        id: 'book-covers',
        title: "Book Covers",
        desc: "Judge a book by its cover. We create designs that sell your story.",
        offer: ["Genre-Specific Art", "Typography Focus", "E-book & Print Spine", "3D Mockups"],
        benefits: ["Higher Click-Throughs", "Professional Credibility", "Genre Fit"],
        bestFor: "Authors, Publishers, E-books"
    }
];

const ServicesCatalog = ({ onApply }) => {
    return (
        <section className="py-10 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="space-y-24">
                    {detailedServices.map((service, index) => (
                        <motion.div
                            key={index}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-4 right-8 text-9xl font-orbitron font-bold text-white/5 pointer-events-none select-none">
                                0{index + 1}
                            </span>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
                                        {service.title}
                                    </h3>
                                    <p className="text-xl text-gray-300 font-outfit mb-8 leading-relaxed border-l-4 border-neon-blue pl-6">
                                        {service.desc}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-neon-blue font-bold font-orbitron mb-4 uppercase tracking-widest text-sm">Best For</h4>
                                        <div className="inline-block px-4 py-2 bg-neon-blue/10 rounded-lg border border-neon-blue/30 text-neon-blue font-outfit">
                                            {service.bestFor}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => onApply(service.title)}
                                        className="inline-flex items-center px-8 py-4 bg-white text-black font-bold font-orbitron rounded-full hover:bg-neon-blue transition-colors"
                                    >
                                        APPLY FOR THIS SERVICE <ArrowRight className="ml-2" size={20} />
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-white font-bold font-orbitron mb-6 text-xl">What We Offer</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {service.offer.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-400 font-outfit">
                                                    <CheckCircle className="text-neon-blue mt-1 flex-shrink-0" size={18} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold font-orbitron mb-6 text-xl">Key Benefits</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {service.benefits.map((item, i) => (
                                                <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
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

export default ServicesCatalog;
