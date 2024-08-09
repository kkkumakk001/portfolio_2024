import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsMarquee from "@/components/Marquee";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
        <>
            <Hero />
            <SkillsMarquee />
            <AboutSection />
            <SkillSection />
        </>
    );
}
