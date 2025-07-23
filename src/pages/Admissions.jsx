import React, { useState, useEffect } from 'react';
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

// Helper function to parse markdown links
const parseMarkdownLink = (text) => {
  const regex = /\[(.*?)\]\((.*?)\)/;
  const match = text.match(regex);
  if (match) {
    const linkText = match[1];
    const url = match[2];
    const parts = text.split(regex);
    return (
      <>
        {parts[0]}
        <a href={url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
        {parts[parts.length - 1]}
      </>
    );
  } else if (text.startsWith("http")) {
    return <a href={text} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{text}</a>;
  } else {
    return text;
  }
};

// Admissions Page
const Admissions = () => {
  const [admissionsData, setAdmissionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmissionsData = async () => {
      try {
        const response = await fetch('https://cse.iitdh.ac.in/strapi/api/admissions-pages');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setAdmissionsData(result.data[0].allData);
        } else {
          setError('No admissions data found.');
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissionsData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading admissions data...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  if (!admissionsData) {
    return <div className="text-center py-10">No admissions data available.</div>;
  }

  const { btech_admission, mtech_admission, ms_admission, phd_admission } = admissionsData;

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="admissions-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admissions</h1>
        <p className="text-gray-600">
          Learn about admission requirements, application procedures, and opportunities for prospective students.<br></br>
          Redirect to IIT DHARWAD webpage Admission section,by clicking on the button below.
        </p>
      </div>
<div className="text-center mt-10">
      
         <a
  href="https://www.iitdh.ac.in/admissions"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
>
  Redirect to main website
</a>

 </div>

      {/* B.Tech Section */}
      <Section id="btech" title="B.Tech Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {btech_admission.program_overview && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{btech_admission.program_overview.heading}</h3>
                <p className="text-gray-700 mb-3">
                  {btech_admission.program_overview.description}
                </p>
              </div>
            )}

            {btech_admission.admission_process && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{btech_admission.admission_process.heading}</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {btech_admission.admission_process.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {btech_admission.eligibility && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{btech_admission.eligibility.heading}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {btech_admission.eligibility.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
              </div>
            )}

            {/*btech_admission.important_dates && (
              <div className="bg-indigo-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">{btech_admission.important_dates.heading}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {btech_admission.important_dates.dates.map((item, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )*/}

            {btech_admission.links && (
              <div className="text-center">
                <a href={btech_admission.links.jee_advanced_website.match(/\((.*?)\)/)[1]} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 mr-4">
                  {btech_admission.links.jee_advanced_website.match(/\[(.*?)\]/)[1]}
                </a>
                <a href={btech_admission.links.josaa_portal.match(/\((.*?)\)/)[1]} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  {btech_admission.links.josaa_portal.match(/\[(.*?)\]/)[1]}
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* M.Tech Section */}
      <Section id="mtech" title="M.Tech Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {mtech_admission.mtech_cse && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{mtech_admission.mtech_cse.heading}</h3>
                <p className="text-gray-700 mb-3">
                  {mtech_admission.mtech_cse.description}
                </p>
              </div>
            )}

            {mtech_admission.eligibility_admission && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{mtech_admission.eligibility_admission.heading}</h3>
                {mtech_admission.eligibility_admission.qualifying_degree && (
                  <h4 className="font-medium mb-2">{mtech_admission.eligibility_admission.qualifying_degree.heading}</h4>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-3">
                  {mtech_admission.eligibility_admission.qualifying_degree.degrees.map((degree, index) => (
                    <li key={index}>{degree}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-700">
                  {mtech_admission.eligibility_admission.qualifying_degree.gate_requirement}
                </p>
              </div>
            )}

            {mtech_admission.eligibility_admission.minimum_eligibility_criteria && (
              <div>
                <h4 className="font-medium mb-2">{mtech_admission.eligibility_admission.minimum_eligibility_criteria.heading}</h4>
                <p className="text-gray-700 mb-2">{mtech_admission.eligibility_admission.minimum_eligibility_criteria.general.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
                  {mtech_admission.eligibility_admission.minimum_eligibility_criteria.general.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-700">
                  {mtech_admission.eligibility_admission.minimum_eligibility_criteria.sc_st_pwd}
                </p>
                <p className="mt-2 text-sm italic text-gray-600">
                  {mtech_admission.eligibility_admission.minimum_eligibility_criteria.note}
                </p>
              </div>
            )}

            {mtech_admission.selection_process && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{mtech_admission.selection_process.heading}</h3>
                <p className="text-gray-700 mb-2">
                  {mtech_admission.selection_process.gate_score_requirement}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
                  {mtech_admission.selection_process.gate_scores.map((score, index) => (
                    <li key={index}>{score}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-700">
                  {mtech_admission.selection_process.admission_process}
                </p>
              </div>
            )}

            {mtech_admission.available_seats && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{mtech_admission.available_seats.heading}</h3>
                <p className="text-gray-700">
                  <strong>{mtech_admission.available_seats.total_seats}</strong>
                </p>
              </div>
            )}

            {mtech_admission.program_structure && (
              <div className="bg-indigo-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">{mtech_admission.program_structure.heading}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {mtech_admission.program_structure.coursework && (
                    <div className="bg-white p-3 rounded-md">
                      <p className="font-medium">{mtech_admission.program_structure.coursework.heading}</p>
                      <ul className="list-disc list-inside text-sm pl-3">
                        {mtech_admission.program_structure.coursework.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mtech_admission.program_structure.mtech_project && (
                    <div className="bg-white p-3 rounded-md">
                      <p className="font-medium">{mtech_admission.program_structure.mtech_project.heading}</p>
                      <ul className="list-disc list-inside text-sm pl-3">
                        {mtech_admission.program_structure.mtech_project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mtech_admission.program_structure.additional && (
                    <div className="bg-white p-3 rounded-md">
                      <p className="font-medium">{mtech_admission.program_structure.additional.heading}</p>
                      <ul className="list-disc list-inside text-sm pl-3">
                        {mtech_admission.program_structure.additional.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {mtech_admission.core_courses && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{mtech_admission.core_courses.heading}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 pl-3">
                  {mtech_admission.core_courses.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            )}

            {mtech_admission.contact && (
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 mb-3">{mtech_admission.contact.heading}</p>
                <a href={mtech_admission.contact.email.match(/\((.*?)\)/)[1]} className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  {mtech_admission.contact.email.match(/\[(.*?)\]/)[1]}
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* MS Research Section */}
      <Section id="ms" title="Mtech by Research Admission">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {ms_admission.department && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.department.heading}</h3>
              </div>
            )}

            {ms_admission.eligibility_admission && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.eligibility_admission.heading}</h3>

                <div className="ml-4 mb-4">
                  <h4 className="font-semibold mb-2">{ms_admission.eligibility_admission.qualifying_degree.heading}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {ms_admission.eligibility_admission.qualifying_degree.degrees.map((degree, index) => (
                      <li key={index}>{degree}</li>
                    ))}
                  </ul>

                  <p className="mt-2 text-gray-700">
                    {ms_admission.eligibility_admission.qualifying_degree.gate_requirement}
                  </p>

                  <p className="mt-1 text-sm text-gray-600 italic">
                    {ms_admission.eligibility_admission.qualifying_degree.gate_note}
                  </p>
                </div>

                {ms_admission.eligibility_admission.minimum_eligibility_criteria && (
                  <div className="ml-4 mb-4">
                    <h4 className="font-semibold mb-2">{ms_admission.eligibility_admission.minimum_eligibility_criteria.heading}</h4>

                    {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_qualifying_degree && (
                      <div className="ml-4 mb-3">
                        <h5 className="font-medium mb-1">{ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_qualifying_degree.heading}</h5>
                        <p className="text-gray-700 mb-1">{ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_qualifying_degree.description}</p>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-2">
                          {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_qualifying_degree.criteria.map((criterion, index) => (
                            <li key={index}>{criterion}</li>
                          ))}
                        </ol>
                        <p className="text-gray-700">
                          {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_qualifying_degree.sc_st_pwd}
                        </p>
                      </div>
                    )}

                    {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_gate && (
                      <div className="ml-4">
                        <h5 className="font-medium mb-1">{ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_gate.heading}</h5>
                        <p className="text-gray-700">
                          {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_gate.description}
                        </p>
                        <p className="text-gray-700 mt-1 italic">
                          {ms_admission.eligibility_admission.minimum_eligibility_criteria.minimum_score_gate.note}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {ms_admission.eligibility_admission.applicants_final_phase && (
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">{ms_admission.eligibility_admission.applicants_final_phase.heading}</h4>
                    <p className="text-gray-700">
                      {ms_admission.eligibility_admission.applicants_final_phase.description}
                    </p>
                  </div>
                )}
              </div>
            )}

            {ms_admission.financial_support_category && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.financial_support_category.heading}</h3>
                <p className="text-gray-700 mb-2">
                  {ms_admission.financial_support_category.description}
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  {ms_admission.financial_support_category.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ol>
              </div>
            )}

            {ms_admission.selection_process && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.selection_process.heading}</h3>
                <p className="text-gray-700 mb-2">
                  {ms_admission.selection_process.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  {ms_admission.selection_process.rounds.map((round, index) => (
                    <li key={index}>{round}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-2">
                  The candidates are encouraged to check the Institute website {parseMarkdownLink(ms_admission.selection_process.note)} from time to time. Selection committee decisions are final in all matters.
                </p>
              </div>
            )}

            {ms_admission.focus_areas_research && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.focus_areas_research.heading}</h3>
                <p className="text-gray-700 mb-3">The applicant may be asked to indicate the choice of research topics in order of preference.</p>

                <div className="space-y-2 text-gray-700 ml-4">
                  {ms_admission.focus_areas_research.areas.map((area, index) => (
                    <div key={index}>
                      <p className="font-medium">{area.area}</p>
                      <p className="ml-4">{area.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {ms_admission.important_dates && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{ms_admission.important_dates.heading}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-gray-700">
                    <tbody>
                      {ms_admission.important_dates.dates.map((dateItem, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                          <td className="px-4 py-2 border">{dateItem.event}</td>
                          <td className="px-4 py-2 border">{dateItem.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {ms_admission.contact_information && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      {ms_admission.contact_information.heading} <span className="font-semibold">{parseMarkdownLink(ms_admission.contact_information.email_general)}</span>.
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      {ms_admission.contact_information.email_cse.split('email ')[0]}email <span className="font-semibold">{parseMarkdownLink(ms_admission.contact_information.email_cse.split('email ')[1].split(' with the Subject')[0])}</span> with the Subject "Query related to M.Tech. by Research Admissions for CSE".
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
      {/* PhD Section */}
      <Section id="phd" title="PhD Admission - Computer Science and Engineering">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-8">
            {phd_admission.program_overview && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.program_overview.heading}</h3>
                <p className="text-gray-700 mb-3">{phd_admission.program_overview.description}</p>
              </div>
            )}

            {phd_admission.important_dates && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.important_dates.heading}</h3>
                <ul className="list-none space-y-1 text-gray-700">
                  {phd_admission.important_dates.dates.map((dateItem, index) => (
                    <li key={index}><span className="font-medium">{dateItem.event}</span> {dateItem.date}</li>
                  ))}
                </ul>
              </div>
            )}

            {phd_admission.qualifying_degree && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.qualifying_degree.heading}</h3>
                <p className="text-gray-700">{phd_admission.qualifying_degree.degree}</p>

                {phd_admission.qualifying_degree.minimum_score && (
                  <h4 className="font-medium mt-4 mb-2">{phd_admission.qualifying_degree.minimum_score.heading}</h4>
                )}
                <p className="text-gray-700 mb-2">{phd_admission.qualifying_degree.minimum_score.general.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  {phd_admission.qualifying_degree.minimum_score.general.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
                <p className="text-gray-700">{phd_admission.qualifying_degree.minimum_score.sc_st_pwd}</p>

                {phd_admission.qualifying_degree.eligibility_applicants_final_phase && (
                  <h4 className="font-medium mt-4 mb-2">{phd_admission.qualifying_degree.eligibility_applicants_final_phase.heading}</h4>
                )}
                <p className="text-gray-700">
                  {phd_admission.qualifying_degree.eligibility_applicants_final_phase.description}
                </p>
                <p className="text-gray-700 mt-2">
                  {phd_admission.qualifying_degree.eligibility_applicants_final_phase.note}
                </p>
              </div>
            )}

            {phd_admission.selection_process && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.selection_process.heading}</h3>
                <p className="text-gray-700 mb-3">{phd_admission.selection_process.description}</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {phd_admission.selection_process.rounds.map((round, index) => (
                    <li key={index}><span className="font-medium">{round.round}</span> {round.details}</li>
                  ))}
                </ol>
                <p className="text-gray-700 mt-3">
                  The candidates are encouraged to check the Institute website {parseMarkdownLink(phd_admission.selection_process.note)} from time to time. Selection committee decisions are final in all matters including any disciplinary matters/malpractice.
                </p>
              </div>
            )}

            {/*phd_admission.research_areas && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.research_areas.heading}</h3>
                <p className="text-gray-700 mb-3">{phd_admission.research_areas.description}</p>

                <div className="space-y-4">
                  {phd_admission.research_areas.areas.map((area, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2">{area.area}</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        {area.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )*/}

            {phd_admission.financial_assistance && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.financial_assistance.heading}</h3>
                <div className="space-y-3">
                  {phd_admission.financial_assistance.assistance.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2">{item.type}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {phd_admission.syllabus_selection_process && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.syllabus_selection_process.heading}</h3>
                <div className="space-y-3">
                  {phd_admission.syllabus_selection_process.topics.map((topic, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-1">{topic.topic}</h4>
                      <p className="text-sm text-gray-600">{topic.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {phd_admission.updates && (
              <div>
                <h3 className="text-xl font-semibold mb-3">{phd_admission.updates.heading}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{phd_admission.updates.contact_information.split('contact ')[0]}contact {parseMarkdownLink(phd_admission.updates.contact_information.split('contact ')[1])}</li>
                </ul>

                {phd_admission.international_applicants && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">{phd_admission.international_applicants.heading}</h4>
                    <p className="text-sm text-gray-600">{phd_admission.international_applicants.description.split(' [')[0]}{parseMarkdownLink(phd_admission.international_applicants.description.split(' [')[1])}</p>
                  </div>
                )}

                {phd_admission.dia_fellowship_scheme && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">{phd_admission.dia_fellowship_scheme.heading}</h4>
                    <p className="text-sm text-gray-600">{phd_admission.dia_fellowship_scheme.description}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Website - {phd_admission.dia_fellowship_scheme.websites.map((website, index) => (
                        <React.Fragment key={index}>{parseMarkdownLink(website)}{index < phd_admission.dia_fellowship_scheme.websites.length - 1 ? ' and ' : ''}</React.Fragment>
                      ))}<br />
                      DIA YouTube promotional video - {parseMarkdownLink(phd_admission.dia_fellowship_scheme.youtube_video)}
                    </p>
                  </div>
                )}

                {phd_admission.contact && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{phd_admission.contact.split('contact ')[0]}contact {parseMarkdownLink(phd_admission.contact.split('contact ')[1])}</p>
                  </div>
                )}
              </div>
            )}

            {phd_admission.apply_link && (
              <div className="mt-6">
                {parseMarkdownLink(phd_admission.apply_link)}
              </div>
            )}
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

