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
          <p className="text-primary">Laster profil...</p>
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
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-primary">Min profil</h1>
            <p className="text-primary/80">Oversikt over din aktivitet og progresjon</p>
          </div>

          {/* User info */}
          <Card className="bg-card shadow-gjensidige">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
  <AvatarFallback className="bg-primary flex items-center justify-center">
    <User className="h-10 w-10 text-white" />
  </AvatarFallback>
</Avatar>

                <div className="flex-1">
                  <CardTitle className="text-2xl font-semibold text-primary">Bruker</CardTitle>
                  <CardDescription className="text-primary/70">Medlem siden januar 2025</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="default" className="bg-primary text-white">
                      Nivå {userProgress.level}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary text-primary font-medium">
                      {userProgress.points} poeng
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-primary">Quiz fullført</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{userProgress.quizzesCompleted}</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-primary">Badges opptjent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{userProgress.badgesEarned}</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-gjensidige">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-primary">Trygghetsnivå</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{userProgress.securityLevel}%</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-card shadow-gjensidige">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5 text-primary/80" />
                Nylig aktivitet
              </CardTitle>
              <CardDescription className="text-primary/70">
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
                      <p className="text-sm font-medium leading-none text-primary">{item.activity}</p>
                      <p className="text-xs text-primary/70">{item.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-primary font-medium">
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

