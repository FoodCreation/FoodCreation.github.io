import React from "react";

export default function HeaderNavbar() {
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
                    <li className="w-1/3"><a>Item 1</a></li>
                    <li className="w-1/3"><a>Item 2</a></li>
                    <li className="w-1/3"><a>Item 3</a></li>
                </ul>
            </div>
            <div className="g-black hidden bg-opacity-30 md:flex md:items-center md:justify-between md:pr-[3rem]">
                <ul className="list-none flex w-80">
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a>Item 1</a></li>
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a>Item 2</a></li>
                    <li className="w-1/3 pl-3 btn btn-ghost text-lg"><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}