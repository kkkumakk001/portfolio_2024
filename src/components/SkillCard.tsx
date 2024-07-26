import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
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
} from "@icons-pack/react-simple-icons";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";

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
                <StarFilledIcon />
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
                <StarIcon />
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
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
];

const SkillCard = () => {
    return (
        <div className="flex flex-wrap w-full justify-around mt-8">
            {skills.map((skill) => (
                // <Card
                //     key={skill.label}
                //     className="min-w-[200px] max-w-[400px] w-[80%] sm:w-[45%] xl:w-[30%] mb-12 hover:bg-accent/90 duration-200"
                // >
                <Card key={skill.label} className="w-[137px] mb-12 hover:bg-accent/90 duration-200">
                    <CardContent className="flex justify-center items-center pt-4 pb-2">
                        {skill.icon}
                    </CardContent>
                    <CardHeader className="pt-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-center">
                            {skill.label}
                        </CardTitle>
                        <CardDescription className="text-justify">
                            {/* 各スキルの説明です、これはダミーです。テキストを入力してください。 */}
                            {skill.level}
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

export default SkillCard;
