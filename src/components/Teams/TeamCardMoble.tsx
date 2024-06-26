import React from "react";

type TeamTextProps = {
    title: string
    bodytext: string
    imageUrl: string
}

export default function TeamCardMobile({ title, bodytext, imageUrl }: TeamTextProps) {
    return (
        <div className="teamcards">
            {/* ここからモバイル向け表示 */}
            < div className="lg:hidden card shadow-xl image-full mx-5 my-[10px]" >
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