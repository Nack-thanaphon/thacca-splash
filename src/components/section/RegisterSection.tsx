import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const RegisterSection = () => {
    return (
        <div className='grid  lg:grid-cols-2 gap-8 px-10  text-center text-white bg-black'>
            <Image src='/image/hero/001.png' alt='register' width={300} height={300} className='h-full w-fit' />
            <div className='flex justify-center items-center flex-col gap-4 p-10 space-y-4'>
                <div className='uppercase space-y-4'>
                    <h1 className='text-5xl font-bold'>Register</h1>
                    <h1 className='text-5xl font-bold'>Splash 2025</h1>
                </div>
                <p className='text-base'>Register to join THACCA SPLASH 2025</p>

                <button className='bg-red-500 rounded-sm flex justify-between items-center p-5 '>
                    <p>Register</p>
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}
