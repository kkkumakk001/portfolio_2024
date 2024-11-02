import Image from "next/image";
import DummyImage from "../../public/images/DummyImage.png";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Work {
    id: number;
    title: string;
    href: string;
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
            {works.map((work) => (
                <article
                    key={work.id}
                    className="group overflow-hidden max-w-[600px] w-full hover:bg-gray-900/90 duration-500"
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
                    <div className="pt-2">
                        <div className="flex flex-wrap justify-between">
                            <p>{work.title}</p>
                            <Link
                                href={work.href}
                                className="flex flex-wrap justify-between items-center hover:underline"
                            >
                                <p className="mr-1">詳細ページへ</p>
                                <ExternalLinkIcon />
                            </Link>
                        </div>
                        <p>{work.date}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default WorkCard;
