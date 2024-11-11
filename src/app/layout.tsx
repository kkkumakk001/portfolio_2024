import "./globals.css";
import type { Metadata } from "next";
import { noto_Sans_JP, open_Sans } from "./fonts";

import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    metadataBase: new URL("https://kkkumakk-portfolio.vercel.app"),
    title: "K.K`s Portfolio",
    description: "ポートフォリオです",
    openGraph: {
        title: "K.K's Portfolio",
        description: "ポートフォリオです",
        url: "https://kkkumakk-portfolio.vercel.app/",
        siteName: "Portfolio",
        images: [
            {
                url: "/images/Portfolio-heroImage.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="ja"
            suppressHydrationWarning={true}
            className={`${noto_Sans_JP.variable} ${open_Sans.variable}`}
        >
            <body className="bg-gray-900 text-white">
                <Header></Header>
                <main className="">{children}</main>
                <Toaster></Toaster>
                <Footer></Footer>
            </body>
        </html>
    );
}
