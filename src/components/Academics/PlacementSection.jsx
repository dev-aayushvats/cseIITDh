import Section from "../Section";

const btechStats = [
  { label: "Registered", value: "58" },
  { label: "Placed", value: "55" },
  { label: "Opted for Competitive Exams", value: "0" },
  { label: "Opted for Higher Education", value: "1" },
  { label: "Placement %", value: "94.8%" },
];

const mtechStats = [
  { label: "Registered", value: "21" },
  { label: "Placed", value: "20" },
  { label: "Opted for Competitive Exams", value: "0" },
  { label: "Opted for Higher Education", value: "1" },
  { label: "Placement %", value: "95.2%" },
  { label: "Average CTC", value: "15.95 LPA" },
  { label: "Median CTC", value: "12 LPA" },
];

const companies = [
  "Accenture",
  "Amazon",
  "Arista Networks",
  "Bajaj Finance Limited",
  "Cadence",
  "Catalina Systems",
  "C-DAC",
  "CRED",
  "D. E. Shaw",
  "Dassault Systemes",
  "Dayananda Sagar University",
  "Deloitte",
  "Dexian",
  "Ebullient Securities",
  "EY India",
  "HCL Tech",
  "HummingWave",
  "Hyundai",
  "ICICI Bank",
  "Infosys",
  "Keysight Technologies",
  "KogniVera IT",
  "MAQ Software",
  "MathWorks",
  "Maxiom Wealth",
  "Microsoft",
  "Myntra",
  "Nokia",
  "Opentext",
  "Qualcomm",
  "Quantrium",
  "Ramaiah University",
  "Super Money (Flipkart Company)",
  "Texas Instruments",
  "Versa Networks",
  "Virtusa",
  "Visa",
  "Warner Bros",
];

function StatGrid({ title, stats }) {
  return (
    <div className="bg-gray-50 rounded-lg p-5">
      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-600 text-white text-sm font-semibold">
        {title}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-lg p-4 text-center shadow-sm"
          >
            <div className="text-2xl font-bold text-indigo-600">{value}</div>
            <div className="text-sm text-gray-600 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlacementSection() {
  return (
    <Section id="placements" title="Placements">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">
          CSE 2025-26 Placement Statistics
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatGrid title="B.Tech" stats={btechStats} />
          <StatGrid title="M.Tech" stats={mtechStats} />
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
