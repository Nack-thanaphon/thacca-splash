declare module 'next/server' {
    export interface NextRequest extends Request {
        nextUrl: {
            pathname: string;
            search: string;
        };
    }

    export class NextResponse extends Response {
        static next(): NextResponse;
        static redirect(url: string | URL): NextResponse;
    }
}

declare module 'next/navigation' {
    export function notFound(): never;
    export function useRouter(): any;
    export function usePathname(): string;
} 