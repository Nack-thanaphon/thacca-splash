import { Header, Footer } from '@/components';
import TranslationProvider from '@/context/TranslationProvider';
import { Kanit } from 'next/font/google';

interface LayoutProps {
    children: React.ReactNode;
    params: { lang: string };
}

const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-kanit'
})

export default function Layout({ children, params }: LayoutProps) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body className={kanit.className}>
                <TranslationProvider locale={params.lang as 'en' | 'th'}>
                    <Header params={params} />
                    {children}
                    <Footer />
                </TranslationProvider>
            </body>
        </html>
    );
}
