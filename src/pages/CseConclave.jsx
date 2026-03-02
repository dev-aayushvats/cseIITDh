import React from 'react';
import { lazy, Suspense } from "react";

const fallback = (
    <div className="text-center py-8 text-gray-400">Loading...</div>
);

const CseConclave = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-amber-50 flex items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl border border-purple-100 p-10 space-y-10">

                {/* Header */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                        CSE Conclave <span className="text-purple-500">2026</span>
                    </h1>
                    <p className="uppercase tracking-wider text-purple-500 font-medium">
                        Exploring Frontiers in Computer Science
                    </p>
                    <p className="text-medium font-bold text-gray-600">
                        Department of Computer Science and Engineering <br />
                        Indian Institute of Technology Dharwad
                    </p>
                </div>


                {/* Important Information */}


                <div className="mt-10  mx-auto border-t border-b border-gray-200 py-8">

                    <h3 className="text-xl font-semibold text-gray-900 text-center tracking-wide mb-6">
                        Important Information
                    </h3>

                    <div className="space-y-4 text-sm text-gray-700">

                        <div className="flex justify-between items-center">
                            <span className="uppercase tracking-wider text-xs text-gray">
                                Dates
                            </span>
                            <span className="font-medium text-gray-900">
                                7–8 March 2026
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="uppercase tracking-wider text-xs text-gray-800">
                                Venue
                            </span>
                            <span className="font-medium text-gray-900">
                                Central Learning Theatre, IIT Dharwad
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="uppercase tracking-wider text-xs text-gray-800">
                                Registration
                            </span>
                            <span className="font-semibold text-gray-900">
                                Free
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="uppercase tracking-wider text-xs text-gray-800">
                                Last Date
                            </span>
                            <span className="font-semibold text-gray-900">
                                4 March 2026
                            </span>
                        </div>

                    </div>

                </div>

                {/* About */}
                <div className="bg-purple-50 rounded-lg p-6 text-gray-700 text-sm leading-relaxed">
                    CSE Conclave 2026 is a two-day technical gathering bringing together
                    eminent academicians, industry leaders, and researchers from premier
                    institutions and global organizations. The conclave fosters dialogue,
                    collaboration, and knowledge exchange across cutting-edge domains of
                    Computer Science and Engineering.
                </div>


                {/* Speakers + Domains */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT SIDE */}
                    <div className="md:pr-10 md:border-r md:border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Distinguished Speakers
                        </h2>
                        <ul className="space-y-2 text-gray-700 text-sm">
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

                    {/* RIGHT SIDE */}
                    <div className="md:pl-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Focus Areas
                        </h2>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>Theoretical Computer Science</li>
                            <li>Artificial Intelligence & Machine Learning</li>
                            <li>Networks & Systems</li>
                            <li>Industry Research & Innovation</li>
                            <li>Emerging Technologies</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                            Who Can Attend
                        </h2>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>UG / PG Students</li>
                            <li>Research Scholars</li>
                            <li>Faculty Members</li>
                            <li>Industry Professionals</li>
                        </ul>
                    </div>
                </div>



                {/* Benefits */}
                <div className="bg-amber-50 rounded-lg p-6 text-sm text-gray-700">
                    <h3 className="font-semibold text-brown-700 mb-3">
                        What You Will Gain
                    </h3>
                    <ul className="space-y-1">
                        <li>• Insightful talks from leading experts</li>
                        <li>• Exposure to real-world industry challenges</li>
                        <li>• Networking opportunities</li>
                        <li>• Participation Certificate</li>
                        <li>• Lunch & refreshments provided</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center pt-4">
                    <a
                        href="#"
                        className="inline-block px-8 py-3 bg-purple-700 text-white rounded-lg font-medium shadow-md hover:bg-purple-800 transition"
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