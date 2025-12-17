import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";

type TeamPageData = {
    title: string;
    subtitle: string;
    headerImage: string;
    headerColor?: string;
    headerGradient?: string;
    mainImages: Array<{
        src: string;
        alt: string;
    }>;
    aboutSection: {
        title: string;
        paragraphs: string[];
    };
    recommendSection: {
        title: string;
        items: string[];
    };
    additionalSections?: Array<{
        title: string;
        content: string;
        images?: Array<{
            src: string;
            alt: string;
        }>;
    }>;
    ctaButton: {
        text: string;
        link: string;
    };
};

type TeamPageLayoutProps = {
    data: TeamPageData;
};

export default function TeamPageLayout({ data }: TeamPageLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header 
                title="フードクリエイション" 
                imageUrl="img/desktop/foocre8_icon_348.png" 
                altText="アイコン画像" 
            />
            
            {/* ヘッダーセクション */}
            <div 
                className="py-12 px-4 text-slate-900"
                style={{ 
                    background: data.headerColor || `linear-gradient(to right, ${data.headerGradient})` 
                }}
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">{data.title}</h1>
                    <p className="text-xl">{data.subtitle}</p>
                </div>
            </div>

            {/* メインコンテンツ */}
            <div className="flex-grow py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* メイン画像セクション（複数対応） */}
                    <div className="mb-8">
                        {data.mainImages.length === 1 ? (
                            // 画像が1枚の場合
                            <div className="rounded-lg overflow-hidden shadow-xl relative h-96">
                                <Image 
                                    src={data.mainImages[0].src}
                                    alt={data.mainImages[0].alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    priority
                                />
                            </div>
                        ) : (
                            // 画像が複数の場合
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {data.mainImages.map((image, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden shadow-xl relative h-64">
                                        <Image 
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 活動内容セクション */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{data.aboutSection.title}</h2>
                        <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                            {data.aboutSection.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* 追加セクション（任意） */}
                    {data.additionalSections && data.additionalSections.map((section, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">{section.title}</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">{section.content}</p>
                            
                            {/* セクション内の画像 */}
                            {section.images && section.images.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {section.images.map((image, imgIndex) => (
                                        <div key={imgIndex} className="rounded-lg overflow-hidden shadow relative h-48">
                                            <Image 
                                                src={image.src} 
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* おすすめセクション */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">{data.recommendSection.title}</h2>
                        <ul className="space-y-3 text-lg text-slate-700">
                            {data.recommendSection.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-3 text-2xl">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTAボタン */}
                    <div className="text-center">
                        <Link 
                            href={data.ctaButton.link}
                            className="inline-block px-8 py-4 bg-orange-600 text-white text-xl rounded-lg hover:bg-orange-700 transition shadow-lg"
                        >
                            {data.ctaButton.text}
                        </Link>
                        <div className="mt-8">
                            <Link href="/#Teams" className="text-lg hover:underline text-slate-900">
                                ← ホームに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
