'use client'

import React from 'react'
import { SideEventIcon, SideEventVectorIcon } from '../icon'
import Button from '../Button'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

export const ScheduleSection = () => {
    const { t } = useTranslation()

    return (
        <div className='relative lg:h-[470px] h-[680px] w-full  !bg-red-500 flex flex-col items-center justify-center'>
            <div className="overflow-hidden absolute top-0 left-1/2 -translate-x-1/2">
                <SideEventVectorIcon />
            </div>
            <div className='text-center my-8'>
                <p className='text-white text-2xl font-bold'>{t('explore_creative_journey')}</p>
                <p className='text-white text-2xl font-bold'>{t('thacca_splash_floor_plan')}</p>
                <p className='text-white text-2xl font-bold'>{t('key_zones_one_view')}</p>
            </div>
            <Button
                variant="ghost"
                size="sm"
                iconPosition="right"
                className="!text-white hover:bg-white/20 !w-fit"
            >
                {t('view_floor_plan')}
            </Button>
            <Image src="/image/vector/001.svg" alt="floor plan" width={50} height={50} className='py-8' />
            <div className='hidden lg:block absolute -bottom-20  left-1/2 -translate-x-1/2  w-fit h-fit py-8'>
                <SideEventIcon className='w-full h-full text-white' />
            </div>
        </div>
    )
}


