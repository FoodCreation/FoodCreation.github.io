import React from "react";
import ContactIcon from "./ContactIcon";
import ContactLabel from "./ContactLabel";
import ContactText from "./ContactText";

export default function Contact() {
    return (
        <div className="flex flex-col w-full border-opacity-50 mt-3 pb-9">
            <ContactLabel />
            {/*デスクトップ画面用*/}
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:whitespace-pre-wrap">
                <ContactText title="活動日時・場所" bodyText={`・毎週火曜日5限\n・チャレンジラボ(26号館1階ロビー)`}></ContactText>
                <ContactText title="連絡先" bodyText={`mail: プロジェクトリーダー  富田\nc1247965@st.kanazawa-it.ac.jp`}></ContactText>
                <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc/?igshid=YmMyMTA2M2Y%3D" />
                <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
            </div>
            {/*モバイル画面用*/}
            <div className="whitespace-pre-wrap lg:hidden">
                <ContactText title="活動日時・場所" bodyText={`・毎週火曜日5限\n・チャレンジラボ(26号館1階ロビー)`}></ContactText>
                <ContactText title="連絡先" bodyText={`mail: プロジェクトリーダー  富田\nc1247965@st.kanazawa-it.ac.jp`}></ContactText>
                <div className="flex justify-center">
                    <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc/?igshid=YmMyMTA2M2Y%3D" />
                    <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
                </div>
            </div>
        </div>
    )
}