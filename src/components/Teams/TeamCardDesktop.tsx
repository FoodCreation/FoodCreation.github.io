import React from "react";

type TeamTextProps = {
    title: string
    bodytext: string
    imageUrl: string
}

export default function TeamCardDesktop({ title, bodytext, imageUrl }: TeamTextProps) {
    return (
        <div className="teamcards w-1/3">
            {/* ここからデスクトップ向け表示 */}
            < div className="card shadow-xl image-full mx-auto" >
                <figure><img src={imageUrl} /></figure>
                <div className="card-body">
                    <h1 className="text-4xl text-center font-bold text-slate-100">{title}</h1>
                    <p className="justify-center items-center flex text-slate-100">{bodytext}</p>
                </div>
            </div >
            {/*ここまで*/}
        </div>
    )
}