import React from "react";
import TeamCardMobile from "./TeamCardMobile";

export default function TeamsMobile() {
    return (
        <div className="lg:hidden">
            <TeamCardMobile
                title="メニュー班"
                imageUrl="img/desktop/MenuTeam.png"
                bodytext="新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！"
                linkUrl="/teams/menu"
            />
            <TeamCardMobile
                title="Web班"
                imageUrl="img/desktop/WebTeam.png"
                bodytext="Web班では８番らーめん工大前店で使えるハチバン初のポイントサイトを開発してます。本気でWebアプリ開発がしたい方、「Web」×「食」によって新たな価値提供を考えたい方、大募集中です！！！"
                linkUrl="/teams/web"
            />
            <TeamCardMobile
                title="And More..."
                imageUrl="img/desktop/IMG5816.jpg"
                bodytext=""
                linkUrl="/teams/andmore"
            />
        </div>
    );
}
