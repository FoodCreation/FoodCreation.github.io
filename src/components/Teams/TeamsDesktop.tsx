import React from "react";
import TeamCardDesktop from "./TeamCardDesktop";

export default function TeamsDesktop() {
    return (
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:mx-[61px]">
            <TeamCardDesktop
                title="メニュー班"
                imageUrl="img/desktop/MenuTeam.png"
                bodytext="新メニューの開発やマーケティング、SNSで活動の配信を行っています。食べることが好きな方、データの分析をしてみたい方、マーケティングに興味がある方など大歓迎です！"
                linkUrl="/teams/menu"
            />
            <TeamCardDesktop
                title="Web班"
                imageUrl="img/desktop/WebTeam.png"
                bodytext="Web班では「他学科の学生や職員が出会う場を増やしたい」をコンセプトに８番らーめん工大前店で使えるハチバン初のポイントサイトを開発してます。本気でWebアプリ開発をしたい方、「Web」×「食」に興味がある方を大募集中です！毎週水曜日には開発勉強会も開催し、チームの技術力向上にも力を入れています。興味のある方はぜひ！！！"
                linkUrl="/teams/web"
            />
            <TeamCardDesktop
                title="And More..."
                imageUrl="img/desktop/IMG5816.jpg"
                bodytext=""
                linkUrl="/teams/andmore"
            />
        </div>
    );
}
