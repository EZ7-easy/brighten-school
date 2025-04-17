"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { level } from "@/constants";
import { contactSchema } from "@/lib/validation";
import { getTranslations } from "@/lib/i18n";

type Props = {
  t: Record<string, string>;
};

const SignUp = ({ t }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      tel: "",
      name: "",
      level: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true);
    const telegramBotId = "8026261514:AAHiQ0nCdNVInbpcM_6Lu2w_iYMMpZiNyRE";
    const telegramChatId = "1764737921";

    const promise = fetch(
      `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `
          Name: ${values.name}
          Phone: ${values.tel}
          Level: ${values.level}
          `,
        }),
      }
    )
      .then(() => form.reset())
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: t.loading,
      success: t.success,
      error: t.error,
    });
  }

  return (
    <section
      id="SignUp"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-400"
    >
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-[length:100px_100px] opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                SIGN UP FOR <span className="text-white">FIRST</span> LESSON
              </h2>
              <p className="text-lg text-gray-800 font-medium">
                We offer the first lesson for English courses for a comfortable
                acquaintance with the teacher and the choice of a suitable
                training program. Leave a request and we will contact you as
                soon as possible!
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormControl>
                              <Input
                                type="text"
                                className="h-14 bg-white/90 text-gray-900 text-lg border-0 focus-visible:ring-2 focus-visible:ring-blue-500"
                                placeholder={t.name}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-white" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tel"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type="tel"
                                className="h-14 bg-white/90 text-gray-900 text-lg border-0 focus-visible:ring-2 focus-visible:ring-blue-500"
                                placeholder="99 999 99 99"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-white" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-14 bg-white/90 text-gray-900 text-lg border-0 focus:ring-2 focus:ring-blue-500">
                                  <SelectValue placeholder="Select Level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white border-0 shadow-lg">
                                {level.map((levelItem, idx) => (
                                  <SelectItem
                                    key={idx}
                                    value={levelItem.name}
                                    className="hover:bg-blue-50 focus:bg-blue-50"
                                  >
                                    {levelItem.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-white" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-14 bg-white text-blue-600 hover:bg-white/90 text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                    >
                      {t.signUp}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
