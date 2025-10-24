import Link from "next/link"
import { ArrowLeft, ArrowRight, CalendarCheck, Compass, MessageSquare, Target } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const chapters = [
  {
    title: "Anchor on intent",
    description:
      "Start every initiative with an intent statement that links customer value, business outcomes, and the operating constraints you are managing.",
    icon: <Compass className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
  {
    title: "Design purposeful rituals",
    description:
      "Facilitation guides, meeting notes, and async templates help teams swap status theatre for decisions and learning.",
    icon: <CalendarCheck className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
  {
    title: "Coach cross-functional partners",
    description:
      "Conversation frameworks and feedback loops make collaboration with engineering, design, and go-to-market partners frictionless.",
    icon: <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
]

const resources = [
  {
    title: "Living guidebook",
    description: "An evolving handbook that documents principles, rituals, and prompts as the organisation grows.",
  },
  {
    title: "Template library",
    description: "Notion and FigJam assets for discovery briefs, planning cadences, and decision logs.",
  },
  {
    title: "Coaching loops",
    description: "Guided reflection questions and 1:1 scripts for developing product managers and leads.",
  },
]

export default function ProductManagementGuidePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]" aria-hidden />

      <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-16">
        <header className="space-y-6">
          <Button asChild variant="ghost" className="w-fit gap-2 text-white/70 hover:text-white">
            <Link href="/insights">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to insights
            </Link>
          </Button>
          <div className="space-y-4">
            <Badge className="bg-primary/20 text-primary">Leadership</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">Intentional Product Management</h1>
            <p className="text-lg text-white/70">
              Built from the product management guide repository—including the 75c1521 update that reframed the core
              principles—this edition focuses on leading with intent, levelling up rituals, and coaching teams through
              constant change.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Guiding principles</h2>
          <Card className="border-white/10 bg-white/[0.05]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-3">
              {chapters.map((chapter) => (
                <div key={chapter.title} className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  {chapter.icon}
                  <h3 className="text-lg font-semibold">{chapter.title}</h3>
                  <p className="text-sm text-white/70">{chapter.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What&apos;s inside</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.title} className="border-white/10 bg-white/[0.05] p-6">
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription className="mt-3 text-sm text-white/70">{resource.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Applying the guide</h2>
          <p className="text-white/70">
            Start by framing the intent for your next cycle, then audit each ritual against the principles in the guide.
            Pair the templates with stakeholder interviews to uncover friction and redesign handoffs. Close every sprint
            with reflection questions so the team keeps compounding their learning.
          </p>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Dive deeper</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="secondary" className="gap-2">
              <Link href="https://github.com/vivekpanna/product-management-guide" target="_blank" rel="noopener noreferrer">
                Open the repository
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link
                href="https://github.com/vivekpanna/product-management-guide/commit/75c15219011b8829f951fce08c30c7b88a4921b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the intent-first update
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2 text-white/70 hover:text-white">
              <Link href="/insights/cost-of-quality-analysis">
                Continue exploring quality economics
                <Target className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
