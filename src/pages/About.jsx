import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { about1, about2, about3 } from '../assets/assets';


const About = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Typewriter effect state and logic
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const toType = ['BoldVizByte'];

  useEffect(() => {
    if (!heroInView) return;

    const handleType = () => {
      const i = loopNum % toType.length;
      const fullText = toType[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 150 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, heroInView, toType]);

  const teamMembers = [
    {
      name: 'Micheal Jones J',
      role: 'Founder & CEO',
      image: about1,
      bio: 'Visionary leader driving innovation in digital design and development solutions.',
      linkedin: 'https://www.linkedin.com/in/michealjonesj',
      instagram: 'https://www.instagram.com/jones_boldvizbyte?utm_source=qr&igsh=ZHY5MDhsOGtlemw1'
    },
    {
      name: 'Michael Starwin Raj M',
      role: 'Co-Founder & CTO',
      image: about2,
      bio: 'Technical expert passionate about creating cutting-edge web solutions and mentoring talent.',
      linkedin: 'https://www.linkedin.com/in/michaelstarwinraj',
      instagram: 'https://www.instagram.com/ds_sails_boy?igsh=c2J0ang1aXJuZnNo'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-24 pb-20 bg-gradient-to-br from-orange-100 via-neutral-primary to-teal-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text typewriter">{text}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              We're a passionate team of designers and developers dedicated to creating extraordinary digital experiences that make bold statements and drive meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="gradient-text">Our Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  At BoldVizByte, we believe that great design has the power to transform businesses and create lasting impressions. Our mission is to help brands tell their unique stories through innovative visual solutions and cutting-edge technology.
                </p>
                <p>
                  We're committed to pushing the boundaries of creativity while delivering practical, results-driven solutions that help our clients achieve their goals and connect with their audiences in meaningful ways.
                </p>
              </div>
            </div>
            
            <div>
              <img 
                src={about3} 
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                letter: 'I',
                title: 'Innovation',
                description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
              },
              {
                letter: 'Q',
                title: 'Quality',
                description: 'Every project receives our complete attention to detail and commitment to excellence.',
              },
              {
                letter: 'C',
                title: 'Collaboration',
                description: 'We work closely with clients as partners to achieve shared success and growth.',
              },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-gradient-to-br from-bright-blue to-aqua-green w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-black font-bold text-3xl shadow-lg">
                  {value.letter}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark-navy">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">Meet Our Team</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Behind every great project is a team of passionate professionals who bring creativity, expertise, and dedication to everything we do.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
      {teamMembers.map((member) => (
        <div 
          key={member.name}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="aspect-square overflow-hidden relative">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
              <div className="flex space-x-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-blue-100 transition-colors duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                      alt="LinkedIn" 
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                )}
                {member.instagram && (
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-pink-100 transition-colors duration-300 transform hover:scale-110"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
                      alt="Instagram" 
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-bright-blue transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-bright-blue font-semibold mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {member.bio}
            </p>
            <div className="flex justify-center space-x-4 md:hidden">
              {member.linkedin && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                </a>
              )}
              {member.instagram && (
                <a 
                  href={member.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label={`${member.name}'s Instagram`}
                >
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 gradient-overlay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. We're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="bg-white text-bright-blue hover:bg-light-gray px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Start a Project
            </a>
            <a 
              href="/internship"
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;