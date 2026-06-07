import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import PageWrapper from '../components/layout/PageWrapper'
import ProjectHero from '../components/project/ProjectHero'
import CaseStudy from '../components/project/CaseStudy'
import ProjectNav from '../components/project/ProjectNav'

export default function Project() {
  const { id } = useParams<{ id: string }>()
  const idx = projects.findIndex((p) => p.id === id)

  if (idx === -1) return <Navigate to="/work" replace />

  const project = projects[idx]
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <PageWrapper withFooter={false}>
      <ProjectHero project={project} />
      <CaseStudy project={project} />
      <ProjectNav prev={prev} next={next} />

      {/* Contact CTA */}
      <section className="py-24 md:py-36 bg-[#080808] text-center border-t border-[rgba(240,237,230,0.06)]">
        <div className="container-fluid">
          <p className="text-[rgba(240,237,230,0.35)] text-xs tracking-[0.2em] uppercase mb-6">
            Start a project
          </p>
          <h2
            className="text-[#f0ede6] mb-8"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            Xem th?m tr?n<br />
            <span className="text-[#c8f63e]">GitHub</span>
          </h2>
          <a
            href="https://github.com/HSHIRO08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#c8f63e] text-[#c8f63e] px-8 py-4 text-sm tracking-widest uppercase hover:bg-[#c8f63e] hover:text-[#080808] transition-all duration-300"
          >
            github.com/HSHIRO08 <span aria-hidden="true">?</span>
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
