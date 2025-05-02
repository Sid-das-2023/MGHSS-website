import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const [alertPosition, setAlertPosition] = useState(100);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAlertPosition((prev) => {
        // When alert moves completely off screen to the left, reset to right side
        if (prev < -100) {
          return 100;
        }
        // Otherwise, move it slightly left
        return prev - 0.2;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    setDropdownOpen({});
    
    // If we're already on the homepage
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, go to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };
  
  const closeAllDropdowns = () => {
    setDropdownOpen({});
  };

  // Handlers for desktop hover behavior with delay
  const handleMouseEnter = (menu) => {
    // Only set active dropdown on desktop (non-mobile) view
    if (window.innerWidth >= 768) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    // Only clear active dropdown on desktop (non-mobile) view with delay
    if (window.innerWidth >= 768) {
      // Set a timeout to delay the closing of the dropdown
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
        timeoutRef.current = null;
      }, 500); // 500ms delay before closing the dropdown
    }
  };

  // Function to keep dropdown open when hovering the dropdown itself
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[#E46A16] overflow-hidden py-2 relative">
        <p 
          className="font-medium text-sm md:text-base text-gray-100 whitespace-nowrap text-center md:text-left px-4 md:px-0"
          style={{ 
            transform: `translateX(${alertPosition}%)`,
          }}
        >
          🔔 Important Announcement: Admissions for 2023-24 Academic Year are now open! Last date to apply is June 30th, 2023.
        </p>
      </div>
      
      {/* College Header Section */}
      <div className="bg-[#201E3E] py-6 border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-3 md:space-y-0">
          {/* College Logo and Name */}
          <div className="flex items-center">
            <div className="mr-3">
              <div className="w-15 h-15 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center gap-3">
                <span className="text-[#201E3E] font-bold text-base md:text-lg">MGHSS</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-100 text-center md:text-left">Mahatma Gandhi Higher Secondary School</h1>
              <p className="text-xs md:text-sm text-gray-300 text-center md:text-left">Baisinga, Established in 1988</p>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center">
            <div className="flex space-x-3">
              {/* Facebook - using the actual link from content file */}
              <a href="https://www.facebook.com/mg.mahavidyalaya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E46A16] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="text-gray-300 hover:text-pink-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              
              {/* Contact Info */}
              <a href="tel:+919937135791" className="text-gray-300 hover:text-green-500 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden md:inline">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="shadow-md bg-[#B14770] relative">
        <div className="container mx-auto px-4">
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-between items-center py-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-100 hover:text-[#E46A16] focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <span className="text-gray-100 font-medium">Menu</span>
          </div>
          
          {/* Menu items */}
          <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-2 md:space-y-0 py-3 md:py-4`}>
            <li className="relative">
              <Link 
                to="/"
                onClick={closeAllDropdowns}
                className="text-left w-full text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
              >
                Home
              </Link>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('about-us')} 
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  About Us
                </button>
                <button 
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown('about')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen.about ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
              
              {/* Dropdown for both mobile (click) and desktop (hover) */}
              <div 
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.about ? 'block' : 'hidden'} 
                  ${activeDropdown === 'about' ? 'md:block' : 'md:hidden'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a href="#history" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">History & Vision</a>
                  <a href="#principal" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Principal's Message</a>
                  <a href="#campus" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Campus Tour</a>
                </div>
              </div>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('academics')} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('academics')} 
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Academics
                </button>
                <button 
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown('academics')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen.academics ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
              
              <div 
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.academics ? 'block' : 'hidden'} 
                  ${activeDropdown === 'academics' ? 'md:block' : 'md:hidden'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a href="#programs" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Programs</a>
                  <a href="#faculty" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Faculty</a>
                  <a href="#curriculum" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Curriculum</a>
                </div>
              </div>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('admissions')} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('admissions')} 
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Admissions
                </button>
                <button 
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown('admissions')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen.admissions ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
              
              <div 
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.admissions ? 'block' : 'hidden'} 
                  ${activeDropdown === 'admissions' ? 'md:block' : 'md:hidden'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a href="#eligibility" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Eligibility</a>
                  <a href="#fees" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Fees & Scholarships</a>
                  <a href="#apply" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Apply Online</a>
                  <a href="#faq" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">FAQs</a>
                </div>
              </div>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('campus')} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('facilities')} 
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Campus Life
                </button>
                <button 
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown('campus')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen.campus ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
              
              <div 
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.campus ? 'block' : 'hidden'} 
                  ${activeDropdown === 'campus' ? 'md:block' : 'md:hidden'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a href="#hostel" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Hostel</a>
                  <a href="#sports" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Sports</a>
                  <a href="#clubs" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Student Clubs</a>
                  <a href="#library" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Library</a>
                </div>
              </div>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('events')} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('events')} 
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Events & News
                </button>
                <button 
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown('events')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen.events ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
              </div>
              
              <div 
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.events ? 'block' : 'hidden'} 
                  ${activeDropdown === 'events' ? 'md:block' : 'md:hidden'}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a href="#upcoming" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Upcoming Events</a>
                  <a href="#newsletter" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Newsletter</a>
                  <a href="#gallery" className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]">Gallery</a>
                </div>
              </div>
            </li>
            
            <li className="relative">
              <Link 
                to="/contact"
                onClick={closeAllDropdowns}
                className="text-left w-full text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
