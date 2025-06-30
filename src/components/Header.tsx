import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { LogoIcon } from './icon'
import { HeroSection } from './section'

export const Header = ({ params }: { params: { lang: string } }) => {
    return (
        <div className='relative h-full bg-red-500'>
            <div className='flex justify-center items-center w-full p-4'>
                <LogoIcon />
            </div>
            <div className='absolute top-3 right-3'>
                <LanguageSwitcher currentLocale={params.lang} />
            </div>
            <HeroSection />
        </div>
    )
}

