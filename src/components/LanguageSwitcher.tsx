'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/config/i18n.config';

interface LanguageSwitcherProps {
    currentLocale: string;
    className?: string;
}

export default function LanguageSwitcher({ currentLocale, className = '' }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = (newLocale: string) => {
        // Remove current locale from pathname
        const segments = pathname.split('/').filter(Boolean);
        const pathWithoutLocale = segments.slice(1).join('/');
        // Create new path with new locale
        const newPath = `/${newLocale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`;

        router.push(newPath);
    };

    const currentLocaleText = currentLocale === 'en' ? 'TH' : 'EN';

    return (
        <div className={`flex space-x-2 ${className}`}>
            <button
                className='text-white text-2xl font-medium'
                onClick={() => switchLanguage(currentLocale === 'en' ? 'th' : 'en')}

            >
                {currentLocaleText}
            </button>
        </div>
    );
} 