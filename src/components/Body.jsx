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
        {/* Add your Admissions component here when ready */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#201E3E]">Admissions</h2>
            <p className="text-center mt-4">Coming soon...</p>
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
        {/* Add your Contact Us component here when ready */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#201E3E]">Contact Us</h2>
            <p className="text-center mt-4">Coming soon...</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;