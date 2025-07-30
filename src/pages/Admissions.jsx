import BTechSection from "../components/Admissions/BTechSection";
import MSResearchSection from "../components/Admissions/MSResearchSection";
import MTechSection from "../components/Admissions/MTechSection";
import PhDSection from "../components/Admissions/PhDSection";
import BackToTopButton from "../components/BackToTopButton";
import GlobalError from "../components/GlobalError";
import Loading from "../components/Loading";
import useAdmissionsInfo from "../hooks/useAdmissionsInfo";

function AdmissionDetails() {
  const {
    data: admissionsData,
    isLoading,
    isError,
    error,
  } = useAdmissionsInfo();

  if (isLoading) return <Loading />;
  if (isError) return <GlobalError error={error} />;

  const { btech_admission, mtech_admission, ms_admission, phd_admission } =
    admissionsData;

  return (
    <>
      {/* B.Tech Section */}
      <BTechSection btech_admission={btech_admission} />

      {/* M.Tech Section */}
      <MTechSection mtech_admission={mtech_admission} />

      {/* MS Research Section */}
      <MSResearchSection ms_admission={ms_admission} />

      {/* PhD Section */}
      <PhDSection phd_admission={phd_admission} />
      {/* Back to Top Button */}
      <BackToTopButton to={"admissions-top"} />
    </>
  );
}

// Admissions Page
const Admissions = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="admissions-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admissions</h1>
        <p className="text-gray-600">
          Learn about admission requirements, application procedures, and
          opportunities for prospective students.<br></br>
          Redirect to IIT DHARWAD webpage Admission section,by clicking on the
          button below.
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
      <AdmissionDetails />
    </div>
  );
};

export default Admissions;
