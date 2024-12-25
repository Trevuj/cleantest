import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/contact': '/contact',
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always'; // Default

export type AppPathnames = keyof typeof pathnames;