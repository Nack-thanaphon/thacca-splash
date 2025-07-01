import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './config/i18n.config'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  const pathname = req.nextUrl.pathname

  // Check if the pathname already includes a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect to default locale if no locale is present
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, req.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ]
}