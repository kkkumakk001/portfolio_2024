import PageTopMargin from "@/components/PageTopMargin";
import Template from "@/components/template";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Template>
            <PageTopMargin />
            {children}
        </Template>
    );
}
