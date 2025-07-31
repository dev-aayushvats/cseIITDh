import Section from "../Section";

export default function CoursesSection() {
  return (
    <Section id="courses" title="Courses">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Core Courses</h3>
          <ul className="space-y-3">
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS301: Algorithms</div>
              <div className="text-sm text-gray-600">
                Covers design and analysis of algorithms, complexity theory.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS302: Computer Networks</div>
              <div className="text-sm text-gray-600">
                Network architecture, protocols, and applications.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS303: Operating Systems</div>
              <div className="text-sm text-gray-600">
                OS principles, processes, memory management, and file systems.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS304: Computer Architecture</div>
              <div className="text-sm text-gray-600">
                Processor design, memory hierarchy, and I/O systems.
              </div>
            </li>
            <li>
              <div className="font-medium">CS305: Database Systems</div>
              <div className="text-sm text-gray-600">
                Database design, SQL, transaction processing, and recovery.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Elective Courses</h3>
          <ul className="space-y-3">
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS401: Machine Learning</div>
              <div className="text-sm text-gray-600">
                Supervised and unsupervised learning, neural networks.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS402: Computer Graphics</div>
              <div className="text-sm text-gray-600">
                2D/3D graphics, rendering, and visualization techniques.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS403: Artificial Intelligence</div>
              <div className="text-sm text-gray-600">
                Search, knowledge representation, planning, and reasoning.
              </div>
            </li>
            <li className="pb-2 border-b border-gray-100">
              <div className="font-medium">CS404: Cryptography</div>
              <div className="text-sm text-gray-600">
                Encryption, authentication, and security protocols.
              </div>
            </li>
            <li>
              <div className="font-medium">CS405: Cloud Computing</div>
              <div className="text-sm text-gray-600">
                Cloud architectures, virtualization, and distributed systems.
              </div>
            </li>
          </ul>
        </div>
      </div>
       <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">
            You can access Computer Science courses list over here!
          </p>
          <a
            href="https://www.iitdh.ac.in/sites/default/files/2025-07/Computer%20Science%20Engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
          >
             Open Courses List
          </a>
        </div>
    </Section>
  );
}
