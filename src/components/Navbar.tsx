import { useState, MouseEvent } from 'react'
import { navItems } from '@/data/portfolio'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SunIcon, MoonIcon, MenuIcon } from './icons'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const activeId = useScrollSpy(
    navItems.map((item) => item.href.replace('#', '')),
  )

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault()

    const id = href.replace('#', '')
    const element = document.getElementById(id)

    if (!element) {
      console.warn(`Section #${id} was not found.`)
      return
    }

    const header = document.querySelector('header')
    const headerHeight =
      header instanceof HTMLElement ? header.offsetHeight : 80

    const elementTop =
      element.getBoundingClientRect().top + window.scrollY

    const targetPosition = elementTop - headerHeight - 16

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    })

    setOpen(false)

    window.history.replaceState(null, '', '/')  
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-bg/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-5 sm:px-12">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault()

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })

            window.history.replaceState(null, '', '/')
            setOpen(false)
          }}
          className="text-xl font-extrabold tracking-tight"
        >
          WIS<span className="text-ink-faint">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeId === id

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className={`relative pb-1 text-sm uppercase tracking-wider transition-colors
                  after:absolute after:bottom-0 after:left-0 after:h-px
                  after:bg-ink after:transition-all after:content-['']
                  hover:text-ink hover:after:w-full
                  ${
                    isActive
                      ? 'text-ink after:w-full'
                      : 'text-ink-soft after:w-0'
                  }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-soft transition-transform hover:rotate-[20deg] hover:bg-bg-soft-2"
          >
            {theme === 'dark' ? (
              <MoonIcon className="h-[18px] w-[18px]" />
            ) : (
              <SunIcon className="h-[18px] w-[18px]" />
            )}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-soft md:hidden"
          >
            <MenuIcon open={open} className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-b border-line bg-bg transition-[max-height,opacity] duration-300 md:hidden ${
          open
            ? 'max-h-80 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeId === id

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  scrollToSection(event, item.href)
                }
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? 'text-ink'
                    : 'text-ink-soft'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}