import { useRef } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '../ui/CountUp'
import { useClipReveal } from '../../hooks/useScrollAnimation'
import { useCursor } from '../cursor/CustomCursor'

const stats = [
  { value: 18, suffix: '+', label: 'Repositories' },
  { value: 4, suffix: '', label: 'Ngôn ngữ chính' },
  { value: 6, suffix: '', label: 'Stars nhận được' },
  { value: 2, suffix: 'yr', label: 'Kinh nghiệm' },
]

export default function AboutSnippet() {
  const statementRef = useRef<HTMLParagraphElement>(null)
  const { setCursorState } = useCursor()

  useClipReveal(statementRef as React.RefObject<Element>)

  return (
    <section className="py-24 md:py-36 bg-[#0d0d0d] border-t border-[rgba(240,237,230,0.06)]">
      <div className="container-fluid">

        {/* Large statement */}
        <p
          ref={statementRef}
          className="text-statement text-[#f0ede6] mb-20 max-w-5xl leading-tight"
          style={{ clipPath: 'inset(0 100% 0 0)' }}
        >
          Tôi tin rằng code không chỉ là công cụ — đó là cách tôi giải quyết vấn đề thực tế,
          học hỏi và tạo ra giá trị. Mỗi project là một bài học mới.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-[rgba(240,237,230,0.08)] pt-12">
          {stats.map(({ value, suffix, label }) => (
            <div key={label}>
              <div
                className="font-display text-[#c8f63e] mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}
              >
                <CountUp end={value} suffix={suffix} />
              </div>
              <p className="text-[rgba(240,237,230,0.4)] text-sm tracking-[0.12em] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-6">
              Về tôi
            </p>
            <h2
              className="text-[#f0ede6] mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.2, fontWeight: 300, letterSpacing: '-0.02em' }}
            >
              Sinh viên IT đang xây dựng hệ thống thực tế — từ API backend đến mobile app đến AI model.
            </h2>
            <p className="text-[rgba(240,237,230,0.5)] text-sm leading-relaxed mb-8 max-w-md">
              Tôi là Nhật Hoàng (HSHIRO08), đam mê lập trình từ Web, Mobile đến AI/ML. 
              Stack chính: React + TypeScript (frontend), C# ASP.NET Core (backend), Python (ML), Java (desktop).
              Mỗi repository là một hành trình học hỏi khác nhau.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[#f0ede6] text-sm tracking-widest uppercase border-b border-[rgba(240,237,230,0.3)] pb-1 hover:border-[#c8f63e] hover:text-[#c8f63e] transition-all"
              onMouseEnter={() => setCursorState('hover')}
              onMouseLeave={() => setCursorState('default')}
            >
              Xem thêm <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right: tech stack visual */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { lang: 'TypeScript', icon: '⚡', pct: '90%', color: '#3178c6' },
              { lang: 'C# / .NET', icon: '🔷', pct: '80%', color: '#512bd4' },
              { lang: 'Python', icon: '🐍', pct: '70%', color: '#3776ab' },
              { lang: 'Java', icon: '☕', pct: '65%', color: '#ed8b00' },
              { lang: 'JavaScript', icon: '🌐', pct: '85%', color: '#f7df1e' },
              { lang: 'React Native', icon: '📱', pct: '72%', color: '#61dafb' },
            ].map(({ lang, icon, pct, color }) => (
              <div
                key={lang}
                className="p-4 border border-[rgba(240,237,230,0.08)] hover:border-[rgba(240,237,230,0.2)] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg" aria-hidden="true">{icon}</span>
                  <span className="text-[#f0ede6] text-xs font-medium">{lang}</span>
                </div>
                <div className="h-0.5 bg-[rgba(240,237,230,0.08)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: pct, backgroundColor: color, opacity: 0.7 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}