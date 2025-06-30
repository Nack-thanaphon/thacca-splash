import { createContext, useContext } from 'react';
import { i18n, type Locale } from '@/config/i18n.config';

// Translation context
export const TranslationContext = createContext<{
    locale: Locale;
    t: (key: string) => string;
    translations: Record<string, any>;
}>({
    locale: 'th',
    t: (key: string) => key,
    translations: {},
});

// Hook to use translations
export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};

// Helper function to load translations
export async function loadTranslations(locale: Locale): Promise<Record<string, any>> {
    try {
        const response = await fetch(`/locales/${locale}/common.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translations for ${locale}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading translations for ${locale}:`, error);
        return {};
    }
}

// Helper function to get nested translation value
export function getNestedTranslation(obj: any, key: string): string {
    const keys = key.split('.');
    let current = obj;

    for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
            current = current[k];
        } else {
            return key; // Return key if translation not found
        }
    }

    return typeof current === 'string' ? current : key;
}

// Supported locales
export const locales = i18n.locales;
export const defaultLocale = i18n.defaultLocale; 