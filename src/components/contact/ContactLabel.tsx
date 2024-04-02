import React from "react";

export default function ContactLabel() {
    return (
        <div>
            {/*デスクトップ画面用*/}
            <div id="Contact" className="hidden lg:block lg:ml-9 lg:mb-6">
                <p className="text-4xl font-bold">Contact</p>
            </div>
            {/*モバイル画面用*/}
            <div id="Contact" className="lg:hidden mb-6">
                <p className="flex justify-center text-4xl font-bold">Contact</p>
            </div>
        </div>
    )
}