import '../index.css';
import { Header, Footer } from '@/components';
import TranslationProvider from '@/context/TranslationProvider';

interface LayoutProps {
    children: React.ReactNode;
    params: { lang: string };
}

export default function Layout({ children, params }: LayoutProps) {
    return (
        <html lang={params.lang}>
            <body>
                <TranslationProvider locale={params.lang as 'en' | 'th'}>
                    <Header params={params} />
                    {children}
                    <Footer />
                </TranslationProvider>
            </body>
        </html>
    );
}
