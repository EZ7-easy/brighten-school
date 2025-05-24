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
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { level } from "@/constants";
import { toast } from "sonner";
import { contactSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { getTranslations } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const t = getTranslations(locale);

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
          Tel: ${values.tel}
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
    <footer className="bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-500 p-2 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">IN</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Inter Nation
              </span>
            </div>
            <p className="text-gray-600">
              Connecting cultures, building relationships, and creating
              opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/statistics"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-blue-500 transition"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-4 text-gray-600">
              <p>8/1 Toshkent city center</p>
              <p>+998 (78) 777-77-07</p>
              <p>inter-nation@mail.ru</p>
            </div>
          </div>

          {/* Sign-up Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 shadow-none">
              Registration
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={t.name}
                          className="h-12 border rounded-md shadow-none"
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
                          placeholder="99 999 99 99"
                          className="h-12 shadow-none rounded-md border"
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
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {level.map((levelItem, idx) => (
                            <SelectItem key={idx} value={levelItem.name}>
                              {levelItem.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12"
                >
                  {t.signUp}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Inter Nation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
