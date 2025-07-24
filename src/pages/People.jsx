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
        <p className="text-sm text-gray-600 mt-2">View Members</p>
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

// Faculty Card Component
const FacultyCard = ({ name, title, image, expertise, email, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="w-48 h-48 mx-auto mt-4 mb-2 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        {image ? (
          <img 
            src={image}
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite fallback loop
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
            }}
          />
        ) : null}
        <div className={`text-8xl text-indigo-200 ${image ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium">{title}</p>
        {expertise && (
          <div className="mt-2">
            <p className="text-sm text-gray-700 font-medium">Research Areas</p>
            <p className="text-sm text-gray-600">{expertise}</p>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        {email && (
          <div className="flex items-center text-sm mb-1">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href={`mailto:${email}`} className="text-indigo-600 hover:underline truncate">{email}</a>
          </div>
        )}
        {phone && (
          <div className="flex items-center text-sm mb-1">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-gray-600 truncate">{phone}</span>
          </div>
        )}
        {website && (
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
            </svg>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline truncate">Website</a>
          </div>
        )}
      </div>
    </div>
  );
};

// Staff Card Component
const StaffCard = ({ name, title, image, email, phone, office }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 flex items-start border-b border-gray-100">
        <div className="flex-shrink-0 mr-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {image ? (
              <img 
                src={image}
                alt={name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite fallback loop
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
            ) : null}
            <div className={`text-4xl text-indigo-200 ${image ? 'hidden' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-indigo-600 truncate">{title}</p>
        </div>
      </div>
      <div className="p-4 bg-gray-50 text-sm flex-grow">
        {email && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href={`mailto:${email}`} className="text-indigo-600 hover:underline truncate">{email}</a>
          </div>
        )}
        {phone && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-gray-600 truncate">{phone}</span>
          </div>
        )}
        {office && (
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-600 truncate">{office}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Former Member Card Component
const FormerMemberCard = ({ name, title, period, currentAffiliation }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-indigo-600 text-sm">{title}</p>
      {period && <p className="text-sm text-gray-600 mt-1">Period: {period}</p>}
      {currentAffiliation && (
        <div className="mt-2 text-sm">
          <p className="text-gray-700 font-medium">Current Affiliation</p>
          <p className="text-gray-600">{currentAffiliation}</p>
        </div>
      )}
    </div>
  );
};

// People Page Component
const People = () => {
  const [leadership, setLeadership] = useState([]);
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [staffMembers, setStateStaffMembers] = useState([]);
  const [formerMembers, setFormerMembers] = useState([]);
  const [phdScholars, setPhdScholars] = useState([]);
  const [pastScholars, setPastScholars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cse.iitdh.ac.in/strapi/api/peoples?pagination[pageSize]=50');
        const result = await response.json();
        const data = result.data;

        const leadershipData = [];
        const facultyData = [];
        const staffData = [];
        const formerData = [];
        const phdData = [];
        const pastScholarsData = [];

        data.forEach(person => {
          const mappedPerson = {
            name: person.Name,
            title: person.Designation,
            email: person.Email,
            phone: person.Contact,
            website: person.Website,
            image: person.Image,
          };

          if (person.Role === "Faculty Members" || person.Role === "Department Leadership" || person.Role === "PHD Scholars" || person.Role === "PAST Scholars") {
            mappedPerson.expertise = person.Domain;
          } else if (person.Role === "Staff Members") {
            mappedPerson.office = person.Domain;
          } else if (person.Role === "Former Members") {
            mappedPerson.period = person.Period;
            mappedPerson.currentAffiliation = person.CurrentAffiliation;
          }

          switch (person.Role) {
            case "Department Leadership":
              leadershipData.push(mappedPerson);
              break;
            case "Faculty Members":
              facultyData.push(mappedPerson);
              break;
            case "Staff Members":
              staffData.push(mappedPerson);
              break;
            case "Former Members":
              formerData.push(mappedPerson);
              break;
            case "PHD":
              phdData.push(mappedPerson);
              break;
            case "Past Scholars":
              pastScholarsData.push(mappedPerson);
              break;
            default:
              break;
          }
        });

        setLeadership(leadershipData);
        setFacultyMembers(facultyData);
        setStateStaffMembers(staffData);
        setFormerMembers(formerData);
        setPhdScholars(phdData);
        setPastScholars(pastScholarsData);

      } catch (error) {
        console.error("Error fetching people data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <div id="people-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">People</h1>
        <p className="text-gray-600">
          Meet the faculty, staff, and former members of the Department of Computer Science and Engineering.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        <NavCard 
          title="Department Leadership" 
          icon={<i className="fas fa-user-tie"></i>}
          targetId="leadership" 
        />
        <NavCard 
          title="Faculty" 
          icon={<i className="fas fa-chalkboard-teacher"></i>}
          targetId="faculty" 
        />
        <NavCard 
          title="Staff" 
          icon={<i className="fas fa-users"></i>}
          targetId="staff" 
        />
        <NavCard 
          title="Former Members" 
          icon={<i className="fas fa-user-graduate"></i>}
          targetId="former-members" 
        />
        <NavCard 
          title="PHD Scholars" 
          icon={<i className="fas fa-user-graduate"></i>}
          targetId="phd-scholars" 
        />
        <NavCard 
          title="Past Scholars" 
          icon={<i className="fas fa-history"></i>}
          targetId="past-scholars" 
        />
      </div>
      
      {/* Leadership Section */}
      <Section id="leadership" title="Department Leadership">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Faculty Section */}
      <Section id="faculty" title="Faculty Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Staff Section */}
      <Section id="staff" title="Staff Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Former Members Section */}
      <Section id="former-members" title="Former Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formerMembers.map((member, index) => (
            <FormerMemberCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* PHD Scholars Section */}
      <Section id="phd-scholars" title="PHD Scholars">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phdScholars.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>
      <Section id="past-scholars" title="PAST Scholars">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastScholars.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="people-top"
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

export default People; 