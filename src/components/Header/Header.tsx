import React from "react";
import Image from "next/image";
import HeaderText from "./HeaderText";
import HeaderNavbar from "./HeaderNavbar";

type HeaderProps = {
    title: string
}

export interface IconProps  {
    imageUrl: string;
    altText: string;
}

export default function Header({ title, imageUrl, altText }: HeaderProps & IconProps) {
    return (
        <div className="navbar shadow bg-red-600 top-0 z-30 sticky">
            <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                <Image src={`/${imageUrl}`} alt={altText} fill className="object-cover" sizes="64px" priority />
            </div>
            <HeaderText title={title}></HeaderText>
            <HeaderNavbar></HeaderNavbar>
        </div>
    )
}