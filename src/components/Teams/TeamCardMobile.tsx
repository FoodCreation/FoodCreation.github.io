import React from "react";
import Link from "next/link";

type TeamTextProps = {
  title: string;
  bodytext: string;
  imageUrl: string;
  linkUrl: string;
};

export default function TeamCardMobile({ title, bodytext, imageUrl, linkUrl }: TeamTextProps) {
  return (
    <div className="teamcards">
      <div className="lg:hidden card shadow-xl image-full mx-5 my-[10px] relative">
        <figure><img src={imageUrl} alt={title} /></figure>
        <div className="card-body">
          <h1 className="text-4xl text-center font-bold text-slate-100">{title}</h1>
          <p className="justify-center items-center flex text-slate-100">{bodytext}</p>
          <div className="absolute bottom-4 right-4">
            <Link href={linkUrl} legacyBehavior>
              <a className="text-base text-yellow-400 hover:underline cursor-pointer">
                詳細はこちら
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
