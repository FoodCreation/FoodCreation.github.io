import React from "react";
import Head from "next/head";

import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/slider";
import OverView from "@/components/OverView/OverView";
import TeamsLabel from "@/components/Teams/TeamsLabel";
import TeamsDesktop from "@/components/Teams/TeamsDesktop";
import TeamsMobile from "@/components/Teams/TeamsMobile";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { kiwiMaruRegular } from "@/components/font/styles.font";

const text = {
    title: "金沢工業大学 フードクリエイションプロジェクト",
    description: "金沢工業大学フードクリエーションプロジェクトのホームページです！株式会社ハチバンと連携して『食』をテーマに活動しています！ メニュー開発，Webアプリ開発，マーケティングなどに興味のある方，食べ物が大好きな方などメンバーを大募集です！",
};

export default function Index() {
    return (
        <div className={kiwiMaruRegular.className}>
            <Head>
                <title>{text.title}</title>
                <meta name="description" content={text.description} />
                <meta name="color-scheme" content="light" />
            </Head>
            <Header title="フードクリエイション" imageUrl="img/desktop/foocre8_icon_348.png" altText="アイコン画像" />
            <div className="bg-slate-100 text-slate-900">
                <Slider />
                <OverView />
                <div className="">
                    <div id="Teams" className="h-20"></div>
                    <TeamsLabel></TeamsLabel>
                    <TeamsDesktop></TeamsDesktop>
                    <TeamsMobile></TeamsMobile>
                    <div className="divider mx-6"></div>
                </div>
                <div id="Contact" className=""></div>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    )
}
