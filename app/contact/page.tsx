"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import LocationMap from './location';
import { Clock, Facebook, Linkedin, Mail, Map, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Define type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Handle form data change with proper type annotation
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission with proper type annotation
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Replace with your own EmailJS service details
    const serviceID = 'service_q400ebe';
    const templateID = 'template_jxg92us';
    const publicKey = 'LgSBp3bNTO_x658zX';

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, {
        publicKey: publicKey
      })
      .then(() => {
        setStatusMessage('Your message has been sent successfully!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('EmailJS Send Error:', error);
        setStatusMessage('Something went wrong, please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Contact us for <br /> more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start mx-2">
                  <Map size={25} color="#0284c7" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Quebec, Canada
                  </span>
                </p>

                <p className="flex items-start mx-2">
                  <Phone color="#0284c7" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">514-235-7890</span>
                </p>

                <p className="flex items-start mx-2">
                  <Mail color="#0284c7" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    solutionsanitaireoptimale@gmail.com
                  </span>
                </p>

                <p className="flex items-start mx-2">
                  <Clock color="#0284c7" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    Get support from us 24/7
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.linkedin.com/in/arman-hakim-cep-mechanical-engineer-051b05281/"
                    target='_blank'
                  >
                    <Linkedin size={28} color="#a8a29e" />
                  </a>

                  <a
                    className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.facebook.com/profile.php?id=61569615074941"
                    target='_blank'
                  >
                    <Facebook size={28} color="#a8a29e" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium text-gray-700">Tell us about your query</h1>

                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get in touch'}
                  </button>

                  {statusMessage && (
                    <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
                      {statusMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />
    </>
  );
};

export default ContactPage;