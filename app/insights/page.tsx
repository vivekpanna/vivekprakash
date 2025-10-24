import Link from "next/link"
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const posts = [
  {
    slug: "cost-of-quality-analysis",
    title: "Cost of Quality Analysis Playbook",
    excerpt:
      "Quantify conformance, prevention, and failure demand to spotlight the real cost of trade-offs and invest where it matters most.",
    tags: ["Operational excellence", "Analytics"],
  },
  {
    slug: "product-marketing-operating-system",
    title: "Product Marketing Operating System",
    excerpt:
      "Build the positioning, launch, and enablement rhythms that keep product, marketing, and revenue teams in sync.",
    tags: ["Go-to-market", "Storytelling"],
  },
  {
    slug: "product-management-guide",
    title: "Intentional Product Management",
    excerpt:
      "Rituals and decision frameworks for product teams navigating ambiguity while keeping momentum high.",
    tags: ["Leadership", "Team coaching"],
  },
]

export default function InsightsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]" aria-hidden />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16">
        <header className="space-y-6 text-center">
          <Button asChild variant="ghost" className="mx-auto gap-2 text-white/70 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
          <div className="space-y-4">
            <Badge className="bg-primary/20 text-primary">Insight library</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">Playbooks from recent engagements</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Each article combines field notes, templates, and leadership lessons gathered while partnering with SaaS,
              industrial, and enterprise teams.
            </p>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group border-white/10 bg-white/[0.05] p-6 transition hover:border-primary/40 hover:bg-white/[0.1]"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/50">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                  Insight sprint
                </div>
                <CardTitle className="mt-3 text-2xl group-hover:text-primary">{post.title}</CardTitle>
                <CardDescription className="mt-3 text-sm text-white/70">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="link" className="px-0 text-primary hover:text-primary/80">
                  <Link href={`/insights/${post.slug}`}>
                    Read the playbook
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
