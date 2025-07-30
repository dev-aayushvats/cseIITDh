export default function SalaryAndBenefits() {
  return (
    <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        Salary and Benefits
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          IIT DHARWAD offers competitive compensation packages to faculty
          members in line with other IITs and government norms. Our
          comprehensive benefits package is designed to support both
          professional development and personal wellbeing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Salary Structure
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Position</th>
                    <th className="px-4 py-2 text-left">Pay Level</th>
                    <th className="px-4 py-2 text-left">
                      Starting Salary Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Assistant Professor</td>
                    <td className="px-4 py-2">Level 12</td>
                    <td className="px-4 py-2">₹1,01,500 - ₹1,67,400</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Associate Professor</td>
                    <td className="px-4 py-2">Level 13A2</td>
                    <td className="px-4 py-2">₹1,39,600 - ₹2,11,300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Professor</td>
                    <td className="px-4 py-2">Level 14A</td>
                    <td className="px-4 py-2">₹1,59,100 - ₹2,20,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Salary includes basic pay plus allowances as per Government of
              India norms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
