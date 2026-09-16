import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const updateActiveSection = () => {
      const header = document.querySelector('header')
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80
      
      const scrollPosition = window.scrollY + headerHeight + 40

      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id)
          return el ? { id, top: el.getBoundingClientRect().top + window.scrollY } : null
        })
        .filter((s): s is { id: string; top: number } => s !== null)
        .sort((a, b) => a.top - b.top)

      let currentId = ''

      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

      if (isAtBottom && sections.length > 0) {
        currentId = sections[sections.length - 1].id
      } else {
        for (const section of sections) {
          if (scrollPosition >= section.top) {
            currentId = section.id
          } else {
            break 
          }
        }

        if (sections.length > 0 && scrollPosition < sections[0].top) {
          currentId = ''
        }
      }

      setActiveId(currentId)
    }

    updateActiveSection()

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds.join('|')])

  return activeId
}