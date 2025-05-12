import React, { useState } from "react";
// Import placeholder image for staff - replace with actual images later
import placeholderImage from "../assets/staff_photos/placeholder-profile.jpg";

const imageModules = import.meta.glob("../assets/staff_photos/*.jpg", {
  eager: true,
  import: "default",
});

const staffImages = {};
for (const path in imageModules) {
  const filename = path.split("/").pop(); // e.g., Ajit_Ku_Parida.jpg
  staffImages[filename] = imageModules[path];
}

function Academics() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("programs");

  // Sample programs data - can be expanded with actual data
  const programs = [
    {
      name: "+2 Arts",
      description:
        "Our Arts program offers a comprehensive curriculum with compulsory subjects including English and MIL (Odia or Hindi), along with a variety of optional subjects.",
      subjects: [
        "History",
        "Political Science",
        "Economics",
        "Logic",
        "Education",
        "Psychology",
        "Sanskrit",
        "Odia",
      ],
      seats: 256,
    },
    {
      name: "+2 Science",
      description:
        "The Science stream provides students with a strong foundation in scientific principles and analytical thinking skills, preparing them for future studies in STEM fields.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      seats: 64,
    },
  ];

  // Staff information from the content file
  const staffMembers = [
    {
      id: 1,
      name: "Mr. Birendra Ku. Behera",
      designation: "Principal-cum-Reader",
      department: "English",
      photoFileName: "Birendra_Ku_Behera.jpg",
    },
    {
      id: 2,
      name: "Mrs. Minakshi Das",
      designation: "Lecturer",
      department: "Psychology",
      photoFileName: "Minakshi_Das.jpg",
    },
    {
      id: 3,
      name: "Mr. Mahendra Ku. Kar",
      designation: "Lecturer",
      department: "History",
      photoFileName: "Mahendra_Ku_Kar.jpg",
    },
    {
      id: 4,
      name: "Mr. Subas Chandra Mohapatra",
      designation: "Lecturer",
      department: "Economics",
      photoFileName: "Subas_Ch_Mohapatra.jpg",
    },
    {
      id: 5,
      name: "Mr. Bijay Ku. Tripathy",
      designation: "Lecturer",
      department: "Political Science",
      photoFileName: "Bijay_Ku_Tripathy.jpg",
    },
    {
      id: 6,
      name: "Mr. Debabrata Rout",
      designation: "Reader",
      department: "Physics",
      photoFileName: "Debabrata_Rout.jpg",
    },
    {
      id: 7,
      name: "Mrs. Bansori Das",
      designation: "Reader",
      department: "Botany",
      photoFileName: "Bansori_Das.jpg",
    },
    {
      id: 8,
      name: "Dr. Harekrushna Behera",
      designation: "Lecturer",
      department: "History",
      photoFileName: "Harekrushna_Behera.jpg",
    },
    {
      id: 9,
      name: "Ms. Puspapriya Mohalik",
      designation: "P.G.T",
      department: "Odia",
      photoFileName: "Puspapriya_Mohalik.jpg",
    },
    {
      id: 10,
      name: "Mr. Jitendra Khatua",
      designation: "P.G.T",
      department: "Political Science",
      photoFileName: "Jitendra_Khatua.jpg",
    },
    {
      id: 11,
      name: "Ms. Subhashree Das",
      designation: "P.G.T",
      department: "Education",
      photoFileName: "Subhashree_Das.jpg",
    },
    {
      id: 12,
      name: "Mr. Sanyashi Nayak",
      designation: "Demonstrator",
      department: "Physics",
      photoFileName: "Sanyasi_Nayak.jpg",
    },
    {
      id: 13,
      name: "Mr. Binendra Ku. Mohanta",
      designation: "Demonstrator",
      department: "Chemistry",
      photoFileName: "Binendra_Ku_Mohanta.jpg",
    },
    {
      id: 14,
      name: "Mr. Laxmidhar Gantayat",
      designation: "Demonstrator",
      department: "Psychology",
      photoFileName: "Laxmidhar_Gantayat.jpg",
    },
    {
      id: 15,
      name: "Parameswar Behera",
      designation: "D.E.O",
      department: "SAMS",
      photoFileName: "Parameswar_Behera.jpg",
    },
    {
      id: 16,
      name: "Panchanan Das",
      designation: "Lab. Attendant",
      department: "Biology",
      photoFileName: "Panchanan_Das.jpg",
    },
    {
      id: 17,
      name: "Ajit Ku. Parida",
      designation: "Attendant",
      department: "Library",
      photoFileName: "Ajit_Ku_Parida.jpg",
    },
    {
      id: 18,
      name: "Sarat Chandra Mohanta",
      designation: "Peon",
      department: "Office",
      photoFileName: "Sarat_Ch_Mohanta.jpg",
    },
  ];

  // Filter faculty by role categories for organized display
  const teachingStaff = staffMembers.filter((staff) =>
    ["Principal-cum-Reader", "Lecturer", "Reader", "P.G.T"].includes(
      staff.designation
    )
  );

  const laboratoryStaff = staffMembers.filter((staff) =>
    ["Demonstrator", "Lab. Attendant"].includes(staff.designation)
  );

  const administrativeStaff = staffMembers.filter((staff) =>
    ["D.E.O", "Lib. Attendant", "Peon"].includes(staff.designation)
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#201E3E] text-center">
            Academics
          </h1>
          <p className="text-lg text-[#201E3E] text-center mt-4 max-w-3xl mx-auto">
            Discover our academic offerings, meet our dedicated faculty, and
            explore the curriculum that shapes future leaders.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-[#201E3E] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2 space-x-4">
            <button
              onClick={() => setActiveTab("programs")}
              className={`px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                activeTab === "programs"
                  ? "text-[#E46A16] border-b-2 border-[#E46A16]"
                  : "text-white hover:text-[#E46A16]"
              }`}
            >
              Academic Programs
            </button>
            <button
              onClick={() => setActiveTab("faculty")}
              className={`px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                activeTab === "faculty"
                  ? "text-[#E46A16] border-b-2 border-[#E46A16]"
                  : "text-white hover:text-[#E46A16]"
              }`}
            >
              Our Faculty & Staff
            </button>
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                activeTab === "curriculum"
                  ? "text-[#E46A16] border-b-2 border-[#E46A16]"
                  : "text-white hover:text-[#E46A16]"
              }`}
            >
              Curriculum & Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Programs Tab Content */}
        {activeTab === "programs" && (
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#201E3E] mb-6">
              Our Academic Programs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                >
                  <div className="bg-[#201E3E] text-white px-6 py-4">
                    <h3 className="text-xl font-bold">{program.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Available Seats: {program.seats}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <h4 className="font-semibold text-[#E46A16] mb-2">
                      Subjects Offered:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg
                            className="w-4 h-4 text-[#E46A16] mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          {subject}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="text-[#E46A16] hover:underline font-medium flex items-center"
                      >
                        Learn more about this program
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#201E3E] mb-3">
                How to Choose Your Stream
              </h3>
              <p className="text-gray-700">
                Selecting the right academic stream is a crucial decision that
                can shape your future career path. We encourage students to
                consider their interests, strengths, and career aspirations when
                making this choice. Our faculty members are available for
                guidance and counseling to help students make informed
                decisions.
              </p>
              <a
                href="#"
                className="inline-block mt-4 bg-[#E46A16] text-white px-5 py-2 rounded hover:bg-orange-700 transition duration-300"
              >
                Schedule a Counseling Session
              </a>
            </div>
          </div>
        )}

        {/* Faculty Tab Content */}
        {activeTab === "faculty" && (
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#201E3E] mb-6">
              Our Faculty & Staff
            </h2>
            <p className="text-gray-700 mb-8">
              MGHSS takes pride in its team of dedicated educators and support
              staff who are committed to providing quality education and
              ensuring the smooth functioning of our institution.
            </p>

            {/* Teaching Staff Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#201E3E] mb-6 pb-2 border-b border-gray-200">
                Teaching Faculty
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teachingStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-lg shadow overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-[1/1] overflow-hidden bg-gray-100">
                      <img
                        src={staffImages[staff.photoFileName]}
                        alt={staff.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${staff.name.replace(
                            /\s+/g,
                            "+"
                          )}&background=E46A16&color=fff&size=250`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-[#201E3E]">
                        {staff.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {staff.designation}
                      </p>
                      {staff.qualification !== "N/A" && (
                        <p className="text-sm text-gray-600">
                          {staff.qualification}
                        </p>
                      )}
                      {staff.department !== "N/A" && (
                        <p className="text-sm text-[#E46A16]">
                          {staff.department}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Laboratory Staff Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#201E3E] mb-6 pb-2 border-b border-gray-200">
                Laboratory Staff
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {laboratoryStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-lg shadow overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-[1/1] overflow-hidden bg-gray-100">
                      <img
                        src={staffImages[staff.photoFileName]}
                        alt={staff.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${staff.name.replace(
                            /\s+/g,
                            "+"
                          )}&background=E46A16&color=fff&size=250`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-[#201E3E]">
                        {staff.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {staff.designation}
                      </p>
                      {staff.department !== "N/A" && (
                        <p className="text-sm text-[#E46A16]">
                          {staff.department}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Staff Section */}
            <div>
              <h3 className="text-xl font-bold text-[#201E3E] mb-6 pb-2 border-b border-gray-200">
                Administrative Staff
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {administrativeStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-lg shadow overflow-hidden border border-gray-200"
                  >
                    <div className="aspect-[1/1] overflow-hidden bg-gray-100">
                      <img
                        src={staffImages[staff.photoFileName]}
                        alt={staff.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${staff.name.replace(
                            /\s+/g,
                            "+"
                          )}&background=E46A16&color=fff&size=250`;
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-[#201E3E]">
                        {staff.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {staff.designation}
                      </p>
                      {staff.department !== "N/A" && (
                        <p className="text-sm text-[#E46A16]">
                          {staff.department}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab Content */}
        {activeTab === "curriculum" && (
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-[#201E3E] mb-6">
              Curriculum & Syllabus
            </h2>
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <p className="text-gray-700 italic">
                "The institution adheres strictly to the syllabus of CHSE,
                Odisha."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* +2 Arts Syllabus */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#201E3E] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">+2 Arts Syllabus</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-[#E46A16] mb-4">
                    Compulsory Subjects
                  </h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#E46A16] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        <span className="font-medium">English</span>
                        <p className="text-sm text-gray-600">
                          First Language (Compulsory)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#E46A16] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        <span className="font-medium">MIL (Odia or Hindi)</span>
                        <p className="text-sm text-gray-600">
                          Second Language (Compulsory)
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-[#E46A16] mb-4">
                    Optional Subjects (Choose any three)
                  </h4>
                  <ul className="mb-6 space-y-2">
                    {[
                      "History",
                      "Political Science",
                      "Economics",
                      "Logic",
                      "Education",
                      "Psychology",
                      "Sanskrit",
                      "Odia",
                    ].map((subject, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#E46A16] mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        {subject}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-block bg-[#201E3E] text-white px-5 py-2 rounded hover:bg-opacity-90 transition duration-300"
                  >
                    Download Detailed Syllabus
                  </a>
                </div>
              </div>

              {/* +2 Science Syllabus */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#201E3E] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">+2 Science Syllabus</h3>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-[#E46A16] mb-4">
                    Compulsory Subjects
                  </h4>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#E46A16] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        <span className="font-medium">English</span>
                        <p className="text-sm text-gray-600">
                          First Language (Compulsory)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#E46A16] mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <div>
                        <span className="font-medium">MIL (Odia or Hindi)</span>
                        <p className="text-sm text-gray-600">
                          Second Language (Compulsory)
                        </p>
                      </div>
                    </li>
                  </ul>

                  <h4 className="font-semibold text-[#E46A16] mb-4">
                    Core Science Subjects
                  </h4>
                  <ul className="mb-6 space-y-2">
                    {["Physics", "Chemistry", "Mathematics", "Biology"].map(
                      (subject, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-[#E46A16] mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          {subject}
                        </li>
                      )
                    )}
                  </ul>

                  <a
                    href="#"
                    className="inline-block bg-[#201E3E] text-white px-5 py-2 rounded hover:bg-opacity-90 transition duration-300"
                  >
                    Download Detailed Syllabus
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#201E3E] mb-3">
                Academic Calendar
              </h3>
              <p className="text-gray-700 mb-4">
                Our academic calendar is designed to provide students with a
                structured learning experience, including regular classes,
                examinations, and co-curricular activities.
              </p>
              <a
                href="#"
                className="inline-block bg-[#E46A16] text-white px-5 py-2 rounded hover:bg-orange-700 transition duration-300"
              >
                View Academic Calendar
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#201E3E] py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have Questions About Our Academic Programs?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our academic counselors are available to help you navigate our
            programs and find the right fit for your educational goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3 text-[#E46A16]"
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
              <div className="text-left">
                <p className="text-sm text-gray-300">General Inquiries</p>
                <p className="text-lg font-medium">+91 9937135791</p>
              </div>
            </div>

            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-3 text-[#E46A16]"
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
              <div className="text-left">
                <p className="text-sm text-gray-300">Principal's Office</p>
                <p className="text-lg font-medium">+91 7978042992</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
