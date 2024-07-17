import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// import Image from "next/image";
// import QiitaIcon from "../../public/images/qiita_logo_icon.png";
// import ZennIcon from "../../public/images/zenn_logo_icon.png";

const SnsButtons = () => {
    return (
        <div className="flex wrap gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
                <Link href="https://x.com" target="_blank">
                    <TwitterLogoIcon className="w-4 h-4"></TwitterLogoIcon>
                </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
                <Link href="https://github.com/kkkumakk001" target="_blank">
                    <GitHubLogoIcon></GitHubLogoIcon>
                </Link>
            </Button>
            {/* <Button variant="outline" size="icon" className="rounded-full">
                <Image src={QiitaIcon} alt="qiitaのアイコンです" width={16} height={16}></Image>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
                <Image
                    src="/zenn_logo_icon.png"
                    alt="zennのアイコンです"
                    width={16}
                    height={16}
                ></Image>
            </Button> */}
        </div>
    );
};

export default SnsButtons;
