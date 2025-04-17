"use client";
import ProgressBar from "@/app/[locale]/quiz/_components/ProgressBar";
import QuestionCard from "@/app/[locale]/quiz/_components/QuestionCard";
import Timer from "@/app/[locale]/quiz/_components/Timer";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: 1,
    question: "What is the meaning of the word 'apple'?",
    options: ["correct", "variant2", "variant3", "variant4"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "What is the meaning of the word 'banana'?",
    options: ["correct", "variant2", "variant3", "variant4"],
    correctAnswer: 0,
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const router = useRouter();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;

    // Calculate new score based on current answer
    const newScore =
      selectedOption === currentQuestion.correctAnswer ? score + 1 : score;

    if (currentQuestionIndex < questions.length - 1) {
      // Update state together
      setScore(newScore);
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      // For last question
      router.push(
        `/en/quiz/results?score=${newScore}&total=${questions.length}`
      );
    }
  }, [
    selectedOption,
    currentQuestion.correctAnswer,
    currentQuestionIndex,
    score,
    router,
  ]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleNext]);

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <Timer timeLeft={timeLeft} />
      </div>

      <ProgressBar progress={progress} />

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />

      <div className="mt-6 flex justify-end">
        <Button onClick={handleNext} disabled={selectedOption === null}>
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </Button>
      </div>
    </div>
  );
}
