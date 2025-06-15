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

type Props = {
  t: Record<string, string>;
};

function Banner({ t }: Props) {
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
tel: ${values.tel}
level: ${values.level}
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
    <section className="bg-[url(/home/room-interior-design.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="flex justify-center md:justify-end py-16 md:py-20 px-4 md:pr-12">
        <div className="bg-gray-900/90 text-white backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-lg">
          <p className="text-2xl md:text-3xl font-semibold mb-3">
            {t.firstLesson}
          </p>
          <p className="text-base md:text-lg mb-6">
            {t.firstLessonDescription}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        className="h-12 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004ff9]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="99 999 99 99"
                        className="h-12 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004ff9]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Level */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full h-12 text-base text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004ff9]">
                          <SelectValue placeholder="Select Level" />
                        </SelectTrigger>
                        <SelectContent>
                          {level.map((levelItem, idx) => (
                            <SelectItem key={idx} value={levelItem.name}>
                              {levelItem.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full h-12 text-xl bg-[#004ff9] hover:bg-[#0033cc] transition rounded-md"
              >
                {t.signUp}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Banner;
