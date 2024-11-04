"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade" | "slideLeft" | "slideUp";

interface AnimationProps {
    children: ReactNode;
    type?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeAnimation: React.FC<AnimationProps> = ({
    children,
    type = "fade",
    delay = 0,
    duration = 1000,
    className = "",
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animationClass = {
        fade: "opacity-0",
        slideLeft: "opacity-0 -translate-x-8",
        slideUp: "opacity-0 translate-y-8",
    }[type];

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out",
                isVisible ? "opacity-100 translate-x-0 translate-y-0" : animationClass,
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};
