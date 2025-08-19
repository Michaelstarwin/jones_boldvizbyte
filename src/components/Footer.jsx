import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              {/* Logo Image - replace '/logo.png' with your actual logo path */}
              <img 
                src="images/logo1.png" 
                alt="BoldVizByte Logo"
                className="h-10 w-10 mr-3" 
              />
              <span className="text-3xl font-bold gradient-text">BoldVizByte</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into stunning digital experiences through innovative design and development solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-bright-blue" />
                <a 
                  href="mailto:founder.boldvizbyte@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  founder.boldvizbyte@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-aqua-green" />
                <a 
                  href="tel:+917708994392"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 7708 994 392
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="text-green-500" 
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.902 7.902 0 0 0 8.002 0C3.588 0 .002 3.589.002 8.002c0 1.41.367 2.786 1.064 4.002L0 16l4.13-1.048a7.963 7.963 0 0 0 3.87.988h.004c4.414 0 8.002-3.589 8.002-8.002a7.945 7.945 0 0 0-2.405-5.612Zm-5.599 11.28a6.62 6.62 0 0 1-3.385-.93l-.242-.144-2.45.62.654-2.385-.159-.245a6.627 6.627 0 0 1-1.02-3.518c0-3.64 2.962-6.603 6.602-6.603 1.763 0 3.42.687 4.66 1.927a6.55 6.55 0 0 1 1.943 4.677c0 3.64-2.962 6.601-6.603 6.601Zm3.624-4.957c-.197-.099-1.163-.573-1.344-.638-.18-.066-.311-.099-.443.099s-.508.638-.623.767c-.114.13-.229.147-.426.05-.197-.099-.833-.307-1.588-.981-.587-.524-.981-1.174-1.097-1.372-.114-.197-.012-.304.087-.403.09-.09.197-.229.295-.344.099-.114.131-.197.197-.328.066-.13.033-.246-.016-.344-.05-.099-.443-1.07-.607-1.464-.16-.387-.323-.334-.443-.34-.114-.006-.246-.008-.377-.008a.729.729 0 0 0-.528.246c-.18.197-.688.672-.688 1.64 0 .967.704 1.9.802 2.032.099.13 1.384 2.115 3.36 2.963.47.203.835.325 1.12.416.47.15.9.129 1.24.078.378-.056 1.163-.475 1.328-.935.164-.46.164-.853.114-.935-.05-.082-.18-.13-.377-.229Z"/>
                </svg>
                <a 
                  href="https://wa.me/917708994392" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/boldvizbyte?igsh=MTNmazRvYjJ0NGlzaQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={30} />
              </a>
              <a 
                href="https://www.linkedin.com/company/micheal-s-creative-tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={30} />
              </a>
              <a 
                href="https://youtube.com/@jones-boldvizbyte?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={30} />
              </a>
              <a 
                href="https://www.facebook.com/share/18kprRt7qy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Internship', path: '/internship' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Logo Design</li>
              <li className="text-gray-400">Business Cards</li>
              <li className="text-gray-400">Web Design & Development</li>
              <li className="text-gray-400">Posts & Banners</li>
              <li className="text-gray-400">Brochures</li>
              <li className="text-gray-400">Posters</li>
              <li className="text-gray-400">Book Covers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} BoldVizByte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;