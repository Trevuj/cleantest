import React from 'react';

const HireUsSection = () => {
    const reasons = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Reliability",
            description: "Dependable service with consistent, punctual, and top-quality cleaning every time."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: "Local Expertise",
            description: "A Canadian company understanding local community needs and high-standard expectations."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Attention to Detail",
            description: "Meticulous cleaning that ensures every corner is perfectly sanitized and spotless."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5M9 13v.01M15 13v.01M12 20v2m0-10V6m0 14h.01M12 5h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                </svg>
            ),
            title: "Customer Satisfaction",
            description: "Building long-term relationships by understanding and exceeding client expectations."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: "Comprehensive Services",
            description: "Flexible cleaning solutions from one-time deep cleans to ongoing maintenance."
        }
    ];

    return (
        <div className="container mx-auto px-4 pb-24">
            <h2 className="text-3xl font-bold text-start text-gray-800 mb-12 border-b-2 border-sky-500 pb-4">
                Why Choose Solution Saintaire Optimale
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-sky-500"
                    >
                        <div className="flex items-center mb-4">
                            {reason.icon}
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">{reason.title}</h3>
                        </div>
                        <p className="text-gray-600">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HireUsSection;