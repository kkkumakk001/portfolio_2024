import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiVercel,
    SiShadcnui,
    SiTypescript,
    SiNotion,
    SiJavascript,
    SiRadixui,
} from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import Marquee from "react-fast-marquee";

const icons = [
    {
        icon: <SiJavascript color="#F7DF1E" />,
        label: "JavaScript",
    },
    {
        icon: <SiTypescript color="#3178C6" />,
        label: "TypeScript",
    },
    {
        icon: <SiReact color="#61DAFB" />,
        label: "React",
    },
    {
        icon: <SiNextdotjs color="#000000" />,
        label: "Next.js",
    },
    {
        icon: <SiTailwindcss color="#06B6D4" />,
        label: "Tailwind CSS",
    },
    {
        icon: <SiShadcnui color="#000000" />,
        label: "Shadcn/ui",
    },
    {
        icon: <SiRadixui color="#161618" />,
        label: "RadixUI",
    },
    {
        icon: <SiSupabase color="#3FCF8E" />,
        label: "Supabase",
    },
    {
        icon: <SiVercel color="#000000" />,
        label: "Vercel",
    },
    {
        icon: <SiGithub color="#181717" />,
        label: "GitHub",
    },
    {
        icon: <SiNotion color="#000000" />,
        label: "Notion",
    },
];

export default function SkillsMarquee() {
    return (
        <div className="py-24 lg:py-16 mx-auto max-w-[800px] overflow-hidden">
            <span className="sr-only">セクションタイトル</span>
            <Marquee
                speed={30}
                gradient
                gradientColor="hsl(var(--background))"
                gradientWidth={120}
                className="text-muted-foreground"
            >
                {icons.map((icon) => (
                    <div key={icon.label} className="mx-6">
                        <Slot className="w-10 h-10">{icon.icon}</Slot>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
