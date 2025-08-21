import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Upload, CheckCircle, AlertCircle, Link as LinkIcon } from 'lucide-react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    linkedinGithub: '',
    collegeName: '',
    degree: '',
    graduationYear: '',
    cgpaPercentage: '',
    internshipRole: '',
    resumeUrl: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const internshipRoles = [
    'Web Development Intern',
    'Graphic Designing Intern',
    'Outreach Intern',
    'Business Analyst Intern',
    'HR Intern',
    'Accountant Intern',
    'Legal Advisor Intern',
    'Marketing Intern',
    'Social Media Manager Intern',
    'Content Writer Intern',
    'Video Editing Intern',
    'Sales Intern',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Web3Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c6372463-6bd2-4542-a40b-7cc0c16244d2",
          subject: `Internship Application: ${formData.internshipRole}`,
          from_name: "BoldVizByte Internship Application",
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          linkedinGithub: formData.linkedinGithub,
          collegeName: formData.collegeName,
          degree: formData.degree,
          graduationYear: formData.graduationYear,
          cgpaPercentage: formData.cgpaPercentage,
          internshipRole: formData.internshipRole,
          resumeUrl: formData.resumeUrl,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          address: '',
          dateOfBirth: '',
          gender: '',
          linkedinGithub: '',
          collegeName: '',
          degree: '',
          graduationYear: '',
          cgpaPercentage: '',
          internshipRole: '',
          resumeUrl: '',
        });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus('error');
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-100 via-neutral-primary to-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Internship Application</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards launching your career. Fill out the form below to apply for our internship program.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section 
        ref={formRef}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-aqua-green" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">
                    Application Submitted Successfully!
                  </h3>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="text-red-500" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-red-800">
                    Submission Failed
                  </h3>
                  <p className="text-red-600">
                    There was an error submitting your application. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className={`bg-gray-50 rounded-2xl p-8 shadow-lg ${
            formInView ? 'fade-in' : 'opacity-0'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" name="access_key" value="c6372463-6bd2-4542-a40b-7cc0c16244d2" />
              
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your complete address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="linkedinGithub" className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn/GitHub
                    </label>
                    <input
                      type="url"
                      id="linkedinGithub"
                      name="linkedinGithub"
                      value={formData.linkedinGithub}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="LinkedIn or GitHub profile URL"
                    />
                  </div>
                </div>
              </div>

              {/* Education Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Education Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-2">
                      College Name *
                    </label>
                    <input
                      type="text"
                      id="collegeName"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your college/university name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-2">
                      Degree *
                    </label>
                    <input
                      type="text"
                      id="degree"
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="e.g., Bachelor's in Computer Science"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
                      Graduation Year *
                    </label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                      min="2020"
                      max="2030"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="e.g., 2024"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cgpaPercentage" className="block text-sm font-medium text-gray-700 mb-2">
                      CGPA/Percentage *
                    </label>
                    <input
                      type="text"
                      id="cgpaPercentage"
                      name="cgpaPercentage"
                      value={formData.cgpaPercentage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="e.g., 8.5 CGPA or 85%"
                    />
                  </div>
                </div>
              </div>

              {/* Internship Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Internship Details
                </h2>
                <div>
                  <label htmlFor="internshipRole" className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Internship Role *
                  </label>
                  <select
                    id="internshipRole"
                    name="internshipRole"
                    value={formData.internshipRole}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select an internship role</option>
                    {internshipRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Resume URL */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Resume/CV Link
                </h2>
                <div>
                  <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV URL *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="resumeUrl"
                      name="resumeUrl"
                      value={formData.resumeUrl}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-colors duration-200"
                      placeholder="https://drive.google.com/your-resume-link"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Please upload your resume to Google Drive, Dropbox, or similar service and share the link
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-100 via-neutral-primary to-teal-100 hover:from-orange-200 hover:to-teal-200 disabled:from-gray-400 disabled:to-gray-500 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-800"></div>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;