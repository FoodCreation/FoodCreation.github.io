import React from "react";
import OverViewText from "./OverViewText";
import TimeLine from "./TimeLine";
import OverViewLabel from "./OverViewLabel";
import TimeLineLabel from "./TimeLineLabel";

export default function OverView() {
    return (
        <div className="">
            <div className="flex flex-col w-full border-opacity-50 my-3 pb-3">
                <OverViewLabel></OverViewLabel>
                <OverViewText></OverViewText>
                <div className="divider mx-6"></div>
                <TimeLineLabel></TimeLineLabel>
                <TimeLine></TimeLine>
                <div className="divider mx-6"></div>
            </div>
        </div>
    )
}