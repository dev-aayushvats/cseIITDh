import Section from "../Section";

const stats = [
  { label: "Registered", value: "21" },
  { label: "Placed", value: "20" },
  { label: "Average CTC", value: "15.95 LPA" },
  { label: "Median CTC", value: "12 LPA" },
  { label: "Placement %", value: "95.2%" },
];

const companies = [
  "Mathworks",
  "Deloitte",
  "Infosys",
  "Nokia",
  "Kognivera IT",
  "Tejas Networks",
];

export default function PlacementSection() {
  return (
    <Section id="placements" title="Placements">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">
          MTech CSE 2024 Admitted Batch Placement Data
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-gray-50 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-indigo-600">
                {value}
              </div>
              <div className="text-sm text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-lg font-medium mb-3">Notable Recruiting Companies</h4>
          <div className="flex flex-wrap gap-3">
            {companies.map((company) => (
              <span
                key={company}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
