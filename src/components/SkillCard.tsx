import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    SiGithub,
    SiNextdotjs,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiVercel,
    SiShadcnui,
    SiTypescript,
    SiJavascript,
    SiFirebase,
} from "@icons-pack/react-simple-icons";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { FadeAnimation } from "./FadeAnimation";

const skills = [
    {
        icon: <SiJavascript />,
        label: "JavaScript",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiTypescript />,
        label: "TypeScript",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiReact />,
        label: "React",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarFilledIcon />
            </div>
        ),
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind CSS",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiShadcnui />,
        label: "Shadcn/ui",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiSupabase />,
        label: "Supabase",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiFirebase />,
        label: "Firebase",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiVercel />,
        label: "Vercel",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
        level: (
            <div className="flex flex-wrap justify-center">
                <StarFilledIcon />
                <StarIcon />
                <StarIcon />
            </div>
        ),
    },
];

const SkillCard = () => {
    return (
        <div className="grid gap-4 sm:gap-6 grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 w-full mt-8 font-en">
            {skills.map((skill) => (
                <FadeAnimation type="slideUp" key={skill.label}>
                    <Card className="bg-accent hover:bg-accent/90 duration-200 ">
                        <CardContent className="flex justify-center items-center pt-4 pb-2">
                            {skill.icon}
                        </CardContent>
                        <CardHeader className="pt-0 pb-4">
                            <CardTitle className="text-sm font-semibold text-center">
                                {skill.label}
                            </CardTitle>
                            <div className="text-justify">{skill.level}</div>
                        </CardHeader>
                    </Card>
                </FadeAnimation>
            ))}
        </div>
    );
};

export default SkillCard;
