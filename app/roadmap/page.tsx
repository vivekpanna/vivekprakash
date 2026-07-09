import type { Metadata } from "next"
import { ClipboardCheck, Layers3, Route } from "lucide-react"

import { ResourcePage } from "@/components/resource-page"

export const metadata: Metadata = {
  title: "Ad-Friendly Roadmap Framework | Vivek Prakash",
  description: "A practical roadmap framework for planning product content, conversion paths, retention, and scalable growth.",
}

export default function RoadmapPage() {
  return (
    <ResourcePage
      badge="Roadmap framework"
      title="Ad-Friendly Roadmap Framework"
      description="Plan product and content work around durable visitor value, clear conversion paths, and recurring reasons to return. The goal is a roadmap that serves customers first and monetization second."
      primaryAction="Shape the roadmap"
      steps={[
        {
          title: "Define intent",
          description: "Name the audience, the job they came to complete, and the business outcome the page should support.",
          icon: Route,
        },
        {
          title: "Layer value",
          description: "Balance evergreen resources, fresh updates, internal links, and calls to action without crowding the page.",
          icon: Layers3,
        },
        {
          title: "Check readiness",
          description: "Review trust signals, page quality, policy fit, performance, and measurement before scaling traffic.",
          icon: ClipboardCheck,
        },
      ]}
      sections={[
        {
          title: "Page planning checklist",
          description: "Use this before adding new content or monetization surfaces.",
          items: [
            "The page has one primary audience and one primary action.",
            "Helpful content appears before promotional or ad-heavy sections.",
            "Navigation gives visitors a natural next step into related resources.",
            "The page can stand alone as useful even if ads or external widgets do not load.",
          ],
        },
        {
          title: "Roadmap cadence",
          description: "Keep the site healthy with a rhythm that compounds quality over time.",
          items: [
            "Weekly: refresh one resource, insight, or example with a concrete improvement.",
            "Monthly: review search intent, engagement, speed, and conversion signals.",
            "Quarterly: prune thin pages and consolidate overlapping content.",
            "Always: prioritize visitor trust over short-term monetization density.",
          ],
        },
      ]}
    />
  )
}
