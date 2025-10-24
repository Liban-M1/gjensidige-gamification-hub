"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TipCard } from "@/components/tip-card"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import type { Tip } from "@/lib/data"

export default function LearnPage() {
  const [tips, setTips] = useState<Tip[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTips()
  }, [])

  const loadTips = async () => {
    setLoading(true)
    const data = await api.getTips()
    setTips(data)
    setLoading(false)
  }

  const filteredTips = filter === "all" ? tips : tips.filter((tip) => tip.category === filter)

  const categories = [
    { value: "all", label: "Alle" },
    { value: "forsikring", label: "Forsikring" },
    { value: "digital-trygghet", label: "Digital trygghet" },
    { value: "svindel", label: "Svindel" },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Laster tips...</p>
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
            <h1 className="text-4xl font-bold text-primary-foreground">Lær</h1>
            <p className="text-muted-foreground">Utforsk tips og råd om trygghet og forsikring</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className={
                  filter === category.value
                    ? "bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground"
                    : "border-muted-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>

          {filteredTips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Ingen tips funnet i denne kategorien</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
