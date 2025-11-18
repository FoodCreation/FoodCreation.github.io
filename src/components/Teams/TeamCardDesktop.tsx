import React from "react";
import Link from "next/link";

type TeamTextProps = {
    title: string;
    bodytext: string;
    imageUrl: string;
    linkUrl: string;
};

export default function TeamCardDesktop({ title, bodytext, imageUrl, linkUrl }: TeamTextProps) {
    return (
        <div className="teamcards w-1/3">
            <Link href={linkUrl}>
                <div className="card shadow-xl image-full mx-auto hover:opacity-90 transition">
                    <figure><img src={imageUrl} alt={title} /></figure>
                    <div className="card-body">
                        <h1 className="text-4xl text-center font-bold text-slate-100">{title}</h1>
                        <p className="justify-center items-center flex text-slate-100">{bodytext}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
