import React from 'react'
import { HeroSlider, PhotoSlider } from '../sliders'
import Image from 'next/image'


const mockData = [
    {
        title: '8–11 July 2025',
        description: 'Queen Sirikit National Convention Center (QSNCC) Hall 1–4, Floor G',
        detail: `“THACCA SPLASH - Soft Power Forum” is an international forum that brings together everything related to creative culture, both from Thailand and around the world.`
    }
]


export const HeroSection = () => {
    return (
        <div className=' h-full text-center text-white'>
            {mockData.map((item) => (
                <div key={item.title} className='flex flex-col items-center justify-center'>
                    <h1 className='text-white text-[180px] font-medium'>{item.title}</h1>
                    <h1 className='text-white text-[45px] font-medium'>{item.description}</h1>
                    <Image src="/image/vector/001.svg" alt="floor plan" width={50} height={50} />
                    <p className='text-white text-[24px]  w-[900px] text-center font-medium'>{item.detail}</p>
                    <Image src="/image/vector/002.svg" alt="floor plan" width={150} height={150} />
                    <p>Partner & Participant</p>

                </div>
            ))}
            <HeroSlider />
            <PhotoSlider />
        </div>
    )
}
