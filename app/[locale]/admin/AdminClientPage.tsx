"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminClientPage({ userName }: { userName: string }) {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: "" },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correct: "" }]);
  };

  const handleQuestionChange = (
    index: number,
    field: string,
    value: string,
    optionIndex?: number
  ) => {
    const updated = [...questions];
    if (field === "question") updated[index].question = value;
    else if (field === "option" && optionIndex !== undefined)
      updated[index].options[optionIndex] = value;
    else if (field === "correct") updated[index].correct = value;
    setQuestions(updated);
  };

  return (
    <main className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* === DASHBOARD === */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">🧠 Admin Quiz Dashboard</h1>
        <div className="">
          <h1 className="text-lg">Welcome to admin dashboard</h1>
          <h2 className="text-xl font-semibold underline">{userName}</h2>
        </div>

        <div className="flex justify-between items-center">
          <Button>Create New Quiz</Button>
          <div className="flex gap-2">
            <select className="border rounded px-2 py-1">
              <option>All Themes</option>
              <option>Vocabulary</option>
              <option>Grammar</option>
              <option>Reading</option>
            </select>
            <select className="border rounded px-2 py-1">
              <option>All Levels</option>
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
            </select>
          </div>
        </div>

        {/* Sample Quiz Card */}
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Food Vocabulary</h2>
                <p className="text-sm text-gray-500">Theme: Vocabulary • Level: A1</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* === CREATE QUIZ FORM === */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold mt-10">📝 Create New Quiz</h2>

        <div>
          <label className="block font-medium">Quiz Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            placeholder="e.g. Basic Food Vocabulary"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Level</label>
            <select className="w-full border p-2 rounded mt-1">
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Questions</h3>

          {questions.map((q, i) => (
            <div key={i} className="border rounded p-4 space-y-2">
              <textarea
                placeholder={`Question ${i + 1}`}
                className="w-full border p-2 rounded"
                value={q.question}
                onChange={(e) => handleQuestionChange(i, "question", e.target.value)}
              />

              {q.options.map((opt, j) => (
                <input
                  key={j}
                  type="text"
                  placeholder={`Option ${String.fromCharCode(65 + j)}`}
                  className="w-full border p-2 rounded"
                  value={opt}
                  onChange={(e) => handleQuestionChange(i, "option", e.target.value, j)}
                />
              ))}

              <select
                className="w-full border p-2 rounded"
                value={q.correct}
                onChange={(e) => handleQuestionChange(i, "correct", e.target.value)}
              >
                <option value="">Correct Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          ))}

          <Button type="button" onClick={addQuestion}>
            + Add Question
          </Button>
        </div>

        <Button type="submit">Save Quiz</Button>
      </section>
    </main>
  );
}
