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
  t: ReturnType<typeof getTranslations>;
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
    <div
      className={
        "bg-[url(/home/room-interior-design.jpg)] bg-no-repeat bg-cover"
      }
    >
      <div
        className={
          "flex md:justify-end justify-center py-20 md:mr-10 text-whites"
        }
      >
        <div className="bg-gray-900 text-white backdrop-blur-sm p-10 rounded-2xl shadow-lg">
          <p className="text-3xl font-semibold  mb-4">{t.firstLesson}</p>
          <p className="text-lg max-w-sm mb-6">{t.firstLessonDescription}</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        className="h-12 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004ff9] transition duration-200"
                        placeholder="Ваше имя"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
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
                        className="h-12 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004ff9] transition duration-200"
                        placeholder="99 999 99 99"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="w-full text-gray-500 bg-white border border-gray-300 rounded-md h-12 text-xl focus:outline-none focus:ring-2 focus:ring-[#004ff9] transition duration-200">
                          <SelectValue placeholder="Select Level" />
                        </SelectTrigger>
                        <SelectContent>
                          {level.map((level, idx) => (
                            <SelectItem key={idx} value={level.name}>
                              {level.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className="w-full text-white text-2xl rounded-md bg-[#004ff9] mt-3 hover:bg-[#0033cc] transition duration-200 h-12"
              >
                Записаться
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
