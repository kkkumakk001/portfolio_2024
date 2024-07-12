import Link from "next/link";
import React from "react";

const navLink = [
    { name: "work", href: "/work" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
];

const Header = () => {
    return (
        <header className="mx-auto flex w-[90%] items-center justify-between py-2">
            <h1>
                <Link href="/">Site LOGO</Link>
            </h1>
            <nav>
                <ul className="flex wrap">
                    {navLink.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.href}>{nav.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
