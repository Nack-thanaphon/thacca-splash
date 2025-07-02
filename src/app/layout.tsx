import { Kanit } from 'next/font/google';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-kanit'
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={kanit.className}>{children}</body>
        </html>
    );
} 