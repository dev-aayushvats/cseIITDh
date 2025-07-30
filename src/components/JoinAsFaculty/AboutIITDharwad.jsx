export default function AboutIITDharwad() {
  return (
    <section className="mb-10 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
        About IIT DHARWAD
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          IIT DHARWAD is one of the new IITs established by the Government of
          India in 2016. Located in the state of Karnataka, our institute is
          committed to excellence in teaching, research, and innovation while
          contributing to the technological advancement of the nation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Campus</h3>
            <p className="text-gray-700">
              Our sprawling campus is situated on 470 acres of land in DHARWAD,
              Karnataka. The campus features modern academic buildings,
              residential facilities, and recreational spaces, creating an ideal
              environment for academic and personal growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-700">
              DHARWAD is a culturally rich city with a pleasant climate
              year-round. It is well connected to major cities like Bangalore,
              Mumbai, and Pune. The region is known for its contributions to
              literature, music, and education.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Institute Vision</h3>
          <p className="text-gray-700">
            IIT DHARWAD aims to be a globally recognized institution for
            excellence in technical education and research, contributing to the
            development of technology and science for the betterment of society.
          </p>
        </div>
      </div>
    </section>
  );
}
