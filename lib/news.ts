export type TechNewsItem = {
  title: string
  url: string
  author: string
  points: number
  source: string
  createdAt: string
}

type HackerNewsHit = {
  author?: string
  created_at?: string
  objectID?: string
  points?: number
  story_title?: string
  title?: string
  url?: string
}

export async function getTechNews(): Promise<TechNewsItem[]> {
  try {
    const response = await fetch(
      "https://hn.algolia.com/api/v1/search?query=technology&tags=story&hitsPerPage=6",
      {
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch tech news")
    }

    const data = (await response.json()) as {
      hits: HackerNewsHit[]
    }

    return data.hits
      .filter((hit) => hit.title || hit.story_title)
      .map((hit) => ({
        title: hit.title || hit.story_title || "Untitled story",
        url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
        author: hit.author || "unknown",
        points: hit.points || 0,
        source: "Hacker News",
        createdAt: hit.created_at || "",
      }))
      .slice(0, 6)
  } catch (error) {
    console.error("getTechNews error:", error)
    return []
  }
}
