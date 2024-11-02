import { Noto_Sans_JP, Open_Sans } from "next/font/google";

export const noto_Sans_JP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-noto-sans-jp",
});

export const open_Sans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-open-sans",
});
