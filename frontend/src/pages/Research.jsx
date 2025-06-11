import React, { useEffect, useState } from 'react';
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

// Research Page Component
const Research = () => {
  const [instructionalLabs, setInstructionalLabs] = useState([]);
  const [rndLabs, setRndLabs] = useState([]);
  const [sponsoredProjects, setSponsoredProjects] = useState([]);
  const [consultancyProjects, setConsultancyProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLabsAndProjects = async () => {
      try {
        // Fetch Labs
        const labsResponse = await fetch('https://cse.iitdh.ac.in/strapi/api/research-labs');
        if (!labsResponse.ok) {
          throw new Error(`HTTP error! status: ${labsResponse.status}`);
        }
        const labsData = await labsResponse.json();
        
        const fetchedInstructionalLabs = labsData.data
          .filter(lab => lab.Type === 'Instructional')
          .map(lab => lab.Name);

        const fetchedRndLabs = labsData.data
          .filter(lab => lab.Type === 'RnD')
          .map(lab => ({ 
            name: lab.Name, 
            link: lab.Link,
            img: null, 
            imgWidth: null, 
            imgHeight: null, 
            hiring: false 
          }));

        setInstructionalLabs(fetchedInstructionalLabs);
        setRndLabs(fetchedRndLabs);

        // Fetch Projects
        const projectsResponse = await fetch('https://cse.iitdh.ac.in/strapi/api/research-projects');
        if (!projectsResponse.ok) {
          throw new Error(`HTTP error! status: ${projectsResponse.status}`);
        }
        const projectsData = await projectsResponse.json();

        const fetchedSponsoredProjects = projectsData.data.filter(project => project.Type === 'RnD');
        const fetchedConsultancyProjects = projectsData.data.filter(project => project.Type === 'Consultancy/Testing'); // Assuming a 'Consultancy' type exists

        setSponsoredProjects(fetchedSponsoredProjects);
        setConsultancyProjects(fetchedConsultancyProjects);

      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchLabsAndProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading research data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="research-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Research</h1>
        <p className="text-gray-600">
          Explore research activities, publications, patents, and laboratories of the Department of Computer Science and Engineering.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        <NavCard 
          title="Research Labs" 
          icon={<i className="fas fa-flask"></i>}
          targetId="labs" 
        />
        <NavCard 
          title="Research-Projects" 
          icon={<i className="fas fa-flask"></i>}
          targetId="research-projects" 
        />
        </div>

      {/* Labs Section */}
      <Section id="labs" title="Department Facilities">
        {loading && <p>Loading labs...</p>}
        {error && <p className="text-red-500">Error loading labs: {error.message}</p>}
        {!loading && !error && (
          <>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instructional Labs</h3>
              <ul className="list-disc list-inside ml-6 text-gray-700">
                {instructionalLabs.map((lab, idx) => (
                  <li key={idx}>{lab}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Research & Development Labs</h3>
              <ul className="list-disc list-inside ml-6 text-gray-700">
                {rndLabs.map((lab, idx) => (
                  <li key={idx} className="mb-2">
                    {lab.link ? (
                      <a href={lab.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                        {lab.name}
                        {lab.img && (
                          <img src={lab.img} alt="EMA" width={lab.imgWidth} height={lab.imgHeight} className="inline ml-2 align-middle" />
                        )}
                      </a>
                    ) : lab.name}
                    {lab.hiring && (
                      <span className="ml-2 text-xs text-green-700 font-semibold">(EMA Lab is hiring now! <a href="https://www.iitdh.ac.in/emerging-multimedia-and-ai-lab-ema-lab-hiring-were-looking-passionate-researchers-join-us-ms-phd" target="_blank" className="underline">Click Here to know more</a>)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Section>

      <section id="research-projects" title ="Research-Projects">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Research-Projects</h3>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-8 text-center">
              <h2 class="section-title mt-6">R&D Sponsored Projects in the Past Five Years</h2>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="table table-bordered table-striped table-hover min-w-full">
              <thead class="thead-dark">
                <tr>
                  <th class="border border-gray-400 px-4 py-2">S. No.</th>
                  <th class="border border-gray-400 px-4 py-2">Project Title</th>
                  <th class="border border-gray-400 px-4 py-2">Project Area</th>
                  <th class="border border-gray-400 px-4 py-2">Duration</th>
                  <th class="border border-gray-400 px-4 py-2">PI</th>
                  <th class="border border-gray-400 px-4 py-2">Co-PI</th>
                  <th class="border border-gray-400 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {sponsoredProjects.map((project, idx) => (
                  <tr key={project.id}>
                    <td class="border border-gray-400 px-4 py-2">{idx + 1}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Title}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Area}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Duration}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.PI || '-'}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.CoPI || '-'}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.CurrentStatus || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="row justify-content-center mb-4">
            <div class="col-lg-8 text-center">
              <h2 class="section-title mt-14 ">Consultancy/Testing Projects in the past five years</h2>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="table table-bordered table-striped min-w-full">
              <thead class="thead-dark">
                <tr>
                  <th class="border border-gray-400 px-4 py-2">S. No.</th>
                  <th class="border border-gray-400 px-4 py-2">Title</th>
                  <th class="border border-gray-400 px-4 py-2">Area</th>
                  <th class="border border-gray-400 px-4 py-2">Duration</th>
                  <th class="border border-gray-400 px-4 py-2">PI</th>
                  <th class="border border-gray-400 px-4 py-2">Co-PI</th>
                  <th class="border border-gray-400 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {consultancyProjects.map((project, idx) => (
                  <tr key={project.id}>
                    <td class="border border-gray-400 px-4 py-2">{idx + 1}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Title}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Area}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.Duration}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.PI || '-'}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.CoPI || '-'}</td>
                    <td class="border border-gray-400 px-4 py-2">{project.CurrentStatus || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="research-top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
};

export default Research; 