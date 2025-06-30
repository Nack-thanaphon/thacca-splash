'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface PhotoSliderProps {
    title: string;
    Icon: string;
}


const mockPhotoSliderData: PhotoSliderProps[] = [
    {
        title: '01',
        Icon: '/image/header/001.png',

    }, {
        title: '02',
        Icon: '/image/header/002.png',

    }, {
        title: '03',
        Icon: '/image/header/003.png',

    }, {
        title: '04',
        Icon: '/image/header/004.png',

    }, {
        title: '05',
        Icon: '/image/header/005.png',

    }
]

export function PhotoSlider() {



    return (
        <div className="relative w-full p-5 max-w-[1200px] mx-auto ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={9}
                slidesPerView={1}
                slidesPerGroup={1}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
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
                className="w-full flex items-center justify-center"
            >
                {mockPhotoSliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full p-3 mx-auto">
                            <Image
                                src={slide.Icon}
                                alt={slide.title}
                                width={400}
                                height={400}
                                className='w-full h-full'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
} 