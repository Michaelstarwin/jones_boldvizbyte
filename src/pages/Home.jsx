import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Home = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: internshipRef, inView: internshipInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: 'Logo Design',
      description: 'Create memorable brand identities that make lasting impressions and stand out in the market.',
      image: 'images/social-media-logo-design.jpg',
    },
    {
      title: 'Business Cards',
      description: 'Professional business card designs that reflect your brand personality and leave lasting impressions.',
      image: 'images/photo.jpg',
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that engage users and drive business growth through stunning design.',
      image: 'images/photo1.jpg',
    },
  ];

  const internships = [
    {
      title: 'Web Development Intern',
      description: 'Learn modern web technologies and build real-world applications with our experienced team.',
      image: 'images/pic.jpg',
    },
    {
      title: 'Graphic Designing Intern',
      description: 'Create stunning visual designs for various media including logos, brochures, and digital graphics using industry-standard tools.',
      image: 'images/pic1.jpg',
    },
    {
      title: 'Digital Marketing Intern',
      description: 'Develop and execute marketing campaigns across various channels to promote brand awareness and growth.',
      image: 'images/pic7.jpg',
    },
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern"></div>
        
        <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ${
          heroInView ? 'fade-in' : 'opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-light-gray floating-animation drop-shadow-lg">BoldVizByte</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto drop-shadow-md">
            Transforming Ideas Into Stunning Digital Experiences
          </p>
          <p className="text-lg text-light-gray opacity-90 mb-12 max-w-2xl mx-auto drop-shadow-sm">
            We create bold, innovative designs and develop cutting-edge web solutions that captivate audiences and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-bright-blue hover:bg-deep-blue text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
            <Link
              to="/internship"
              className="group border-2 border-aqua-green text-aqua-green hover:bg-aqua-green hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 shadow-lg"
            >
              <span>Join Our Team</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-aqua-green to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section 
        ref={servicesRef}
        className="py-20 section-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${servicesInView ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-dark-navy max-w-3xl mx-auto">
              We offer comprehensive design and development solutions to help your business stand out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden ${
                  servicesInView ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
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
                  <p className="text-dark-navy mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/services"
                    className="inline-flex items-center text-bright-blue hover:text-deep-blue font-semibold transition-colors duration-200"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Preview */}
      <section 
        ref={internshipRef}
        className="py-20 bg-light-gray"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${internshipInView ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Internship Program</span>
            </h2>
            <p className="text-xl text-dark-navy max-w-3xl mx-auto">
              Launch your career with hands-on experience in design, development, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div 
                key={internship.title}
                className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden ${
                  internshipInView ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={internship.image} 
                    alt={internship.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {internship.title}
                  </h3>
                  <p className="text-dark-navy mb-6">
                    {internship.description}
                  </p>
                  <Link 
                    to="/apply"
                    className="w-full bg-gradient-to-r from-orange-100 via-neutral-primary to-teal-100 hover:from-orange-200 hover:to-teal-200 disabled:from-gray-400 disabled:to-gray-500 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Apply Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 gradient-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our creative expertise and technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
            <a 
              href="mailto:founder.boldvizbyte@gmail.com"
              className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors duration-300"
            >
              <Mail size={20} />
              <span>founder.boldvizbyte@gmail.com</span>
            </a>
            <a 
              href="tel:+917708994392"
              className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors duration-300"
            >
              <Phone size={20} />
              <span>+91 7708 994 392</span>
            </a>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-deep-blue hover:bg-light-gray px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 space-x-2 shadow-lg"
          >
            <span>Get In Touch</span>
            {/* <ArrowRight size={20} /> */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;