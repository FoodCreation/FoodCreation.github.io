import React from "react";

{/*ここにその他インポート文を記述 */ }
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/slider";
import OverView from "@/components/OverView/OverView";
import TeamsLabel from "@/components/Teams/TeamsLabel";
import TeamsDesktop from "@/components/Teams/TeamsDesktop";
import TeamsMobile from "@/components/Teams/TeamsMobile";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { kiwiMaruRegular, shinRetroMaruGothicRegular, zenMaruGothicRegular } from "@/components/font/styles.font";
{/*ここまで*/ }

export default function index() {
    return (
        <div className={kiwiMaruRegular.className}>
            <Header title="foocre" imageUrl="img/desktop/foocre8_icon.png" altText="アイコン画像"></ Header>
            <div className="">
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