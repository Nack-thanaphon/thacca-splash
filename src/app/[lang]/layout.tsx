import { i18n } from '@/config/i18n.config';
import '../index.css';
import { Header, Footer } from '@/components';


interface LayoutProps {
    children: React.ReactNode;
    params: { lang: string };
}

export default function LangLayout({ children, params }: LayoutProps) {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body>
                <Header params={params} />
                {children}
                <Footer />
            </body>
        </html>
    );
}

// Generate static params for all supported locales
export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({
        lang: locale,
    }));
}

