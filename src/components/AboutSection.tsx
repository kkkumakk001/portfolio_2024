import Link from "next/link";
import SectionWrap from "./SectionWrap";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const learningHistory = [
    {
        date: "2024年1月",
        desc: "Reactの学習を開始",
    },
    {
        date: "2024年2月",
        desc: "Next.jsの学習を開始",
    },
    {
        date: "2024年3月",
        desc: "TypeScript,TailwindCSSの学習を開始",
    },
    {
        date: "2024年4月",
        desc: "GithubFlow,",
    },
];

const AboutSection = () => {
    return (
        <SectionWrap title="ABOUT" desc="簡単な自己紹介をさせてください">
            <div className="flex flex-wrap md:justify-between">
                <div className="w-full md:w-[45%] mb-12 md:mb-0">
                    <p className="text-xl">K.K</p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas a
                        voluptatem tenetur odit enim amet incidunt fugiat ex possimus?
                    </p>
                    <Button asChild>
                        <Link
                            href="/work"
                            className="flex flex-wrap gap-1 items-center border border-[var(--border)] rounded-md py-2 px-4 w-fit mb-4"
                        >
                            <span>作品を見る</span>
                            <ChevronRightIcon />
                        </Link>
                    </Button>
                    <p>詳細な学習履歴をまとめました</p>
                    <Link href="#">(Notion)</Link>
                </div>
                <div className="w-full md:w-[45%]">
                    <ul className="flex flex-col">
                        {learningHistory.map((item) => (
                            <li className="[&:not(:last-child)]:mb-4" key={item.desc}>
                                <p className="border-l-4 border-[var(--primary)] pl-2">
                                    {item.date}
                                </p>
                                <p className="pl-3">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrap>
    );
};

export default AboutSection;
