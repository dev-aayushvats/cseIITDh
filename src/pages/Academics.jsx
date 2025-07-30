import AcademicRules from "../components/Academics/AcademicRules";
import CoursesSection from "../components/Academics/CoursesSection";
import CurriculumSection from "../components/Academics/CurriculumSection";
import FAQs from "../components/Academics/FAQs";
import NavCard from "../components/Academics/NavCard";
import TimeTableSection from "../components/Academics/TimeTableSection";
import BackToTopButton from "../components/BackToTopButton";

// Academics Page
const Academics = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="academics-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Academics</h1>
        <p className="text-gray-600">
          Learn about our academic programs, courses, and resources for computer
          science and engineering students.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          <NavCard
            title="Time Table"
            icon={<i className="far fa-clock"></i>}
            targetId="timetable"
            viewText={"View Details"}
          />
          <NavCard
            title="Courses"
            icon={<i className="fas fa-book"></i>}
            targetId="courses"
            viewText={"View Details"}
          />
          <NavCard
            title="Curriculum"
            icon={<i className="fas fa-graduation-cap"></i>}
            targetId="curriculum"
            viewText={"View Details"}
          />
          <NavCard
            title="Rules"
            icon={<i className="fas fa-gavel"></i>}
            targetId="rules"
            viewText={"View Details"}
          />
          <NavCard
            title="FAQs"
            icon={<i className="fas fa-question-circle"></i>}
            targetId="faq"
            viewText={"View Details"}
          />
        </div>
      </div>

      {/* Time Table Section */}
      <TimeTableSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Rules Section */}
      <AcademicRules />

      {/* FAQs Section */}
      <FAQs />

      {/* Back to Top Button */}
      <BackToTopButton to={"academics-top"} />
    </div>
  );
};

export default Academics;
