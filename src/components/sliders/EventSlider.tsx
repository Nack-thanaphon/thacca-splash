'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Button from '../Button';
import { useTranslation } from '@/lib/i18n';

interface EventSliderProps {
    title: string;
    description: string;
    date: string;
    fontImage: string;
    Icon: string;
    link: string;
    color: string;
}

export function EventSlider() {
    const { t } = useTranslation()

    const mockPhotoSliderData: EventSliderProps[] = [
        {
            title: t('tcx_title'),
            description: t('tcx_description'),
            date: '2025-01-01',
            fontImage: '/image/event/001.png',
            Icon: '/image/event/001.png',
            link: '/event/001',
            color: '#3F8ACE',
        }, {
            title: t('music_program_title'),
            description: t('music_program_description'),
            date: '2025-01-02',
            fontImage: '/image/event/002.png',
            Icon: '/image/event/002.png',
            link: '/event/002',
            color: '#EB352B',
        }, {
            title: t('hotel_showcase_title'),
            description: t('hotel_showcase_description'),
            date: '2025-01-03',
            fontImage: '/image/event/003.png',
            Icon: '/image/event/003.png',
            link: '/event/003',
            color: '#C7292C',
        }
    ]

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
                            className="w-full  p-6 space-y-4 px-16 py-6 flex flex-col items-center justify-center rounded-lg h-[500px]  mx-auto text-black"
                        >
                            <h3 className=" font-semibold text-lg text-center">{slide.title}</h3>
                            <div className="w-full h-full p-3">
                                <Image
                                    src={slide.fontImage}
                                    alt={slide.title}
                                    width={850}
                                    height={950}
                                    className="mx-auto transition-transform duration-300 w-full h-full object-contain"
                                />
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: slide.description }} className=' text-sm flex flex-col items-center justify-center text-center leading-relaxed'></div>
                            <Button
                                variant="ghost"
                                size="sm"
                                iconPosition="right"
                                className="!text-black "
                            >
                                {t('read_more')}
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
} 