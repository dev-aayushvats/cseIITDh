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
      {/* Page Title */}
      <div id="admissions-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admissions</h1>
        <p className="text-gray-600">
          Learn about admission requirements, application procedures, and opportunities for prospective students.
        </p>
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
            <h3 className="text-xl font-semibold mb-3">M.Tech in Computer Science and Engineering</h3>
            <p className="text-gray-700 mb-3">
              The Department of CSE at IIT Dharwad invites applications for the M.Tech. in CSE under the TA category for the Academic Year 2025-26.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Eligibility for Admission</h3>
            <h4 className="font-medium mb-2">Qualifying Degree</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-3">
              <li>B. Tech / B. E. in Computer Science and Engineering</li>
              <li>Any B. Tech / B. E. in allied Engineering branches</li>
              <li>Master of Computer Applications (MCA)</li>
              <li>M.Sc. in Computer Science</li>
            </ul>
            <p className="mt-2 text-gray-700">
              A valid GATE score in CSE is essential for all candidates, except for candidates who have B.Tech. or equivalent degree in CSE and allied branches from IITs or BS degree or equivalent degree in CSE or allied branches from IISc with a minimum CPI/CGPA of 8.0 on the scale of 10.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Minimum Eligibility Criteria</h4>
            <p className="text-gray-700 mb-2">For General/General (EWS)/OBC category candidates:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
              <li>Minimum of 60% marks (without round off) in aggregate over the entire duration of the undergraduate program</li>
              <li>Minimum CGPA/CPI of 6.0 on the scale of 0-10</li>
              <li>For MSc in Computer Science: minimum of 60% marks in both BSc and MSc in Computer Science</li>
              <li>For MCA: minimum of 60% marks in both BCA and MCA</li>
            </ul>
            <p className="mt-2 text-gray-700">
              For SC/ST/PwD category candidates, a relaxation of 5% in the performance at the qualifying degree is applicable.
            </p>
            <p className="mt-2 text-sm italic text-gray-600">
              Merely satisfying the eligibility conditions does not guarantee selection into the program.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Selection Process</h3>
            <p className="text-gray-700 mb-2">
              The eligibility requirement in the GATE score is:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
              <li>General/General (EWS): Soft cutoff of 600</li>
              <li>OBC-NCL: 540 (0.9 × 600)</li>
              <li>SC/ST/PwD: 400 (⅔ × 600)</li>
            </ul>
            <p className="mt-2 text-gray-700">
              For admission through GATE score, candidates with higher GATE scores will be allotted seats based on their social category through the common offer acceptance portal (COAP).
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Available Seats</h3>
            <p className="text-gray-700">
              Total available seats: <strong>33</strong> (30 seats distributed as per seat matrix for different social categories + 3 supernumerary seats for IIT/IISc graduates)
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Program Structure (125 credits)</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">Coursework: 61 Credits</p>
                <ul className="list-disc list-inside text-sm pl-3">
                  <li>4 credits: Seminar course (Institute Core)</li>
                  <li>21 credits: Program Core courses</li>
                  <li>36 credits: Electives (at least 24 credits from CSE discipline)</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">M.Tech Project: 64 Credits</p>
                <ul className="list-disc list-inside text-sm pl-3">
                  <li>Phase I: 32 credits</li>
                  <li>Phase II: 32 credits</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-md">
                <p className="font-medium">Additional</p>
                <ul className="list-disc list-inside text-sm pl-3">
                  <li>Compulsory communications skills course (Pass/Not Passed)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Core Courses</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
              <li>Advanced Data Structures and Algorithms (PC, 6 credits)</li>
              <li>Combinatorics and Probability (PC, 6 credits)</li>
              <li>Advanced Data Structures and Algorithms Lab (PC, 3 credits)</li>
              <li>Advanced Software Development Laboratory (PC, 6 credits)</li>
            </ul>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mb-3">For queries related to MTech admissions in CSE, contact:</p>
            <a href="mailto:pgadmissions.cse@iitdh.ac.in" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Email: pgadmissions.cse@iitdh.ac.in
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
            <h3 className="text-xl font-semibold mb-3">F. DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h3>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">F.1. Eligibility for Admission</h3>
            
            <div className="ml-4 mb-4">
              <h4 className="font-semibold mb-2">F.1.a. Qualifying Degree</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>B. Tech / B. E. in Computer Science and Engineering OR</li>
                <li>Any B. Tech / B. E. in allied Engineering branches OR</li>
                <li>Master of Computer Applications (MCA) OR</li>
                <li>M.Sc. in Computer Science</li>
              </ul>
              
              <p className="mt-2 text-gray-700">
                A valid GATE score in Computer Science and Engineering or Data Science and AI* is required.
              </p>
              
              <p className="mt-1 text-sm text-gray-600 italic">
                *Valid GATE score is essential for candidates applying in TA and PA categories (except for candidates who have B.Tech. or equivalent degree from IITs or BS degree from IISc with minimum CPI/CGPA of 8.0 on the scale of 10). GATE score is not mandatory for the EX-category.
              </p>
            </div>
            
            <div className="ml-4 mb-4">
              <h4 className="font-semibold mb-2">F.1.b. Minimum eligibility criteria</h4>
              
              <div className="ml-4 mb-3">
                <h5 className="font-medium mb-1">F.1.b.1 Minimum score in the qualifying degree</h5>
                <p className="text-gray-700 mb-1">For General/General (EWS)/OBC category candidates and/or for candidates where no concession in academic performance is called for, the eligibility criteria in the qualifying degree is either:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-2">
                  <li>A minimum of 60% marks (without round off) in aggregate over the entire duration of the undergraduate program.</li>
                  <li>A minimum Cumulative Grade Point Average (CGPA) or Cumulative Performance Index (CPI) of 6.0 on the scale of 0-10.</li>
                  <li>Candidates with MSc in Computer Science have eligibility criteria of a minimum of 60% marks in both BSc in Computer Science and MSc in Computer Science.</li>
                  <li>Candidates with MCA have eligibility criteria of a minimum of 60% marks in both BCA and MCA.</li>
                  <li>For SC/ST/PwD category candidates, a relaxation of 5% in the performance at the qualifying degree is applicable.</li>
                </ol>
              </div>
              
              <div className="ml-4">
                <h5 className="font-medium mb-1">F.1.b.2 Minimum score in GATE</h5>
                <p className="text-gray-700">
                  For General/General (EWS) category candidates and/or for candidates where no concession in academic performance is called for, the eligibility requirement in the GATE score is cutoff of 500. And for other categories, relaxation is given as per GOI norms, i.e. 0.9*500 = 450 for OBC-NCL and ⅔*500 = 333 for SC/ST/PwD candidates.
                </p>
                <p className="text-gray-700 mt-1 italic">
                  Note that merely satisfying the eligibility conditions does not guarantee selection into the program.
                </p>
              </div>
            </div>
            
            <div className="ml-4">
              <h4 className="font-semibold mb-2">F.1.c. Applicants in the final phase of getting a qualifying degree</h4>
              <p className="text-gray-700">
                Students who are in the final phase of receiving the above-mentioned qualifying degree and who are likely to graduate before commencement of Spring 2024-25 semester of IIT Dharwad are also eligible to apply. However, if offered, the admission to those candidates would be provisional.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">F.2. Financial support category</h3>
            <p className="text-gray-700 mb-2">
              The Dept. of Computer Science and Engineering at IIT Dharwad invites application for the MS program under the following categories only for the Spring 2024-25 semester:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
              <li>TA: The applicant may be asked to indicate the choice of research topics in the order of preference.</li>
              <li>EX: The applicant may be asked to indicate the choice of the research topics in the order of preference.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">F.3. Selection Process</h3>
            <p className="text-gray-700 mb-2">
              Only the eligible applicants are permitted to participate in the selection process. The selection process would involve two rounds:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Round-1: An online interview to test the aptitude, programming skills and knowledge of Discrete Structures and Data Structures and Algorithms.</li>
              <li>Round-2: Candidates shortlisted from round 1 will be called for an interview (online) by the respective panel based on the research area preference mentioned in the admission form.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              The candidates are encouraged to check the Institute Website (https://www.iitdh.ac.in/mtech-research) from time to time. Selection committee decisions are final in all matters.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">F.4. Focus areas of research</h3>
            <div className="space-y-2 text-gray-700 ml-4">
              <div>
                <p className="font-medium">1. Computer Networks, IoT and Security (CN):</p>
                <p className="ml-4">5G/IoT Networks, AI Driven Networking, Network Virtualization, Network/Cyber Security, Blockchains, Software Defined Networks, Network Function Virtualization, Data Center Networking.</p>
              </div>
              <div>
                <p className="font-medium">2. Computer Systems and Programming:</p>
                <p className="ml-4">Approximate Computing, Systems for AI/ML, Modeling and characterization of heterogeneous processors, Runtime Verification of Hardware, Efficient Computer Architectures, Parallel Computing, Compilers and Translation Systems, Programming models and runtime systems.</p>
              </div>
              <div>
                <p className="font-medium">3. Machine learning (ML) and Artificial Intelligence (AI):</p>
                <p className="ml-4">Machine Learning (ML), Deep Learning (DL), Reinforcement Learning (RL), Stochastic Control and Optimization, Bayesian Optimization, Text Mining, Speech and Audio Processing, Handwriting and Document Processing, Natural Language Processing, Machine Translation, LLMs, AI Chatbot Assistant, Computer Vision, ML for Cyber Physical Systems, AR/VR/MX, Mining large data streams, ML for Cyber Security, Big Data Analytics, Distributed data processing, Application of neural networks on Edge devices, Hardware for machine learning systems, GPU/TPU/NPU/ML systems and software stack, quantized and low-precision machine learning.</p>
              </div>
              <div>
                <p className="font-medium">4. Theoretical Computer Science (TCS):</p>
                <p className="ml-4">Algorithms, Concurrency, Formal Verification, Graph Theory, Logic.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Important Dates</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-700">
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">Launching applications online</td>
                    <td className="px-4 py-2 border">26/03/2025</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Deadline for M.Tech (R) online applications</td>
                    <td className="px-4 py-2 border">25/04/2025</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">Announcing Round 1: eligibility shortlist on the website and Exam/Interview timeline</td>
                    <td className="px-4 py-2 border">16/05/2025 to 22/06/2025</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Date of results (Tentative)</td>
                    <td className="px-4 py-2 border">03-07-2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  For admission related queries, please contact <span className="font-semibold">pgadmissions@iitdh.ac.in</span>.
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  For CSE department specific queries, email <span className="font-semibold">pgadmissions.cse@iitdh.ac.in</span> with the Subject "Query related to M.Tech. by Research Admissions for CSE".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
      {/* PhD Section */}
      <Section id="phd" title="PhD Admission - Computer Science and Engineering">
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-3">Program Overview</h3>
        <p className="text-gray-700 mb-3">The PhD program in Computer Science and Engineering is designed for students interested in pursuing advanced research. The program typically takes 4-5 years to complete and involves coursework, a comprehensive exam, and original research leading to a dissertation.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Important Dates</h3>
        <ul className="list-none space-y-1 text-gray-700">
          <li><span className="font-medium">Launching applications online:</span> 26/03/2025</li>
          <li><span className="font-medium">Deadline for PhD online applications:</span> 25/04/2025</li>
          <li><span className="font-medium">Announcing Round 1 eligibility shortlist and Exam/Interview timeline:</span> 16/05/2025 to 22/06/2025</li>
          <li><span className="font-medium">Date of results (Tentative):</span> 03/07/2025</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Qualifying Degree</h3>
        <p className="text-gray-700">M. Tech. or equivalent degree in Computer Science and Engineering or any related stream.</p>
        
        <h4 className="font-medium mt-4 mb-2">Minimum score in the qualifying degree</h4>
        <p className="text-gray-700 mb-2">For General/OBC category candidates and/or for candidates where no concession in academic performance is called for, the eligibility criteria in the qualifying degree (M.Tech./M.E.):</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
          <li>A minimum of 60% marks (without round off) in aggregate, OR,</li>
          <li>A minimum Cumulative Grade Point Average (CGPA) or Cumulative Performance Index (CPI) of 6.0 on the scale of 0-10; with corresponding proportional requirements when the scales are other than on 0-10, (for example, 4.8 on a scale of 0-8).</li>
        </ul>
        <p className="text-gray-700">For SC/ST category candidates and differently abled candidates (PwD), a relaxation of 5% (or CPI/CGPA of 0.5 on the scale of 0-10) in the qualifying degree is applicable.</p>
        
        <h4 className="font-medium mt-4 mb-2">Eligibility of applicants in the final phase of getting the qualifying degree</h4>
        <p className="text-gray-700">Students who are in the final phase of receiving the above-mentioned qualifying degree and who are likely to graduate before commencement of Autumn 2025-26 semester of IIT Dharwad are also eligible to apply. However, if offered, admission to those candidates would be provisional.</p>
        <p className="text-gray-700 mt-2">To join an academic program at IIT Dharwad, such candidates need to furnish necessary documents regarding completion of the degree on the date of joining. They need to meet the criteria specified in the section above considering updated score in the qualifying degree. In the meanwhile, the aggregate academic performance announced by the respective university till the last date for submission should be used to determine eligibility for application and same to be reported in the online application.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Selection Process</h3>
        <p className="text-gray-700 mb-3">Only eligible applicants are permitted to participate in the selection process. The selection process involves two rounds:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><span className="font-medium">Round 1:</span> An online interview to test the aptitude, programming skills and knowledge of discrete structures, data structures and algorithms of the candidate.</li>
          <li><span className="font-medium">Round 2:</span> The shortlisted candidates from round-1 will be called for interview (online) by the respective panel based on the research area preference mentioned in the admission form.</li>
        </ol>
        <p className="text-gray-700 mt-3">The candidates are encouraged to check the Institute website <a href="https://www.iitdh.ac.in/doctoral-0" className="text-blue-600 hover:underline">https://www.iitdh.ac.in/doctoral-0</a> from time to time. Selection committee decisions are final in all matters including any disciplinary matters/malpractice.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Research Areas</h3>
        <p className="text-gray-700 mb-3">The research topics are broadly classified as given below. The applicant may be asked to indicate the choice of research topics in order of preference.</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">1. Computer Networks, IoT and Security (CN)</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>5G/IoT Networks, AI Driven Networking, Network Virtualization</li>
              <li>Network/Cyber Security, Blockchains</li>
              <li>Software Defined Networks, Network Function Virtualization</li>
              <li>Data Center Networking</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">2. Computer Systems and Programming</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Approximate Computing, Systems for AI/ML</li>
              <li>Modeling and characterization of heterogeneous processors</li>
              <li>Runtime Verification of Hardware and Efficient Computer Architectures</li>
              <li>Parallel Computing, Compilers and Translation Systems</li>
              <li>Programming models and runtime systems</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">3. Machine Learning (ML) and Artificial Intelligence (AI)</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Machine Learning (ML), Deep Learning (DL), Reinforcement Learning (RL)</li>
              <li>Computer Vision, Stochastic Control and Optimization</li>
              <li>Bayesian Optimization, Text Mining, Speech and Audio Processing</li>
              <li>Handwriting and Document Processing, Natural Language Processing</li>
              <li>Machine Translation, LLMs, AI Chatbot Assistant</li>
              <li>ML for Cyber Physical Systems, AR/VR/MX</li>
              <li>Mining large data streams, ML for Cyber Security</li>
              <li>Big Data Analytics, Distributed data processing</li>
              <li>Application of neural networks on Edge devices</li>
              <li>Hardware for machine learning systems (GPU/TPU/NPU/ML systems and software stack)</li>
              <li>Quantized and low precision machine learning</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">4. Theoretical Computer Science (TCS)</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Algorithms, Concurrency, Formal Verification</li>
              <li>Graph Theory, Logic</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Financial Assistance</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium mb-2">Teaching Assistantship (TA)</h4>
            <p className="text-gray-700">The applicant may be asked to indicate the choice of research topics in the order of preference.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Externally Sponsored (EX)</h4>
            <p className="text-gray-700">In this call, applications are invited under EX category for all research areas (1) - (4).</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Project Assistantship (PA)</h4>
            <p className="text-gray-700">There are no PA positions available this time.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Syllabus for Selection Process</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium mb-1">Discrete Mathematics</h4>
            <p className="text-sm text-gray-600">Propositional and first order logic. Sets, relations, functions, partial orders, and lattices. Groups. Graphs: connectivity, matching, coloring. Combinatorics: counting, recurrence relations, generating functions, Linear Algebra: Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition. Calculus: Limits, continuity, and differentiability. Maxima and minima. Mean value theorem. Integration. Probability: Random variables. Uniform, normal, exponential, Poisson, and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Computer Organization and Architecture</h4>
            <p className="text-sm text-gray-600">Machine instructions and addressing modes. ALU, data‐path and control unit. Instruction pipelining. Memory hierarchy: cache, main memory, and secondary storage; I/O interface (interrupt and DMA mode).</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Programming and Data Structures</h4>
            <p className="text-sm text-gray-600">Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Algorithms</h4>
            <p className="text-sm text-gray-600">Searching, sorting, hashing. Asymptotic worst-case time and space complexity. Algorithm design techniques: greedy, dynamic programming and divide‐and‐conquer. Graph search, minimum spanning trees, shortest paths.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Theory of Computation</h4>
            <p className="text-sm text-gray-600">Regular expressions and finite automata. Context-free grammar and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Compiler Design</h4>
            <p className="text-sm text-gray-600">Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Operating System</h4>
            <p className="text-sm text-gray-600">Processes, threads, inter‐process communication, concurrency and synchronization. Deadlock. CPU scheduling. Memory management and virtual memory. File systems.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Computer Networks</h4>
            <p className="text-sm text-gray-600">Concept of layering. LAN technologies (Ethernet). Flow and error control techniques, switching. IPv4/IPv6, routers and routing algorithms (distance vector, link state). TCP/UDP and sockets, congestion control. Application layer protocols (DNS, SMTP, POP, FTP, HTTP). Basics of Wi-Fi. Network security: authentication, basics of public key and private key cryptography, digital signatures and certificates, firewalls.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Updates</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>For admission related queries, please contact <a href="mailto:pgadmissions@iitdh.ac.in" className="text-blue-600 hover:underline">pgadmissions@iitdh.ac.in</a></li>
        </ul>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">For all International Applicants to PhD program:</h4>
          <p className="text-sm text-gray-600">All international applicants, i.e. those with a passport other than Indian Passport, can apply using the study-in-india portal to select programs in IIT Dharwad. <a href="#" className="text-blue-600 hover:underline">Click Here</a></p>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium mb-2">DIA Fellowship scheme:</h4>
          <p className="text-sm text-gray-600">Government of India has announced a special fellowship scheme for applicants from ASEAN countries to PhD programs in IITs - Doctoral Fellowships in India for ASEAN (DIA). (Note- It was also referred to as ASEAN fellowship in the past.)</p>
          <p className="text-sm text-gray-600 mt-2">
            Website - <a href="http://www.asean.iitd.ac.in/" className="text-blue-600 hover:underline">http://www.asean.iitd.ac.in/</a> and <a href="http://www.asean-iit.in/" className="text-blue-600 hover:underline">http://www.asean-iit.in/</a><br/>
            DIA YouTube promotional video - <a href="https://youtu.be/B5wxQU715Ec" className="text-blue-600 hover:underline">https://youtu.be/B5wxQU715Ec</a>
          </p>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600">For any queries kindly contact <a href="mailto:pgadmissions@iitdh.ac.in" className="text-blue-600 hover:underline">pgadmissions@iitdh.ac.in</a></p>
        </div>
      </div>
      
      <div className="mt-6">
        <a href="https://admissions.cims.iitdh.ac.in/#/userLogin" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">Click Here To Apply</a>
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