import PageWrapper from '../components/layout/PageWrapper'
import AnimatedText from '../components/ui/AnimatedText'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    icon: '🌐',
    items: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['C# ASP.NET Core', 'Clean Architecture', 'Unit of Work', 'Entity Framework', 'REST API', 'SQL Server'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    items: ['React Native', 'Expo', 'TypeScript', 'Cross-platform iOS/Android'],
  },
  {
    category: 'AI / Machine Learning',
    icon: '🤖',
    items: ['Python', 'scikit-learn', 'Decision Tree', 'Naive Bayes', 'Flask', 'Pandas & Matplotlib'],
  },
  {
    category: 'Algorithms & CS',
    icon: '🧠',
    items: ['BFS / DFS', 'A* Search', 'State Space Search', 'Data Structures', 'OOP', 'Design Patterns'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git & GitHub', 'Vite', 'GitHub Pages', 'VS Code', 'Postman', 'SSMS'],
  },
]

const values = [
  { num: '01', title: 'Học qua thực chiến', body: 'Mỗi project là một bài toán thực tế. Tôi học bằng cách xây dựng, thất bại, sửa và build lại — không chỉ xem tutorial.' },
  { num: '02', title: 'Code sạch, có cấu trúc', body: 'Từ Clean Architecture đến Component-based UI, tôi luôn hướng tới code dễ đọc, dễ mở rộng và maintainable.' },
  { num: '03', title: 'Đa ngôn ngữ, đa domain', body: 'React/TypeScript cho web, C# cho backend, Python cho ML, Java cho desktop — mỗi công cụ đúng chỗ đúng lúc.' },
  { num: '04', title: 'Niềm vui trong code', body: '"DEV mang lại niềm vui" — lập trình không chỉ là công việc, đó là đam mê giải quyết puzzle và tạo ra thứ gì đó hoạt động.' },
]

const timeline = [
  { year: '2023', event: 'Bắt đầu học lập trình — HTML/CSS/JavaScript đầu tiên' },
  { year: '2024', event: 'Xây dựng project Java đầu tiên, tiếp cận C# và .NET ecosystem' },
  { year: '2025', event: 'Full-stack với ASP.NET Core API + React frontend. Khám phá AI/ML với Python' },
  { year: '2026', event: 'AutoRent v2.0 — hệ thống cho thuê xe đầy đủ, React Native mobile, portfolio này' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#080808] border-b border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-6">
            Về tôi
          </p>
          <AnimatedText
            text={'Nhật Hoàng\nHSHIRO08'}
            as="h1"
            className="text-xl-display text-[#f0ede6]"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <p className="text-statement text-[#f0ede6] mb-8">
                Một developer người Việt đang xây dựng từ Web đến Mobile đến AI, với mục tiêu tạo ra những sản phẩm thực sự có ích.
              </p>
              <p className="text-[rgba(240,237,230,0.55)] leading-relaxed mb-4" style={{ fontSize: '1.05rem' }}>
                Tôi là <strong className="text-[#f0ede6]">Nhật Hoàng</strong>, sinh viên IT tại Việt Nam với niềm đam mê code bắt nguồn từ sự tò mò. 
                Tôi không chờ "sẵn sàng" để bắt đầu — tôi học bằng cách nhảy vào làm project thực tế.
              </p>
              <p className="text-[rgba(240,237,230,0.55)] leading-relaxed">
                Stack của tôi trải rộng từ React + TypeScript cho frontend, ASP.NET Core cho backend API, 
                React Native cho mobile, đến Python scikit-learn cho Machine Learning. 
                Mỗi tech tôi học đều gắn với một project cụ thể — đó là cách tôi nhớ và thực sự hiểu.
              </p>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 border border-[rgba(240,237,230,0.1)] p-8"
            >
              <p className="text-[rgba(240,237,230,0.3)] text-xs tracking-[0.2em] uppercase mb-6">Liên hệ</p>
              <div className="space-y-4">
                {[
                  { label: 'GitHub', value: 'github.com/HSHIRO08', href: 'https://github.com/HSHIRO08' },
                  { label: 'Facebook', value: 'fb.com/hshiro08', href: 'https://www.facebook.com/hshiro08' },
                  { label: 'YouTube', value: '@nhathoang434', href: 'https://www.youtube.com/@nhathoang434' },
                  { label: 'LinkedIn', value: 'Nhật Hoàng', href: 'https://www.linkedin.com/in/nhật-hoàng-6272b9288' },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-[rgba(240,237,230,0.06)]">
                    <span className="text-[rgba(240,237,230,0.4)] text-xs tracking-[0.1em]">{label}</span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgba(240,237,230,0.7)] text-sm hover:text-[#c8f63e] transition-colors"
                    >
                      {value} ↗
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-12">
            Hành trình
          </p>
          <div className="space-y-0">
            {timeline.map(({ year, event }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="flex gap-8 py-6 border-b border-[rgba(240,237,230,0.06)] group"
              >
                <span
                  className="shrink-0 text-[#c8f63e] group-hover:text-[#f0ede6] transition-colors"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', lineHeight: 1.1 }}
                >
                  {year}
                </span>
                <p className="text-[rgba(240,237,230,0.6)] group-hover:text-[#f0ede6] transition-colors self-center">
                  {event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills grid */}
      <section className="py-16 md:py-24 bg-[#080808] border-t border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-12">
            Tech Stack
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-[rgba(240,237,230,0.06)] bg-[rgba(240,237,230,0.06)]">
            {skills.map(({ category, icon, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                className="bg-[#080808] p-8 group hover:bg-[#0d0d0d] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" aria-hidden="true">{icon}</span>
                  <h3 className="text-[#c8f63e] text-xs tracking-[0.15em] uppercase font-medium">{category}</h3>
                </div>
                <ul className="space-y-2 list-none">
                  {items.map((item) => (
                    <li key={item} className="text-[rgba(240,237,230,0.55)] text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[rgba(240,237,230,0.2)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#0d0d0d] border-t border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-12">
            Cách tôi làm việc
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[rgba(240,237,230,0.06)] bg-[rgba(240,237,230,0.06)]">
            {values.map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="bg-[#0d0d0d] p-10 md:p-12 group hover:bg-[#111] transition-colors"
              >
                <span className="block text-[#c8f63e] text-sm tracking-[0.15em] mb-6">{num}</span>
                <h3
                  className="text-[#f0ede6] mb-4 group-hover:text-[#c8f63e] transition-colors"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', letterSpacing: '0.04em' }}
                >
                  {title}
                </h3>
                <p className="text-[rgba(240,237,230,0.5)] text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#080808] border-t border-[rgba(240,237,230,0.06)] text-center">
        <div className="container-fluid">
          <h2
            className="text-[#f0ede6] mb-8"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2rem, 6vw, 6rem)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            Xem các project<br />
            <span className="text-[#c8f63e]">của tôi</span>
          </h2>
          <a
            href="https://github.com/HSHIRO08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#c8f63e] text-[#c8f63e] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#c8f63e] hover:text-[#080808] transition-all duration-300"
          >
            github.com/HSHIRO08 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}

