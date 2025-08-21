import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Improved validation
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    
    if (!formData.name.trim()) {
      return "Name is required";
    }
    
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      return "Valid phone number is required";
    }
    
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Valid email address is required";
    }
    
    if (!formData.subject.trim()) {
      return "Subject is required";
    }
    
    if (!formData.message.trim() || formData.message.length < 10) {
      return "Message should be at least 10 characters long";
    }
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Web3Forms integration with additional anti-spam measures
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'c6372463-6bd2-4542-a40b-7cc0c16244d2');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'BoldVizByte Contact Form');
      formDataToSend.append('reply_to', formData.email);
      
      // Add content that reduces spam score
      formDataToSend.append('content', `New contact form submission from ${formData.name}`);
      
      // Add timestamp to prevent duplicate submissions
      formDataToSend.append('submitted_at', new Date().toISOString());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will get back to you within 24 hours.' 
        });
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please try again or contact us directly at founder.boldvizbyte@gmail.com' 
        });
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please try again or contact us directly at founder.boldvizbyte@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`${contactInView ? 'fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-8">
                <span className="gradient-text">Let's Start a Conversation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help bring your ideas to life. Whether you need design services, web development, or want to join our internship program, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-bright-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:founder.boldvizbyte@gmail.com"
                      className="text-gray-600 hover:text-bright-blue transition-colors duration-200"
                    >
                      founder.boldvizbyte@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-aqua-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a 
                      href="tel:+917708994392"
                      className="text-gray-600 hover:text-aqua-green transition-colors duration-200"
                    >
                      +91 7708 994 392
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="text-dark-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      Kovilpatti, Tamil Nadu<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Updated Response Time with Opening Hours */}
              <div className="mt-6 p-6 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-3 mb-3">
                  <Clock className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-green-800">
                      Our Working Hours & Response Time
                    </h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium text-gray-800">Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday</span>
                        <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tuesday</span>
                        <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Wednesday</span>
                        <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thursday</span>
                        <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Friday</span>
                        <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium text-gray-800">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  We typically respond to inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${contactInView ? 'slide-in-right' : 'opacity-0'}`}>
              {submitStatus?.type === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-primary" size={20} />
                    <div>
                      <h3 className="font-semibold text-green-800">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-600 text-sm mt-1">
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus?.type === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="text-coral-primary" size={20} />
                    <div>
                      <h3 className="font-semibold text-red-800">
                        Sending Failed
                      </h3>
                      <p className="text-red-600 text-sm mt-1">
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-green-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl md:text-2xl font-bold mb-6 gradient-text">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="c6372463-6bd2-4542-a40b-7cc0c16244d2" />
                  <input type="hidden" name="from_name" value="BoldVizByte Contact Form" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[+]{0,1}[0-9\s\-\(\)]{10,}"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number (e.g., +91 7708 994 392)"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      minLength="10"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us about your project or inquiry. Please provide specific details to help us understand your needs better."
                    />
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" tabIndex="-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-100 via-neutral-primary to-teal-100 hover:from-orange-200 hover:to-teal-200 disabled:from-gray-400 disabled:to-gray-500 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} className="text-gray-800" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Alternative Ways to Reach Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Email</h3>
              <p className="text-gray-600 mb-4">
                Send us an email directly if the form isn't working
              </p>
              <a 
                href="mailto:founder.boldvizbyte@gmail.com" 
                className="text-blue-600 font-medium hover:underline"
              >
                founder.boldvizbyte@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Prefer to talk? Give us a call during business hours
              </p>
              <a 
                href="tel:+917708994392" 
                className="text-green-600 font-medium hover:underline"
              >
                +91 7708 994 392
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Message us on WhatsApp for quick responses
              </p>
              <a 
                href="https://wa.me/917708994392" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">Our Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Located in Kovilpatti, Tamil Nadu, we serve clients locally and globally with our comprehensive design and development services.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.10769356941!2d77.8657567!3d9.1715184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0692a6a8d2d3e5%3A0x2d3c6a6e5a6e5a6e!2sKovilpatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-900">
                Kovilpatti, Tamil Nadu
              </p>
              <p className="text-gray-600">
                Serving clients locally and globally with exceptional digital solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;