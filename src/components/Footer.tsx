"use client"

import Link from 'next/link';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from './icon';

export const Footer = () => {
    const menuItem = [
        {
            title: 'ข้อตกลงและเงื่อนไข',
            url: '/'
        },
        {
            title: 'นโยบายความเป็นส่วนตัว',
            url: '/project/'
        },
        {
            title: 'สงวนลิขสิทธิ์สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)',
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
                        <p className='lg:hidden block text-center mt-2'>
                            สงวนลิขสิทธิ์ <br /> สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน) (สพร.)
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

