import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";

const skillLevel = [
    {
        label: "興味あり、テンプレートを改変して遊んでみた程度",
        level: (
            <div className="flex flex-wrap">
                <StarFilledIcon />
                <StarIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        label: "公式ドキュメントを読み、チュートリアルを終えた程度",
        level: (
            <div className="flex flex-wrap">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarIcon />
            </div>
        ),
    },
    {
        label: "実際にプロジェクトで使用している、エラー文にも対応できるようになってきている程度",
        level: (
            <div className="flex flex-wrap">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarFilledIcon />
            </div>
        ),
    },
];

const SkillLevel = () => {
    return (
        <div className="-mt-6 mb-12 p-6 rounded-2xl bg-accent border border-foreground/300">
            {skillLevel.map((skill, index) => (
                <div key={index} className="[&:not(:last-child)]:mb-4">
                    {skill.level}
                    <p>{skill.label}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillLevel;
