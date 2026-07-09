import Link from "next/link"

interface NewsCardProps {
  title: string
  url: string
  author: string
  points: number
  source: string
  createdAt: string
}

export function NewsCard({ title, url, author, points, source, createdAt }: NewsCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-3xl border border-white/10 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-slate-900/95"
    >
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
        <span>{source}</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-primary">{title}</h3>
      <p className="mt-4 text-sm text-white/70">By {author} · {points} points</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Read story
      </div>
    </Link>
  )
}
