import React from "react";

export default function OverViewText() {
    return (
        <div className="OverViewText">
            <div className="hidden lg:flex lg:justify-center lg:card lg:rounded-box lg:place-items-center lg:itmes-center lg:text-xl lg:font-semibold lg:w-11/12 lg:mx-auto lg:m-auto lg:pt-3 lg:pb-3">
                「食の未来を考える」をコンセプトに行なわれたアイデアソンから始まり、<br />
                そこから学生プロジェクトとして活動を行なっています。<br />
                現在では株式会社ハチバンさんと協働して、班に分かれながら活動しています。
            </div>
            <div className="lg:hidden flex justify-center card rounded-box place-items-center itmes-center font-semibold w-11/12 mx-auto m-auto pt-3 pb-3">
                「食の未来を考える」をコンセプトに行なわれたアイデアソンから始まり、<br />
                そこから学生プロジェクトとして活動を行なっています。<br />
                現在では株式会社ハチバンさんと協働して、班に分かれながら活動しています。
            </div>
        </div>
    )
}