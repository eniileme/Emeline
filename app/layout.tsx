import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emeline.fi'),
  title: "Emeline Le Guillou — Coming Soon",
  description: "Coming soon - Emeline Le Guillou's portfolio and case studies.",
  keywords: ["Emeline Le Guillou", "portfolio", "coming soon"],
  authors: [{ name: "Emeline Le Guillou" }],
  creator: "Emeline Le Guillou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emeline.fi",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
