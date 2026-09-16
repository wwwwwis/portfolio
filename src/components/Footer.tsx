import { ArrowUpIcon } from './icons'

export default function Footer() {
  return (
    <footer className="relative z-[1] px-6 pb-14 pt-6 sm:px-12">
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 text-[13px] text-ink-soft sm:flex-row">
        <span>© {new Date().getFullYear()} All rights reserved. </span>
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong transition-colors hover:bg-ink hover:text-bg"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
