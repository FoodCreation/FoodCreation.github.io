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
                <ContactText title="活動日時・場所" bodyText={`・毎週火曜日5限\n・パフォーミングスタジオ(23号館1階)`}></ContactText>
                <ContactText title="連絡先" bodyText={`mail: プロジェクトリーダー  流\nc1304709@st.kanazawa-it.ac.jp`}></ContactText>
                <div className="flex items-center mx-4 flex-col">
                    <span className="text-sm mb-1">フード</span>
                    <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc" />
                </div>
                <div className="flex items-center mx-4 flex-col">
                    <span className="text-sm mb-1">はちぽ</span>
                    <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/hachipo_official" />
                </div>
                <div className="flex items-center mx-4 flex-col">
                    <span className="text-sm mb-1">フードX</span>
                    <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
                </div>
                <div className="flex items-center mx-4 flex-col">
                    <span className="text-sm mb-1">はちぽX</span>
                    <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://x.com/hachipoofficial" />
                </div>
            </div>
            {/*モバイル画面用*/}
            <div className="whitespace-pre-wrap lg:hidden">
                <ContactText title="活動日時・場所" bodyText={`・毎週火曜日5限\n・パフォーミングスタジオ(23号館1階)`}></ContactText>
                <ContactText title="連絡先" bodyText={`mail: プロジェクトリーダー  流\nc1304709@st.kanazawa-it.ac.jp`}></ContactText>
                <div className="flex justify-center space-x-4">
                    <div className="flex items-center flex-col">
                        <span className="text-sm mb-1">フード</span>
                        <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc" />
                    </div>
                    <div className="flex items-center flex-col">
                        <span className="text-sm mb-1">はちぽ</span>
                        <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/hachipo_official" />
                    </div>
                    <div className="flex items-center flex-col">
                        <span className="text-sm mb-1">フードX</span>
                        <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
                    </div>
                    <div className="flex items-center flex-col">
                        <span className="text-sm mb-1">はちぽX</span>
                        <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://x.com/hachipoofficial" />
                    </div>
                </div>
            </div>
        </div>
    )
}