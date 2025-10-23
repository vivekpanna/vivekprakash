import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Globe, LineChart, Mail, Sparkles, Target } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const highlights = [
  {
    title: "Product & Strategy",
    description:
      "Crafting data-informed roadmaps, aligning stakeholders, and shipping delightful experiences across industries.",
    icon: <Target className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
  {
    title: "Technology Leadership",
    description: "Driving engineering excellence with a builder mindset, from startups to large-scale enterprises.",
    icon: <LineChart className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
  {
    title: "Global Perspective",
    description: "Partnering with teams around the world and bringing a multicultural lens to every collaboration.",
    icon: <Globe className="h-6 w-6 text-primary" aria-hidden="true" />,
  },
]

const experience = [
  {
    label: "Years of Product Leadership",
    value: "12+",
  },
  {
    label: "Products Launched",
    value: "25",
  },
  {
    label: "Teams Scaled",
    value: "6",
  },
]

const collaborations = [
  "High-growth SaaS",
  "E-commerce Innovators",
  "Deep-tech Ventures",
  "Financial Services",
  "Creative Agencies",
  "Non-profits",
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,28,135,0.25),_transparent_55%)]" aria-hidden />
      <header className="relative border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">vivekprakash.de</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Shaping meaningful digital products</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/70">
              I partner with ambitious founders and product leaders to transform complex problems into intuitive, scalable
              solutions that customers love.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              Open for advisory, fractional product leadership & speaking engagements
            </Badge>
            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                  Explore the full portfolio
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                <Link href="mailto:vivek@vivekprakash.de">
                  Connect via email
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="grid gap-12 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Product leadership with a builder's soul
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">From vision to measurable impact</h2>
            <p className="mt-4 text-lg text-white/70">
              Across a decade of shipping products, I have guided cross-functional teams through discovery, experimentation,
              and high-velocity delivery. My approach combines empathy for users with sharp execution, ensuring that every
              milestone moves the business forward.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {experience.map((item) => (
                <Card key={item.label} className="border-white/10 bg-white/5 text-center shadow-2xl shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-4xl font-semibold text-white">{item.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm uppercase tracking-wide text-white/60">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-primary/20">
              <Image
                src="/project1.jpg"
                alt="Product strategy workshop"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="border-white/10 bg-white/5 p-6 shadow-xl shadow-primary/10">
              <div className="flex items-center justify-between">
                {item.icon}
                <Briefcase className="h-5 w-5 text-white/30" aria-hidden="true" />
              </div>
              <CardTitle className="mt-6 text-xl font-semibold text-white">{item.title}</CardTitle>
              <CardContent className="px-0">
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-10">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s build what&apos;s next</h3>
              <p className="mt-4 text-lg text-white/70">
                Whether you need an advisory partner to validate your strategy, a product leader to navigate scale, or a
                collaborator to bring clarity to an ambiguous space, I can help you shape the path forward.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white/15 text-white">Fractional CPO</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white">Product & growth strategy</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white">Advisory & coaching</Badge>
              </div>
              <Button asChild size="lg" className="mt-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                  View credentials & case studies
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <Card className="border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-primary/10">
              <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                  Recent collaborations
                </CardTitle>
                <p className="text-sm text-white/60">Trusted across industries and stages</p>
              </CardHeader>
              <CardContent className="grid gap-3 px-0">
                {collaborations.map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-medium text-white/80">{item}</span>
                    <ArrowRight className="h-4 w-4 text-white/30" aria-hidden="true" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6 text-center">
          <h3 className="text-3xl font-semibold md:text-4xl">Ready to create momentum?</h3>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Let&apos;s discuss your product vision, upcoming initiative, or growth challenge. I bring clarity, accountability, and
            a passion for building purposeful products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://portfolio.vivekprakash.de" target="_blank" rel="noopener noreferrer">
                Dive into the portfolio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <Link href="https://calendly.com/vivekpanna" target="_blank" rel="noopener noreferrer">
                Book a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        <Separator className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Vivek Prakash. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <Link href="https://portfolio.vivekprakash.de" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Portfolio
            </Link>
            <Link href="mailto:vivek@vivekprakash.de" className="hover:text-white">
              Contact
            </Link>
            <Link href="https://www.linkedin.com/in/raivivekprakash" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
