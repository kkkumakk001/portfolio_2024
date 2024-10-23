import React from "react";
import SnsButtons from "./SnsButtons";
import Container from "./Container";
import Image from "next/image";
import HeroImage from "../../public/images/HeroImage.png";
import ContactButton from "./ContactButton";

const Hero = () => {
    return (
        <section>
            <Container>
                <div className="flex flex-col lg:flex-row wrap justify-center lg:gap-10">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <Image
                            src={HeroImage}
                            alt="メインの画像です"
                            width={400}
                            height={400}
                            priority
                        ></Image>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col wrap items-center lg:items-start lg:justify-center">
                        <p className="font-bold text-4xl mb-8 tracking-wider">{`K.K's PortFolio`}</p>
                        <SnsButtons></SnsButtons>
                        <ContactButton></ContactButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
