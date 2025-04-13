"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { prompSchema } from "../../../../../../lib/validation";
import { IMessage } from "../../../../../../app.types";
import FillLoading from "@/components/shared/fill-loading";
import NoResult from "@/components/shared/no-result";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

function Conversation() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const form = useForm<z.infer<typeof prompSchema>>({
    resolver: zodResolver(prompSchema),
    defaultValues: { prompt: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof prompSchema>) => {
    try {
      const userMessage = { role: "user", content: values.prompt };

      const response = await axios.post("/api/conversation", {
        messages: [...messages, userMessage],
      });

      setMessages((prev) => [
        ...prev,
        userMessage,
        { role: "system", content: response.data },
      ]);
    } catch (err) {
      toast.error("You can only ask me things related to English language!");
    } finally {
      form.reset();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]  max-h-[800px] overflow-hidden  rounded-xl shadow-sm">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <NoResult
              title="How Can I Help You?"
              description="Ask for essay ideas, grammar help, or vocabulary explanations!"
            />
          </div>
        ) : (
          messages.map((item, index) => (
            <div
              key={`${index}-${item.content.substring(0, 10)}`}
              className={cn(
                "flex w-full",
                item.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "rounded-2xl px-4 py-3 max-w-[70%] text-sm leading-relaxed",
                  item.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                )}
              >
                <ReactMarkdown
                  components={{
                    p: ({ ...props }) => (
                      <p
                        className="prose prose-sm dark:prose-invert my-2 leading-relaxed"
                        {...props}
                      />
                    ),
                    code: ({ ...props }) => (
                      <code
                        className="prose prose-sm dark:prose-invert bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs"
                        {...props}
                      />
                    ),
                  }}
                >
                  {item.content}
                </ReactMarkdown>
              </div>
            </div>
          ))
        )}
        {isLoading && <FillLoading />}
      </div>

      {/* Chat Input */}
      <div className=" border-gray-200 border rounded-3xl  p-4  dark:bg-gray-900">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormControl className="flex-1">
                  <Input
                    className="shadow-none px-4 py-2 text-md bg-white"
                    disabled={isLoading}
                    placeholder="Ask about essays, grammar, or English vocabulary..."
                    {...field}
                  />
                </FormControl>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              size="icon"
              className="bg-blue-500 rounded-full hover:bg-blue-600 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Conversation;
