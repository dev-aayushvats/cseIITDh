import Section from "../Section";
import FacultyCard from "./FacultyCard";

export default function PastScholarSection({ pastScholars }) {
  return (
    <Section id="past-scholars" title="PAST Scholars">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastScholars.map((member) => (
          <FacultyCard key={member?.id} {...member} />
        ))}
      </div>
    </Section>
  );
}
