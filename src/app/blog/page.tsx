import React from "react";
import SectionWrap from "../../components/SectionWrap";
import PageTopMargin from "@/components/PageTopMargin";
import Template from "@/components/template";

const BlogPage = () => {
    return (
        <Template>
            <PageTopMargin />
            <SectionWrap
                title="BLOG"
                desc="主にNext.jsの周辺技術について書いていることが多いです。Qiita、Zennの他にmicroCMSで作成したブログもあります。"
            ></SectionWrap>
        </Template>
    );
};

export default BlogPage;
