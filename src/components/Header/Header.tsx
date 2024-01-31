import React from "react";
import HeaderText from "./HeaderText";
import HeaderNavbar from "./HeaderNavbar";

type HeaderProps = {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="navbar shadow bg-transparent bg-black bg-opacity-40 lg:fixed top-0 z-10 sticky">
            <HeaderText title={title}></HeaderText>
            <HeaderNavbar></HeaderNavbar>
        </div>
    )
}