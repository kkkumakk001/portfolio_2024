import React from "react";
import SnsButtons from "./SnsButtons";
import ContactButton from "./ContactButton";
import ScrollDown from "./ScrollDown";
import TypeWriter from "./Typewriter";

const Hero = () => {
    return (
        <div className="relative font-en h-dvh flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-blue-400 transform rotate-45"></div>
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-blue-400 transform -rotate-45"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                    <span className="text-blue-400">
                        <span className="inline-block h-[49px] md:h-[65px] lg:h-[82px]"></span>
                        <TypeWriter />
                    </span>
                </h1>
                <span className="flex justify-center">
                    <SnsButtons />
                </span>
                <ContactButton />
            </div>
            <ScrollDown />
        </div>
    );
};

export default Hero;
