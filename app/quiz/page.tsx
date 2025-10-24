"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuizCard } from "@/components/quiz-card"
import { ProgressBar } from "@/components/progress-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/lib/api"
import type { Question } from "@/lib/data"
import { Trophy, RotateCcw } from "lucide-react"

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadQuestions()
  }, [])

  const loadQuestions = async () => {
    setLoading(true)
    const data = await api.getQuestions()
    setQuestions(data)
    setLoading(false)
  }

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(score + 100)
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setIsComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentIndex(0)
    setScore(0)
    setIsComplete(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Laster quiz...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-primary-foreground">Quiz</h1>
            <p className="text-muted-foreground">Test kunnskapen din og samle poeng</p>
          </div>

          {!isComplete ? (
            <>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Spørsmål {currentIndex + 1} av {questions.length}
                  </p>
                  <p className="text-sm font-medium text-secondary">Poeng: {score}</p>
                </div>
                <ProgressBar value={currentIndex + 1} max={questions.length} showPercentage={false} />
              </div>

              <QuizCard question={questions[currentIndex]} onAnswer={handleAnswer} />
            </>
          ) : (
            <Card className="max-w-2xl mx-auto shadow-gjensidige-lg bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Trophy className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-3xl text-card-foreground">Quiz fullført!</CardTitle>
                <CardDescription className="text-card-foreground/70">Gratulerer med gjennomført quiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-5xl font-bold text-secondary">{score}</p>
                  <p className="text-card-foreground/70">Totale poeng</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-card-foreground/70">Riktige svar</span>
                    <span className="font-medium text-card-foreground">
                      {score / 100} av {questions.length}
                    </span>
                  </div>
                  <ProgressBar value={score / 100} max={questions.length} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button onClick={resetQuiz} className="flex-1" size="lg">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Prøv igjen
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-card-foreground hover:bg-accent bg-transparent"
                    size="lg"
                    asChild
                  >
                    <a href="/rewards">Se belønninger</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
