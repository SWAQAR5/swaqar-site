import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SWAQAR — Structured Trade Coordination System",
    template: "%s | SWAQAR",
  },
  description:
    "SWAQAR governs how cross-border trade transactions are verified, structured, and executed between Africa and the Middle East. Only verified and structured transactions are allowed to proceed.",
  applicationName: "SWAQAR",
  keywords: [
    "trade coordination",
    "cross-border trade",
    "Africa Middle East trade",
    "trade infrastructure",
    "verified trade corridors",
    "structured trade",
    "trade coordination system",
    "Africa trade",
    "Saudi Arabia trade",
    "UAE trade",
  ],
  authors: [{ name: "SWAQAR" }],
  creator: "SWAQAR",
  publisher: "SWAQAR",
  metadataBase: new URL("https://swaqar.com"),
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // ── Favicon set ──────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "SWAQAR — Structured Trade Coordination System",
    description:
      "A controlled coordination layer for cross-border trade between Africa and the Middle East.",
    siteName: "SWAQAR",
    type: "website",
    locale: "en_US",
    url: "https://swaqar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWAQAR — Structured Trade Coordination System",
    description:
      "A controlled coordination layer for cross-border trade between Africa and the Middle East.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A1A1A",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SWAQAR",
  description:
    "Structured Trade Coordination System governing cross-border trade between Africa and the Middle East.",
  url: "https://swaqar.com",
  logo: "https://swaqar.com/logo.svg",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "opportunities@swaqar.com",
      contactType: "Trade Opportunities",
    },
    {
      "@type": "ContactPoint",
      email: "partnerships@swaqar.com",
      contactType: "Partnerships",
    },
  ],
  areaServed: ["Africa", "Middle East"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-swaqar-bg text-swaqar-text antialiased selection:bg-swaqar-gold selection:text-swaqar-bg">
        {children}
      </body>
    </html>
  );
}