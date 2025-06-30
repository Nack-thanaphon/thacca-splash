import { i18n, type Locale } from '@/config/i18n.config';

/**
 * Get the current locale from a pathname
 * @param pathname - The current pathname
 * @returns The locale string or default locale
 */
export function getLocaleFromPathname(pathname: string): Locale {
    const segments = pathname.split('/').filter(Boolean);
    const locale = segments[0];

    if (i18n.locales.includes(locale as Locale)) {
        return locale as Locale;
    }

    return i18n.defaultLocale;
}

/**
 * Get pathname without locale prefix
 * @param pathname - The current pathname
 * @returns Pathname without locale
 */
export function getPathnameWithoutLocale(pathname: string): string {
    const segments = pathname.split('/').filter(Boolean);

    // If first segment is a locale, remove it
    if (i18n.locales.includes(segments[0] as Locale)) {
        return '/' + segments.slice(1).join('/');
    }

    return pathname;
}

/**
 * Create a localized path
 * @param path - Path without locale
 * @param locale - Target locale
 * @returns Localized path
 */
export function createLocalizedPath(path: string, locale: Locale): string {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Create localized path
    return `/${locale}${cleanPath ? '/' + cleanPath : ''}`;
}

/**
 * Switch current path to a different locale
 * @param currentPathname - Current pathname
 * @param targetLocale - Target locale
 * @returns New localized path
 */
export function switchLocale(currentPathname: string, targetLocale: Locale): string {
    const pathWithoutLocale = getPathnameWithoutLocale(currentPathname);
    return createLocalizedPath(pathWithoutLocale, targetLocale);
}

/**
 * Navigation helper for programmatic navigation with locale
 */
export const navigation = {
    /**
     * Navigate to a path with current locale
     * @param path - Path to navigate to
     * @param locale - Optional locale (uses current if not provided)
     */
    push: (path: string, locale?: Locale) => {
        if (typeof window === 'undefined') return;

        const currentLocale = locale || getLocaleFromPathname(window.location.pathname);
        const localizedPath = createLocalizedPath(path, currentLocale);

        window.history.pushState({}, '', localizedPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
    },

    /**
     * Replace current path with locale
     * @param path - Path to replace with
     * @param locale - Optional locale (uses current if not provided)
     */
    replace: (path: string, locale?: Locale) => {
        if (typeof window === 'undefined') return;

        const currentLocale = locale || getLocaleFromPathname(window.location.pathname);
        const localizedPath = createLocalizedPath(path, currentLocale);

        window.history.replaceState({}, '', localizedPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
    }
}; 