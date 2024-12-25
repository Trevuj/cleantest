import ServicesSection from "./service";
import HireUsSection from "./whyHireus";

const About = () => {
    return (
        <div className="bg-white pb-24">
            <div className="container mx-auto pt-10 px-4">
                    <div className="max-w-[540px]">
                        <h2 className="text-start text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#38bdf8] text-transparent bg-clip-text">
                            About Us
                        </h2>
                        <h2 className="text-start text-2xl font-bold text-sky-800">Solution Saintaire Optimale</h2>
                    </div>

                <p className="pt-4 text-justify">
                    At Solution Saintaire Optimale, we pride ourselves on providing professional and reliable cleaning services for both homes and businesses across Canada. Our goal is to deliver exceptional cleaning results that promote health, comfort, and peace of mind. Whether it’s a one-time deep cleaning or ongoing maintenance, our experienced team is equipped to handle all your cleaning needs with precision and care.

                    We understand that cleanliness plays a vital role in your daily life. A clean space isn’t just about aesthetics—it impacts your health, mood, and productivity. That’s why we go above and beyond to ensure every corner of your space is thoroughly cleaned, leaving behind a fresh and inviting environment.
                </p>

                <div className="bg-sky-50 p-6 my-10 rounded-xl shadow-md">
                        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            We believe a clean environment directly impacts health, productivity, and well-being. Our comprehensive cleaning solutions go beyond surface cleaning to create healthier, more inviting spaces.
                        </p>
                    </div>

                     <div className="space-y-12 pt-24">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-sky-500 pb-2">
                            Why Choose Solution Saintaire Optimale
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Team</h3>
                                <p className="text-gray-600">Trained, trustworthy professionals dedicated to delivering exceptional cleaning results.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly Solutions</h3>
                                <p className="text-gray-600">Safe, non-toxic cleaning products that are effective and environmentally conscious.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customized Services</h3>
                                <p className="text-gray-600">Tailored cleaning solutions for homes, offices, and commercial spaces.</p>
                            </div>
                        </div>
                        </div>
                    <ServicesSection/>
                    <HireUsSection/>
            </div>
        </div>
    )
}

export default About;
