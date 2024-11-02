import React from "react";
import SectionWrap from "../components/SectionWrap";
import PageTopMargin from "@/components/PageTopMargin";

const NotFound = () => {
    return (
        <>
            <PageTopMargin />
            <SectionWrap
                title="Not Found"
                desc="お探しのページが見つかりませんでした。URLをご確認の上、再度アクセスしてください。"
            ></SectionWrap>
        </>
    );
};

export default NotFound;
