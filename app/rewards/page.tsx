"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BadgeCard } from "@/components/badge-card"
import { ProgressBar } from "@/components/progress-bar"
import { CircularProgress } from "@/components/circular-progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { api } from "@/lib/api"
import type { Badge } from "@/lib/data"
import { Trophy, Target, Award } from "lucide-react"

export default function RewardsPage() {
  const [badges, setBadges] = useState<Badge[]>([])
  const [userProgress, setUserProgress] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const [badgesData, progressData] = await Promise.all([api.getBadges(), api.getUserProgress()])
    setBadges(badgesData)
    setUserProgress(progressData)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Laster belønninger...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-primary-foreground">Belønninger</h1>
            <p className="text-muted-foreground">Din progresjon og opptjente badges</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Totale poeng</CardTitle>
                <Trophy className="h-4 w-4 text-card-foreground/60" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">{userProgress.points}</div>
                <p className="text-xs text-card-foreground/70 mt-1">Nivå {userProgress.level}</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Quiz fullført</CardTitle>
                <Target className="h-4 w-4 text-card-foreground/60" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">{userProgress.quizzesCompleted}</div>
                <p className="text-xs text-card-foreground/70 mt-1">Totalt antall</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Badges opptjent</CardTitle>
                <Award className="h-4 w-4 text-card-foreground/60" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">{userProgress.badgesEarned}</div>
                <p className="text-xs text-card-foreground/70 mt-1">av {badges.length} totalt</p>
              </CardContent>
            </Card>
          </div>

          {/* Security Level */}
          <Card className="bg-card shadow-gjensidige">
            <CardHeader>
              <CardTitle className="text-card-foreground">Trygghetsnivå</CardTitle>
              <CardDescription className="text-card-foreground/70">
                Din samlede kunnskap om trygghet og forsikring
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-8">
              <CircularProgress value={userProgress.securityLevel} label="Trygghetsnivå" size={140} />
              <div className="flex-1 w-full space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-card-foreground">Progresjon til neste nivå</p>
                  <ProgressBar value={userProgress.points % 500} max={500} label="Poeng til nivå 4" />
                </div>
                <p className="text-sm text-card-foreground/70">
                  Du trenger {500 - (userProgress.points % 500)} poeng til for å nå nivå {userProgress.level + 1}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary-foreground">Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
