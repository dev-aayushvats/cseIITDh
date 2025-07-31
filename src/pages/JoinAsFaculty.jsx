import { lazy, Suspense } from "react";

const AboutIITDharwad = lazy(() =>
  import("../components/JoinAsFaculty/AboutIITDharwad")
);
const DepartmentSection = lazy(() =>
  import("../components/JoinAsFaculty/DepartmentSection")
);
const HowToApply = lazy(() => import("../components/JoinAsFaculty/HowToApply"));
const MinRequiredQualification = lazy(() =>
  import("../components/JoinAsFaculty/MinRequiredQualification")
);
const SalaryAndBenefits = lazy(() =>
  import("../components/JoinAsFaculty/SalaryAndBenefits")
);

const fallback = (
  <div className="text-center py-8 text-gray-400">Loading...</div>
);

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
      <Suspense fallback={fallback}>
        <DepartmentSection />
      </Suspense>

      {/* About IIT DHARWAD Section */}
      <Suspense fallback={fallback}>
        <AboutIITDharwad />
      </Suspense>

      {/* Salary and Benefits Section */}
      {/* <Suspense fallback={fallback}>
        <SalaryAndBenefits />
      </Suspense> */}

      {/* Qualifications Section */}
      {/* <Suspense fallback={fallback}>
        <MinRequiredQualification />
      </Suspense> */}

      {/* How to Apply Section */}
      <Suspense fallback={fallback}>
        <HowToApply />
      </Suspense>
    </div>
  );
};

export default JoinAsFaculty;
