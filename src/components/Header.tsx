import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { LogoIcon } from './icon'
import { HeroSection } from './section'

export const Header = ({ params }: { params: { lang: string } }) => {
    return (
        <div className=' h-full bg-red-500 pt-2 w-full relative p-4'>
            <div className='lg:absolute top-0 right-0 flex justify-center items-center  p-4'>
                <LanguageSwitcher currentLocale={params.lang} />
            </div>
            <div className='flex justify-center items-center w-full p-4'>
                <LogoIcon />
            </div>
            <HeroSection />
        </div>
    )
}

