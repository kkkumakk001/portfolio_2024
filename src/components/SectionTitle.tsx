import React from "react";

type Props = {
    title: string;
    desc: string;
    children: React.ReactNode;
};

const SectionWrap = ({ children, title, desc }: Props) => {
    return (
        <section>
            <h2 className="text-2xl font-semibold border-b-4 mb-4 max-w-fit">{title}</h2>
            <p>{desc}</p>
            {children}
        </section>
    );
};

export default SectionWrap;

// タイトルと説明をpropsで受け取り、
// ##title
// descripttion
// みたいにする
