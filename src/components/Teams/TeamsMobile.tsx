import React from "react";
import TeamCardMobile from "./TeamCardMoble";

export default function TeamsMobile() {
    return (
        <div className="lg:hidden">
            <TeamCardMobile title="メニュー班" imageUrl="img/desktop/05_20251001_175306029.webp" bodytext="新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！"></TeamCardMobile>
            <TeamCardMobile title="Web班" imageUrl="img/desktop/WebTeam.png" bodytext="Web班では８番らーめん工大前店で使えるハチバン初のポイントサイトを開発してます。本気でWebアプリ開発がしたい方、&quot;Web&quot;×&quot;食&quot;によって新たな価値提供を考えたい方、大募集中です！！！"></TeamCardMobile>
            <TeamCardMobile title="And More..." imageUrl="img/desktop/IMG5816.jpg" bodytext=""></TeamCardMobile>
        </div>
    )
}