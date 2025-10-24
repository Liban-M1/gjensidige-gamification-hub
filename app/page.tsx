import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, AlertTriangle, Trophy } from "lucide-react"

export default function HomePage() {
  const modules = [
    {
      title: "Quiz",
      description: "Test kunnskapen din med interaktive spørsmål om forsikring og trygghet",
      icon: Brain,
      href: "/quiz",
    },
    {
      title: "Lær",
      description: "Utforsk tips og råd om digital trygghet og forsikringsbegreper",
      icon: Shield,
      href: "/learn",
    },
    {
      title: "Anti-svindel",
      description: "Lær å gjenkjenne og beskytte deg mot svindelforsøk",
      icon: AlertTriangle,
      href: "/quiz",
    },
    {
      title: "Belønninger",
      description: "Samle poeng, badges og følg din progresjon",
      icon: Trophy,
      href: "/rewards",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-16 md:py-24 max-w-[1280px]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-primary-foreground text-balance leading-tight">
              Bli trygg på forsikring og svindel — på en gøyal måte
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Lær om forsikring, digital trygghet og hvordan du beskytter deg mot svindel gjennom interaktive quiz og
              engasjerende innhold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/quiz">Start læringen nå</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                <Link href="/learn">Utforsk tips</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="container mx-auto px-8 py-16 max-w-[1280px]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12 text-primary-foreground">Hva vil du lære i dag?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module) => {
                const Icon = module.icon
                return (
                  <Link key={module.title} href={module.href}>
                    <Card className="h-full hover:shadow-gjensidige-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border/50">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-accent">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-card-foreground">{module.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed text-card-foreground/70">
                          {module.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-8 py-16 max-w-[1280px]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-5xl font-bold text-secondary">500+</p>
                <p className="text-muted-foreground">Aktive brukere</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-secondary">50+</p>
                <p className="text-muted-foreground">Quiz spørsmål</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-secondary">15+</p>
                <p className="text-muted-foreground">Badges å samle</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
