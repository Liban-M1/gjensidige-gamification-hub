"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TipCard } from "@/components/tip-card"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import type { Tip } from "@/lib/data"
import { Shield, Lightbulb, AlertTriangle, Info } from "lucide-react"

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
    { value: "all", label: "Alle", icon: <Info className="w-4 h-4" /> },
    { value: "forsikring", label: "Forsikring", icon: <Shield className="w-4 h-4" /> },
    { value: "digital-trygghet", label: "Digital trygghet", icon: <Lightbulb className="w-4 h-4" /> },
    { value: "svindel", label: "Svindel", icon: <AlertTriangle className="w-4 h-4" /> },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-neutral-700">Laster tips...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="max-w-6xl mx-auto space-y-8 text-neutral-800">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-neutral-900">Lær</h1>
            <p className="text-lg text-neutral-700">
              Utforsk tips og råd om trygghet og forsikring
            </p>
          </div>

          {/* Category buttons */}
<div className="flex flex-wrap justify-center gap-2">
  {categories.map((category) => (
    <Button
      key={category.value}
      variant={filter === category.value ? "default" : "outline"}
      onClick={() => setFilter(category.value)}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
        ${
          filter === category.value
            ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            : "border border-border text-primary hover:bg-secondary hover:text-secondary-foreground"
        }`}
    >
      {category.icon}
      {category.label}
    </Button>
  ))}
</div>


          {/* Tips grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>

          {filteredTips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">Ingen tips funnet i denne kategorien</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
