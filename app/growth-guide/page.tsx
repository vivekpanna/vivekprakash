import type { Metadata } from "next"
import { LineChart, SearchCheck, UsersRound } from "lucide-react"

import { ResourcePage } from "@/components/resource-page"

export const metadata: Metadata = {
  title: "Growth Opportunity Guide | Vivek Prakash",
  description: "A product-led guide for finding better growth bets across acquisition, activation, retention, and expansion.",
}

export default function GrowthGuidePage() {
  return (
    <ResourcePage
      badge="Growth system"
      title="Growth Opportunity Guide"
      description="A focused guide for finding growth opportunities that are credible, measurable, and connected to real customer behavior instead of generic channel activity."
      primaryAction="Review growth options"
      steps={[
        {
          title: "Map demand",
          description: "Identify who is actively looking, what they already tried, and which moments create urgency.",
          icon: SearchCheck,
        },
        {
          title: "Improve activation",
          description: "Shorten the path from first touch to first value with sharper onboarding and clearer proof.",
          icon: UsersRound,
        },
        {
          title: "Compound learning",
          description: "Use retention, expansion, and referral signals to find the growth loops worth scaling.",
          icon: LineChart,
        },
      ]}
      sections={[
        {
          title: "Opportunity scan",
          description: "Use these prompts to identify where growth is leaking before spending more on acquisition.",
          items: [
            "Which customer segment reaches value fastest and why?",
            "Where do high-intent users stall before they experience the core product promise?",
            "Which objections repeat across sales, onboarding, support, and churn notes?",
            "Which acquisition channels bring customers who retain, expand, or refer?",
          ],
        },
        {
          title: "Experiment backlog",
          description: "Prioritize experiments that connect product behavior to revenue outcomes.",
          items: [
            "Rewrite the offer around the most urgent use case and test it on one landing path.",
            "Add proof at the decision point where prospects hesitate most.",
            "Create a guided first-run experience for the highest-value segment.",
            "Package one expansion use case for existing customers with clear before-and-after value.",
          ],
        },
      ]}
    />
  )
}
