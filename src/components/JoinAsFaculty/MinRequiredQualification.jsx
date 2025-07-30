export default function MinRequiredQualification() {
  return (
    <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Minimum Required Qualifications
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          We seek highly qualified candidates with a strong academic background
          and research experience in Computer Science and Engineering or related
          fields.
        </p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-3">
            Educational Qualifications
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Position</th>
                  <th className="px-4 py-2 text-left">Minimum Qualification</th>
                  <th className="px-4 py-2 text-left">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Assistant Professor</td>
                  <td className="px-4 py-2">
                    Ph.D. in Computer Science, Engineering or related field
                  </td>
                  <td className="px-4 py-2">
                    Minimum 3 years of post-Ph.D. research/teaching experience
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Associate Professor</td>
                  <td className="px-4 py-2">
                    Ph.D. with first class in preceding degree
                  </td>
                  <td className="px-4 py-2">
                    Minimum 6 years of experience, with 3 years as Assistant
                    Professor
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Professor</td>
                  <td className="px-4 py-2">
                    Ph.D. with first class in preceding degree
                  </td>
                  <td className="px-4 py-2">
                    Minimum 10 years of experience, with 4 years as Associate
                    Professor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
