'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Button from '../Button';

interface EventSliderProps {
    title: string;
    description: string;
    date: string;
    fontImage: string;
    Icon: string;
    link: string;
    color: string;
}


const mockPhotoSliderData: EventSliderProps[] = [
    {
        title: 'TCX',
        description: `<p>Showcasing Thailand’s</p><p>creative content on the global</p><p>stage.</p>`,
        date: '2025-01-01',
        fontImage: '/image/event/001.png',
        Icon: '/image/event/001.png',
        link: '/event/001',
        color: '#3F8ACE',
    }, {
        title: 'Splash Official Music Program',
        description: `<p>Future Asian Music x Levi’s®</p><p>Presents:ROAD TO FAM – The</p><p>Finale FT. MILLI in Bangkok</p>`,
        date: '2025-01-02',
        fontImage: '/image/event/002.png',
        Icon: '/image/event/002.png',
        link: '/event/002',
        color: '#EB352B',
    }, {
        title: 'Splash Hotel Showcase Programs',
        description: `<p>Living Thai Soft Power - Where Every</p><p>Stay Tells a Story of Thai</p><p> Art, Taste and Tradition</p>`,
        date: '2025-01-03',
        fontImage: '/image/event/003.png',
        Icon: '/image/event/003.png',
        link: '/event/003',
        color: '#C7292C',
    }
]

export function EventSlider() {




    return (
        <div className="relative w-full p-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={9}
                slidesPerView={1}
                slidesPerGroup={1}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 24,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                }}
                loop={true}
                centeredSlides={false}
                className="w-full flex justify-center items-center"
            >
                {mockPhotoSliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{ backgroundColor: slide.color }}
                            className="w-full  p-6 space-y-4 px-16 py-6 flex flex-col items-center justify-center rounded-lg"
                        >
                            <h3 className="text-white font-semibold text-lg text-center">{slide.title}</h3>
                            <div className="w-full h-full p-3">
                                <Image
                                    src={slide.fontImage}
                                    alt={slide.title}
                                    width={550}
                                    height={950}
                                    className="mx-auto transition-transform duration-300 w-full h-full object-contain"
                                />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: slide.description }} className='text-white text-sm text-center leading-relaxed'></div>
                            <Button
                                variant="ghost"
                                size="sm"
                                iconPosition="right"
                                className="!text-white hover:bg-white/20"
                            >
                                Read More
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
} 