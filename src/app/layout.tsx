import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamilton Healthcare Services",
  description: "Leading Healthcare Staffing Solutions in Hamilton",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/icon?<generated>',
        type: 'image/x-icon',
        sizes: 'any'
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#070F2B",
      },
    ],
  },
  manifest: "/site.webmanifest",
  applicationName: "Hamilton Healthcare Services",
  keywords: ["healthcare", "staffing", "medical staffing", "healthcare jobs", "Hamilton healthcare"],
  authors: [{ name: "Hamilton Healthcare Services" }],
  creator: "Hamilton Healthcare Services",
  publisher: "Hamilton Healthcare Services",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


