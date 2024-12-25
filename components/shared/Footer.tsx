import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png'; // Replace with your actual logo path
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const services = [
  { label: 'Disinfection', href: '#' },
  { label: 'Cleaning', href: '#' },
  { label: 'Indoor Janitorial', href: '#' },
  { label: 'Commercial Floor Cleaning', href: '#' },
  { label: 'Outdoor Building Maintenance', href: '#' },
  { label: 'Event Support', href: '#' },
];

const industries = [
  { label: 'Commercial', href: '#' },
  { label: 'Education', href: '#' },
  { label: 'Industrial', href: '#' },
  { label: 'Hospitality', href: '#' },
  { label: 'Healthcare', href: '#' },
  { label: 'Institutional', href: '#' },
];

const connectLinks = [
  { label: 'Address: ', href: '#' },
  { label: 'Quebec, Canada', href: '#' },
  { label: 'Email:', href: '#' },
  { label: 'arman@ssoptimale.ca', href: '#' },
];

const socialLinks = [
  { href: '#', label: 'Facebook', icon: <FacebookIcon />, color: 'hover:text-blue-700' },
  { href: '#', label: 'Instagram', icon: <InstagramIcon />, color: 'hover:text-red-500' },
  { href: '#', label: 'Twitter', icon: <TwitterIcon />, color: 'hover:text-blue-500' },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="container mx-auto flex items-center md:items-center lg:items-end md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-96">
          <Link href="/">
              <Image
                src={Logo}
                alt="Solution Saintaire Optimale"
                className='h-full w-full'
              />
          </Link>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
          {[
            { title: 'SERVICES', links: services },
            { title: 'INDUSTRIES', links: industries },
            { title: 'CONNECT WITH US', links: connectLinks },
          ].map((section, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full px-4">
              <a className="title-font font-bold text-gray-900 tracking-widest text-md mb-3" href={`/${section.title}`}>{section.title}</a>
              <nav className="list-none mb-10">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} legacyBehavior>
                      <a className="text-gray-600 hover:text-gray-800">{link.label}</a>
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Solution Saintaire Optimale
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-x-3 text-gray-500">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} passHref className={link.color}>
                {link.icon}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
