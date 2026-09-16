import { profile, socials } from '@/data/portfolio'
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon } from './icons'
import Reveal from './Reveal'

const SOCIAL_ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon }

export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-12 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-wrap overflow-hidden rounded-[20px] bg-inverse-bg px-6 py-12 text-inverse-ink sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="relative">
            <span className="mb-4 block text-[13px] uppercase tracking-widest text-inverse-ink/55">
              Contact
            </span>
            <h2 className="mb-7 max-w-[14ch] font-serif text-[clamp(34px,5.6vw,64px)] font-medium leading-[1.06] tracking-tight">
              Let&apos;s build something worth shipping.
            </h2>

            <div className="mt-11 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-start gap-2.5 border-b border-inverse-ink/35 pb-1.5 text-base font-semibold transition-colors hover:border-inverse-ink sm:text-xl"
              >
                <span className="break-all">{profile.email}</span>
                <ExternalLinkIcon className="mt-1 h-4 w-4 flex-shrink-0" />
              </a>

              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon]
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-inverse-ink/35 transition-colors hover:bg-inverse-ink hover:text-inverse-bg sm:h-[42px] sm:w-[42px]"
                    >
                      <Icon className="h-[17px] w-[17px]" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}