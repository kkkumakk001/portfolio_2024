import React from "react";
import Container from "./Container";

type Props = {
    title: string;
    desc: string;
    children: React.ReactNode;
};

const SectionWrap = ({ children, title, desc }: Props) => {
    return (
        <section className="py-8">
            <Container>
                <h2 className="text-2xl font-semibold border-b-4 mb-4 max-w-fit">{title}</h2>
                <p className="mb-12">{desc}</p>
                {children}
            </Container>
        </section>
    );
};

export default SectionWrap;
