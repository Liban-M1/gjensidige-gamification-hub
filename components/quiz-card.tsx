"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"
import type { Question } from "@/lib/data"

interface QuizCardProps {
  question: Question
  onAnswer: (correct: boolean) => void
}

export function QuizCard({ question, onAnswer }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
    const isCorrect = index === question.correctAnswer
    setTimeout(() => {
      onAnswer(isCorrect)
      setSelectedAnswer(null)
      setShowResult(false)
    }, 2000)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-gjensidige-lg bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-balance text-card-foreground">{question.question}</CardTitle>
        <CardDescription className="capitalize text-card-foreground/70">
          {question.category.replace("-", " ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={
              showResult
                ? index === question.correctAnswer
                  ? "default"
                  : index === selectedAnswer
                    ? "destructive"
                    : "outline"
                : "outline"
            }
            className={`w-full justify-start text-left h-auto py-4 px-6 transition-all ${
              !showResult ? "hover:bg-accent hover:border-primary" : ""
            }`}
            onClick={() => !showResult && handleAnswer(index)}
            disabled={showResult}
          >
            <span className="flex items-center gap-3 w-full">
              <span className="flex-1">{option}</span>
              {showResult && index === question.correctAnswer && (
                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="h-5 w-5 text-destructive-foreground" />
              )}
            </span>
          </Button>
        ))}
      </CardContent>
      {showResult && (
        <CardFooter className="flex-col items-start gap-2 bg-accent border-t">
          <p className="text-sm font-medium text-card-foreground">
            {selectedAnswer === question.correctAnswer ? "✅ Riktig!" : "❌ Feil"}
          </p>
          <p className="text-sm text-card-foreground/70">{question.explanation}</p>
        </CardFooter>
      )}
    </Card>
  )
}
