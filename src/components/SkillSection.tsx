import SectionWrap from "./SectionWrap";
import SkillCard from "./SkillCard";
import SkillLevel from "./SkillLevel";

const SkillSection = () => {
    return (
        <SectionWrap title="Skill" desc="実務経験がないため、独自の基準でレベル感を表記しました。">
            <SkillLevel></SkillLevel>
            <SkillCard></SkillCard>
        </SectionWrap>
    );
};
export default SkillSection;
