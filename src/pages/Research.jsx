import NavCard from "../components/Academics/NavCard";
import BackToTopButton from "../components/BackToTopButton";
import DepartmentFacilities from "../components/Research/DepartmentFacilities";
import ResearchProjects from "../components/Research/ResearchProjects";

function QuickNavigation() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
      <NavCard
        title="Research Labs"
        icon={<i className="fas fa-flask"></i>}
        targetId="labs"
        viewText={"View Details"}
      />
      <NavCard
        title="Research-Projects"
        icon={<i className="fas fa-flask"></i>}
        targetId="research-projects"
        viewText={"View Details"}
      />
    </div>
  );
}

// Research Page Component
const Research = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="research-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Research</h1>
        <p className="text-gray-600">
          Explore research activities, publications, patents, and laboratories
          of the Department of Computer Science and Engineering.
        </p>
      </div>

      {/* Navigation Cards */}
      <QuickNavigation />

      {/* Labs Section */}
      <DepartmentFacilities />

      <ResearchProjects />

      {/* Back to Top Button */}
      <BackToTopButton to={"research-top"} />
    </div>
  );
};

export default Research;
