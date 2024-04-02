import React from "react";

export default function HeaderNavbar() {
    return (
        <div className="">
            {/* 画面サイズが小さいとき用 */}
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 text-slate-900 rounded-box w-56 right-0 font-bold">
                    <li className="w-1/3"><a href="#About">About</a></li>
                    <li className="w-1/3"><a href="#Teams">班紹介</a></li>
                    <li className="w-1/3"><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            {/* 画面サイズが大きいとき用 */}
            <div className="hidden lg:bg-opacity-30 lg:flex lg:items-center lg:justify-between lg:pr-[3rem]">
                <ul className="list-none flex w-80 text-white">
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a href="#About">About</a></li>
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a href="#Teams">班紹介</a></li>
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}