import React from "react";

type HeaderProps = {
    title: string
}

export default function HeaderText({title}: HeaderProps){
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="text-2xl font-bold pl-3" href="/test"> {title}</a>
            </div>
        </div>
    )
}