import React from "react";
import TeamCardDesktop from "./TeamCardDesktop";

export default function TeamsDesktop() {
    return (
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:mx-[61px]">
            <TeamCardDesktop title="メニュー班" imageUrl="img/desktop/MenuTeam.png" bodytext="新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！"></TeamCardDesktop>
            <TeamCardDesktop title="Web班" imageUrl="img/desktop/WebTeam.png" bodytext="Web班では８番らーめん工大前店で使えるWebポイントアプリを開発してます。本気でWebアプリ開発がしたい方、Webアプリで&quot;食&quot;の在り方について考えたい方大募集中です！！！"></TeamCardDesktop>
            <TeamCardDesktop title="And More..." imageUrl="img/desktop/IMG5816.jpg" bodytext=""></TeamCardDesktop>
        </div>
    )
}