import Link from "next/link";
import React from "react";
import Container from "./Container";
import ContactButton from "./ContactButton";
import SnsButtons from "./SnsButtons";

const navContent = [
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const Footer = () => {
    return (
        <footer className="shadow-xl py-8 bg-[--main-color] dark:bg-[--background] dark:border-t dark:border-[--main-color]">
            <Container>
                <div className="flex flex-col lg:flex-row lg:justify-between wrap items-center mb-8">
                    <div>
                        <h1 className="font-semibold mb-4 text-white">
                            <Link href="/">Site LOGO</Link>
                        </h1>
                        <SnsButtons></SnsButtons>
                    </div>
                    <nav className="text-white text-center pb-8">
                        <p className=" font-semibold underline pb-1">Navigation</p>
                        <ul className="flex flex-col wrap font-light">
                            {navContent.map((nav) => (
                                <li key={nav.name}>
                                    <Link href={nav.href}>{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ContactButton></ContactButton>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <Link
                        className="text-white font-light text-sm hover:underline"
                        href="https://storyset.com/job"
                        target="_blank"
                    >
                        Job illustrations by Storyset
                    </Link>
                </div>
            </Container>
        </footer>
        // <footer className="py-8 bg-[--main-color] dark:bg-black">
        //     <Container>
        //         <div className="flex wrap justify-between mb-8">
        //             <div>
        //                 <h1 className="font-semibold mb-4 text-white">
        //                     <Link href="/">Site LOGO</Link>
        //                 </h1>
        //                 <SnsButtons></SnsButtons>
        //             </div>
        //             <nav className="text-white">
        //                 <p className=" font-semibold underline">Nav</p>
        //                 <ul className="flex flex-col wrap font-light">
        //                     {navContent.map((nav) => (
        //                         <li key={nav.name}>
        //                             <Link href={nav.href}>- {nav.name}</Link>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </nav>
        //             <ContactButton></ContactButton>
        //         </div>
        //         <Link
        //             className="text-white font-light text-sm hover:underline"
        //             href="https://storyset.com/job"
        //             target="_blank"
        //         >
        //             Job illustrations by Storyset
        //         </Link>
        //     </Container>
        // </footer>
    );
};

export default Footer;
