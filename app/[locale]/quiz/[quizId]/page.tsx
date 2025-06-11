"use client";
import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

interface Question {
  question: string;
  options: string[];
  correct: string; // Stored as 'A', 'B', 'C', etc.
}

interface Quiz {
  _id: string;
  title: string;
  questions: Question[];
}

export default function QuizPage() {
  const params = useParams();
  const { quizId, locale } = params;
  const router = useRouter();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/api/quiz/${params.quizId}`);
        if (!response.ok) throw new Error('Failed to fetch quiz');
        const data = await response.json();
        setQuiz(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load quiz');
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [params.quizId]);
  
  const currentQuestion = quiz?.questions?.[currentQuestionIndex];
  const totalQuestions = quiz?.questions.length || 1;
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  
  const handleNext = useCallback(() => {
    if (selectedOption === null || !currentQuestion) return;
    
    // DEBUG: Log the comparison values
    console.log('Selected:', selectedOption,
      'Correct:', currentQuestion.correct,
      'Options:', currentQuestion.options);
    
    // Convert correct answer letter to index (A=0, B=1, etc.)
    const correctLetter = currentQuestion.correct.toUpperCase().charAt(0);
    console.log(correctLetter)
    const correctIndex = currentQuestion.correct.charCodeAt(0) - 65;
    const isCorrect = selectedOption === correctIndex;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setScore(newScore); // ✅ must come before router.push
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      console.log("Final Score:", newScore, "Total:", totalQuestions);
      router.push(`/${locale}/quiz/${quizId}/results?score=${newScore}&total=${totalQuestions}`);
    }
  }, [selectedOption, currentQuestion, currentQuestionIndex, score, router, totalQuestions]);
  
  useEffect(() => {
    if (timeLeft === 0) handleNext();
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleNext]);
  
  if (loading) return <div className="text-center py-8">Loading quiz...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!quiz) return <div className="text-center py-8">Quiz not found</div>;
  
  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </h2>
        <div className={`px-3 py-1 rounded-full text-sm ${
          timeLeft <= 10 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {timeLeft}s
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {currentQuestion && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-3 rounded-md border transition-colors ${
                  selectedOption === index
                    ? 'bg-blue-50 border-blue-500'
                    : 'hover:bg-gray-50 border-gray-200'
                }`}
                onClick={() => setSelectedOption(index)}
              >
                {`${String.fromCharCode(65 + index)}. ${option}`}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="min-w-[150px]"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      </div>
    </div>
  );
}
