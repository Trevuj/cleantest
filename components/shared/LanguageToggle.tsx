"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
      aria-label="Toggle language"
    >
      <Globe className="w-6 h-6" />
      <span className="sr-only">
        {locale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      </span>
    </button>
  );
}