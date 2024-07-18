import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Container from "@/components/Container";
import ContactForm from "@/components/Form";

const ContactPage = () => {
    return (
        <section>
            <Container>
                <SectionTitle>CONTACT</SectionTitle>
                <p className="font-semibold pt-2">
                    以下のフォームにお問い合わせの内容を入力してください。
                </p>
                <ContactForm></ContactForm>
            </Container>
        </section>
    );
};

export default ContactPage;
