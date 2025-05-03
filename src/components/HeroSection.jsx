import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/AIDS Awareness Programme by Redcross.jpg';
import image2 from '../assets/images/Audio-vidual Classes.jpg';
import image3 from '../assets/images/Bidding Best of Luck to Board students.jpg';
import image4 from '../assets/images/Block Level Winer Dance Group.jpg';

function HeroSection() {
  const images = [
    {
      url: image1,
      caption: 'AIDS Awareness Programme by Redcross',
    },
    {
      url: image2,
      caption: 'Audio-Visual Classes',
    },
    {
      url: image3,
      caption: 'Bidding Best of Luck to Board Students',
    },
    {
      url: image4,
      caption: 'Block Level Winner Dance Group',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={image.url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{image.caption}</h2>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 sm:p-2 rounded-full transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 sm:p-2 rounded-full transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-8 text-[#201E3E]">Welcome to Mahatma Gandhi Higher Secondary School</h2>
          <p className="text-base lg:text-xl text-gray-700 text-center max-w-7xl mx-auto px-2">
            Welcome to Mahatma Gandhi Higher Secondary School (MGHSS), Baisinga — a distinguished institution dedicated to academic excellence and holistic development. Established in 1988, MGHSS has grown from its humble beginnings to become a beacon of learning, guided by Gandhian values. With a nurturing environment, committed faculty, and well-rounded educational programs, the school empowers students to achieve their dreams and contribute meaningfully to society. Situated amidst the serene beauty of Mayurbhanj, MGHSS stands as a symbol of knowledge, integrity, and progress.
          </p>
        </div>
      </div>

      <div className="bg-[#E46A16] py-8 md:py-10 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">Quick Facts</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">1988</div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Established</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">256</div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Arts Stream Seats</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">64</div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Science Stream Seats</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">18</div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Staff Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">20km</div>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm">From Balasore</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
