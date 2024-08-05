import Link from "next/link";
import React from "react";
import Container from "./Container";
import ContactButton from "./ContactButton";
import SnsButtons from "./SnsButtons";

const Footer = () => {
    return (
        <footer className="py-8 bg-accent">
            <Container>
                <div className="flex flex-col lg:flex-row lg:justify-between wrap items-center lg:items-start  mb-8 lg:mb-4">
                    <SnsButtons></SnsButtons>
                    <ContactButton></ContactButton>
                </div>
                <div className="flex justify-center lg:justify-start mb-2">
                    <Link
                        className="font-light text-sm hover:underline"
                        href="https://storyset.com/job"
                        target="_blank"
                    >
                        Job illustrations by Storyset
                    </Link>
                </div>
                <p className="font-light text-sm text-center lg:text-left">
                    &copy; 2024 @kkkumakk001(Github)
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
