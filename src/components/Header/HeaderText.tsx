import React from "react";

type HeaderProps = {
    title: string
}

export default function HeaderText({title}: HeaderProps){
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">{title}</a>
            </div>
        </div>
    )
}