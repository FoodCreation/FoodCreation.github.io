import React from "react";
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
            <img src={imageUrl} alt={altText} className="w-16 pl-4"></img>
            <HeaderText title={title}></HeaderText>
            <HeaderNavbar></HeaderNavbar>
        </div>
    )
}