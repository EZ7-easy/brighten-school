"use client";

import { createQuiz } from "@/actions/quizAction";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/validation";

type QuizFormData = z.infer<typeof formSchema>;

export default function AdminClientPage({ userName }: { userName: string }) {
  const form = useForm<QuizFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      level: "A1",
      description: "",
      questions: [
        {
          question: "",
          options: ["", "", "", ""],
          correct: "",
        },
      ],
    },
  });
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;
  console.log(errors);
  const { fields, append, remove } = useFieldArray<QuizFormData, "questions">({
    control,
    name: "questions",
  });

  const onSubmit = (data: QuizFormData) => {
    createQuiz({ ...data }).then(() => {
      form.reset();
      router.push("/en/quiz");
    });
  };

  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* === Create Quiz Form === */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">📝 Create New Quiz</h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Quiz Title */}
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Basic Food Vocabulary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. Basic Food Vocabulary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Level Selector */}
            <FormField
              control={control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
                        <SelectItem key={lvl} value={lvl}>
                          {lvl}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Questions List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Questions</h3>

              {fields.map((field, index) => (
                <div key={field.id} className="border rounded p-4 space-y-4">
                  {/* Question Text */}
                  <FormField
                    control={control}
                    name={`questions.${index}.question`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Question {index + 1}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={`Enter question`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Options A-D */}
                  {["A", "B", "C", "D"].map((letter, optIndex) => (
                    <FormField
                      key={letter}
                      control={control}
                      name={`questions.${index}.options.${optIndex}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Option {letter}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Option ${letter}`}
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Correct Answer Select */}
                  <FormField
                    control={control}
                    name={`questions.${index}.correct`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correct Answer</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select correct option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["A", "B", "C", "D"].map((opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Remove Button */}
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                    >
                      Remove Question
                    </Button>
                  )}
                </div>
              ))}

              {/* Add Question */}
              <Button
                type="button"
                onClick={() =>
                  append({
                    question: "",
                    options: ["", "", "", ""],
                    correct: "A",
                  })
                }
              >
                + Add Question
              </Button>
            </div>

            {/* Submit */}
            <Button type="submit">Save Quiz</Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
