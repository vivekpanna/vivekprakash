import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Lightbulb,
  LineChart,
  Mail,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Advisory", href: "#advisory" },
  { label: "Contact", href: "#contact" },
]

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: "Product Strategy",
    description:
      "Translate customer insight into a clear product thesis, prioritised roadmap, and measurable goals that executives and teams can rally around.",
    icon: Target,
  },
  {
    title: "Operational Excellence",
    description:
      "Design operating rituals, analytics, and quality frameworks so teams learn faster, ship confidently, and continuously reduce risk.",
    icon: BarChart3,
  },
  {
    title: "Go-to-market Acceleration",
    description:
      "Align marketing, sales, and product with clear narratives, positioning, and feedback loops that unlock sustainable growth.",
    icon: Lightbulb,
  },
]

const proofPoints = [
  {
    label: "Products launched",
    value: "25+",
  },
  {
    label: "Cross-functional teams led",
    value: "6",
  },
  {
    label: "Markets served",
    value: "12",
  },
]

const collaborations = [
  "AI-first SaaS",
  "Industrial IoT",
  "Healthcare", 
  "Fintech",
  "Public Sector",
  "Climate Tech",
]

const insights = [
  {
    slug: "cost-of-quality-analysis",
    title: "Cost of Quality Analysis Playbook",
    excerpt:
      "How to quantify conformance and non-conformance work, build defensible business cases, and reduce failure demand across the product lifecycle.",
    tags: ["Operational excellence", "Analytics"],
  },
  {
    slug: "product-marketing-operating-system",
    title: "Product Marketing Operating System",
    excerpt:
      "Positioning, launch orchestration, and revenue enablement tactics that helped SaaS teams align their customer storytelling with product truth.",
    tags: ["Go-to-market", "Storytelling"],
  },
  {
    slug: "product-management-guide",
    title: "Intentional Product Management",
    excerpt:
      "A practical guide to shaping outcomes, shaping rituals, and levelling up collaboration for product managers and their partners.",
    tags: ["Leadership", "Team coaching"],
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            Vivek Prakash
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="ghost" className="text-white/80 hover:text-white">
              <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                Portfolio
              </Link>
            </Button>
            <Button asChild className="gap-2">
              <Link href="mailto:vivek@vivekprakash.de">
                Let&apos;s talk
                <Mail className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16">
        <section id="about" className="grid gap-12 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/20 text-primary">Fractional CPO & Product Advisor</Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Helping founders and operators turn product vision into momentum
            </h1>
            <p className="text-lg text-white/70">
              I partner with teams to untangle complex problems, align stakeholders, and build lovable experiences.
              From zero-to-one discovery to scaling product-market fit, I bring a pragmatic, data-informed, and deeply
              collaborative approach.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                  Explore portfolio
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="#contact">Start a conversation</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <Card key={item.label} className="border-white/10 bg-white/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-semibold text-white">{item.value}</CardTitle>
                    <CardDescription className="text-xs uppercase tracking-wide text-white/60">
                      {item.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-primary/20">
              <Image
                src="/project1.jpg"
                alt="Collaborative workshop"
                width={520}
                height={520}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Where we create traction</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Engagements are shaped around your context—whether that&apos;s validating a new concept, scaling customer
                value, or reorganising delivery for speed and quality.
              </p>
            </div>
            <Button asChild variant="ghost" className="gap-2 text-white/80 hover:text-white">
              <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                View engagements
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = service.icon

              return (
                <Card key={service.title} className="flex flex-col justify-between border-white/10 bg-white/[0.06] p-6">
                  <div className="space-y-4">
                    <ServiceIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-white/70">
                      {service.description}
                    </CardDescription>
                  </div>
                  <Separator className="my-6 bg-white/10" />
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Available as advisory or embedded leadership
                  </p>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="insights" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Latest insight sprints</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Deep dives shaped from real client work—each article blends the research, canvases, and rituals I use
                with product and go-to-market teams.
              </p>
            </div>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/insights">Browse the library</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <Card
                key={post.slug}
                className="group border-white/10 bg-white/[0.06] p-6 transition hover:border-primary/40 hover:bg-white/[0.12]"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/50">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                  Insight sprint
                </div>
                <CardTitle className="mt-4 text-xl group-hover:text-primary">{post.title}</CardTitle>
                <CardDescription className="mt-3 text-sm text-white/70">{post.excerpt}</CardDescription>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="link"
                  className="mt-4 px-0 text-primary hover:text-primary/80"
                >
                  <Link href={`/insights/${post.slug}`}>
                    Read the playbook
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section id="advisory" className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-center">
          <Card className="border-white/10 bg-white/[0.04] p-8">
            <CardHeader className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wide text-white/70">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                Trusted collaborations
              </div>
              <CardTitle className="text-3xl">Partnerships that compound</CardTitle>
              <CardDescription className="text-base text-white/70">
                Advisory engagements are structured for high leverage: async research summaries, decision rituals,
                embedded workshops, and hands-on execution when your roadmap needs extra lift.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {collaborations.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-sm font-medium text-white/80">{item}</span>
                  <LineChart className="h-4 w-4 text-white/30" aria-hidden="true" />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04] p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Advisory formats</CardTitle>
              <CardDescription className="text-white/70">
                Choose the cadence that fits your operating rhythm.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold">Fractional leadership</h3>
                <p className="mt-2 text-sm text-white/70">
                  Step-in CPO and Head of Product support to guide product strategy, rituals, and hiring as you grow.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold">Advisory sprints</h3>
                <p className="mt-2 text-sm text-white/70">
                  4–6 week engagements to validate strategy, redesign discovery, or unblock go-to-market execution.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold">Workshops & facilitation</h3>
                <p className="mt-2 text-sm text-white/70">
                  Tailored sessions to align stakeholders, refine positioning, or shape customer journeys.
                </p>
              </div>
              <Button asChild className="mt-2 w-full">
                <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer">
                  Book an intro session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Let&apos;s design your next inflection point</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-white/70">
              Share a few lines about your product, team, and timeline. I&apos;ll respond within two working days with
              recommended next steps.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-4xl gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-8 md:grid-cols-2">
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-semibold">Direct channels</h3>
              <p className="text-sm text-white/70">
                Prefer async notes? Email{' '}
                <Link href="mailto:vivek@vivekprakash.de" className="text-primary underline">
                  vivek@vivekprakash.de
                </Link>{' '}
                or schedule a call on{' '}
                <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Calendly
                </Link>
                .
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm text-white/70">
                  Remote-first partnerships spanning Europe, North America, and APAC time zones.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm text-white/70">NDA-friendly discovery and executive-ready deliverables.</p>
              </div>
            </div>
            <div className="space-y-4">
              <Label htmlFor="email" className="text-sm uppercase tracking-wide text-white/60">
                Stay in the loop
              </Label>
              <p className="text-sm text-white/60">
                Quarterly notes featuring new frameworks, templates, and upcoming workshops.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
                />
                <Button className="sm:w-auto">Subscribe</Button>
              </div>
              <Separator className="bg-white/10" />
              <Label htmlFor="message" className="text-sm uppercase tracking-wide text-white/60">
                Project overview
              </Label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                placeholder="What challenge are you tackling?"
              />
              <Button className="w-full">Send message</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              Vivek Prakash
            </Link>
            <p className="max-w-sm text-sm text-white/60">
              Fractional product leadership for teams shipping ambitious digital experiences.
            </p>
          </div>
          <div className="grid flex-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="https://portfolio.vivekprakash.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="mailto:vivek@vivekprakash.de" className="transition hover:text-white">
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/raivivekprakash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendly.com/vivekpanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-white/50 md:text-right">
            © {new Date().getFullYear()} Vivek Prakash. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
