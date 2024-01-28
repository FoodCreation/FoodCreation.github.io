import React from "react";
import HeaderText from "./HeaderText";
import HeaderNavbar from "./HeaderNavbar";

type HeaderProps = {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="navbar shadow bg-transparent bg-black bg-opacity-10 fixed top-0 z-10">
            <HeaderText title={title}></HeaderText>
            <HeaderNavbar></HeaderNavbar>
        </div>
    )
}