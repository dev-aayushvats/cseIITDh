export default function DepartmentSection() {
  return (
    <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        About the Department
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          The Department of Computer Science and Engineering at IIT DHARWAD was
          established in 2016 and has quickly grown into a center for excellence
          in computer science education and research in India. Our department
          offers undergraduate, postgraduate, and doctoral programs in Computer
          Science and Engineering.
        </p>
        <p className="text-gray-700">
          We have a dynamic team of faculty members specializing in various
          domains of computer science including Artificial Intelligence, Machine
          Learning, Computer Vision, Theoretical Computer Science, Systems and
          Networking, Security and Privacy, and Human-Computer Interaction.
        </p>
        <div className="mt-4 bg-indigo-50 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">
            Key Department Highlights
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              Vibrant research environment with regular seminars and workshops
            </li>
            <li>Collaborative projects with industry and academic partners</li>
            <li>Well-equipped computing facilities and laboratories</li>
            <li>Growing undergraduate and graduate programs</li>
            <li>Opportunities for interdisciplinary research</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
