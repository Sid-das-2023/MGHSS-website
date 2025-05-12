import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  // Array of alert messages to display in rotation
  const alertMessages = [
    "🔔 Important Announcement: Admissions for 2025-26 Academic Year are now open!",
    "📚 New Science Laboratory equipment has arrived! Students can now access advanced learning tools.",
    "🏆 Congratulations to our students for winning the district-level science competition!",
    "📅 Parent-Teacher Meeting scheduled for May 15th, 2024. All parents are requested to attend.",
  ];

  const [alertPosition, setAlertPosition] = useState(100);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);
  const alertCycleRef = useRef(null);

  // Handle the horizontal scrolling of alert messages
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setAlertPosition((prev) => {
        // When alert moves completely off screen to the left, reset and move to next message
        if (prev < -100) {
          // Use setTimeout to ensure the transition to the next message isn't visible
          setTimeout(() => {
            setCurrentAlertIndex((prevIndex) =>
              prevIndex === alertMessages.length - 1 ? 0 : prevIndex + 1
            );
          }, 100);
          return 100; // Reset position to start from right
        }
        // Otherwise, move it slightly left
        return prev - 0.2;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [alertMessages.length]);

  // Reset position when message changes to ensure smooth transitions
  useEffect(() => {
    setAlertPosition(100);
  }, [currentAlertIndex]);

  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    setDropdownOpen({});

    // If we're already on the homepage
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, go to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
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
      if (alertCycleRef.current) {
        clearTimeout(alertCycleRef.current);
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
            transition: "transform 0.1s linear",
          }}
        >
          {alertMessages[currentAlertIndex]}
        </p>
      </div>

      {/* College Header Section */}
      <div className="bg-[#201E3E] py-6 border-b">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-3 md:space-y-0">
          {/* College Logo and Name */}
          <div className="flex items-center">
            <div className="mr-3">
              <img 
                src={logo} 
                alt="MGHSS Logo" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-100 text-center md:text-left">
                Mahatma Gandhi Higher Secondary School Baisinga
              </h1>
              <p className="text-xs md:text-sm text-gray-300 text-center md:text-left font-bold">
                Mayurbhanj, Established in 1988
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center">
            <div className="flex space-x-3">
              {/* Facebook - using the actual link from content file */}
              <a
                href="https://www.facebook.com/mg.mahavidyalaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E46A16] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Contact Info */}
              <a
                href="tel:+917978042992"
                className="text-gray-300 hover:text-green-500 transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden md:inline">+91 7978042992</span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            <span className="text-gray-100 font-medium">Menu</span>
          </div>

          {/* Menu items */}
          <ul
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-2 md:space-y-0 py-3 md:py-4`}
          >
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
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  About Us
                </button>
                <button
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown("about")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        dropdownOpen.about ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown for both mobile (click) and desktop (hover) */}
              <div
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.about ? "block" : "hidden"} 
                  ${activeDropdown === "about" ? "md:block" : "md:hidden"}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a
                    href="#history"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    History & Vision
                  </a>
                  <a
                    href="#principal"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Principal's Message
                  </a>
                  <a
                    href="#campus"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Campus Tour
                  </a>
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("academics")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("academics")}
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Academics
                </button>
                <button
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown("academics")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        dropdownOpen.academics
                          ? "M5 15l7-7 7 7"
                          : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.academics ? "block" : "hidden"} 
                  ${activeDropdown === "academics" ? "md:block" : "md:hidden"}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a
                    href="#programs"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Programs
                  </a>
                  <a
                    href="#faculty"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Faculty
                  </a>
                  <a
                    href="#curriculum"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Curriculum
                  </a>
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("admissions")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("admissions")}
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Admissions
                </button>
                <button
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown("admissions")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        dropdownOpen.admissions
                          ? "M5 15l7-7 7 7"
                          : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.admissions ? "block" : "hidden"} 
                  ${
                    activeDropdown === "admissions" ? "md:block" : "md:hidden"
                  }`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a
                    href="#eligibility"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Eligibility
                  </a>
                  <a
                    href="#fees"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Fees & Scholarships
                  </a>
                  <a
                    href="#apply"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Apply Online
                  </a>
                  <a
                    href="#faq"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("campus")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("student-life")}
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Campus Life
                </button>
                <button
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown("campus")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        dropdownOpen.campus ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.campus ? "block" : "hidden"} 
                  ${activeDropdown === "campus" ? "md:block" : "md:hidden"}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a
                    href="#hostel"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Hostel
                  </a>
                  <a
                    href="#sports"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Sports
                  </a>
                  <a
                    href="#clubs"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Student Clubs
                  </a>
                  <a
                    href="#library"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Library
                  </a>
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("events")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-left text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
                >
                  Events & News
                </button>
                <button
                  className="md:hidden ml-2 text-gray-100"
                  onClick={() => toggleDropdown("events")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        dropdownOpen.events ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`md:absolute md:left-0 md:mt-2 md:w-48 md:bg-[#B14770] md:rounded md:shadow-lg md:z-20 
                  ${dropdownOpen.events ? "block" : "hidden"} 
                  ${activeDropdown === "events" ? "md:block" : "md:hidden"}`}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1 space-y-1 pl-4 md:pl-0">
                  <a
                    href="#upcoming"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Upcoming Events
                  </a>
                  <a
                    href="#newsletter"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Newsletter
                  </a>
                  <a
                    href="#gallery"
                    className="block px-4 py-2 text-gray-100 md:text-gray-100 hover:text-[#E46A16]"
                  >
                    Gallery
                  </a>
                </div>
              </div>
            </li>

            <li className="relative">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left w-full text-gray-100 hover:text-[#E46A16] transition duration-300 uppercase font-weight-500 block py-1 md:py-0"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
