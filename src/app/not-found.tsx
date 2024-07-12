import React from "react";
import SectionTitle from "./components/SectionTitle";

const NotFound = () => {
    return (
        <section>
            <SectionTitle>Not Found</SectionTitle>
            <p>
                お探しのページが見つかりませんでした。
                <br />
                URLをご確認の上、再度アクセスしてください。
            </p>
        </section>
    );
};

export default NotFound;
