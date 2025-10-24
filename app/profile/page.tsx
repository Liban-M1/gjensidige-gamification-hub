"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { api } from "@/lib/api"
import { User, Calendar, TrendingUp } from "lucide-react"

export default function ProfilePage() {
  const [userProgress, setUserProgress] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const progressData = await api.getUserProgress()
    setUserProgress(progressData)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Laster profil...</p>
        </main>
        <Footer />
      </div>
    )
  }

  const recentActivity = [
    { date: "2025-01-20", activity: "Fullført quiz om digital trygghet", points: 100 },
    { date: "2025-01-19", activity: "Opptjent badge: Nybegynner", points: 50 },
    { date: "2025-01-18", activity: "Fullført quiz om forsikring", points: 100 },
    { date: "2025-01-17", activity: "Leste 5 tips om svindel", points: 25 },
    { date: "2025-01-16", activity: "Fullført quiz om egenandel", points: 100 },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-primary-foreground">Min profil</h1>
            <p className="text-muted-foreground">Oversikt over din aktivitet og progresjon</p>
          </div>

          <Card className="bg-card shadow-gjensidige">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    <User className="h-10 w-10" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-card-foreground">Bruker</CardTitle>
                  <CardDescription className="text-card-foreground/70">Medlem siden januar 2025</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Nivå {userProgress.level}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {userProgress.points} poeng
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-card-foreground/70">Quiz fullført</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">{userProgress.quizzesCompleted}</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-card-foreground/70">Badges opptjent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">{userProgress.badgesEarned}</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-card-foreground/70">Trygghetsnivå</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">{userProgress.securityLevel}%</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card shadow-gjensidige">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <TrendingUp className="h-5 w-5" />
                Nylig aktivitet
              </CardTitle>
              <CardDescription className="text-card-foreground/70">
                Din siste aktivitet i Gjensidige Hub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none text-card-foreground">{item.activity}</p>
                      <p className="text-xs text-card-foreground/60">{item.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      +{item.points} poeng
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
