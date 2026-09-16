const SHAPES = [
  <>
    <circle cx="72" cy="95" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="128" y1="70" x2="230" y2="70" stroke="currentColor" strokeWidth="2" />
    <line x1="128" y1="90" x2="205" y2="90" stroke="currentColor" strokeWidth="2" />
    <line x1="128" y1="110" x2="170" y2="110" stroke="currentColor" strokeWidth="2" />
    <rect x="252" y="30" width="90" height="130" fill="currentColor" opacity="0.9" />
    <circle cx="297" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="2" />
  </>,
  <>
    <rect x="30" y="40" width="110" height="110" fill="none" stroke="currentColor" strokeWidth="2" rx="6" />
    <circle cx="85" cy="95" r="26" fill="currentColor" opacity="0.85" />
    <line x1="170" y1="60" x2="330" y2="60" stroke="currentColor" strokeWidth="2" />
    <line x1="170" y1="85" x2="300" y2="85" stroke="currentColor" strokeWidth="2" />
    <line x1="170" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="2" />
    <line x1="170" y1="135" x2="320" y2="135" stroke="currentColor" strokeWidth="2" />
  </>,
  <>
    <polygon points="60,150 100,50 140,150" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="220" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="220" cy="100" r="18" fill="currentColor" />
    <line x1="300" y1="60" x2="360" y2="60" stroke="currentColor" strokeWidth="2" />
    <line x1="300" y1="85" x2="345" y2="85" stroke="currentColor" strokeWidth="2" />
  </>,
  <>
    <rect x="40" y="55" width="150" height="90" fill="none" stroke="currentColor" strokeWidth="2" rx="8" />
    <line x1="60" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="2" />
    <line x1="60" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="2" />
    <circle cx="270" cy="100" r="52" fill="currentColor" opacity="0.9" />
    <circle cx="270" cy="100" r="30" className="fill-bg-soft" />
  </>,
  <>
    <polyline
      points="40,150 90,90 140,120 200,50 260,100 330,70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    {[
      [40, 150],
      [90, 90],
      [140, 120],
      [200, 50],
      [260, 100],
      [330, 70],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="currentColor" />
    ))}
  </>,
  <>
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="160" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="230" cy="70" r="10" fill="currentColor" />
    <circle cx="260" cy="70" r="10" fill="currentColor" opacity="0.5" />
    <circle cx="290" cy="70" r="10" fill="currentColor" opacity="0.25" />
  </>,
]

interface ProjectPlaceholderProps {
  seed: number
  className?: string
}

export default function ProjectPlaceholder({ seed, className = '' }: ProjectPlaceholderProps) {
  const shape = SHAPES[seed % SHAPES.length]
  return (
    <svg viewBox="0 0 380 200" className={`h-full w-full text-ink ${className}`} aria-hidden="true">
      {shape}
    </svg>
  )
}
