import React from 'react';
import { Link } from 'react-scroll';

// Navigation Card Component
const NavCard = ({ title, icon, targetId }) => {
  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
        <div className="text-indigo-600 mb-3 text-3xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">View Details</p>
      </div>
    </Link>
  );
};

// Section Component
const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="py-10 scroll-mt-[100px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  );
};

// Academics Page
const Academics = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="academics-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Academics</h1>
        <p className="text-gray-600">
          Learn about our academic programs, courses, and resources for computer science and engineering students.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          <NavCard 
            title="Time Table" 
            icon={<i className="far fa-clock"></i>}
            targetId="timetable" 
          />
          <NavCard 
            title="Courses" 
            icon={<i className="fas fa-book"></i>}
            targetId="courses" 
          />
          <NavCard 
            title="Curriculum" 
            icon={<i className="fas fa-graduation-cap"></i>}
            targetId="curriculum" 
          />
          <NavCard 
            title="Rules" 
            icon={<i className="fas fa-gavel"></i>}
            targetId="rules" 
          />
          <NavCard 
            title="FAQs" 
            icon={<i className="fas fa-question-circle"></i>}
            targetId="faq" 
          />
        </div>
      </div>

      {/* Time Table Section */}
      <Section id="timetable" title="Time Table">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Current Semester Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2">Time/Day</th>
                  <th className="border border-gray-200 px-4 py-2">Monday</th>
                  <th className="border border-gray-200 px-4 py-2">Tuesday</th>
                  <th className="border border-gray-200 px-4 py-2">Wednesday</th>
                  <th className="border border-gray-200 px-4 py-2">Thursday</th>
                  <th className="border border-gray-200 px-4 py-2">Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">9:00 - 10:30</td>
                  <td className="border border-gray-200 px-4 py-2">CS301: Algorithms</td>
                  <td className="border border-gray-200 px-4 py-2">CS401: ML</td>
                  <td className="border border-gray-200 px-4 py-2">CS301: Algorithms</td>
                  <td className="border border-gray-200 px-4 py-2">CS401: ML</td>
                  <td className="border border-gray-200 px-4 py-2">CS305: Database</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">10:45 - 12:15</td>
                  <td className="border border-gray-200 px-4 py-2">CS305: Database</td>
                  <td className="border border-gray-200 px-4 py-2">CS302: Networks</td>
                  <td className="border border-gray-200 px-4 py-2">CS305: Database</td>
                  <td className="border border-gray-200 px-4 py-2">CS302: Networks</td>
                  <td className="border border-gray-200 px-4 py-2">CS301: Algorithms</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">1:30 - 3:00</td>
                  <td className="border border-gray-200 px-4 py-2">CS302: Networks</td>
                  <td className="border border-gray-200 px-4 py-2">Lab: Algorithms</td>
                  <td className="border border-gray-200 px-4 py-2">CS401: ML</td>
                  <td className="border border-gray-200 px-4 py-2">Lab: Database</td>
                  <td className="border border-gray-200 px-4 py-2">CS302: Networks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Download Complete Timetable (PDF)</a>
          </div>
        </div>
      </Section>

      {/* Courses Section */}
      <Section id="courses" title="Courses">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Core Courses</h3>
            <ul className="space-y-3">
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS301: Algorithms</div>
                <div className="text-sm text-gray-600">Covers design and analysis of algorithms, complexity theory.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS302: Computer Networks</div>
                <div className="text-sm text-gray-600">Network architecture, protocols, and applications.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS303: Operating Systems</div>
                <div className="text-sm text-gray-600">OS principles, processes, memory management, and file systems.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS304: Computer Architecture</div>
                <div className="text-sm text-gray-600">Processor design, memory hierarchy, and I/O systems.</div>
              </li>
              <li>
                <div className="font-medium">CS305: Database Systems</div>
                <div className="text-sm text-gray-600">Database design, SQL, transaction processing, and recovery.</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Elective Courses</h3>
            <ul className="space-y-3">
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS401: Machine Learning</div>
                <div className="text-sm text-gray-600">Supervised and unsupervised learning, neural networks.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS402: Computer Graphics</div>
                <div className="text-sm text-gray-600">2D/3D graphics, rendering, and visualization techniques.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS403: Artificial Intelligence</div>
                <div className="text-sm text-gray-600">Search, knowledge representation, planning, and reasoning.</div>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <div className="font-medium">CS404: Cryptography</div>
                <div className="text-sm text-gray-600">Encryption, authentication, and security protocols.</div>
              </li>
              <li>
                <div className="font-medium">CS405: Cloud Computing</div>
                <div className="text-sm text-gray-600">Cloud architectures, virtualization, and distributed systems.</div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Curriculum Section */}
      <Section id="curriculum" title="Curriculum">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">B.Tech Program Structure</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">First Year</h4>
              <p className="text-gray-700 mb-3">Foundation courses in mathematics, programming, and engineering principles.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 1</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Calculus and Linear Algebra</li>
                    <li>Introduction to Programming</li>
                    <li>Digital Logic Design</li>
                    <li>Physics for Computing</li>
                    <li>Technical Communication</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 2</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Discrete Mathematics</li>
                    <li>Data Structures</li>
                    <li>Computer Organization</li>
                    <li>Probability and Statistics</li>
                    <li>Engineering Ethics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Second Year</h4>
              <p className="text-gray-700 mb-3">Core computer science subjects and fundamental theory.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 3</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Design and Analysis of Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Computer Architecture</li>
                    <li>Formal Languages and Automata</li>
                    <li>Economics for Engineers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 4</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Operating Systems</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Software Engineering</li>
                    <li>Technical Writing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Download Complete Curriculum PDF
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Rules Section */}
      <Section id="rules" title="Academic Rules">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Attendance Requirements</h3>
              <p className="text-gray-700 mb-2">
                Students are required to maintain a minimum of 75% attendance in all courses. Failure to meet this requirement may result in a grade penalty or being barred from the final examination.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Medical absences require proper documentation and must be submitted within 3 days of returning to classes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Grading Policy</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2">Grade</th>
                      <th className="border border-gray-200 px-4 py-2">Percentage Range</th>
                      <th className="border border-gray-200 px-4 py-2">Grade Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">A+</td>
                      <td className="border border-gray-200 px-4 py-2">90-100%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">10</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">A</td>
                      <td className="border border-gray-200 px-4 py-2">80-89%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">9</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">B</td>
                      <td className="border border-gray-200 px-4 py-2">70-79%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">C</td>
                      <td className="border border-gray-200 px-4 py-2">60-69%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">7</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">D</td>
                      <td className="border border-gray-200 px-4 py-2">50-59%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 text-center">F</td>
                      <td className="border border-gray-200 px-4 py-2">Below 50%</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Academic Integrity</h3>
              <p className="text-gray-700">
                The Department maintains a strict policy against academic dishonesty, including plagiarism, cheating, and falsification of data. Violations may result in:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Zero marks for the assignment or examination</li>
                <li>Grade reduction in the course</li>
                <li>Course failure</li>
                <li>Academic probation</li>
                <li>Suspension or expulsion in severe cases</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section id="faq" title="Frequently Asked Questions">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">How do I register for courses?</h3>
                <p className="mt-2 text-gray-600">
                  Course registration is done through the online student portal at the beginning of each semester. The registration window is typically open for two weeks, and students must consult with their academic advisor before finalizing their course selection.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">What is the process for adding/dropping courses?</h3>
                <p className="mt-2 text-gray-600">
                  Students can add or drop courses during the first two weeks of the semester without any penalty. After this period, dropping a course will result in a 'W' (Withdrawal) grade on the transcript. No course changes are permitted after the fourth week.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">How is the CGPA calculated?</h3>
                <p className="mt-2 text-gray-600">
                  The Cumulative Grade Point Average (CGPA) is calculated by multiplying the grade point value of each course by its credit hours, summing these values, and dividing by the total number of credit hours attempted. The result is rounded to two decimal places.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">What resources are available for academic support?</h3>
                <p className="mt-2 text-gray-600">
                  The department offers various support resources including faculty office hours, teaching assistants, peer tutoring programs, and the academic learning center. Additionally, the library provides access to study spaces, reference materials, and online resources.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800">What is the minimum CGPA required to avoid academic probation?</h3>
                <p className="mt-2 text-gray-600">
                  Students must maintain a minimum CGPA of 5.0 to remain in good academic standing. Those falling below this threshold will be placed on academic probation and will need to meet with an academic advisor to develop an improvement plan.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Still have questions?</h3>
              <p className="mt-2 text-gray-600">
                Contact the Academic Office at <a href="mailto:academics@cs.iitdh.ac.in" className="text-indigo-600 hover:underline">academics@cs.iitdh.ac.in</a> or visit during office hours (Monday-Friday, 9:00 AM - 5:00 PM).
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="academics-top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default Academics;
