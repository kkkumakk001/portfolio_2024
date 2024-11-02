"use client";

import React from "react";
import Link from "next/link";

const navContent = [
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const HeaderNav = () => {
    return (
        <nav className="hidden md:block">
            <ul className="flex gap-4">
                {navContent.map((nav) => {
                    return (
                        <li key={nav.name} className="text-sm">
                            <Link href={nav.href}>{nav.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default HeaderNav;
