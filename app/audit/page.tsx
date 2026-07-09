import type { Metadata } from "next"
import { Activity, BarChart3, ShieldCheck } from "lucide-react"

import { ResourcePage } from "@/components/resource-page"

export const metadata: Metadata = {
  title: "Free Product Health Audit | Vivek Prakash",
  description: "A practical self-assessment for product focus, metrics, delivery health, and go-to-market readiness.",
}

export default function AuditPage() {
  return (
    <ResourcePage
      badge="Self-assessment"
      title="Free Product Health Audit"
      description="Use this audit to find the weak spots that slow product momentum: unclear bets, shallow customer signal, fuzzy metrics, brittle delivery, or go-to-market work that starts too late."
      primaryAction="Discuss the audit"
      steps={[
        {
          title: "Score the system",
          description: "Review strategy, discovery, delivery, metrics, and launch readiness with a simple 1-to-5 maturity lens.",
          icon: Activity,
        },
        {
          title: "Spot constraints",
          description: "Separate symptoms from root causes so the team invests in the few changes that release momentum.",
          icon: ShieldCheck,
        },
        {
          title: "Prioritize fixes",
          description: "Turn the audit into a 30-day action plan with owners, expected outcomes, and decision checkpoints.",
          icon: BarChart3,
        },
      ]}
      sections={[
        {
          title: "Strategy and focus",
          description: "Check whether the team can explain what matters now and what deliberately does not.",
          items: [
            "Every active initiative links to a measurable business or customer outcome.",
            "Roadmap choices are traceable to evidence, not only stakeholder volume.",
            "Leadership has named the trade-offs it is willing to make this quarter.",
            "Teams can describe the target customer, buying trigger, and core pain in plain language.",
          ],
        },
        {
          title: "Execution and learning",
          description: "Look for the rituals and data loops that help teams learn without losing delivery pace.",
          items: [
            "Discovery produces decisions, not just research notes.",
            "Delivery work has clear acceptance criteria and a visible quality bar.",
            "Metrics are reviewed with context, counter-signals, and follow-up actions.",
            "Launch retrospectives feed back into positioning, onboarding, and roadmap decisions.",
          ],
        },
      ]}
    />
  )
}
