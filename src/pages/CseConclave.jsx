import React from 'react';
import { lazy, Suspense } from "react";

const fallback = (
  <div className="text-center py-8 text-gray-400">Loading...</div>
);
const CseConclave = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    CSE Conclave 2026
                </h1>
                <p className="text-2xl text-gray-600">
                    Coming Soon
                </p>
            </div>
        </div>
    );
};

export default CseConclave;