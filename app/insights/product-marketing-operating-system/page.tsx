import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Megaphone,
  NotepadText,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const pillarIcons = {
  narrativeArchitecture: Sparkles,
  launchChoreography: Rocket,
  revenueEnablement: Megaphone,
} satisfies Record<string, LucideIcon>

type Pillar = {
  title: string
  description: string
  icon: keyof typeof pillarIcons
}

const pillars: Pillar[] = [
  {
    title: "Narrative architecture",
    description:
      "Craft differentiated positioning, proof, and objection handling that anchors every touchpoint in customer truth.",
    icon: "narrativeArchitecture",
  },
  {
    title: "Launch choreography",
    description:
      "Orchestrate cross-functional plans, asset readiness, and enablement in weekly rhythms that keep stakeholders aligned.",
    icon: "launchChoreography",
  },
  {
    title: "Revenue enablement",
    description:
      "Equip sales and success with modular stories, ROI calculators, and battlecards linked to the buyer journey.",
    icon: "revenueEnablement",
  },
]

const cadences = [
  "Weekly launch room to sync marketing, product, and revenue owners",
  "Narrative critiques with founders, product leads, and customers",
  "Signal reviews combining win/loss, pipeline, and adoption data",
]

export default function ProductMarketingOperatingSystemPage() {
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
            <Badge className="bg-primary/20 text-primary">Go-to-market</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">Product Marketing Operating System</h1>
            <p className="text-lg text-white/70">
              Derived from the open-source product marketing website project, this operating system codifies how SaaS
              and platform teams launch, iterate, and enable revenue organisations without losing strategic clarity.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Operating pillars</h2>
          <Card className="border-white/10 bg-white/[0.05]">
            <CardContent className="grid gap-4 p-6 md:grid-cols-3">
              {pillars.map((pillar) => {
                const PillarIcon = pillarIcons[pillar.icon]

                return (
                  <div key={pillar.title} className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <PillarIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{pillar.title}</h3>
                    <p className="text-sm text-white/70">{pillar.description}</p>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Cadence highlights</h2>
          <p className="text-white/70">
            The operating system leans on lightweight rituals that keep messaging, roadmap, and pipeline realities in
            sync. Borrow them as-is or adapt for your organisation.
          </p>
          <div className="space-y-4">
            {cadences.map((item) => (
              <Card key={item} className="border-white/10 bg-white/[0.05]">
                <CardContent className="flex items-start gap-3 p-5 text-sm text-white/70">
                  <Users className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Starter toolkit</h2>
          <p className="text-white/70">
            Use these templates to spin up your own operating system. They map 1:1 with the repository content—ranging
            from positioning canvases to go-to-market scorecards.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Positioning canvas</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Align product truth, customer pain, differentiation, and proof in a single living document.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Launch playbook</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Detail milestones, asset owners, channels, and success metrics for every release tier.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Enablement kit</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Equip revenue teams with battlecards, discovery call flows, and objection handlers.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Signal review</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Tie adoption, pipeline, and win/loss insights back to positioning for continuous refinement.
              </CardDescription>
            </Card>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Next steps</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="secondary" className="gap-2">
              <Link href="https://github.com/vivekpanna/product-marketing-website" target="_blank" rel="noopener noreferrer">
                Browse the repository
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/insights/product-management-guide">
                Continue to Intentional Product Management
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2 text-white/70 hover:text-white">
              <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer">
                Book a collaboration call
                <NotepadText className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
