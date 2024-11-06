import React from "react";
import { kiwiMaruRegular } from "@/components/font/styles.font";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "金沢工業大学 フードクリエイションプロジェクト",
    description: "金沢工業大学フードクリエーションプロジェクトのホームページです！株式会社ハチバンと連携して『食』をテーマに活動しています！ メニュー開発，Webアプリ開発，マーケティングなどに興味のある方，食べ物が大好きな方などメンバーを大募集です！",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className="bg-slate-100 text-slate-900">
                <div className={kiwiMaruRegular.className}>
                    {children}
                </div>
            </body>
        </html>
    );
}