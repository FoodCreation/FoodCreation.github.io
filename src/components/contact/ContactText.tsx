import { disconnect } from "process";
import React from "react";

type ContactTextProps = {
    title:string
    bodyText:string
}

export default function ContactText({ title, bodyText }: ContactTextProps) {
    return (
        <div>
            {/*デスクトップ画面用*/}
            <div className="hidden lg:card lg:bg-slate-300 lg:w-96 lg:h-auto lg:p-6 lg:mx-2">
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-xl">{bodyText}</p>
            </div>
            {/*モバイル画面用*/}
            <div className="lg:hidden card bg-slate-300 w-10/12 h-24 pl-4 mx-auto mb-4">
                <p className="text-xl font-bold pt-1">{title}</p>
                <p className="text-l pt-1">{bodyText}</p>
            </div>
        </div>
    )
}