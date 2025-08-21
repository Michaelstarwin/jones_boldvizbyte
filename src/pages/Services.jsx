import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { service1, service2, service3, service4, service5, service6, service7 } from '../assets/assets';

const Services = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: 'Logo Design',
      description: 'Create memorable brand identities that capture your essence and resonate with your target audience.',
      image: service1,
      features: [
        'Custom logo concepts',
        'Brand guidelines',
        'Multiple format delivery',
        'Unlimited revisions',
        'Social media variants',
      ],
    },
    {
      title: 'Business Cards',
      description: 'Professional business card designs that make lasting first impressions and reflect your brand personality.',
      image: service2,
      features: [
        'Premium design concepts',
        'Print-ready files',
        'Various paper options',
        'Double-sided layouts',
        'Quick turnaround',
      ],
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that engage users and drive business growth through stunning design and functionality.',
      image: service3,
      features: [
        'Responsive design',
        'Modern frameworks',
        'SEO optimization',
        'Performance focused',
        'Ongoing support',
      ],
    },
    {
      title: 'Posts & Banners',
      description: 'Eye-catching social media posts and banners that boost engagement and strengthen your brand presence.',
      image: service4,
      features: [
        'Social media templates',
        'Custom graphics',
        'Brand consistency',
        'Multiple formats',
        'Fast delivery',
      ],
    },
    {
      title: 'Brochures',
      description: 'Professional brochures that effectively communicate your message and showcase your products or services.',
      image: service5,
      features: [
        'Tri-fold & bi-fold designs',
        'Print-ready formats',
        'Custom layouts',
        'High-quality graphics',
        'Content optimization',
      ],
    },
    {
      title: 'Posters',
      description: 'Eye-catching posters designed to captivate attention and communicate your message with bold creativity visual impact.',
      image: service6,
      features: [
        'Event posters',
        'Promotional materials',
        'Large format designs',
        'Creative concepts',
        'Print specifications',
      ],
    },
    {
      title: 'Book Covers',
      description: 'Compelling book covers that attract readers and perfectly represent your story or content.',
      image: service7,
      features: [
        'Genre-appropriate designs',
        'Typography expertise',
        'Front & back covers',
        'Spine design',
        'E-book formats',
      ],
    },
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-20 bg-gradient-to-br from-orange-100 via-neutral-primary to-teal-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${heroInView ? 'fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive design and development solutions tailored to elevate your brand and drive meaningful business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden ${
                  servicesInView ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="text-aqua-green flex-shrink-0" size={16} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-orange-100 via-neutral-primary to-teal-100 hover:from-orange-200 hover:to-teal-200 disabled:from-gray-400 disabled:to-gray-500 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">Our Process</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We follow a proven methodology to ensure every project exceeds expectations and delivers outstanding results.
      </p>
    </div>

    <div className="relative">
      {/* Progress line */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gray-200"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            step: '01',
            title: 'Discovery',
            description: 'Understanding your goals, target audience, and project requirements.',
          },
          {
            step: '02',
            title: 'Strategy',
            description: 'Developing a comprehensive plan and creative direction for your project.',
          },
          {
            step: '03',
            title: 'Design',
            description: 'Creating beautiful, functional designs that align with your brand vision.',
          },
          {
            step: '04',
            title: 'Delivery',
            description: 'Finalizing and delivering high-quality assets ready for implementation.',
          },
        ].map((step, index) => (
          <div 
            key={step.step}
            className="relative"
          >
            {/* Step connector dots - mobile */}
            {index > 0 && (
              <div className="md:hidden absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
            )}
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 bg-gradient-to-br from-bright-blue to-aqua-green w-16 h-16 rounded-full mb-6 flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="py-20 gradient-overlay text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-bright-blue hover:bg-light-gray px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 space-x-2"
            >
              <span>Start Your Project</span>
              {/* <ArrowRight size={20} /> */}
            </Link>
          </div>
        </section>
    </div>
  );
};

export default Services;