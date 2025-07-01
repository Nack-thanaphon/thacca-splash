"use client"

import React from 'react'
import { HeroSlider, PhotoSlider } from '../sliders'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'



export const HeroSection = () => {
    const { t } = useTranslation()

    const mockData = [
        {
            title: '8–11 July 2025',
            description: 'venue',
            detail: 'forum_description'
        }
    ]
    return (
        <div className=' h-full text-center text-white p-3'>
            {mockData.map((item) => (
                <div key={item.title} className='flex flex-col items-center justify-center mb-4'>
                    <h1 className='text-white lg:text-[180px] text-[100px] font-bold'>{t(item.title)}</h1>
                    <h1 className='text-white lg:text-[45px] text-[40px] font-bold'>{t(item.description)}</h1>
                    <div className="py-8">
                        <Image src="/image/vector/001.svg" alt="floor plan" width={50} height={50} />
                    </div>
                    <div className='text-white text-[24px]  text-center font-medium' dangerouslySetInnerHTML={{ __html: t(item.detail) }} />
                    <div className="pt-8 pb-2">
                        <Image src="/image/vector/002.svg" alt="floor plan" width={229} height={150} />
                    </div>
                    <p>{t('partner_participant')}</p>
                </div>
            ))}
            <HeroSlider />
            <PhotoSlider />
        </div>
    )
}
