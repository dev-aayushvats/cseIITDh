import React from 'react';

const JoinAsFaculty = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Join as Faculty</h1>
        <p className="text-gray-600 mt-2">Build your academic career at IIT DHARWAD's Department of Computer Science and Engineering</p>
      </div>

      {/* About the Department Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">About the Department</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            The Department of Computer Science and Engineering at IIT DHARWAD was established in 2016 and has quickly grown into a center for excellence in computer science education and research in India. Our department offers undergraduate, postgraduate, and doctoral programs in Computer Science and Engineering.
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

      {/* About IIT DHARWAD Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">About IIT DHARWAD</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            IIT DHARWAD is one of the new IITs established by the Government of India in 2016. Located in the state of Karnataka, our institute is committed to excellence in teaching, research, and innovation while contributing to the technological advancement of the nation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Campus</h3>
              <p className="text-gray-700">
                Our sprawling campus is situated on 470 acres of land in DHARWAD, Karnataka. The campus features modern academic buildings, residential facilities, and recreational spaces, creating an ideal environment for academic and personal growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">
                DHARWAD is a culturally rich city with a pleasant climate year-round. It is well connected to major cities like Bangalore, Mumbai, and Pune. The region is known for its contributions to literature, music, and education.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Institute Vision</h3>
            <p className="text-gray-700">
              IIT DHARWAD aims to be a globally recognized institution for excellence in technical education and research, contributing to the development of technology and science for the betterment of society.
            </p>
          </div>
        </div>
      </section>

      {/* Salary and Benefits Section */}
      <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Salary and Benefits</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            IIT DHARWAD offers competitive compensation packages to faculty members in line with other IITs and government norms. Our comprehensive benefits package is designed to support both professional development and personal wellbeing.
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
              <li>Register on the IIT DHARWAD faculty recruitment portal.</li>
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
              <li>For any queries related to the application process, please contact <span className="text-indigo-600 cursor-pointer" onClick={() => window.open('mailto:faculty.recruit@iitdh.ac.in', '_blank')}>faculty.recruit@iitdh.ac.in</span> or <span className="text-indigo-600 cursor-pointer" onClick={() => window.open('mailto:facrec.cs@iitdh.ac.in', '_blank')}>facrec.cs@iitdh.ac.in</span></li>
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