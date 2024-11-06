import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import Slider from "@/components/Slider/slider";
import OverView from "@/components/OverView/OverView";
import TeamsLabel from "@/components/Teams/TeamsLabel";
import TeamsDesktop from "@/components/Teams/TeamsDesktop";
import TeamsMobile from "@/components/Teams/TeamsMobile";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
    return (
        <>
            <Header title="フードクリエイション" imageUrl="img/desktop/foocre8_icon_348.png" altText="アイコン画像" />
            <Slider />
            <OverView />
            <div className="">
                <div id="Teams" className="h-20"></div>
                <TeamsLabel />
                <TeamsDesktop />
                <TeamsMobile />
                <div className="divider mx-6"></div>
            </div>
            <div id="Contact" className=""></div>
            <Contact />
            <Footer />

        </>
    );
}