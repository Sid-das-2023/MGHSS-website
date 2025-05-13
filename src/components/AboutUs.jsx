import React, { useState, useEffect } from 'react';
// Import your campus images
import collegeImage from '../assets/images/Our mission image.jpg';
import campus1 from '../assets/images/campus1.avif'; // Add your actual campus images
import campus2 from '../assets/images/campus2.jpg'; // Add your actual campus images
import campus3 from '../assets/images/campus3.jpeg'; // Add your actual campus images
import Birendra_Ku_Behera from '../assets/staff_photos/Principal Message photo.jpg'; // Add your actual principal image
function AboutUs() {
  // Add carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const campusImages = [campus1, campus2, campus3];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % campusImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [campusImages.length]);
  
  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + campusImages.length) % campusImages.length);
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % campusImages.length);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#201E3E] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="lg:mx-12 sm:mx-4 px-4">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-8 text-[#201E3E] text-center">Our History, Mission, and Vision</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-12 max-w-10xl mx-auto">
            {/* Text content on the left for desktop (but below on mobile) */}
            <div className="md:w-3/5">
              <p className="mb-5 text-gray-700 text-base md:text-sm lg:text-xl">
                Mahatma Gandhi Higher Secondary School (formerly Mahatma Gandhi Junior College), Baisinga is a shining symbol of knowledge 
                and progress in Mayurbhanj. Established in 1988 as Mahatma Gandhi Mahavidyalaya, the institution was born from the 
                aspirations of the local community. What began as a dream soon transformed into reality, inspiring generations of learners.
              </p>
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                Initially functioning from Munilal High School, the institution received government concurrence in 1989 with 128 seats 
                in +2 Arts and 64 seats in +2 Science. As the demand for quality education grew, the Arts capacity expanded to 256 seats. 
                A +3 wing was introduced in 1993, accommodating 128 students. But in 2008, the +3 wing was separated from +2 (Junior College) 
                as per Govt. order no 29412/HE dated 18/05/2001 and GB resolution no. 26 dated 25/02/2008.
              </p>
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                The school offers a well-rounded curriculum, providing compulsory subjects like English and MIL (Odia or Hindi), with a 
                variety of optional subjects in +2 Arts, including History, Political Science, Economics, Logic, Education, Psychology, 
                Sanskrit, and Odia. For Science students, the school offers Physics, Chemistry, Mathematics, and Biology.
              </p>
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                With the vision of "making every man a success and no man a failure", Mahatma Gandhi Higher Secondary School, Baisinga 
                is rendering its services with decorum, discipline and dedication. Guided by Gandhian values, the institute fosters a 
                spirit of unity, excellence and commitment.
              </p>
            </div>
            
            {/* Image on the right for desktop (but on top for mobile) */}
            <div className="md:w-2/5 mb-6 md:mt-30">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={collegeImage} 
                  alt="Mahatma Gandhi Higher Secondary School Campus" 
                  className="w-full h-[70%] object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Details Section */}
      <div className="py-12 md:py-16">
        <div className="lg:mx-12 sm:mx-4 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#201E3E] text-center">Our Campus</h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 max-w-10xl mx-auto">
            {/* Image carousel on the left */}
            <div className="md:w-3/5 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-xl h-full relative">
                {/* Dynamic carousel implementation */}
                <div className="carousel-container relative h-80 md:h-96">
                  {campusImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`MGHSS Campus View ${index + 1}`} 
                      className={`w-full h-full object-cover absolute transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={(e) => { e.preventDefault(); goToPrevSlide(); }} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); goToNextSlide(); }} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {campusImages.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content on the right */}
            <div className="md:w-3/5">
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                Set amidst the lush beauty of Baisinga, MGHSS is located just 20 kilometers from Balasore, 12 kilometers from Betnoti 
                Railway Station, and 500 metres from Baisinga Bus Stand, with Baripada only 40 kilometers away.
              </p>
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                The spacious campus features a large playground, science laboratories and a well-stocked library. Essential facilities 
                such as the Principal's Chamber, Office Room, SAMS Room, Examination Section, Admission Section, and Staff Common Room 
                ensure smooth administrative operations.
              </p>
              <p className="mb-5 text-gray-700 text-base md:text-lg lg:text-xl">
                The school also provides girls' common rooms with modern amenities, hygienic toilets, and secure cycle stands for students.
                Our campus is designed to create an environment conducive to learning, with well-ventilated classrooms and dedicated spaces
                for extracurricular activities.
              </p>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl italic font-medium">
                Welcome to a place where aspirations soar and the future begins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="bg-[#201E3E] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white text-center">Message from the Principal</h2>
          <div className="max-w-7xl py-5 mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-48 h-56 md:w-56 md:h-72 bg-gray-200 rounded-lg overflow-hidden shadow-md mb-4 object-center">
                  <img 
                    src={Birendra_Ku_Behera} 
                    alt="Sri Birendra Kumar Behera" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white bg-gray-100">Principal Photo</div>';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#E46A16] mb-1">Sri Birendra Kumar Behera</h3>
                  <p className="text-white font-medium">Principal</p>
                  <p className="text-white mb-2">Mahatma Gandhi Higher Secondary School</p>
                  <p className="text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E46A16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91-7978042992
                  </p>
                </div>
              </div>
              
              {/* Message content - better organized with quotes styling */}
              <div className="md:w-2/3 mt-6 md:mt-0">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#E46A16] absolute -top-6 -left-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="text-white text-base md:text-lg lg:text-xl pl-6 pt-4">
                    <p className="mb-4 font-medium">Dear Students, Parents, and Visitors,</p>
                    <p className="mb-4">
                      It is my privilege to extend a heartfelt welcome to the official website of Mahatma Gandhi Higher Secondary School, Baisinga. 
                      As the Principal of this esteemed institution, I am honored to lead a school that stands as a beacon of academic excellence, 
                      holistic growth, and unwavering dedication to nurturing young minds.
                    </p>
                    <p className="mb-4">
                      At MGHSS, we believe that education is a transformative journey that extends far beyond textbooks and classrooms. Our mission 
                      is to inspire curiosity, cultivate resilience, and instill a lifelong love for learning in our students. Through a harmonious 
                      blend of academics, co-curricular pursuits, and character-building activities, we create an environment where every student 
                      is empowered to realize their full potential.
                    </p>
                    <p className="mb-4">
                      Our team of dedicated educators remains committed to providing individualized attention, fostering critical thinking, and 
                      encouraging creativity. We deeply value the role of parents, guardians and advisors in guiding our students towards success. 
                      The steadfast dedication of our institute has yielded excellent results year by year. Our students have constantly added 
                      feathers to the institution's cap by winning district and state level competitions.
                    </p>
                    <p className="mb-4">
                      I look forward to working to the dream, desire and expectation of the local intellectuals and education lovers keeping 
                      in view of the Govt. rules and guidelines to create a high standard institution where parents are welcome any time, 
                      students are engaged in meaningful learning and staff members are valued and appreciated for their sincere efforts.
                    </p>
                    <p className="mb-6">
                      As you explore our website, you will discover the vibrant life of MGHSS, our programs, achievements, and the spirit 
                      of our school community. I invite you to join us on this enriching journey of knowledge and growth. Together, let us 
                      continue to inspire, innovate, and pave the way for a brighter future.
                    </p>
                    
                    <div className="border-t pt-4 border-gray-200">
                      <p>With sincere regards,</p>
                      <p className="font-bold text-xl md:text-3xl text-white">Sri Birendra Kumar Behera</p>
                      <p className="text-white pt-4">Principal, MGHSS, Baisinga, Mayurbhanj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
