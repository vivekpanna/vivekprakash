import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ResourceSection = {
  title: string
  description: string
  items: string[]
}

type ResourceStep = {
  title: string
  description: string
  icon: LucideIcon
}

type ResourcePageProps = {
  badge: string
  title: string
  description: string
  primaryAction: string
  sections: ResourceSection[]
  steps: ResourceStep[]
}

export function ResourcePage({
  badge,
  title,
  description,
  primaryAction,
  sections,
  steps,
}: ResourcePageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]" aria-hidden />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-16">
        <header className="space-y-8">
          <Button asChild variant="ghost" className="w-fit gap-2 text-white/70 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
          <div className="max-w-3xl space-y-5">
            <Badge className="bg-primary/20 text-primary">{badge}</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <p className="text-lg leading-8 text-white/70">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="mailto:vivek@vivekprakash.de">
                  {primaryAction}
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="/insights">
                  Browse insights
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="border-white/10 bg-white/[0.05] p-6">
              <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <CardTitle className="mt-5 text-xl text-white">{step.title}</CardTitle>
              <p className="mt-3 text-sm leading-6 text-white/70">{step.description}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-6">
          {sections.map((section) => (
            <Card key={section.title} className="border-white/10 bg-white/[0.05]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                <p className="text-sm leading-6 text-white/70">{section.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-slate-950/70 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm leading-6 text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
