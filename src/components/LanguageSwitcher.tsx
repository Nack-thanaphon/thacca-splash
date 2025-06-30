'use client';

import { useRouter } from 'next/navigation';

interface LanguageSwitcherProps {
    currentLocale: string;
    className?: string;
}

export default function LanguageSwitcher({ currentLocale, className = '' }: LanguageSwitcherProps) {

    const router = useRouter();

    const switchLanguage = (newLocale: string) => {
        router.push(`/${newLocale}`);
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