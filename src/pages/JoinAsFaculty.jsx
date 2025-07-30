import AboutIITDharwad from "../components/JoinAsFaculty/AboutIITDharwad";
import DepartmentSection from "../components/JoinAsFaculty/DepartmentSection";
import HowToApply from "../components/JoinAsFaculty/HowToApply";
import MinRequiredQualification from "../components/JoinAsFaculty/MinRequiredQualification";
import SalaryAndBenefits from "../components/JoinAsFaculty/SalaryAndBenefits";

const JoinAsFaculty = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Join as Faculty</h1>
        <p className="text-gray-600 mt-2">
          Build your academic career at IIT DHARWAD's Department of Computer
          Science and Engineering
        </p>
      </div>

      {/* About the Department Section */}
      <DepartmentSection />

      {/* About IIT DHARWAD Section */}
      <AboutIITDharwad />

      {/* Salary and Benefits Section */}
      <SalaryAndBenefits />

      {/* Qualifications Section */}
      <MinRequiredQualification />

      {/* How to Apply Section */}
      <HowToApply />
    </div>
  );
};

export default JoinAsFaculty;
