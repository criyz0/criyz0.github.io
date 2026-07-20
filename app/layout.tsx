import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://criyz0.github.io"),
  title: {
    default: "criyz",
    template: "%s · criyz",
  },
  description: "criyz 的个人网站与游戏经历。",
  openGraph: {
    title: "criyz — 游戏经历",
    description: "用游玩时长构成的交互式游戏词云。",
    siteName: "criyz",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 909,
        alt: "criyz — Play History",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "criyz — 游戏经历",
    description: "用游玩时长构成的交互式游戏词云。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
