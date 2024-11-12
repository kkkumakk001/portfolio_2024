import Portfolio from "../../../public/images/portfolio-about.png";
import DevFusion from "../../../public/images/devfusion-resipe.png";

const works = [
    {
        id: 1,
        title: "ポートフォリオ",
        href: "/work/portfolio",
        date: "2024.8",
        desc: "本サイトです。経歴、スキル、作品などを掲載しております。",
        skills: ["Next.js", "TailwindCSS", "shadcn/ui", "TypeScript"],
        img: Portfolio,
    },
    {
        id: 2,
        title: "ブログ",
        href: "/work/devfusion",
        date: "2024.8",
        desc: "microCMSでコンテンツを管理しAPIで記事を取得しています。",
        skills: ["Next.js", "TailwindCSS", "shadcn/ui", "TypeScript"],
        img: DevFusion,
    },
];

export default works;
