"use client";

import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const navLink = [
    { name: "Home", href: "", delay: "delay-300" },
    { name: "Work", href: "work", delay: "delay-600" },
    { name: "Contact", href: "contact", delay: "delay-900" },
    { name: "Blog", href: "blog", delay: "delay-1200" },
];

const SheetNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
                <HamburgerMenuIcon></HamburgerMenuIcon>
            </SheetTrigger>
            <SheetContent
                side={"right"}
                className="flex h-dvh flex-col flex-wrap items-center justify-center bg-gray-900"
            >
                <SheetTitle className="hidden">ナビゲーション</SheetTitle>
                <SheetDescription className="hidden">ナビゲーション</SheetDescription>
                {navLink.map((nav) => {
                    return (
                        <Link
                            key={nav.name}
                            href={`/${nav.href}`}
                            className={`hover:underline animate-text-pop-up-top ${nav.delay}`}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            {nav.name}
                        </Link>
                    );
                })}
            </SheetContent>
        </Sheet>
    );
};

export default SheetNav;
