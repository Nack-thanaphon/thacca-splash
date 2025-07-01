'use client'

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

interface EventCardProps {
    titleImage: string
    description: string
    isSchedule: boolean
    isRegister: boolean
    color: string
}

export const PlanCard = ({ titleImage, description, isSchedule, isRegister, color }: EventCardProps) => {
    const { t } = useTranslation()

    return (
        <div className='bg-white p-3 rounded-lg h-[450px] flex flex-col items-center justify-center'>
            <div className='w-full h-full flex flex-col items-center justify-center p-10 space-y-10'>
                <Image src={titleImage} alt='titleImage' width={350} height={350} />
                <div className='text-center text-sm font-bold h-[240px]'>{description}</div>
                <div className='h-[4px] w-full ' style={{ backgroundColor: color }}> </div>
                <div className="lg:flex gap-3">
                    {isSchedule && (
                        <Button variant='ghost' size='sm' className='text-black' iconPosition='right'>
                            {t('schedule')}
                        </Button>
                    )}
                    {isRegister && (
                        <Button variant='ghost' size='sm' className='text-black' iconPosition='down'>
                            {t('register')}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

