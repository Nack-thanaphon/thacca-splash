import '../index.css';
import { Header, Footer } from '@/components';


interface LayoutProps {
    children: React.ReactNode;
    params: { lang: string };
}

export default function Layout({ children, params }: LayoutProps) {
    return (
        <html lang={params.lang}>
            <body>
                <Header params={params} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
