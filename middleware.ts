import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.MAINTENANCE === '1';
  
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow access to essential routes during maintenance
  const allowedPaths = [
    '/_next',
    '/api',
    '/favicon.ico',
    '/favicon.svg',
    '/og.png',
    '/preview-secret',
    '/coming-soon',
  ];

  const isAllowedPath = allowedPaths.some(path => pathname.startsWith(path));

  if (isAllowedPath) {
    return NextResponse.next();
  }

  // Redirect all other requests to coming-soon page
  return NextResponse.rewrite(new URL('/coming-soon', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
