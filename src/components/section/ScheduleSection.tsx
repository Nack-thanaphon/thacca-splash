import React from 'react'
import { SideEventIcon, SideEventVectorIcon } from '../icon'
import Button from '../Button'
import Image from 'next/image'

export const
    ScheduleSection = () => {
        return (
            <div className='relative lg:h-[470px] h-[680px] w-full  !bg-red-500 flex flex-col items-center justify-center'>
                <div className="overflow-hidden absolute top-0 left-1/2 -translate-x-1/2">
                    <SideEventVectorIcon />
                </div>
                <div className='text-center my-8'>
                    <p className='text-white text-2xl font-bold'>Explore the creative journey—check out</p>
                    <p className='text-white text-2xl font-bold'>THACCA SPLASH floor plan featuring all</p>
                    <p className='text-white text-2xl font-bold'>key zones in one view.</p>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    iconPosition="right"
                    className="!text-white hover:bg-white/20 !w-fit"
                >
                    View Floor Plan
                </Button>
                <Image src="/image/vector/001.svg" alt="floor plan" width={50} height={50} />
                <div className='hidden lg:block absolute -bottom-16  left-1/2 -translate-x-1/2  w-fit h-fit py-8'>
                    <SideEventIcon className='w-full h-full text-white' />
                </div>
            </div>
        )
    }


