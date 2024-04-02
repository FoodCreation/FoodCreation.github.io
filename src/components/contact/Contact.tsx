import React from "react";
import ContactIcon from "./ContactIcon";
import ContactLabel from "./ContactLabel";
import ContactText from "./ContactText";
import { IconProps } from "../Header/Header";

export default function Contact() {
    return (
        <div className="flex flex-col w-full border-opacity-50 mt-3 mb-9 pb-3">
            <ContactLabel />
            {/*デスクトップ画面用*/}
            <div className="hidden lg:flex lg:justify-center lg:items-center">
                <ContactText></ContactText>
                <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc/?igshid=YmMyMTA2M2Y%3D" />
                <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
            </div>
            {/*モバイル画面用*/}
            <div className="lg:hidden">
                <ContactText></ContactText>
                <div className="flex justify-center">
                    <ContactIcon imageUrl="/img/desktop/instagramIcon.png" altText="instagramの画像" iconLink="https://www.instagram.com/8ban_foodc/?igshid=YmMyMTA2M2Y%3D" />
                    <ContactIcon imageUrl="/img/desktop/xIcon.png" altText="xの画像" iconLink="https://twitter.com/foodc_8ban" />
                </div>
            </div>
        </div>
    )
}