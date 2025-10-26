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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
    {/* Venstre: bilde */}
    <div className="relative h-64 md:h-auto min-h-[340px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600"
        srcSet="
          https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=640 640w,
          https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1024 1024w,
          https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1600 1600w
        "
        sizes="(min-width: 768px) 50vw, 100vw"
        alt="Familie foran en hytte"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>

    {/* Høyre: mørk panel med din tekst */}
    <div className="bg-primary text-primary-foreground px-8 md:px-12 py-12 md:py-16 flex items-center">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="uppercase font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl text-secondary">
          Bli trygg på forsikring og svindel, på en gøyal måte
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90">
          Lær om forsikring, digital trygghet og hvordan du beskytter deg mot svindel
          gjennom interaktive quiz og engasjerende innhold.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
            <Link href="/quiz">Start læringen nå</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
            <Link href="/learn">Utforsk tips</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Modules Section */}
<section className="container mx-auto px-8 py-16 max-w-[1280px]">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-center mb-12 text-primary-foreground">Hva vil du lære i dag?</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
      {modules.map((module) => {
        const Icon = module.icon
        return (
          <Link key={module.title} href={module.href}>
            <Card
              className="bg-muted border border-border/40 rounded-md shadow-gjensidige transition-all duration-300
                         hover:shadow-gjensidige-lg hover:-translate-y-1 hover:bg-secondary cursor-pointer h-full"
            >
              <div className="flex flex-col justify-between h-full p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/30 text-primary flex items-center justify-center rounded-sm">
                    <Icon className="h-9 w-9 shrink-0" />
                  </div>
                  <h3 className="text-primary text-xl font-bold leading-tight tracking-tight">
                    {module.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg text-card-foreground/80 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  </div>
</section>


        {/* Stats Section */}
<section className="container mx-auto px-8 py-16 max-w-[1280px]">
  <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-md p-12 shadow-gjensidige">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="space-y-2">
        <p className="text-5xl font-bold text-secondary">500+</p>
        <p className="text-base md:text-lg text-primary-foreground/80">Aktive brukere</p>
      </div>
      <div className="space-y-2">
        <p className="text-5xl font-bold text-secondary">50+</p>
        <p className="text-base md:text-lg text-primary-foreground/80">Quiz spørsmål</p>
      </div>
      <div className="space-y-2">
        <p className="text-5xl font-bold text-secondary">15+</p>
        <p className="text-base md:text-lg text-primary-foreground/80">Badges å samle</p>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  )
}
