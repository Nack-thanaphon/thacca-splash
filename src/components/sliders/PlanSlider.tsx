'use client';

import React from 'react';
import { PlanCard } from '../PlanCard';
import { useTranslation } from '@/lib/i18n';

interface PlanItem {
    titleImage: string;
    description: string;
    isSchedule: boolean;
    isRegister: boolean;
    color: string;
}

export function PlanSlider() {
    const { t } = useTranslation()

    const planData: PlanItem[] = [
        {
            titleImage: '/image/plan/001.svg',
            description: t('plan_description'),
            isSchedule: true,
            isRegister: true,
            color: '#E5E23B',
        },
        {
            titleImage: '/image/plan/002.svg',
            description: t('plan_description'),
            isSchedule: true,
            isRegister: true,
            color: '#9BD3DD',
        },
        {
            titleImage: '/image/plan/003.svg',
            description: t('plan_description'),
            isSchedule: true,
            isRegister: true,
            color: '#C8292C',
        },
        {
            titleImage: '/image/plan/004.svg',
            description: t('plan_description'),
            isSchedule: true,
            isRegister: true,
            color: '#01796F',
        },
        {
            titleImage: '/image/plan/005.svg',
            description: t('plan_description'),
            isSchedule: true,
            isRegister: true,
            color: '#E89ABE',
        },

    ];

    return (
        <div className="w-full p-3 space-y-5">
            {/* Top row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {planData.slice(0, 2).map((item, index) => (
                    <PlanCard
                        key={index}
                        titleImage={item.titleImage}
                        description={item.description}
                        isSchedule={item.isSchedule}
                        isRegister={item.isRegister}
                        color={item.color}
                    />
                ))}
            </div>

            {/* Bottom row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {planData.slice(2, 5).map((item, index) => (
                    <PlanCard
                        key={index}
                        titleImage={item.titleImage}
                        description={item.description}
                        isSchedule={item.isSchedule}
                        isRegister={item.isRegister}
                        color={item.color}
                    />
                ))}
            </div>
        </div>
    );
} 