import { GitHubCalendar } from 'react-github-calendar'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { useTheme } from '@/hooks/useTheme'

export default function GitHubActivity() {
  const { theme } = useTheme()

  return (
    <section id="github" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHead
            eyebrow="GitHub"
            title="Commit activity"
            description="A live look at what I've been building — updated automatically."
          />
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-line bg-bg-soft p-6 sm:p-8">
            <GitHubCalendar
              username="wwwwwis"
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              blockSize={13}
              blockMargin={4}
              fontSize={13}
              showTotalCount
              showColorLegend
              theme={{
                light: ['#efeeea', '#c8c7c2', '#94938e', '#5a5956', '#111111'],
                dark:  ['#1a1a18', '#3a3a36', '#666561', '#a3a29d', '#f4f3ef'],
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}