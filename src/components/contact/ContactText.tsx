import { disconnect } from "process";
import React from "react";

export default function ContactText() {
    return (
        <div>
            {/*デスクトップ画面用*/}
            <div className="hidden lg:card lg:bg-slate-300 lg:w-full lg:h-auto lg:p-6">
                <p className="text-2xl font-bold">連絡先</p>
                <p className="text-xl">mail: プロジェクトリーダー  富田<br/> c1247965@st.kanazawa-it.ac.jp</p>
            </div>
            {/*モバイル画面用*/}
            <div className="lg:hidden card bg-slate-300 w-10/12 h-24 pl-4 mx-auto mb-4">
                <p className="text-xl font-bold pt-1">連絡先</p>
                <p className="text-l pt-1">mail: プロジェクトリーダー  富田<br/> c1247965@st.kanazawa-it.ac.jp</p>
            </div>
        </div>
    )
}