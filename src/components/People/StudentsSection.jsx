import { useState } from "react";
import Section from "../Section";
import { DIVISIONS, studentsData } from "../../data/studentsData";

export default function StudentsSection() {
  const [activeDivision, setActiveDivision] = useState(DIVISIONS[0].key);

  const students = studentsData[activeDivision] || [];

  return (
    <Section id="students" title="Students">
      <div className="flex flex-wrap gap-2 mb-6">
        {DIVISIONS.map((division) => (
          <button
            key={division.key}
            type="button"
            onClick={() => setActiveDivision(division.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeDivision === division.key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {division.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 w-16">S.No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Roll Number</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-gray-400">
                  Student list coming soon.
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr
                  key={student.rollNo}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.rollNo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
