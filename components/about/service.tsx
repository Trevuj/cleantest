import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: "Residential Cleaning",
            description: "Comprehensive cleaning for homes and apartments"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h6a1 1 0 011 1v5M9 21l3-3 3 3" />
                </svg>
            ),
            title: "Commercial Cleaning",
            description: "Professional cleaning for offices and retail spaces"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2a2 2 0 002-2v-3a2 2 0 00-2-2H4a2 2 0 00-2 2v3a2 2 0 002 2h2M12 4v1M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M12 4h4v3h-4V4z" />
                </svg>
            ),
            title: "Post-Construction Cleaning",
            description: "Thorough cleaning after construction projects"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Move-In/Move-Out Cleaning",
            description: "Comprehensive cleaning for property transitions"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Deep Cleaning",
            description: "Extensive sanitization and thorough cleaning"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "Regular Maintenance",
            description: "Consistent cleaning and spot treatment"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-24">
            <h2 className="text-3xl font-bold text-start text-gray-800 mb-12 border-b-2 border-sky-500 pb-4">
                Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-sky-500"
                    >
                        <div className="flex items-center mb-4">
                            {service.icon}
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">{service.title}</h3>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;