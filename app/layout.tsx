import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス初台 | 初台駅徒歩7分 30㎡1K 最大4名 民泊",
  description:
    "初台駅（京王新線）徒歩7分・西新宿5丁目駅徒歩10分。30㎡の1K一棟貸切・最大4名。ダブルマットレス×2・Nintendo Switch・キッチン完備。新宿エリアのプライベートステイ。",
  keywords:
    "ぷらっとハウス初台, 初台 民泊, 新宿 宿泊, 西新宿 民泊, Hatsudai accommodation, Tokyo stay",
  openGraph: {
    title: "ぷらっとハウス初台 | 初台駅7分 30㎡1K 最大4名",
    description:
      "初台駅7分。30㎡1K一棟貸切・最大4名。ダブルマットレス×2・Nintendo Switch・キッチン完備。",
    url: "https://hatsudai.plat-house.jp",
    siteName: "Plat House Hatsudai",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://hatsudai.plat-house.jp",
    languages: {
      "ja": "https://hatsudai.plat-house.jp",
      "en": "https://hatsudai.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス初台",
          "url": "https://hatsudai.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "初台",
            "addressLocality": "渋谷区",
            "addressRegion": "東京都",
            "postalCode": "160-0023",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥19,800〜¥19,800",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
