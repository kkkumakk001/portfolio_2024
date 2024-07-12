import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-2xl font-semibold border-b-4 max-w-fit">{children}</h2>;
};

export default SectionTitle;
