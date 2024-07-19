"use client";

import React, { useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { init, send } from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const formShema = z.object({
    name: z
        .string()
        .min(2, { message: "2文字以上で入力してください" })
        .max(10, { message: "10文字以下で入力してください" }),
    email: z.string().email({ message: "メールアドレスの形式ではありません" }),
    content: z.string().min(1, { message: "お問い合わせ内容は入力必須です。" }),
});

type formType = z.infer<typeof formShema>;

const ContactForm = () => {
    const [isSending, setIsSending] = useState(false);
    const { toast } = useToast();

    const form = useForm<formType>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: "",
            email: "",
            content: "",
        },
    });

    const onSubmit: SubmitHandler<formType> = async (data: formType) => {
        const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

        const { name, email, content } = data;

        if (userId && serviceId && templateId) {
            init(userId);

            const params = {
                name: name,
                email: email,
                content: content,
            };

            try {
                await send(serviceId, templateId, params);
                toast({
                    title: "送信が完了しました",
                    description: "24時間以内にご返信いたします",
                });
            } catch {
                toast({
                    title: "送信できませんでした",
                    description: "もう一度送信していただくか、TwitterのDMでも受け付けております。",
                });
            } finally {
                console.log(params);
                form.reset();
                setIsSending(false);
            }
            form.reset();
        }
    };

    return (
        <div className="container pt-[80px] flex items-center">
            <div className="lg:w-[60%] w-full mx-auto">
                <Form {...form}>
                    <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>名前</FormLabel>
                                    <FormControl>
                                        <Input placeholder="山田  太郎" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>メールアドレス</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>お問い合わせ内容</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="ポートフォリオを見ました"
                                            {...field}
                                            className="resize-none h-[200px]"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button className="min-w-[150px] w-1/3 md:w-1/4">送信</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm;
