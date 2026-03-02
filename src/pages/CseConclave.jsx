import React from 'react';
import { lazy, Suspense } from "react";
import poster from "../content/cse-conclave.jpeg";
const fallback = (
    <div className="text-center py-8 text-gray-400">Loading...</div>
);

const CseConclave = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-purple-100 p-6 sm:p-8 md:p-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            CSE Conclave <span className="text-purple-600">2026</span>
          </h1>

          <p className="uppercase tracking-wider text-purple-600 text-xs sm:text-sm font-medium">
            Exploring Frontiers in Computer Science
          </p>

          <p className="text-sm sm:text-base font-semibold text-gray-600">
            Department of Computer Science and Engineering <br />
            Indian Institute of Technology Dharwad
          </p>
        </div>
{/* Poster */}
<div className="flex justify-center">
  <img
    src={poster}
    alt="CSE Conclave 2026 Poster"
    className="w-full max-w-3xl rounded-xl shadow-lg border border-gray-200"
  />
</div>
        {/* Important Information */}
<div className="border-t border-b border-gray-200 py-8">

  <div className="max-w-5xl mx-auto px-4">

    {/* Heading LEFT aligned */}
    <h3 className="text-xl font-semibold text-gray-900 mb-8">
      Important Information
    </h3>

    <div className="space-y-6 text-sm text-gray-700">

      <div className="flex justify-between items-start">
        <span className="uppercase tracking-wider text-xs text-gray-500">
          Dates
        </span>
        <span className="font-medium text-gray-900 text-right">
          7–8 March 2026
        </span>
      </div>

      <div className="flex justify-between items-start">
        <span className="uppercase tracking-wider text-xs text-gray-500">
          Venue
        </span>
        <span className="font-medium text-gray-900 text-right max-w-md">
          Central Learning Theatre, IIT Dharwad
        </span>
      </div>

      <div className="flex justify-between items-start">
        <span className="uppercase tracking-wider text-xs text-gray-500">
          Registration
        </span>
        <span className="font-semibold text-gray-900 text-right">
          Free
        </span>
      </div>

      <div className="flex justify-between items-start">
        <span className="uppercase tracking-wider text-xs text-gray-500">
          Last Date
        </span>
        <span className="font-semibold text-gray-900 text-right">
          4 March 2026
        </span>
      </div>

    </div>

  </div>
</div>
        {/* About */}
        <div className="bg-purple-50 rounded-lg p-5 sm:p-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          CSE Conclave 2026 is a two-day technical gathering bringing together
          eminent academicians, industry leaders, and researchers from premier
          institutions and global organizations. The conclave fosters dialogue,
          collaboration, and knowledge exchange across cutting-edge domains of
          Computer Science and Engineering.
        </div>

        {/* Speakers + Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT */}
          <div className="md:pr-8 md:border-r md:border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Distinguished Speakers
            </h2>

            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li><span className="font-medium">Prof. Hema Murthy</span> – IIT Madras</li>
              <li><span className="font-medium">Prof. N. R. Aravind</span> – IIT Hyderabad</li>
              <li><span className="font-medium">Dr. Naveen Sivadasan</span> – TCS Research Labs</li>
              <li><span className="font-medium">Prof. Amit Awekar</span> – IIT Guwahati</li>
              <li><span className="font-medium">Dr. Ashish Mishra</span> – HP R&D</li>
              <li><span className="font-medium">Dr. Chitradeep M</span> – Nokia</li>
              <li><span className="font-medium">Mr. Mehul Jain</span> – Microsoft</li>
              <li><span className="font-medium">Mr. Sushim Shrivastava</span> – Qualcomm</li>
              <li><span className="font-medium">Mr. Himanshu Gautam</span> – SecureDApp</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="md:pl-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Focus Areas
            </h2>

            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Theoretical Computer Science</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Networks & Systems</li>
              <li>Industry Research & Innovation</li>
              <li>Emerging Technologies</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-8 mb-4">
              Who Can Attend
            </h2>

            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>UG / PG Students</li>
              <li>Research Scholars</li>
              <li>Faculty Members</li>
              <li>Industry Professionals</li>
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-amber-50 rounded-lg p-5 sm:p-6 text-sm sm:text-base text-gray-700">
          <h3 className="font-semibold mb-3">
            What You Will Gain
          </h3>
          <ul className="space-y-1">
            <li>• Insightful talks from leading experts</li>
            <li>• Exposure to real-world industry challenges</li>
            <li>• Networking opportunities</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSed9Zk9kgwS-3w0sMKlvCBGOM0F9PfsVtyVdpszaOc0cbWQPg/viewform"
            className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-purple-700 text-white rounded-lg font-medium shadow-md hover:bg-purple-800 transition"
          >
            Register Now
          </a>

          <p className="text-xs text-gray-500 mt-3">
            Limited seats • Early registration recommended
          </p>
        </div>

      </div>
    </div>
  );
};

export default CseConclave;