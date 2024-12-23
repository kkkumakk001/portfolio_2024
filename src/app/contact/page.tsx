import React from "react";
import SectionWrap from "../../components/SectionWrap";
import ContactForm from "@/components/Form";
import PageTopMargin from "@/components/PageTopMargin";
import Template from "@/components/template";

const ContactPage = () => {
    const EMAILJS_USER_ID: string | undefined = process.env.EMAILJS_USER_ID;
    const EMAILJS_SERVICE_ID: string | undefined = process.env.EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID: string | undefined = process.env.EMAILJS_TEMPLATE_ID;

    return (
        <Template>
            <PageTopMargin />
            <SectionWrap
                title="CONTACT"
                desc="以下のフォームにお問い合わせの内容を入力してください。"
            >
                <ContactForm
                    emailUserId={EMAILJS_USER_ID}
                    emailServiceId={EMAILJS_SERVICE_ID}
                    emailTemplateId={EMAILJS_TEMPLATE_ID}
                ></ContactForm>
            </SectionWrap>
        </Template>
    );
};

export default ContactPage;
