import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
// Import other section components as needed

function Body() {
  return (
    <div>
      <HeroSection />
      
      {/* Each section has its own ID that corresponds to the navbar links */}
      <div id="admissions">
        {/* Add your Admissions component or content here */}
      </div>
      
      <div id="about-us">
        <AboutUs />
      </div>
      
      <div id="academics">
        {/* Add your Academics component or content here */}
      </div>
      
      <div id="research">
        {/* Add your Research component or content here */}
      </div>
      
      <div id="facilities">
        {/* Add your Facilities component or content here */}
      </div>
      
      <div id="examination">
        {/* Add your Examination component or content here */}
      </div>
      
      <div id="placement">
        {/* Add your Placement component or content here */}
      </div>
      
      <div id="others">
        {/* Add your Others component or content here */}
      </div>
    </div>
  );
}

export default Body;