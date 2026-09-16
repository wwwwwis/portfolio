import { experience } from '@/data/portfolio'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHead
            eyebrow="Background"
            title="Education & Achievements"
            description="My academic background, competition wins, and development journey."
          />
        </Reveal>

        <Reveal>
          <div className="border-t border-line">
            {experience.map((entry) => (
              <div
                key={entry.role + entry.period}
                className="grid grid-cols-1 gap-3 border-b border-line py-9 sm:grid-cols-[160px_1fr] sm:gap-8"
              >
                <div className="pt-1 text-sm tracking-wide text-ink-soft">{entry.period}</div>
                <div className="flex flex-wrap justify-between gap-6">
                  <div>
                    <h4 className="mb-2 text-xl font-bold">{entry.role}</h4>
                    <div className="mb-3.5 text-sm text-ink-soft">{entry.company}</div>
                    <p className="max-w-[56ch] text-[14.5px] leading-relaxed text-ink-soft">{entry.description}</p>
                  </div>
                  
                  <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-lg border border-line-strong bg-bg-soft text-[20px]">
                    {entry.logo && entry.logo.startsWith('/') ? (
                      <img 
                        src={entry.logo} 
                        alt={entry.company} 
                        className="h-full w-full rounded-lg object-contain p-1" 
                      />
                    ) : (
                      <span>{entry.logo || '•'}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}