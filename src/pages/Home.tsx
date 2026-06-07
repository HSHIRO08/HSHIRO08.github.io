import PageWrapper from '../components/layout/PageWrapper'
import Hero from '../components/home/Hero'
import WorkGrid from '../components/home/WorkGrid'
import AboutSnippet from '../components/home/AboutSnippet'
import MarqueeText from '../components/ui/MarqueeText'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <WorkGrid limit={4} />

      {/* Mid-page marquee divider */}
      <div className="py-6 border-y border-[rgba(240,237,230,0.06)] bg-[#0a0a0a]">
        <MarqueeText
          text="Creative Studio · Digital Experiences · Brand Identity · Motion Design"
          className="text-[rgba(240,237,230,0.15)] text-sm tracking-[0.08em] uppercase"
        />
      </div>

      <AboutSnippet />
    </PageWrapper>
  )
}
