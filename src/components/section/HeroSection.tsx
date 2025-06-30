import React from 'react'
import { HeroSlider, PhotoSlider } from '../sliders'
import Image from 'next/image'


const mockData = [
    {
        title: '8–11 July 2025',
        description: 'Queen Sirikit National Convention Center (QSNCC) Hall 1–4, Floor G',
        detail: `“THACCA SPLASH - Soft Power Forum” <br /> is an international forum that brings together everything related to creative culture, <br /> both from Thailand and around the world.`
    }
]


export const HeroSection = () => {
    return (
        <div className=' h-full text-center text-white p-3'>
            {mockData.map((item) => (
                <div key={item.title} className='flex flex-col items-center justify-center mb-4'>
                    <h1 className='text-white lg:text-[180px] text-[100px] font-bold'>{item.title}</h1>
                    <h1 className='text-white lg:text-[45px] text-[40px] font-bold'>{item.description}</h1>
                    <div className="py-8">
                        <Image src="/image/vector/001.svg" alt="floor plan" width={50} height={50} />
                    </div>
                    <div className='text-white text-[24px]  text-center font-medium' dangerouslySetInnerHTML={{ __html: item.detail }} />
                    <div className="pt-8 pb-2">
                        <Image src="/image/vector/002.svg" alt="floor plan" width={229} height={150} />
                    </div>
                    <p>Partner & Participant</p>
                </div>
            ))}
            <HeroSlider />
            <PhotoSlider />
        </div>
    )
}
