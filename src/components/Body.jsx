import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Academics from './Academics';
import Gallery from './Gallery';
// Import other section components as needed

function Body() {
  return (
    <main>
      {/* Hero section doesn't need an ID as it's at the top */}
      <HeroSection />
      
      {/* Each section has its own ID that corresponds to the navbar links */}
      <section id="about">
        <AboutUs />
      </section>
      
      <section id="academics">
        <Academics />
      </section>
      
      <section id="admissions">
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#201E3E] mb-2">Admissions</h2>
            <div className="w-24 h-1 bg-[#E46A16] mx-auto mb-8"></div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center text-gray-600 mb-12">
                To secure admission at Mahatma Gandhi Higher Secondary School in Baisinga, please follow the process outlined below.
              </p>
              
              {/* Admissions Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#E46A16] hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#201E3E] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#201E3E]">Application</h3>
                    </div>
                    <p className="text-gray-600">
                      Complete the admission application form provided by the school. Ensure all fields are filled accurately and attach all required documents as specified.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#E46A16] hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#201E3E] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#201E3E]">Merit-Based Selection</h3>
                    </div>
                    <p className="text-gray-600">
                      Admissions are granted based on academic merit. The school will publish a merit list following government guidelines. Check the notice board or website for results.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#E46A16] hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#201E3E] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#201E3E]">Time-Sensitive Process</h3>
                    </div>
                    <p className="text-gray-600">
                      Upon selection in the merit list, complete the admission formalities within the specified timeframe. Missing the deadline may result in forfeiting your seat.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-[#E46A16] hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#201E3E] w-10 h-10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#201E3E]">Final Decision</h3>
                    </div>
                    <p className="text-gray-600">
                      Choose your subjects carefully as changes to subjects or courses are not permitted after the admission process is complete, in accordance with school policy.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Required Documents Section */}
              <div className="bg-[#201E3E] rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 border-b border-[#E46A16] pb-2 inline-block">Required Documents</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Previous school marks statement or transfer certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Character certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Recent passport-sized photographs</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Proof of residence/address</span>
                  </li>
                </ul>
                
                <div className="mt-8 bg-[#2a294d] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#E46A16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-lg font-semibold">Important Note</h4>
                  </div>
                  <p className="text-gray-300">
                    For the most current admission updates, please contact the school office or check our notice board. Admission procedures may vary based on government regulations.
                  </p>
                </div>
              </div>
              
              {/* Contact for Admissions 
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-[#201E3E] mb-4">Have Questions About Admissions?</h3>
                <p className="text-gray-600 mb-6">
                  Our admissions team is here to help guide you through the process.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="tel:+919937135791" 
                    className="bg-[#201E3E] text-white px-6 py-3 rounded-md hover:bg-[#33316a] transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="bg-[#E46A16] text-white px-6 py-3 rounded-md hover:bg-[#d15a10] transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </button>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
      
      <section id="student-life">
        {/* Add your Student Life component here when ready */}
        <Gallery />
      </section>
      
      {/* <section id="events">
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#201E3E]">Events & News</h2>
            <p className="text-center mt-4">Coming soon...</p>
          </div>
        </div>
      </section> */}
      
      <section id="contact">
        {/* Contact Us Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#201E3E] mb-10">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
              {/* Contact Information */}
              <div className="bg-[#201E3E] rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 border-b border-[#E46A16] pb-2 inline-block">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-gray-200">
                      <p>Mahatma Gandhi Higher Secondary School</p>
                      <p>At/Po- Baisinga</p>
                      <p>Dist- Mayurbhanj</p>
                      <p>Odisha- 757028</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-200">+91 9937135791</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E46A16] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-200">+91 7978042992 (Principal)</span>
                  </li>
                </ul>
                
                {/* Social Media Links */}
                <div className="mt-6">
                  <h4 className="text-white font-medium mb-3">Connect With Us:</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/mg.mahavidyalaya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-[#E46A16] transition-colors"
                      aria-label="Facebook page"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Section with Correct Location */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#201E3E] mb-4">Our Location</h3>
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0082038999944!2d86.91522347499768!3d21.642371073936776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf81bfe1ffe99%3A0xf8216fc3b45c8e82!2sMahatma%20Gandhi%20Mahavidyalaya!5e0!3m2!1sen!2sin!4v1715456859024!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahatma Gandhi Mahavidyalaya Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;