import React from 'react'
import { EventSlider } from '../sliders'

export const EventSection = () => {
    return (
        <div className='relative h-[800px] bg-[#F3F3F3] max-w-[1200px] mx-auto  lg:mt-16 flex flex-col items-center justify-center'>
            <EventSlider />
        </div>
    )
}
