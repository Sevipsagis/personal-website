import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sevipsagis.dev"),
  title: {
    default: "Nuttapol Phomthon | Sevipsagis",
    template: "%s | Sevipsagis",
  },
  description:
    "Software Engineer specializing in scalable systems and modern web development. View my portfolio.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Thailand"],
  authors: [{ name: "Nuttapol Phomthon" }],
  creator: "Nuttapol Phomthon",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sevipsagis.dev",
    title: "Nuttapol Phomthon | Sevipsagis",
    description:
      "Software Engineer specializing in scalable systems and modern web development. View my portfolio.",
    siteName: "Nuttapol Phomthon Personal Website",
    images: [
      {
        url: "/me.webp",
        width: 1200,
        height: 630,
        alt: "Nuttapol Phomthon Personal Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuttapol Phomthon | Sevipsagis",
    description:
      "Software Engineer specializing in scalable systems and modern web development. View my portfolio.",
    images: ["/me.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nuttapol Phomthon",
  jobTitle: "Software Engineer",
  url: "https://sevipsagis.dev",
  image: "https://sevipsagis.dev/me.webp",
  description:
    "Software Engineer specializing in scalable systems and modern web development.",
  sameAs: [
    "https://www.linkedin.com/in/npbenz",
    "https://github.com/sevipsagis",
  ],
  knowsAbout: [
    "Software Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "DevOps",
    "Scalable Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${urbanist.className} bg-neo-bg text-neo-black antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
