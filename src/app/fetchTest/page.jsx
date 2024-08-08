import React from "react";

export default async function FetchTest() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
    const datas = await res.json();

    return (
        <div>
            <ul>
                {datas.map((data) => (
                    <li key={data.id}>{data.title}</li>
                ))}
            </ul>
        </div>
    );
}
