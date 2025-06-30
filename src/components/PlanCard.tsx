import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface EventCardProps {
    titleImage: string
    description: string
    isSchedule: boolean
    isRegister: boolean
    color: string
}

export const PlanCard = ({ titleImage, description, isSchedule, isRegister, color }: EventCardProps) => {
    return (
        <div className='bg-white p-3 rounded-lg h-[350px] flex flex-col items-center justify-center'>
            <div className='w-full h-full flex flex-col items-center justify-center p-10 space-y-10'>
                <Image src={titleImage} alt='titleImage' width={350} height={350} />
                <p className='text-center text-sm font-bold'>{description}</p>
                <div className='h-2 w-full ' style={{ backgroundColor: color }}> </div>
                <div className="flex gap-3">
                    {isSchedule && (
                        <Button variant='ghost' size='sm' iconPosition='right'>
                            Schedule
                        </Button>
                    )}
                    {isRegister && (
                        <Button variant='ghost' size='sm' iconPosition='right'>
                            Register
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

