'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { routing } from '@/i18n/routing';

const LOCALE_STORAGE_KEY = 'preferred-locale';

export const useLocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale || !routing.locales.includes(newLocale as any)) return;
    const currentPathname = window.location.pathname;
    const newPathname = currentPathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    router.push(newPathname);
  };

  const getLocaleLabel = (loc: string) => {
    const labels: Record<string, string> = {
      en: 'EN',
      ru: 'RU',
      tj: 'TJ',
    };
    return labels[loc] || loc.toUpperCase();
  };

  return {
    locale,
    switchLocale,
    localeLabel: getLocaleLabel(locale),
  };
};