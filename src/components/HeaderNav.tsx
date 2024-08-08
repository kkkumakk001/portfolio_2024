"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuDesc,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";

const navContent = [
    { name: "Work", pageTitle: "Work Page", href: "/work" },
    { name: "Blog", pageTitle: "Blog Page", href: "/blog" },
    { name: "Contact", pageTitle: "Contact Page", href: "/contact" },
    { name: "Fetch", pageTitle: "Fetch Page", href: "/fetchTest" },
];

const HeaderNav = () => {
    return (
        <>
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    {navContent.map((nav) => (
                        <NavigationMenuItem key={nav.pageTitle}>
                            <NavigationMenuTrigger>{nav.name}</NavigationMenuTrigger>
                            <NavigationMenuContent className="min-w-96 flex wrap">
                                <Link href={nav.href}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Laudantium, odio.
                                </Link>
                                <NavigationMenuDesc pageTitle={nav.pageTitle}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus, animi deserunt iste obcaecati soluta ducimus!
                                </NavigationMenuDesc>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

export default HeaderNav;
