import React from "react";

export default function TeamsLabel(){
    return(
        <div>
            {/*デスクトップ画面用*/}
            <div className="hidden lg:block lg:ml-9 lg:mb-6">
                <p className="text-4xl font-bold">班紹介</p>
            </div>
            {/*モバイル画面用*/}
            <div className="lg:hidden mb-6">
                <p className="flex justify-center text-4xl font-bold">班紹介</p>
            </div>
        </div>
    )
}