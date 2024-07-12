"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const navLink = [
    { name: "Home", href: "" },
    { name: "Work", href: "work" },
    { name: "Contact", href: "contact" },
    { name: "Blog", href: "blog" },
];

const SheetNav = () => {
    const [open, setOpen] = useState(false);
    return (
        // <Sheet>
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
                <HamburgerMenuIcon></HamburgerMenuIcon>
            </SheetTrigger>
            <SheetContent
                side={"top"}
                className="flex h-screen flex-col flex-wrap items-center justify-center"
            >
                {navLink.map((nav) => {
                    return (
                        <Link
                            key={nav.name}
                            href={`/${nav.href}`}
                            className="hover:underline"
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
