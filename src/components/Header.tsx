import Link from "next/link";
import React from "react";
import HeaderNav from "./HeaderNav";
import { ModeToggleButton } from "./modeToggle";

const Header = () => {
    return (
        <header className="mx-auto flex w-[90%] items-center justify-between py-2">
            <h1>
                <Link href="/">Site LOGO</Link>
            </h1>
            <HeaderNav></HeaderNav>
            <ModeToggleButton></ModeToggleButton>
        </header>
    );
};

export default Header;
