'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { TranslationContext, getNestedTranslation } from '@/lib/i18n';
import { type Locale } from '@/config/i18n.config';

interface TranslationProviderProps {
    children: ReactNode;
    locale: Locale;
    initialTranslations?: Record<string, any>;
}

export default function TranslationProvider({
    children,
    locale,
    initialTranslations = {}
}: TranslationProviderProps) {
    const [translations, setTranslations] = useState<Record<string, any>>(initialTranslations);
    const [isLoading, setIsLoading] = useState(!Object.keys(initialTranslations).length);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/locales/${locale}/common.json`);
                if (response.ok) {
                    const data = await response.json();
                    setTranslations(data);
                } else {
                    console.error(`Failed to load translations for locale: ${locale}`);
                    setTranslations({});
                }
            } catch (error) {
                console.error('Error loading translations:', error);
                setTranslations({});
            } finally {
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [locale]);

    const t = (key: string): string => {
        return getNestedTranslation(translations, key);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading translations...</p>
                </div>
            </div>
        );
    }

    return (
        <TranslationContext.Provider value={{ locale, t, translations }}>
            {children}
        </TranslationContext.Provider>
    );
} 