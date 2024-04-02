import React from "react";
import { IconProps } from "../Header/Header";
import Link from "next/link";

interface LinkIconProps extends IconProps {
    iconLink: string;
};

export default function ContactIcon({ imageUrl, altText, iconLink }: LinkIconProps) {
    return (
        <div className="mx-4">
            <Link href={iconLink}>
                <img src={imageUrl} width={60} height={60} alt={altText}></img>
            </Link>
        </div>
    )
}