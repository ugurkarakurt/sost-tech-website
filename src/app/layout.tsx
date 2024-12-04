// src/app/layout.tsx
import { AppProviders } from '@/components/providers/AppProviders';
import { Metadata } from 'next';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sost.com.tr'),
  title: 'SOST Technology',
  description: 'SAP Danışmanlık Hizmetlerinde Uzmanlık ve Yenilikçi Çözümler',
  verification: {
    google: '1BJvBgdaX6NjZ5mXgoB42aQ1_VI3P-RorXuT6hIcCgU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}