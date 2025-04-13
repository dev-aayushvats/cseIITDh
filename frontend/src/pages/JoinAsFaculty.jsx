import React from 'react';

const JoinAsFaculty = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Join as Faculty</h1>
        <p className="text-gray-600 mt-2">Build your academic career at IIT Dharwad's Department of Computer Science and Engineering</p>
      </div>

      {/* About the Department Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">About the Department</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The Department of Computer Science and Engineering at IIT Dharwad was established in 2016 and has quickly grown into a center for excellence in computer science education and research in India. Our department offers undergraduate, postgraduate, and doctoral programs in Computer Science and Engineering.
          </p>
          <p className="text-gray-700">
            We have a dynamic team of faculty members specializing in various domains of computer science including Artificial Intelligence, Machine Learning, Computer Vision, Theoretical Computer Science, Systems and Networking, Security and Privacy, and Human-Computer Interaction.
          </p>
          <div className="mt-4 bg-indigo-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Key Department Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Vibrant research environment with regular seminars and workshops</li>
              <li>Collaborative projects with industry and academic partners</li>
              <li>Well-equipped computing facilities and laboratories</li>
              <li>Growing undergraduate and graduate programs</li>
              <li>Opportunities for interdisciplinary research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About IIT Dharwad Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">About IIT Dharwad</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            IIT Dharwad is one of the new IITs established by the Government of India in 2016. Located in the state of Karnataka, our institute is committed to excellence in teaching, research, and innovation while contributing to the technological advancement of the nation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Campus</h3>
              <p className="text-gray-700">
                Our sprawling campus is situated on 470 acres of land in Dharwad, Karnataka. The campus features modern academic buildings, residential facilities, and recreational spaces, creating an ideal environment for academic and personal growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">
                Dharwad is a culturally rich city with a pleasant climate year-round. It is well connected to major cities like Bangalore, Mumbai, and Pune. The region is known for its contributions to literature, music, and education.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Institute Vision</h3>
            <p className="text-gray-700">
              IIT Dharwad aims to be a globally recognized institution for excellence in technical education and research, contributing to the development of technology and science for the betterment of society.
            </p>
          </div>
        </div>
      </section>

      {/* Research Facilities Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Research Facilities</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            IIT Dharwad provides state-of-the-art research facilities to support faculty in their research endeavors. The CSE department has dedicated laboratories equipped with high-performance computing resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">AI and Machine Learning Lab</h3>
              <p className="text-sm text-gray-600">
                High-performance GPU clusters, specialized for deep learning and AI research with NVIDIA RTX A6000 GPUs and dedicated servers.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">Systems Laboratory</h3>
              <p className="text-sm text-gray-600">
                Equipped for research in distributed systems, cloud computing, and networking with cluster computing facilities.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">Security Research Lab</h3>
              <p className="text-sm text-gray-600">
                Specialized infrastructure for cybersecurity research, including isolated network environments for security testing.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">HCI and Visualization Lab</h3>
              <p className="text-sm text-gray-600">
                Studios for user experience research with eye-tracking systems, VR/AR equipment, and visualization tools.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">Theoretical CS Research Areas</h3>
              <p className="text-sm text-gray-600">
                Collaborative spaces with computing resources dedicated to algorithm design, computational complexity, and formal methods research.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800 mb-2">Central Computing Facility</h3>
              <p className="text-sm text-gray-600">
                Institute-wide high-performance computing infrastructure with support for parallel computing and simulation.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Research Support</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Startup research grant for new faculty members</li>
              <li>Support for conference travel and research collaborations</li>
              <li>Access to digital libraries and research journals</li>
              <li>Technical support staff for laboratory management</li>
              <li>Opportunities for industry-sponsored research</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Salary and Benefits Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Salary and Benefits</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            IIT Dharwad offers competitive compensation packages to faculty members in line with other IITs and government norms. Our comprehensive benefits package is designed to support both professional development and personal wellbeing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Salary Structure</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left">Position</th>
                      <th className="px-4 py-2 text-left">Pay Level</th>
                      <th className="px-4 py-2 text-left">Starting Salary Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2">Assistant Professor</td>
                      <td className="px-4 py-2">Level 12</td>
                      <td className="px-4 py-2">₹1,01,500 - ₹1,67,400</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">Associate Professor</td>
                      <td className="px-4 py-2">Level 13A2</td>
                      <td className="px-4 py-2">₹1,39,600 - ₹2,11,300</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Professor</td>
                      <td className="px-4 py-2">Level 14A</td>
                      <td className="px-4 py-2">₹1,59,100 - ₹2,20,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Salary includes basic pay plus allowances as per Government of India norms.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Benefits and Allowances</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Dearness Allowance (DA) as per government rates</li>
                <li>House Rent Allowance (HRA) or campus housing</li>
                <li>Transport Allowance</li>
                <li>Professional Development Allowance (₹3 lakhs for 3 years)</li>
                <li>Relocation allowance for joining</li>
                <li>Medical benefits for faculty and dependents</li>
                <li>Leave Travel Concession (LTC)</li>
                <li>Children's Education Allowance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Additional Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium text-gray-800">Retirement Benefits</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>National Pension System (NPS)</li>
                  <li>Gratuity as per norms</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium text-gray-800">Campus Facilities</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>Faculty club and recreational facilities</li>
                  <li>On-campus school for children</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium text-gray-800">Leave Benefits</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>Earned Leave, Half Pay Leave</li>
                  <li>Sabbatical leave for research</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium text-gray-800">Support for Research</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>Startup research grant</li>
                  <li>Support for patent filing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Minimum Required Qualifications</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            We seek highly qualified candidates with a strong academic background and research experience in Computer Science and Engineering or related fields.
          </p>
          
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Educational Qualifications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Position</th>
                    <th className="px-4 py-2 text-left">Minimum Qualification</th>
                    <th className="px-4 py-2 text-left">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Assistant Professor</td>
                    <td className="px-4 py-2">Ph.D. in Computer Science, Engineering or related field</td>
                    <td className="px-4 py-2">Minimum 3 years of post-Ph.D. research/teaching experience</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Associate Professor</td>
                    <td className="px-4 py-2">Ph.D. with first class in preceding degree</td>
                    <td className="px-4 py-2">Minimum 6 years of experience, with 3 years as Assistant Professor</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Professor</td>
                    <td className="px-4 py-2">Ph.D. with first class in preceding degree</td>
                    <td className="px-4 py-2">Minimum 10 years of experience, with 4 years as Associate Professor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
            <p className="text-gray-700 mb-3">
              We are particularly interested in candidates specializing in the following areas, but exceptional candidates from all areas of Computer Science will be considered:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-indigo-50 p-3 rounded-md text-center">Artificial Intelligence</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Machine Learning</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Computer Vision</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Data Science</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Cybersecurity</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Cloud Computing</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">IoT and Edge Computing</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Theoretical Computer Science</div>
              <div className="bg-indigo-50 p-3 rounded-md text-center">Human-Computer Interaction</div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Note on Exceptional Candidates</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  For exceptionally brilliant candidates with an outstanding record of research publications and contributions to the field, some of the experience requirements may be relaxed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">How to Apply</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Interested candidates are invited to apply for faculty positions through our online portal. Applications are accepted throughout the year, with reviews conducted periodically.
          </p>
          
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Application Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Register on the IIT Dharwad faculty recruitment portal.</li>
              <li>Fill out the online application form with personal, educational, and professional details.</li>
              <li>Upload the following documents:
                <ul className="list-disc list-inside ml-5 mt-1 text-gray-600">
                  <li>Detailed CV with list of publications</li>
                  <li>Research statement (2-3 pages)</li>
                  <li>Teaching statement (1-2 pages)</li>
                  <li>Copies of three best publications</li>
                  <li>Educational certificates and transcripts</li>
                  <li>Contact information of three referees</li>
                </ul>
              </li>
              <li>Submit the completed application.</li>
              <li>Shortlisted candidates will be invited for a seminar presentation and interview.</li>
            </ol>
          </div>
          
          <div className="mt-6 bg-indigo-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-800 mb-2">Selection Process</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Screening of applications based on academic credentials, research contributions, and alignment with department needs.</li>
              <li>Seminar presentation by shortlisted candidates to showcase research work and future plans.</li>
              <li>Technical interview with faculty selection committee.</li>
              <li>Final selection based on overall performance, research potential, and teaching abilities.</li>
            </ol>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Important Information</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Candidates are encouraged to review the department's research areas before applying.</li>
              <li>For any queries related to the application process, please contact <span className="text-indigo-600">faculty.recruitment@iitdh.ac.in</span></li>
              <li>The institute reserves the right to shortlist candidates based on the needs of the departments/institute.</li>
            </ul>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-medium">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinAsFaculty; 