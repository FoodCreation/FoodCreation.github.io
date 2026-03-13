import React from "react";
import { IconProps } from "../Header/Header";


interface LinkIconProps extends IconProps {
    iconLink: string;
};

export default function ContactIcon({ imageUrl, altText, iconLink }: LinkIconProps) {
    return (
        <div className="mx-4">
            <a href={iconLink} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} width={60} height={60} alt={altText} />
            </a>
        </div>
    )
}