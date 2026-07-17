import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://link.syahreza-satria.xyz"),
  title: "Link - Syahreza Satria Alfath",
  description: "Digital Creator | Web Developer | UI Designer. Connect with Syahreza Satria's social links, portfolios, and projects. Made with 🤍 by Syahreza Satria.",
  keywords: [
    "Syahreza Satria",
    "Syahreza Satria Alfath",
    "Web Developer",
    "UI Designer",
    "Digital Creator",
    "Linktree",
    "Personal Links",
    "LunasinYuk",
    "Local Taste Coffee"
  ],
  authors: [{ name: "Syahreza Satria Alfath", url: "https://syahreza-satria.xyz" }],
  creator: "Syahreza Satria Alfath",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://link.syahreza-satria.xyz/",
    title: "Link - Syahreza Satria Alfath",
    description: "Digital Creator | Web Developer | UI Designer. Connect with Syahreza Satria's social links, portfolios, and projects.",
    siteName: "Syahreza Satria Alfath Link",
    images: [
      {
        url: "/avatar.webp?v=1",
        width: 500,
        height: 500,
        alt: "Syahreza Satria Alfath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Link - Syahreza Satria Alfath",
    description: "Digital Creator | Web Developer | UI Designer. Connect with Syahreza Satria's social links, portfolios, and projects.",
    images: ["/avatar.webp?v=1"],
  },
  alternates: {
    canonical: "https://link.syahreza-satria.xyz/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Syahreza Satria Alfath",
      "alternateName": "Syahreza Satria",
      "jobTitle": "Digital Creator | Web Developer | UI Designer",
      "url": "https://link.syahreza-satria.xyz/",
      "image": "https://link.syahreza-satria.xyz/avatar.webp?v=1",
      "sameAs": [
        "https://instagram.com/syahreza_satria",
        "https://youtube.com/SyahrezaSatria",
        "https://www.threads.com/@syahreza_satria",
        "https://www.linkedin.com/in/syahreza-satria-alfath",
        "https://github.com/syahreza-satria",
        "https://www.tiktok.com/@syahrezasatria"
      ]
    }
  };

  return (
    <html lang="id">
      <body className={`${jakarta.variable} antialiased min-h-screen`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

