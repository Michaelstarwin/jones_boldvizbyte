import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { about3, Intern1, Intern10, Intern11, Intern12, Intern13, Intern14, Intern15, Intern2, Intern3, Intern4, Intern5, Intern6, Intern7, Intern8, Intern9 } from '../assets/assets';

const Internship = () => {
  // Intersection Observer hooks for animations
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // const { ref: internshipsRef, inView: internshipsInView } = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true,
  // });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Internship positions data
  const internships = [
    {
      title: 'Web Development Intern',
      description: 'Learn modern web technologies including React, Node.js, and database management while building real-world applications.',
      image: Intern1,
      duration: '3-6 months',
      skills: ['React','Html','CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
      requirements: 'Basic knowledge of HTML, CSS, and JavaScript',
    },
    {
      title: 'Graphic Designing Intern',
      description: 'Create stunning visual designs for various media including logos, brochures, and digital graphics using industry-standard tools.',
      image: Intern2,
      duration: '3-6 months',
      skills: ['Adobe Creative Suite', 'Figma', 'Canva', 'Typography', 'Brand Design'],
      requirements: 'Portfolio showcasing design projects and creativity',
    },
    {
      title: 'Outreach Intern',
      description: 'Build relationships with potential clients and partners through strategic outreach and communication campaigns.',
      image: Intern3,
      duration: '3-6 months',
      skills: ['Email Marketing', 'Lead Generation', 'CRM Tools', 'Communication', 'Research'],
      requirements: 'Excellent communication skills and networking abilities',
    },
    {
      title: 'Business Analyst Intern',
      description: 'Analyze business processes, identify opportunities for improvement, and support data-driven decision making.',
      image: Intern4,
      duration: '3-6 months',
      skills: ['Data Analysis', 'Excel', 'Business Intelligence', 'Process Mapping', 'Reporting'],
      requirements: 'Analytical mindset and basic knowledge of business concepts',
    },
    {
      title: 'HR Intern',
      description: 'Support human resources activities including recruitment, employee engagement, and administrative tasks.',
      image: Intern5,
      duration: '3-6 months',
      skills: ['Recruitment', 'Employee Relations', 'HR Software', 'Communication', 'Documentation'],
      requirements: 'Interest in human resources and strong interpersonal skills',
    },
    {
      title: 'Accountant Intern',
      description: 'Assist with financial record keeping, bookkeeping, and basic accounting tasks using modern accounting software.',
      image: Intern6,
      duration: '3-6 months',
      skills: ['QuickBooks', 'Excel', 'Financial Analysis', 'Bookkeeping', 'Tax Preparation'],
      requirements: 'Basic accounting knowledge and attention to detail',
    },
    {
      title: 'Legal Advisor Intern',
      description: 'Support legal research, document preparation, and compliance activities under professional supervision.',
      image: Intern7,
      duration: '3-6 months',
      skills: ['Legal Research', 'Document Drafting', 'Compliance', 'Contract Review', 'Legal Writing'],
      requirements: 'Law student or legal studies background preferred',
    },
    {
      title: 'Digital Marketing Intern',
      description: 'Develop and execute marketing campaigns across various channels to promote brand awareness and growth.',
      image: Intern8,
      duration: '3-6 months',
      skills: ['Digital Marketing', 'Content Strategy', 'SEO', 'Analytics', 'Campaign Management'],
      requirements: 'Creative thinking and interest in marketing trends',
    },
    {
      title: 'Social Media Manager Intern',
      description: 'Manage social media accounts, create engaging content, and analyze performance metrics across platforms.',
      image: Intern9,
      duration: '3-6 months',
      skills: ['Social Media Platforms', 'Content Creation', 'Analytics', 'Community Management', 'Scheduling Tools'],
      requirements: 'Strong social media presence and creative content skills',
    },
    {
      title: 'Content Writer Intern',
      description: 'Create compelling written content for websites, blogs, marketing materials, and social media platforms.',
      image: Intern10,
      duration: '3-6 months',
      skills: ['Creative Writing', 'SEO Writing', 'Research', 'Editing', 'Content Strategy'],
      requirements: 'Excellent writing skills and creativity',
    },
    {
      title: 'Video Editing Intern',
      description: 'Edit and produce engaging video content for marketing campaigns, social media, and promotional materials.',
      image: Intern11,
      duration: '3-6 months',
      skills: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'Motion Graphics', 'Color Correction'],
      requirements: 'Basic video editing experience and creative vision',
    },
    {
      title: 'Sales Intern',
      description: 'Support sales activities including lead qualification, client communication, and sales process optimization.',
      image: Intern12,
      duration: '3-6 months',
      skills: ['Sales Techniques', 'CRM Software', 'Lead Generation', 'Client Relations', 'Presentation Skills'],
      requirements: 'Strong communication skills and goal-oriented mindset',
    },
  ];

  // Benefits data with images
  const benefits = [
    {
      image: Intern13,
      title: 'Mentorship',
      description: 'Work directly with experienced professionals who will guide your learning journey.',
    },
    {
      image: Intern14,
      title: 'Real Projects',
      description: 'Contribute to actual client projects and see your work make a real impact.',
    },
    {
      image: Intern15,
      title: 'Flexible Schedule',
      description: 'Remote-friendly internships with flexible hours to accommodate your studies.',
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
              <span className="gradient-text">Internship Program</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Launch your career with hands-on experience in design, development, and digital marketing. Join our team and learn from industry experts.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center bg-bright-blue hover:bg-deep-blue text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section 
        // ref={internshipsRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 `}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Open Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our available internship positions and start building your professional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div
                key={internship.title}
                className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <p className="text-gray-600 mb-4">
                    {internship.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Duration:</h4>
                      <p className="text-gray-600 text-sm">{internship.duration}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-blue-100 text-deep-blue px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

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

      {/* Benefits Section with Images */}
      <section 
        ref={benefitsRef}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${benefitsInView ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Choose Our Program?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our internship program is designed to provide you with real-world experience and valuable skills for your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`text-center bg-white p-8 rounded-2xl shadow-lg card-hover ${
                  benefitsInView ? 'fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${benefitsInView ? 'fade-in' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                What You'll Gain:
              </h3>
              <ul className="space-y-4">
                {[
                  'Hands-on experience with industry tools and technologies',
                  'Portfolio projects you can showcase to future employers',
                  'Professional mentorship and career guidance',
                  'Networking opportunities within the industry',
                  'Certificate of completion upon successful internship',
                  'Potential for full-time employment opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bright-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`${benefitsInView ? 'slide-in-right' : 'opacity-0'}`}>
              <img 
                src={about3} 
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards launching your career in tech. Apply now and join our amazing team!
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center bg-white text-bright-blue hover:bg-light-gray px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 space-x-2"
          >
            <span>Apply for Internship</span>
            {/* <ArrowRight size={20} /> */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Internship;