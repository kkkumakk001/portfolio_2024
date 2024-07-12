import Link from "next/link";
import React from "react";
import HeaderNav from "./HeaderNav";
import { ModeToggleButton } from "./modeToggle";
import SheetNav from "./SheetNav";

const Header = () => {
    return (
        <header className="mx-auto flex w-[90%] items-center justify-between py-2">
            <h1 className="font-semibold">
                <Link href="/">Site LOGO</Link>
            </h1>
            <HeaderNav></HeaderNav>
            <div className="flex wrap gap-4">
                <ModeToggleButton></ModeToggleButton>
                <SheetNav></SheetNav>
            </div>
        </header>
    );
};

export default Header;
