import React from "react";
import { Button } from "./ui/button";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const ContactButton = () => {
    return (
        <Button asChild className="w-[120px]">
            <Link href="/contact" className="font-en">
                Contact<CaretRightIcon></CaretRightIcon>
            </Link>
        </Button>
    );
};

export default ContactButton;
