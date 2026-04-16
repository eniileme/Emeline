import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const themeInitScript = `
(function(){
  try {
    var k = "emeline-theme";
    var t = localStorage.getItem(k);
    if (t === "dark") document.documentElement.classList.add("dark");
    else if (t === "light") document.documentElement.classList.remove("dark");
  } catch (e) {}
})();
`;


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emelineleguillou.com"),
  title: {
    default: "Emeline Le Guillou",
    template: "%s — Emeline Le Guillou",
  },
  description: "Portfolio — experience, projects, and learning.",
  keywords: ["Emeline Le Guillou", "portfolio", "customer success"],
  authors: [{ name: "Emeline Le Guillou" }],
  creator: "Emeline Le Guillou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emelineleguillou.com",
    title: "Emeline Le Guillou",
    description: "Portfolio — experience, projects, and learning.",
    siteName: "Emeline Le Guillou",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Emeline Le Guillou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emeline Le Guillou",
    description: "Portfolio — experience, projects, and learning.",
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
  // Explicit icons + cache-bust query so updated favicons refresh after deploys
  icons: {
    icon: [
      {
        url: "/icon.png?v=6",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: [{ url: "/apple-icon.png?v=6", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
