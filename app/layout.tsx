import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emelineleguillou.com"),
  title: "Emeline Le Guillou — Coming Soon",
  description: "Coming soon - Emeline Le Guillou's portfolio and case studies.",
  keywords: ["Emeline Le Guillou", "portfolio", "coming soon"],
  authors: [{ name: "Emeline Le Guillou" }],
  creator: "Emeline Le Guillou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emelineleguillou.com",
    title: "Emeline Le Guillou — Coming Soon",
    description: "Coming soon - Emeline Le Guillou's portfolio and case studies.",
    siteName: "Emeline Le Guillou",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Emeline Le Guillou — Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emeline Le Guillou — Coming Soon",
    description: "Coming soon - Emeline Le Guillou's portfolio and case studies.",
    images: ["/og.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  // Favicon: app/icon.png + app/apple-icon.png (Next.js file convention)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <GoogleAnalytics />
        <Script
          src="https://glyphex.io/tracker.js"
          data-site-id="b526b0bf-dcd4-4550-b991-2110ace9ba21"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
