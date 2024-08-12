import React from "react";
import SectionWrap from "../../components/SectionWrap";
import WorkCard from "@/components/WorkCard";
import works from "./datas";

const WorkPage = () => {
    return (
        <SectionWrap
            title="WORK"
            desc="これまでに作成した作品です。コードや詳しい説明はREADMOREボタンから見れます。"
        >
            <WorkCard works={works}></WorkCard>
        </SectionWrap>
    );
};

export default WorkPage;
