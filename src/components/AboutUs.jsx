import React from 'react';

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#201E3E] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>

      {/* College History Section */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#201E3E] text-center">Our History, Mission, and Vision</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4 text-gray-700">
              Mahatma Gandhi Higher Secondary School (formerly Mahatma Gandhi Junior College), Baisinga is a shining symbol of knowledge 
              and progress in Mayurbhanj. Established in 1988 as Mahatma Gandhi Mahavidyalaya, the institution was born from the 
              aspirations of the local community. What began as a dream soon transformed into reality, inspiring generations of learners.
            </p>
            <p className="mb-4 text-gray-700">
              Initially functioning from Munilal High School, the institution received government concurrence in 1989 with 128 seats 
              in +2 Arts and 64 seats in +2 Science. As the demand for quality education grew, the Arts capacity expanded to 256 seats. 
              A +3 wing was introduced in 1993, accommodating 128 students. But in 2008, the +3 wing was separated from +2 (Junior College) 
              as per Govt. order no 29412/HE dated 18/05/2001 and GB resolution no. 26 dated 25/02/2008. Now the institution has been 
              renamed as Mahatma Gandhi Junior College, Baisinga and subsequently named as Mahatma Gandhi Higher Secondary School, 
              Baisinga as per DHSE letter no 5276 dated 26.12.2017 and letter no 9635 dated 13.11.2018.
            </p>
            <p className="mb-4 text-gray-700">
              The school offers a well-rounded curriculum, providing compulsory subjects like English and MIL (Odia or Hindi), with a 
              variety of optional subjects in +2 Arts, including History, Political Science, Economics, Logic, Education, Psychology, 
              Sanskrit, and Odia. For Science students, the school offers Physics, Chemistry, Mathematics, and Biology.
            </p>
            <p className="mb-4 text-gray-700"> 
              Set amidst the lush beauty of Baisinga, MGHSS is located just 20 kilometers from Balasore, 12 kilometers from Betnoti 
              Railway Station, and 500 metres from Baisinga Bus Stand, with Baripada only 40 kilometers away.
            </p>
            <p className="mb-4 text-gray-700">
              The spacious campus features a large playground, science laboratories and a well-stocked library. Essential facilities 
              such as the Principal's Chamber, Office Room, SAMS Room, Examination Section, Admission Section, and Staff Common Room 
              ensure smooth administrative operations. The school also provides girls' common rooms with modern amenities, hygienic 
              toilets, and secure cycle stands for students.
            </p>
            <p className="mb-4 text-gray-700">
              With the vision of "making every man a success and no man a failure", Mahatma Gandhi Higher Secondary School, Baisinga 
              is rendering its services with decorum, discipline and dedication. Guided by Gandhian values, the institute fosters a 
              spirit of unity, excellence and commitment. With unwavering obligation, the faculty and staff work together to create a 
              nurturing environment where young minds are empowered to achieve their dreams and contribute meaningfully to society. 
              Welcome to a place where aspirations soar and the future begins.
            </p>
          </div>
        </div>
      </div>

      {/* Principal's Message Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#201E3E] text-center">Message from the Principal</h2>
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
                <span className="text-gray-500">Principal Photo</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#E46A16]">Sri Birendra Kumar Behera</h3>
                <p className="text-gray-600">Principal, Mahatma Gandhi Higher Secondary School</p>
                <p className="text-gray-600">Contact No: 91-7978042992</p>
              </div>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">Dear Students, Parents, and Visitors,</p>
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
                I look forward to working to the dream, desire and expectation of the local intellectuals and education lovers keeping in 
                view of the Govt. rules and guidelines to create a high standard institution where parents are welcome any time, students 
                are engaged in meaningful learning and staff members are valued and appreciated for their sincere efforts.
              </p>
              <p className="mb-4">
                As you explore our website, you will discover the vibrant life of MGHSS, our programs, achievements, and the spirit of our 
                school community. I invite you to join us on this enriching journey of knowledge and growth. Together, let us continue to 
                inspire, innovate, and pave the way for a brighter future.
              </p>
              <p className="mb-2">With sincere regards,</p>
              <p className="font-semibold">Sri Birendra Kumar Behera</p>
              <p>Principal, Mahatma Gandhi Higher Secondary School, Baisinga, Mayurbhanj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
