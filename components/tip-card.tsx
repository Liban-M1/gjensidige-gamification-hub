"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Tip } from "@/lib/data"

interface TipCardProps {
  tip: Tip
}

export function TipCard({ tip }: TipCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card
        className="h-full hover:shadow-gjensidige-lg transition-all duration-300 cursor-pointer bg-card"
        onClick={() => setShowModal(true)}
      >
        <CardHeader>
          <div className="text-4xl mb-2">{tip.icon}</div>
          <CardTitle className="text-lg text-balance text-card-foreground">{tip.title}</CardTitle>
          <CardDescription className="capitalize text-xs text-card-foreground/70">
            {tip.category.replace("-", " ")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-card-foreground/70 line-clamp-3">{tip.description}</p>
          <Button variant="link" className="px-0 mt-2 text-primary hover:text-secondary">
            Lær mer →
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <div className="text-5xl mb-4">{tip.icon}</div>
            <DialogTitle className="text-2xl text-balance text-card-foreground">{tip.title}</DialogTitle>
            <DialogDescription className="capitalize text-card-foreground/70">
              {tip.category.replace("-", " ")}
            </DialogDescription>
          </DialogHeader>
          <p className="text-card-foreground leading-relaxed">{tip.description}</p>
        </DialogContent>
      </Dialog>
    </>
  )
}
