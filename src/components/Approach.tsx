import { approach } from '@/data/portfolio'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Approach() {
  return (
    <section className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHead
            eyebrow="How I work"
            title="A simple, steady process"
            description="Three things I keep constant across every project, regardless of size."
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3">
            {approach.map((step) => (
              <div key={step.number} className="bg-bg p-9">
                <span className="mb-5 block font-serif text-sm text-ink-faint">{step.number}</span>
                <h4 className="mb-3 text-lg font-bold">{step.title}</h4>
                <p className="text-[14.5px] leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
