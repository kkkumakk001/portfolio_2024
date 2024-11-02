import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/Marquee";
import SkillSection from "@/components/SkillSection";
import Template from "../components/template";

export default function Home() {
    return (
        <Template disableAnimation>
            <Hero />
            <SkillsMarquee />
            <AboutSection />
            <SkillSection />
        </Template>
    );
}
