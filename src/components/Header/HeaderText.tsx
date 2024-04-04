import React from "react";

type HeaderProps = {
    title: string
}

export default function HeaderText({title}: HeaderProps){
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="text-xl lg:text-4xl font-bold pl-3 text-white"> {title}</a>
            </div>
        </div>
    )
}