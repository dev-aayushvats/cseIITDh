import { useMemo } from "react";
import NavCard from "../components/Academics/NavCard";
import BackToTopButton from "../components/BackToTopButton";
import GlobalError from "../components/GlobalError";
import Loading from "../components/Loading";
import DepartmentLeadership from "../components/People/DepartmentLeadership";
import FacultySection from "../components/People/FacultySection";
import FormerMemberSection from "../components/People/FormerMemberSection";
import PastScholarSection from "../components/People/PastScholarSection";
import PhDScholarSection from "../components/People/PhDScholarSection";
import StaffSection from "../components/People/StaffSection";
import usePeopleInfo from "../hooks/usePeopleInfo";

function QuickNavigation() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
      <NavCard
        title="Department Leadership"
        icon={<i className="fas fa-user-tie"></i>}
        targetId="leadership"
        viewText={"View Members"}
      />
      <NavCard
        title="Faculty"
        icon={<i className="fas fa-chalkboard-teacher"></i>}
        targetId="faculty"
        viewText={"View Members"}
      />
      <NavCard
        title="Staff"
        icon={<i className="fas fa-users"></i>}
        targetId="staff"
        viewText={"View Members"}
      />
      <NavCard
        title="Former Members"
        icon={<i className="fas fa-user-graduate"></i>}
        targetId="former-members"
        viewText={"View Members"}
      />
      <NavCard
        title="PHD Scholars"
        icon={<i className="fas fa-user-graduate"></i>}
        targetId="phd-scholars"
        viewText={"View Members"}
      />
      <NavCard
        title="Past Scholars"
        icon={<i className="fas fa-history"></i>}
        targetId="past-scholars"
        viewText={"View Members"}
      />
    </div>
  );
}

const getPeopleData = (data) => {
  return data.map((person) => {
    const base = {
      id: person.documentId,
      name: person.Name,
      title: person.Designation,
      email: person.Email,
      phone: person.Contact,
      website: person.Website,
      image: person.Image,
      role: person.Role,
    };

    switch (person.Role) {
      case "Faculty Members":
      case "Department Leadership":
      case "PHD Scholars":
      case "PAST Scholars":
        return { ...base, expertise: person.Domain };
      case "Staff Members":
        return { ...base, office: person.Domain };
      case "Former Members":
        return {
          ...base,
          period: person.Period,
          currentAffiliation: person.CurrentAffiliation,
        };
      default:
        return base;
    }
  });
};

// People Page Component
const People = () => {
  const { data, isLoading, isError, error } = usePeopleInfo();

  const people = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return getPeopleData(data);
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <GlobalError error={error} />;

  const filterByRole = (role) =>
    people.filter((person) => person.role === role);

  const leadership = filterByRole("Department Leadership");
  const facultyMembers = filterByRole("Faculty Members");
  const staffMembers = filterByRole("Staff Members");
  const formerMembers = filterByRole("Former Members");
  const phdScholars = filterByRole("PHD");
  const pastScholars = filterByRole("Past Scholars");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <div id="people-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">People</h1>
        <p className="text-gray-600">
          Meet the faculty, staff, and former members of the Department of
          Computer Science and Engineering.
        </p>
      </div>
      {/* Navigation Cards */}
      <QuickNavigation />
      {/* Leadership Section */}
      <DepartmentLeadership leadership={leadership} />
      {/* Faculty Section */}
      <FacultySection facultyMembers={facultyMembers} />
      {/* Staff Section */}
      <StaffSection staffMembers={staffMembers} />
      {/* Former Members Section */}
      <FormerMemberSection formerMembers={formerMembers} />
      {/* PHD Scholars Section */}
      <PhDScholarSection phdScholars={phdScholars} />
      {/* Past Scholars */}
      <PastScholarSection pastScholars={pastScholars} />
      {/* Back to Top Button */}
      <BackToTopButton to={"people-top"} />
    </div>
  );
};

export default People;
