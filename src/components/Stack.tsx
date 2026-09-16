import { stack } from '@/data/portfolio'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

const ICONS: Record<string, string> = {
  // Languages
  'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C#':           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Lua':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',

  // Frontend
  'React':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'HTML5':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Vite':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'Framer Motion':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',

  // Backend
  'Node.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'MongoDB':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Firebase':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Supabase':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',

  // Deployment & Tools
  'Vercel':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'Docker':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'AWS':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Git':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
}

export default function Stack() {
  return (
    <section id="stack" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHead
            eyebrow="Stack"
            title="Tools I reach for"
            description="Not exhaustive — just what shows up in most projects."
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-11">
            {stack.map((group) => (
              <div key={group.label}>
                <h5 className="mb-5 text-[13px] uppercase tracking-widest text-ink-soft">
                  {group.label}
                </h5>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="group flex items-center gap-2.5 rounded-full border border-line bg-bg px-3.5 py-2 text-[13.5px] transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-bg-soft hover:shadow-md"
                    >
                     {ICONS[item] ? (
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/90 p-0.5 dark:bg-white">
                          <img 
                            src={ICONS[item]} 
                            alt="" 
                            loading="lazy" 
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-125" 
                          />
                        </div>
                      ) : (
                        <span className="h-4 w-4 flex-shrink-0 rounded border border-line-strong bg-bg-soft-2" />
                      )}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}