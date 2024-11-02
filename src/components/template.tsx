"use client";
import { motion } from "framer-motion";
import React from "react";

const overlayVariants = {
    initial: { x: "100%", width: "100%", opacity: 0 },
    animate: { x: "0%", width: "100%", opacity: 1 },
    exit: { x: "-100%", width: "100%", opacity: 1 },
};

interface TemplateProps {
    children: React.ReactNode;
    disableAnimation?: boolean;
}

export default function Template({ children, disableAnimation = false }: TemplateProps) {
    if (disableAnimation) {
        return <>{children}</>;
    }

    return (
        <motion.div
            className="site-wrapper mx-auto"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.3,
            }}
        >
            {children}
        </motion.div>
    );
}
