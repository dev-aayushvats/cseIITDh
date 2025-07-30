export default function HowToApply() {
  return (
    <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        How to Apply
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          Interested candidates are invited to apply for faculty positions
          through our online portal. Applications are accepted throughout the
          year, with reviews conducted periodically.
        </p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-3">
            Application Process
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Register on the IIT DHARWAD faculty recruitment portal.</li>
            <li>
              Fill out the online application form with personal, educational,
              and professional details.
            </li>
            <li>
              Upload the following documents:
              <ul className="list-disc list-inside ml-5 mt-1 text-gray-600">
                <li>Detailed CV with list of publications</li>
                <li>Research statement (2-3 pages)</li>
                <li>Teaching statement (1-2 pages)</li>
                <li>Copies of three best publications</li>
                <li>Educational certificates and transcripts</li>
                <li>Contact information of three referees</li>
              </ul>
            </li>
            <li>Submit the completed application.</li>
            <li>
              Shortlisted candidates will be invited for a seminar presentation
              and interview.
            </li>
          </ol>
        </div>

        <div className="mt-6 bg-indigo-50 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">
            Selection Process
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>
              Screening of applications based on academic credentials, research
              contributions, and alignment with department needs.
            </li>
            <li>
              Seminar presentation by shortlisted candidates to showcase
              research work and future plans.
            </li>
            <li>Technical interview with faculty selection committee.</li>
            <li>
              Final selection based on overall performance, research potential,
              and teaching abilities.
            </li>
          </ol>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Important Information
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Candidates are encouraged to review the department's research
              areas before applying.
            </li>
            <li>
              For any queries related to the application process, please contact{" "}
              <button
                type="button"
                className="text-indigo-600 cursor-pointer"
                onClick={() =>
                  window.open("mailto:faculty.recruit@iitdh.ac.in", "_blank")
                }
              >
                faculty.recruit@iitdh.ac.in
              </button>{" "}
              or{" "}
              <button
                type="button"
                className="text-indigo-600 cursor-pointer"
                onClick={() =>
                  window.open("mailto:facrec.cs@iitdh.ac.in", "_blank")
                }
              >
                facrec.cs@iitdh.ac.in
              </button>
            </li>
            <li>
              The institute reserves the right to shortlist candidates based on
              the needs of the departments/institute.
            </li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <a
            // biome-ignore lint/a11y/useValidAnchor: No link yet
            href="#"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
