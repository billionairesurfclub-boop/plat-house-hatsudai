import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス渋谷Ⅲ（神泉）| 渋谷駅5分 民泊 最大6名 80㎡ 浴槽・キッチン完備",
  description:
    "渋谷駅徒歩5分・神泉駅徒歩3分。80㎡の広々空間で最大6名。Netflix・Disney+・Nintendo Switch・ドラム式洗濯機・浴槽・キッチン・リビング・ボタニスト完備。渋谷観光・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス渋谷, 渋谷 民泊, 渋谷 宿泊, 神泉 民泊, 渋谷 グループ, 渋谷 一棟貸し, Shibuya accommodation, Tokyo Shibuya stay, 渋谷 浴槽付き 宿泊, 渋谷 最大6名",
  openGraph: {
    title: "ぷらっとハウス渋谷Ⅲ（神泉）| 渋谷駅5分 80㎡ 最大6名",
    description:
      "渋谷駅5分・神泉駅3分。80㎡・最大6名。Netflix・Disney+・浴槽・キッチン・ボタニスト完備。",
    url: "https://shibuya3.plat-house.jp",
    siteName: "Plat House Shibuya III",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://shibuya3.plat-house.jp",
    languages: {
      "ja": "https://shibuya3.plat-house.jp",
      "en": "https://shibuya3.plat-house.jp/en",
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
          "name": "ぷらっとハウス渋谷Ⅲ（神泉）",
          "url": "https://shibuya3.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "円山町22-3",
            "addressLocality": "渋谷区",
            "addressRegion": "東京都",
            "postalCode": "150-0044",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥30,000〜¥60,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Disney+", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ドラム式洗濯機", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
