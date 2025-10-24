import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge as BadgeUI } from "@/components/ui/badge"
import type { Badge } from "@/lib/data"

interface BadgeCardProps {
  badge: Badge
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <Card
      className={`h-full bg-card ${badge.earned ? "border-secondary border-2 shadow-gjensidige-lg" : "opacity-60 border-border"}`}
    >
      <CardHeader>
        <div className="text-5xl mb-2 filter grayscale-0">{badge.icon}</div>
        <CardTitle className="text-lg flex items-center gap-2 text-balance text-card-foreground">
          {badge.name}
          {badge.earned && (
            <BadgeUI variant="default" className="text-xs bg-primary text-primary-foreground">
              Oppnådd
            </BadgeUI>
          )}
        </CardTitle>
        <CardDescription className="text-sm text-card-foreground/70">{badge.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-card-foreground/60">
          Krav: {badge.requirement} {badge.requirement === 1 ? "quiz" : badge.requirement > 100 ? "poeng" : "quiz"}
        </p>
      </CardContent>
    </Card>
  )
}
