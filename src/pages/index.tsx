import React from "react";

{/*ここにその他インポート文を記述 */ }
{/*ここまで*/ }

export const Index = () => {
    return (
        <div className=" h-screen">
            <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
        </div>
    )
};

export default Index;