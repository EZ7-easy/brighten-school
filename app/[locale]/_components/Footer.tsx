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
    const telegramBotId = "YOUR_BOT_ID"; // Replace with secure env
    const telegramChatId = "YOUR_CHAT_ID";

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
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-500 p-2 rounded-lg mr-3">
                <span className="text-white font-bold text-xl">IN</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Inter Nation
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connecting cultures, building relationships, and creating
              opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-600 text-gray-500"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 text-gray-500"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500 text-gray-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-700 text-gray-500"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Statistics", "/statistics"],
                ["Quiz", "/quiz"],
                ["Our Team", "/team"],
                ["Gallery", "/gallery"],
              ].map(([label, href], idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-blue-500 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>8/1 Toshkent city center</p>
              <p>+998 (78) 777-77-07</p>
              <p>inter-nation@mail.ru</p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {"Registration"}
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
                          placeholder={t.name}
                          className="h-12"
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
                          className="h-12"
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
                            <SelectValue placeholder={"Level"} />
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Inter Nation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
