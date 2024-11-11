import React from "react";
import Container from "./Container";
import { FadeAnimation } from "./FadeAnimation";

type AnimationType = "fade" | "slideLeft" | "slideUp";

type Props = {
    title: string;
    desc: string;
    type?: AnimationType;
    children?: React.ReactNode;
};

const SectionWrap = ({ children, title, desc, type }: Props) => {
    return (
        <section className="py-8 mb-16 lg:mb-24">
            <Container>
                <FadeAnimation type={type}>
                    <h2 className="font-en text-2xl border-b-4 mb-4 max-w-fit">{title}</h2>
                </FadeAnimation>
                <FadeAnimation type="fade">
                    <p className="mb-12 leading-loose">{desc}</p>
                </FadeAnimation>
                {children}
            </Container>
        </section>
    );
};

export default SectionWrap;
