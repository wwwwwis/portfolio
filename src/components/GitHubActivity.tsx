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
              blockSize={14}
              blockMargin={5}
              fontSize={13}
              showTotalCount
              showColorLegend
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark:  ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}