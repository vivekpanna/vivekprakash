import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type Lever = {
  title: string
  description: string
  icon: LucideIcon
}

const levers: Lever[] = [
  {
    title: "Prevention & appraisal",
    description:
      "Instrument discovery, design reviews, and automated testing to shrink the volume of failure demand before it reaches customers.",
    icon: ShieldCheck,
  },
  {
    title: "Internal failure",
    description:
      "Visualise rework, blocked work, and churned backlog items so leadership can quantify the hidden drag on velocity.",
    icon: Layers,
  },
  {
    title: "External failure",
    description:
      "Connect customer support, incident data, and NPS detractors to measurable cost and revenue impact.",
    icon: BarChart3,
  },
]

const outcomes = [
  "Annualised ROI models for funding remediation and platform investments",
  "Executive dashboards tracking cost of quality trends by value stream",
  "Prioritised playbook combining prevention, automation, and enablement initiatives",
]

export default function CostOfQualityAnalysisPage() {
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
            <Badge className="bg-primary/20 text-primary">Operational excellence</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">Cost of Quality Analysis Playbook</h1>
            <p className="text-lg text-white/70">
              A decision framework inspired by the Cost of Quality proposal and implementation work delivered for JTI and
              other industrial partners. Use it to surface the true cost of failure demand, build the business case for
              remediation, and align teams on sustainable quality investments.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Why cost of quality matters</h2>
          <p className="text-white/70">
            Most teams track uptime, bug counts, or support volume—but those metrics rarely translate to financial
            language. By quantifying prevention, appraisal, internal failure, and external failure activities, leaders
            can express quality gaps as concrete spend and opportunity cost. That clarity accelerates investment
            decisions, whether you&apos;re lobbying for more automation, platform upgrades, or customer education.
          </p>
          <Card className="border-white/10 bg-white/[0.05]">
            <CardHeader>
              <CardTitle>Core levers</CardTitle>
              <CardDescription className="text-white/70">
                The four components from the original Cost of Quality proposal serve as the backbone of the workshop
                series.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {levers.map((lever) => {
                const LeverIcon = lever.icon

                return (
                  <div key={lever.title} className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <LeverIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{lever.title}</h3>
                    <p className="text-sm text-white/70">{lever.description}</p>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Workshop flow</h2>
          <p className="text-white/70">
            The engagement unfolds over three to four weeks. It kicks off with leadership interviews, dives into
            cross-functional data synthesis, and lands with a prioritised roadmap. Each ceremony mirrors the templates
            documented in the open source repository.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Week 1 – Baseline the economics</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Facilitate a cost categorisation workshop with engineering, finance, and operations. Capture prevention
                and failure signals, assign unit economics, and agree on confidence levels.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Week 2 – Model the opportunity</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Build a dynamic model using real throughput, support, and incident data. Layer scenario analysis to show
                how investments shift gross margin and customer experience.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Week 3 – Prioritise interventions</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Score initiatives across impact, effort, and confidence. Package quick wins, medium-term plays, and
                structural investments into a single decision narrative.
              </CardDescription>
            </Card>
            <Card className="border-white/10 bg-white/[0.05] p-6">
              <CardTitle className="text-xl">Week 4 – Executive readout</CardTitle>
              <CardDescription className="mt-3 text-sm text-white/70">
                Present the ROI summary, secure sponsorship, and embed tracking into existing operating reviews.
              </CardDescription>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Engagement outcomes</h2>
          <Card className="border-white/10 bg-white/[0.05]">
            <CardContent className="space-y-4 p-6">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <ClipboardCheck className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-white/70">
            If you&apos;d like the original artefacts—including spreadsheets, interview guides, and facilitation scripts—get
            in touch. They&apos;re adaptable for manufacturing, supply-chain, and software reliability contexts.
          </p>
        </section>

        <Separator className="bg-white/10" />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Keep exploring</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="secondary" className="gap-2">
              <Link href="https://v0-cost-of-quality-proposal.vercel.app/" target="_blank" rel="noopener noreferrer">
                View interactive proposal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="https://github.com/vivekpanna/JTI" target="_blank" rel="noopener noreferrer">
                Explore the JTI repository
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2 text-white/70 hover:text-white">
              <Link href="/insights/product-management-guide">
                Read next: Intentional Product Management
                <LineChart className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
