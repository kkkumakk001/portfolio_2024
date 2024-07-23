import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/Marquee";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
        <section>
            <Hero></Hero>
            <SkillsMarquee></SkillsMarquee>
            <SkillSection></SkillSection>
        </section>
    );
}
