interface MarqueeTextProps {
  text: string
  speed?: number
  separator?: string
  className?: string
}

export default function MarqueeText({
  text,
  separator = '✦',
  className = '',
}: MarqueeTextProps) {
  const repeated = Array(12).fill(`${text} ${separator} `).join('')

  return (
    <div
      className={`overflow-hidden ${className}`}
      aria-label={text}
      aria-hidden="true"
    >
      <div className="ticker-track flex">
        <span className="shrink-0">{repeated}</span>
        <span className="shrink-0" aria-hidden="true">{repeated}</span>
      </div>
    </div>
  )
}
