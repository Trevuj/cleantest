"use client";
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-20">
      <div className="py-5 relative bg-white/60 backdrop-blur-sm">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className='flex flex-row items-center'>
              <Image src={Logo} alt="Logo" height={100} width={100} className='cursor-pointer ml-4 md:ml-0'/>
              <span className='hidden md:block lg:block text-xl font-semibold tracking-tight'>Solution Saintaire Optimale</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X size={30} className="text-black" /> :
                <Menu size={30} className="text-black" />
              }
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black items-center">
              <Link href="/about">{t('about')}</Link>
              <Link href="#services">{t('services')}</Link>
              <Link href="#industries">{t('industries')}</Link>
              <Link href="#why-us">{t('whyUs')}</Link>
              <Link href="/contact">{t('contact')}</Link>
            </nav>

            {/* Mobile Navigation */}
            <div className={`absolute top-full left-0 right-0
              bg-white border-t border-gray-700/20
              shadow-lg md:hidden
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
              <nav className="flex flex-col items-center py-8 gap-6">
                <Link href="/about" className="text-black/70 hover:text-black transition-colors text-lg">
                  {t('about')}
                </Link>
                <Link href="#services" className="text-black/70 hover:text-black transition-colors text-lg">
                  {t('services')}
                </Link>
                <Link href="#industries" className="text-black/70 hover:text-black transition-colors text-lg">
                  {t('industries')}
                </Link>
                <Link href="#why-us" className="text-black/70 hover:text-black transition-colors text-lg">
                  {t('whyUs')}
                </Link>
                <Link href="/contact" className="text-black/70 hover:text-black transition-colors text-lg">
                  {t('contact')}
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};