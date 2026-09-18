interface CommandTriggerProps {
  onOpen: () => void
}

export default function CommandTrigger({ onOpen }: CommandTriggerProps) {
  return (
    <button
      onClick={onOpen}
      aria-label="Open command palette"
      className="fixed bottom-6 left-6 z-[150] flex h-11 items-center gap-2 rounded-full border border-line bg-bg/90 px-4 text-xs font-medium text-ink-soft shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-soft-2 hover:text-ink hover:shadow-xl"
    >
      <span className="text-ink-faint" aria-hidden>
        ⌕
      </span>
      <kbd className="rounded border border-line bg-bg-soft px-1.5 py-0.5 text-[10px] font-semibold text-ink-faint">
        ⌘K
      </kbd>
    </button>
  )
}