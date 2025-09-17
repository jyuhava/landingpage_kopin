import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOPIN - Konsorsium Pendidikan Islam Internasional",
  description: "Membangun ekosistem pendidikan Islam yang kolaboratif dan berstandar global melalui KOPIN dan EduNation Fest 2025",
  keywords: ["KOPIN", "Pendidikan Islam", "EduNation Fest", "Konsorsium Pendidikan", "Pendidikan Internasional", "Islamic Education"],
  authors: [{ name: "KOPIN Team" }],
  creator: "KOPIN - Konsorsium Pendidikan Islam Internasional",
  publisher: "KOPIN",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kopinindonesia.org",
    title: "KOPIN - Konsorsium Pendidikan Islam Internasional",
    description: "Membangun ekosistem pendidikan Islam yang kolaboratif dan berstandar global",
    siteName: "KOPIN Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOPIN - Konsorsium Pendidikan Islam Internasional",
    description: "Membangun ekosistem pendidikan Islam yang kolaboratif dan berstandar global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
