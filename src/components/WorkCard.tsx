import Image from "next/image";
import DummyImage from "../../public/images/DummyImage.png";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Work {
    id: number;
    title: string;
    link: string;
    date: string;
    desc: string;
    skills: string[];
}

interface Props {
    works: Work[];
}

const WorkCard = ({ works }: Props) => {
    return (
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 place-content-center place-items-center w-full">
            {/* <div className="grid gap-12 grid-cols-1 md:grid-cols-2 place-content-center  w-full"> */}
            {works.map((work) => (
                <article
                    key={work.id}
                    className="group rounded-xl shadow border bg-card text-card-foreground overflow-hidden max-w-[600px] w-full hover:bg-accent/90 duration-500"
                >
                    <div className="overflow-hidden">
                        <Image
                            src={DummyImage}
                            alt="作品のスクリーンショットです"
                            width={600}
                            height={400}
                            className="group-hover:scale-110 duration-500 overflow-hidden"
                        ></Image>
                    </div>
                    <div>
                        <CardHeader>
                            <div className="flex flex-wrap justify-between">
                                <CardTitle>{work.title}</CardTitle>
                                <Link
                                    href={work.link}
                                    className="flex flex-wrap justify-between items-center hover:underline"
                                >
                                    <p className="mr-1">Github</p>
                                    <ExternalLinkIcon />
                                </Link>
                            </div>
                            <CardDescription>{work.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{work.desc}</p>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <ul className="flex flex-wrap gap-1">
                                {work.skills.map((skill, index) => (
                                    <li key={index} className="border-2 py-1 px-2 rounded-lg">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </CardFooter>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default WorkCard;
