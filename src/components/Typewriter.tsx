"use client";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        setShowTypewriter(true);
    }, []);

    return (
        <>
            {showTypewriter ? (
                <Typewriter
                    words={["welcome", "K.K's Portfolio"]}
                    loop={2}
                    typeSpeed={80}
                    deleteSpeed={80}
                    delaySpeed={1000}
                />
            ) : null}
        </>
    );
};

export default TypeWriter;
