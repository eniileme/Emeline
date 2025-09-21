import { NextResponse } from 'next/server';

export function GET() {
  const robotsTxt = `User-agent: *
Disallow: /

# Coming soon - no indexing for now
# To enable indexing later, change Disallow: / to Allow: /`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
