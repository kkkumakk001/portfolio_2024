import React from "react";
import SectionWrap from "../../components/SectionWrap";
import WorkCard from "@/components/WorkCard";
import works from "./datas";
import PageTopMargin from "@/components/PageTopMargin";
import Template from "@/components/template";

const WorkPage = () => {
    return (
        <Template>
            <PageTopMargin />
            <SectionWrap
                title="WORK"
                desc="これまでに作成した作品です。コードや詳しい説明はREADMOREボタンから見れます。"
            >
                <WorkCard works={works}></WorkCard>
            </SectionWrap>
        </Template>
    );
};

export default WorkPage;
