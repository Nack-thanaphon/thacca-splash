import Link from 'next/link';
import { i18n } from '@/config/i18n.config';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <div className="space-y-4">
                    <Link
                        href={`/${i18n.defaultLocale}`}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go to Homepage (ไทย)
                    </Link>
                    <br />
                    <Link
                        href="/en"
                        className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Go to Homepage (English)
                    </Link>
                </div>
            </div>
        </div>
    );
} 