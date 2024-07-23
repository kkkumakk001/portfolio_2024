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

const skills = [
    {
        icon: <SiJavascript />,
        label: "JavaScript",
    },
    {
        icon: <SiTypescript />,
        label: "TypeScript",
    },
    {
        icon: <SiReact />,
        label: "React",
    },
    {
        icon: <SiNextdotjs />,
        label: "Next.js",
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind CSS",
    },
    {
        icon: <SiShadcnui />,
        label: "Shadcn/ui",
    },
    {
        icon: <SiSupabase />,
        label: "Supabase",
    },
    {
        icon: <SiVercel />,
        label: "Vercel",
    },
    {
        icon: <SiGithub />,
        label: "GitHub",
    },
];

const SkillCard = () => {
    return (
        <div className="flex flex-wrap w-full justify-around mt-8">
            {skills.map((skill) => (
                <Card
                    key={skill.label}
                    className="min-w-[200px] max-w-[400px] w-[80%] sm:w-[45%] xl:w-[30%] mb-12 hover:bg-accent/90 duration-200"
                >
                    <CardContent className="flex justify-center items-center pt-6 pb-2">
                        {skill.icon}
                    </CardContent>
                    <CardHeader className="pt-0">
                        <CardTitle className="text-lg font-medium text-center">
                            {skill.label}
                        </CardTitle>
                        <CardDescription className="text-justify pt-2">
                            各スキルの説明です、これはダミーです。テキストを入力してください。
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};

export default SkillCard;
