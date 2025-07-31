import { lazy, Suspense } from "react";
import Section from "../Section";

const PDFViewer = lazy(() => import("../PDFViewer/PDFViewer"));

export default function TimeTableSection() {
  return (
    <Section id="timetable" title="Time Table">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">
          Current Semester Schedule
        </h3>
        <div className="mb-4">
          <p className="text-gray-600">
            Below is the timetable for the current semester. You can navigate
            through the pages, view details, and download the complete schedule.
          </p>
        </div>

        {/* PDF Viewer Component */}
        <div className="mt-6">
          <Suspense fallback={<div>Loading timetable...</div>}>
            <PDFViewer pdfFile="/timetable.pdf" />
          </Suspense>
        </div>

        {/* Fallback direct link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">
            If you're having trouble viewing the PDF, you can access it
            directly:
          </p>
          <a
            href="https://www.iitdh.ac.in/timetable-autumn-2025-26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
          >
            {/*         <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Open Timetable PDF</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>*/}
            Open Timetable PDF
          </a>
        </div>
      </div>
    </Section>
  );
}
