'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { type Locale } from '@/config/i18n.config';
import {
    getLocaleFromPathname,
    getPathnameWithoutLocale,
    createLocalizedPath,
    switchLocale
} from '@/lib/navigation.utils';

/**
 * Custom hook for localized navigation
 * Provides utilities for navigating with language prefixes
 */
export function useLocalizedNavigation() {
    const pathname = usePathname();
    const router = useRouter();

    // Get current locale from pathname
    const currentLocale = getLocaleFromPathname(pathname);

    // Get pathname without locale
    const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);

    /**
     * Navigate to a path with locale prefix
     * @param path - Path to navigate to (without locale)
     * @param locale - Optional locale (uses current if not provided)
     */
    const push = useCallback((path: string, locale?: Locale) => {
        const targetLocale = locale || currentLocale;
        const localizedPath = createLocalizedPath(path, targetLocale);
        router.push(localizedPath);
    }, [router, currentLocale]);

    /**
     * Replace current path with locale prefix
     * @param path - Path to replace with (without locale)
     * @param locale - Optional locale (uses current if not provided)
     */
    const replace = useCallback((path: string, locale?: Locale) => {
        const targetLocale = locale || currentLocale;
        const localizedPath = createLocalizedPath(path, targetLocale);
        router.replace(localizedPath);
    }, [router, currentLocale]);

    /**
 * Switch to a different locale while keeping the same path and scroll position
 * @param targetLocale - Locale to switch to
 * @param preserveScroll - Whether to preserve scroll position (default: true)
 */
    const switchLanguage = useCallback((targetLocale: Locale, preserveScroll: boolean = true) => {
        const newPath = switchLocale(pathname, targetLocale);

        if (preserveScroll && typeof window !== 'undefined') {
            // Store current scroll position
            const scrollY = window.scrollY;

            // Navigate with scroll disabled
            router.push(newPath, { scroll: false });

            // Restore scroll position after navigation
            setTimeout(() => {
                window.scrollTo(0, scrollY);
            }, 50);
        } else {
            router.push(newPath);
        }
    }, [router, pathname]);

    /**
     * Get localized path without navigating
     * @param path - Path to localize
     * @param locale - Optional locale (uses current if not provided)
     * @returns Localized path
     */
    const getLocalizedPath = useCallback((path: string, locale?: Locale) => {
        const targetLocale = locale || currentLocale;
        return createLocalizedPath(path, targetLocale);
    }, [currentLocale]);

    return {
        // Current state
        currentLocale,
        pathname,
        pathnameWithoutLocale,

        // Navigation methods
        push,
        replace,
        switchLanguage,

        // Utility methods
        getLocalizedPath,
    };
} 