'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Icon } from 'lucide-react';
import Image from 'next/image';


interface HeroSliderProps {
    title: string;
    Icon: string;
}


const mockSliderData: HeroSliderProps[] = [
    {
        title: '01',
        Icon: '/image/icon/001.svg',

    }, {
        title: '02',
        Icon: '/image/icon/002.svg',

    }, {
        title: '03',
        Icon: '/image/icon/003.svg',

    }, {
        title: '04',
        Icon: '/image/icon/004.svg',

    }, {
        title: '05',
        Icon: '/image/icon/005.svg',

    }, {
        title: '07',
        Icon: '/image/icon/007.svg',
    }, {
        title: '08',
        Icon: '/image/icon/008.svg',
    }, {
        title: '09',
        Icon: '/image/icon/009.svg',
    }, {
        title: '10',
        Icon: '/image/icon/010.svg',
    }, {
        title: '11',
        Icon: '/image/icon/011.svg',
    }, {
        title: '12',
        Icon: '/image/icon/012.svg',
    }, {
        title: '13',
        Icon: '/image/icon/013.svg',
    }, {
        title: '14',
        Icon: '/image/icon/014.svg',
    }
]

export function HeroSlider() {

    return (
        <div className="relative w-full p-5 max-w-[1200px] mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                slidesPerGroup={1}
                breakpoints={{
                    768: {
                        slidesPerView: 10,
                        slidesPerGroup: 1,
                        spaceBetween: 24,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                }}
                loop={true}
                centeredSlides={false}
                className="w-full"
            >
                {mockSliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full p-3 flex items-center justify-center">
                            <Image
                                src={slide.Icon}
                                alt={slide.title}
                                width={50}
                                height={50}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>

    );
} 