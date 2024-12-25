import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import "../globals.css";
import { Navigation } from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import LanguageToggle from '@/components/shared/LanguageToggle';

const inter = Inter({ subsets: ['latin'] });

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LanguageToggle />
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}