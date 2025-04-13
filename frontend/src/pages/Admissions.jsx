import React from 'react';
import { Link } from 'react-scroll';

// Navigation Card Component
const NavCard = ({ title, description, targetId }) => {
  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
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

// Admissions Page
const Admissions = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Navigation Cards */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admissions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <NavCard 
            title="B.Tech" 
            description="4-year Undergraduate Program"
            targetId="btech" 
          />
          <NavCard 
            title="M.Tech" 
            description="2-year Postgraduate Program"
            targetId="mtech" 
          />
          <NavCard 
            title="MS (Research)" 
            description="Research-based Master's Program"
            targetId="ms" 
          />
          <NavCard 
            title="PhD" 
            description="Doctoral Program"
            targetId="phd" 
          />
          <NavCard 
            title="BS-MS Dual Degree" 
            description="5-year Integrated Program"
            targetId="bsms" 
          />
          <NavCard 
            title="International Students" 
            description="Admission for Foreign Nationals"
            targetId="international" 
          />
        </div>
      </div>

      {/* B.Tech Section */}
      <Section id="btech" title="B.Tech Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
              <p className="text-gray-700 mb-3">
                The B.Tech in Computer Science and Engineering is a 4-year undergraduate program designed to provide a strong foundation in computer science fundamentals and practical skills. The program prepares students for careers in software development, research, and further academic pursuits.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Admission is based on the <strong>JEE Advanced</strong> rank and counseling through the <strong>Joint Seat Allocation Authority (JoSAA)</strong>.</li>
                <li>Candidates must qualify JEE Main, followed by JEE Advanced.</li>
                <li>Seat allocation is done through multiple rounds of counseling conducted by JoSAA.</li>
                <li>A limited number of seats are available through the DASA (Direct Admission of Students Abroad) scheme for foreign nationals and PIOs.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Passed 10+2 examination with Physics, Chemistry, and Mathematics as compulsory subjects.</li>
                <li>Must have a valid JEE Advanced rank.</li>
                <li>At least 75% marks in 10+2 (65% for SC/ST candidates) or be in the top 20 percentile in their respective board examinations.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Important Dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium">JEE Main:</p>
                  <p className="text-sm text-gray-600">January and April sessions</p>
                </div>
                <div>
                  <p className="text-sm font-medium">JEE Advanced:</p>
                  <p className="text-sm text-gray-600">Usually in May/June</p>
                </div>
                <div>
                  <p className="text-sm font-medium">JoSAA Counseling:</p>
                  <p className="text-sm text-gray-600">June-July</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Semester Start:</p>
                  <p className="text-sm text-gray-600">Late July/August</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 mr-4">
                JEE Advanced Website
              </a>
              <a href="https://josaa.nic.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                JoSAA Portal
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* M.Tech Section */}
      <Section id="mtech" title="M.Tech Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
              <p className="text-gray-700 mb-3">
                The M.Tech program in Computer Science and Engineering is a 2-year postgraduate degree designed to provide advanced knowledge in specialized areas of computer science. Students can specialize in areas such as Artificial Intelligence, Data Science, Computer Systems, and Security.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Admissions are primarily through the <strong>Graduate Aptitude Test in Engineering (GATE)</strong>.</li>
                <li>Shortlisted candidates may be called for a written test and/or interview.</li>
                <li>Final selection is based on GATE score, academic record, and performance in the interview/written test.</li>
                <li>Some seats may be available for sponsored candidates from industry or government organizations.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>B.Tech/B.E. degree in Computer Science, Information Technology, or related disciplines with at least 60% marks or 6.5 CGPA on a 10-point scale (55% or 6.0 CGPA for SC/ST/PwD candidates).</li>
                <li>Valid GATE score in Computer Science and Information Technology (CS), or Electronics and Communication (EC).</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Specializations Offered</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded-md">Artificial Intelligence</div>
                <div className="bg-white p-2 rounded-md">Machine Learning</div>
                <div className="bg-white p-2 rounded-md">Data Science</div>
                <div className="bg-white p-2 rounded-md">Computer Systems</div>
                <div className="bg-white p-2 rounded-md">Information Security</div>
                <div className="bg-white p-2 rounded-md">Computer Vision</div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="https://gate.iitb.ac.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                GATE Portal
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* MS Research Section */}
      <Section id="ms" title="MS (Research) Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
              <p className="text-gray-700 mb-3">
                The MS (Research) program is a research-oriented master's degree focusing on developing research skills and expertise in specific areas of computer science. The program typically involves coursework and a substantial research thesis.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Applications are invited twice a year (May and November).</li>
                <li>Shortlisted candidates are called for a written test and interview.</li>
                <li>Selection is based on academic background, research aptitude, and performance in the interview.</li>
                <li>GATE score is preferred but not mandatory for candidates with exceptional academic records.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>B.Tech/B.E. or equivalent degree in Computer Science, Information Technology, or related disciplines with at least 60% marks or 6.5 CGPA (55% or 6.0 CGPA for SC/ST/PwD candidates).</li>
                <li>Candidates in their final year of qualifying degree can also apply, subject to meeting the criteria by the time of admission.</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    It is highly recommended that prospective students contact potential faculty supervisors before applying to discuss research interests and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PhD Section */}
      <Section id="phd" title="PhD Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
              <p className="text-gray-700 mb-3">
                The PhD program in Computer Science and Engineering is designed for students interested in pursuing advanced research. The program typically takes 4-5 years to complete and involves coursework, a comprehensive exam, and original research leading to a dissertation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Applications are accepted twice a year for admission in January and August semesters.</li>
                <li>Shortlisted candidates are invited for a written test followed by an interview.</li>
                <li>Selection is based on academic background, research potential, and alignment with faculty research interests.</li>
                <li>Candidates must identify potential research areas and faculty supervisors in their application.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>M.Tech/MS/M.E. in Computer Science, Information Technology, or related areas with at least 65% marks or 7.0 CGPA (60% or 6.5 CGPA for SC/ST/PwD candidates).</li>
                <li>Exceptional B.Tech/B.E. graduates with outstanding academic records may be considered under the direct PhD program.</li>
                <li>Valid GATE score or other national level test scores (UGC/CSIR NET, etc.) are preferred.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Research Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Theoretical Computer Science</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Algorithms and Complexity</li>
                    <li>Formal Methods</li>
                    <li>Logic and Automata Theory</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Artificial Intelligence</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Machine Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Systems</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Distributed Systems</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Security and Privacy</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Cryptography</li>
                    <li>Network Security</li>
                    <li>Privacy-preserving Computing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* BS-MS Dual Degree Section */}
      <Section id="bsms" title="BS-MS Dual Degree Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
              <p className="text-gray-700 mb-3">
                The BS-MS Dual Degree program is a 5-year integrated program that awards both Bachelor's and Master's degrees upon completion. The program provides a seamless transition from undergraduate to postgraduate studies, with increased focus on research in the later years.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Admission is through the <strong>Joint Entrance Examination (JEE) Advanced</strong>, followed by counseling through JoSAA.</li>
                <li>The selection process and seat allocation are similar to the B.Tech program.</li>
                <li>Students can also opt for this program after completing their first year of B.Tech, subject to meeting academic criteria.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Program Structure</h3>
              <p className="text-gray-700 mb-3">
                The program is divided into two components:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>BS Component (3 years):</strong> Focus on fundamentals of computer science and engineering, similar to the B.Tech curriculum.</li>
                <li><strong>MS Component (2 years):</strong> Advanced coursework, specialization, and a significant research project or thesis.</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Program Benefits</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Reduced total time compared to pursuing B.Tech and M.Tech separately.</li>
                <li>Seamless curriculum integration between undergraduate and postgraduate studies.</li>
                <li>Early exposure to research methodologies.</li>
                <li>Opportunity to work on extended research projects with faculty members.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      {/* International Students Section */}
      <Section id="international" title="International Student Admissions">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Admission Options</h3>
              <p className="text-gray-700 mb-3">
                International students can apply to our programs through multiple pathways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>DASA (Direct Admission of Students Abroad):</strong> For B.Tech admissions.</li>
                <li><strong>Study in India Program:</strong> For various degree programs.</li>
                <li><strong>ICCR (Indian Council for Cultural Relations) Scholarships:</strong> For students from specific countries.</li>
                <li><strong>Direct Application:</strong> For graduate programs (M.Tech, MS, PhD).</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Eligibility Requirements</h3>
              <p className="text-gray-700 mb-3">
                General requirements for international applicants:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Educational qualifications equivalent to the Indian system as assessed by the Association of Indian Universities.</li>
                <li>English proficiency demonstrated through TOEFL, IELTS, or other recognized tests.</li>
                <li>Financial documentation proving ability to cover tuition and living expenses.</li>
                <li>Valid passport and student visa for India.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Application Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Review program requirements and application deadlines on our website.</li>
                <li>Complete the online application form for international students.</li>
                <li>Submit required documents, including academic transcripts, passport copy, and English proficiency test scores.</li>
                <li>Pay the application fee.</li>
                <li>If shortlisted, participate in online interviews or tests as required.</li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    International applicants are encouraged to start the application process at least 6 months before the intended start date to allow sufficient time for visa processing and other formalities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="#" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                International Admissions Guide
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="admissions-top"
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

export default Admissions; 