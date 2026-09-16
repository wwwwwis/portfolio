import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-6 text-[13px] uppercase tracking-[0.3em] text-ink-soft">
          Error 404
        </p>

        <h1 className="mb-6 font-serif text-[clamp(80px,18vw,200px)] font-medium leading-none tracking-tight">
          4<span className="inline-block animate-pulse">0</span>4
        </h1>

        <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          This page went off the grid.
        </h2>

        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-ink-soft">
          The link you followed is broken, or the page was moved. Either way —
          there's nothing here except this very polite error message.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-[15px] text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            ← Back to home
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-[15px] text-sm font-semibold transition-colors hover:border-ink hover:bg-bg-soft"
          >
            View my work
          </Link>
        </div>
      </div>
    </section>
  )
}