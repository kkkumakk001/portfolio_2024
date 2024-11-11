import Link from "next/link";
import React from "react";
import HeaderNav from "./HeaderNav";
import SheetNav from "./SheetNav";

const Header = () => {
    return (
        <header className="fixed font-en z-50 w-full py-2 bg-gray-900 text-white">
            <nav className="mx-auto w-[95%] flex justify-between">
                <div className="flex items-center">
                    <h1 className="text-lg mr-4">
                        <Link href="/">Portfolio</Link>
                    </h1>
                    <HeaderNav></HeaderNav>
                </div>
                <div className="flex wrap gap-4">
                    <SheetNav></SheetNav>
                </div>
            </nav>
        </header>
    );
};

export default Header;
