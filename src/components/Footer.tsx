"use client"

import Link from 'next/link';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './icon';
import { useTranslation } from '@/lib/i18n';

export const Footer = () => {
    const { t } = useTranslation();

    const menuItem = [
        {
            title: t('terms_conditions'),
            url: '/'
        },
        {
            title: t('privacy_policy'),
            url: '/project/'
        },
        {
            title: t('copyright_full'),
            url: '/news/'
        }
    ];

    const socialItem = [
        {
            title: 'facebook',
            icon: <FacebookIcon />,
            url: '/'
        },
        {
            title: 'x',
            icon: <XIcon />,
            url: '/'
        },
        {
            title: 'youtube',
            icon: <YoutubeIcon />,
            url: '/'
        },
        {
            title: 'instagram',
            icon: <InstagramIcon />,
            url: '/'
        }

    ]


    return (
        <div>
            <nav className='lg:max-w-[90vw] mx-auto   px-2 py-4'>
                <div className="flex flex-col items-center  gap-4">
                    <div className='flex justify-between items-center gap-4 max-w-[180px] lg:max-w-[240px] mx-auto lg:mx-0' >
                        {socialItem.map((item, index) => (
                            <div key={index}>
                                <Link href={item.url} >
                                    {item.icon}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={`lg:flex mt-4 lg:mt-0`}>
                        <ul className="flex  justify-between lg:space-x-8 mx-auto w-full">
                            {menuItem.map((item, index) => (
                                <li key={index} className={`cursor-pointer pb-2 ${index == 2 ? 'hidden lg:block' : ''}`}>
                                    <Link className="nav-link text-secoundary" href={item.url} >{item.title}</Link>
                                </li>

                            ))}

                        </ul>
                        <p className='lg:hidden block text-center mt-2' dangerouslySetInnerHTML={{ __html: t('copyright_short') }} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

