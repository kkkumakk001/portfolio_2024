import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// import Image from "next/image";
// import ZennIcon from "../../public/images/zenn_logo_icon.png";

const SnsButtons = () => {
    return (
        <div className="flex wrap gap-2 mb-8 text-primary">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-background/90">
                <Link href="https://x.com" target="_blank">
                    <TwitterLogoIcon className="w-4 h-4"></TwitterLogoIcon>
                </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-background/90">
                <Link href="https://github.com/kkkumakk001" target="_blank">
                    <GitHubLogoIcon></GitHubLogoIcon>
                </Link>
            </Button>

            {/* <Button variant="outline" size="icon" className="rounded-full">
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
