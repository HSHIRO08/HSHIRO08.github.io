import PageWrapper from '../components/layout/PageWrapper'
import ProjectGrid from '../components/work/ProjectGrid'
import AnimatedText from '../components/ui/AnimatedText'

export default function Work() {
  return (
    <PageWrapper>
      {/* Page header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#080808] border-b border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-6">
            Projects
          </p>
          <AnimatedText
            text={'Projects của\ntôi'}
            as="h1"
            className="text-xl-display text-[#f0ede6]"
          />
          <p className="text-[rgba(240,237,230,0.5)] text-base mt-8 max-w-md leading-relaxed">
            Tất cả các repositories cùng khai thác từ hệ thống cho thuê xe, mobile app đến AI/ML và các project học tập.
          </p>
        </div>
      </section>

      {/* Project grid */}
    <section className="py-16 md:py-24 bg-[#080808]">
        <div className="container-fluid">
          <ProjectGrid />
        </div>
      </section>
    </PageWrapper>
  )
}
