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

export default function Index() {
    return (
        <div className={kiwiMaruRegular.className}>
            {/* Use Head component to set meta tags */}
            <Head>
                <meta name="color-scheme" content="light" />
            </Head>
            <Header title="foocre" imageUrl="img/desktop/foocre8_icon.png" altText="アイコン画像" />
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
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    )
}
