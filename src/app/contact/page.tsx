import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "@/components/Container";
import ContactForm from "@/components/Form";

const ContactPage = () => {
    const EMAILJS_USER_ID: string | undefined = process.env.EMAILJS_USER_ID;
    const EMAILJS_SERVICE_ID: string | undefined = process.env.EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID: string | undefined = process.env.EMAILJS_TEMPLATE_ID;

    return (
        <section>
            <Container>
                <SectionTitle>CONTACT</SectionTitle>
                <p className="font-semibold pt-2">
                    以下のフォームにお問い合わせの内容を入力してください。
                </p>
                <ContactForm
                    emailUserId={EMAILJS_USER_ID}
                    emailServiceId={EMAILJS_SERVICE_ID}
                    emailTemplateId={EMAILJS_TEMPLATE_ID}
                ></ContactForm>
            </Container>
        </section>
    );
};

export default ContactPage;
