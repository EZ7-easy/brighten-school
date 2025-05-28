import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

const isProtectedRoute = createRouteMatcher([
  '/ai(.*)',
  '/listening(.*)',
  '/quiz(.*)',
  '/statistics(.*)',
  '/profile(.*)',
]);

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;

  // Skip public files and API routes
  const PUBLIC_FILE = /\.(.*)$/;
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return NextResponse.next();
  }

  // Locale redirect
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // PROTECT routes using Clerk's built-in auth
  if (isProtectedRoute(request)) {
    const authObj = await auth(); // Await the auth object
    if (!authObj.userId) {
      // Redirect to sign-in page if not authenticated
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images).*)'],
};