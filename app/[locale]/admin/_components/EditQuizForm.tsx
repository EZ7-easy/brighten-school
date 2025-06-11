"use client";

import { useState } from "react";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";
import { updateQuizAction } from "@/actions/updateQuizAction";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";

export default function EditQuizForm({ initialData, quizId }: any) {
  const [formData] = useState(initialData);
  const [selectedLevel, setSelectedLevel] = useState(initialData.level);
  const [selectedCorrects, setSelectedCorrects] = useState(
    formData.questions.map((q: any) => q.correct)
  );

  return (
    <section className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <ArrowLeftSquare className="w-5 h-5" />
        <Link href="/admin" className="hover:underline">
          Go to Admin Page
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-6">Edit Quiz</h1>

      <div className="rounded-2xl border shadow-sm bg-white p-6 space-y-6">
        <FormContainer action={updateQuizAction}>
          <input type="hidden" name="quizId" value={quizId} />
          <input
            type="hidden"
            name="questionCount"
            value={formData.questions.length}
          />
          <input type="hidden" name="level" value={selectedLevel} />

          <div className="space-y-4">
            <FormInput
              label="Title"
              name="title"
              defaultValue={formData.title}
              type="text"
            />
            <FormInput
              label="Description"
              name="description"
              defaultValue={formData.description}
              type="text"
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Level
              </label>
              <Select
                defaultValue={initialData.level}
                onValueChange={(value) => setSelectedLevel(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="divide-y divide-muted space-y-6">
            {formData.questions.map((q: any, i: number) => (
              <div key={i} className="pt-6 space-y-4">
                <FormInput
                  label={`Question ${i + 1}`}
                  name={`question-${i}`}
                  defaultValue={q.question}
                  type="text"
                />

                {q.options.map((opt: string, j: number) => (
                  <FormInput
                    key={j}
                    label={`Option ${["A", "B", "C", "D"][j]}`}
                    name={`option-${i}-${j}`}
                    defaultValue={opt}
                    type="text"
                  />
                ))}

                <input
                  type="hidden"
                  name={`correct-${i}`}
                  value={selectedCorrects[i]}
                />

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Correct Answer
                  </label>
                  <Select
                    defaultValue={q.correct}
                    onValueChange={(value) => {
                      const updated = [...selectedCorrects];
                      updated[i] = value;
                      setSelectedCorrects(updated);
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select correct answer" />
                    </SelectTrigger>
                    <SelectContent>
                      {["A", "B", "C", "D"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <SubmitButton text="Update Quiz" className="w-full" />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}
