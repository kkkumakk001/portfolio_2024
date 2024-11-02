"use client";
import { useCallback } from "react";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

const ScrollDown = () => {
    const handleScroll = useCallback(() => {
        const target = document.getElementById("marquee");
        const headerOffset = 44;

        if (target) {
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 50;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button onClick={handleScroll} className="animate-bounce-infinite p-4">
                <DoubleArrowDownIcon />
            </button>
        </div>
    );
};

export default ScrollDown;
