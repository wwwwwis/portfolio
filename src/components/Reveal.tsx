import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className = '' }: RevealProps) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  )
}
