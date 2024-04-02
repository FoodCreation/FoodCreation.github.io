import React from "react";
import TeamCardMobile from "./TeamCardMoble";

export default function TeamsMobile() {
    return (
        <div className="lg:hidden">
            <TeamCardMobile title="メニュー班" imageUrl="img/desktop/MenuTeam.png" bodytext="新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！"></TeamCardMobile>
            <TeamCardMobile title="Web班" imageUrl="img/desktop/WebTeam.png" bodytext="Web班では８番らーめん工大前店で使えるWebポイントアプリを開発してます。本気でWebアプリ開発がしたい方、Webアプリで&quot;食&quot;の在り方について考えたい方大募集中です！！！"></TeamCardMobile>
            <TeamCardMobile title="And More..." imageUrl="img/desktop/IMG5816.jpg" bodytext=""></TeamCardMobile>
        </div>
    )
}