interface SectionHeadProps {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHead({ eyebrow, title, description }: SectionHeadProps) {
  return (
    <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
      <div>
        <span className="mb-3.5 block text-[13px] uppercase tracking-widest text-ink-soft">{eyebrow}</span>
        <h2 className="font-serif text-[clamp(30px,4vw,44px)] font-medium tracking-tight">{title}</h2>
      </div>
      <p className="max-w-[38ch] text-left text-[15px] leading-relaxed text-ink-soft sm:text-right">{description}</p>
    </div>
  )
}
