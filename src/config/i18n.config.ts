export const i18n = {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    localeDetection: true,
} as const;

export type Locale = (typeof i18n)['locales'][number]; 