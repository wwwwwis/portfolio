import { marqueeWords } from '@/data/portfolio'

export default function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords]

  return (
    <div className="group relative z-[1] mt-14 overflow-hidden border-y border-line py-6">
      <div className="flex w-max animate-scroll-x gap-16 group-hover:[animation-play-state:paused]">
        {doubled.map((word, i) => (
          <div key={`${word}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap text-[15px] text-ink-soft">
            <b className="font-semibold text-ink">{word}</b>
            <span className="text-ink-faint">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
