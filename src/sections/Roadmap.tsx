import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LIUTAURAS = [
  { period: 'Jan 2024 - Present', role: 'Vice President - Product Management (Public Cloud)', company: 'JPMorgan Chase & Co.', side: 'left' },
  { period: 'Feb 2022 - Jan 2024', role: 'Technical Product Manager - Public Cloud Demand', company: 'JPMorgan Chase & Co.', side: 'left' },
  { period: 'Sep 2021 - Feb 2022', role: 'Technical Product Analyst', company: 'Financial Conduct Authority', side: 'left' },
  { period: 'Apr 2021 - Oct 2021', role: 'DevOps Engineer - Infrastructure (Cloud)', company: 'Financial Conduct Authority', side: 'left' },
  { period: 'Oct 2020 - Apr 2021', role: 'Product Analyst - End User Compute', company: 'Financial Conduct Authority', side: 'left' },
  { period: 'Jun 2019 - Aug 2019', role: 'Global Solutions Architect', company: 'Fidelity International', side: 'left' },
  { period: 'Jun 2018 - May 2019', role: 'Global Solutions Architect - Industrial Placement', company: 'Fidelity International', side: 'left' },
]

const KHIZAR = [
  { period: 'Jan 2025 - Present', role: 'Software Engineer', company: 'JPMorganChase', side: 'right' },
  { period: 'Jun 2023 - Jan 2025', role: 'Cloud Infrastructure Architect (Global Financial Services)', company: 'Amazon Web Services (AWS)', side: 'right' },
  { period: 'Aug 2021 - Jun 2023', role: 'Associate Cloud Consultant (Global Financial Services)', company: 'Amazon Web Services (AWS)', side: 'right' },
  { period: 'Sep 2020 - Aug 2021', role: 'Machine Learning Engineer', company: 'EthicsGrade (now Ethicsanswer)', side: 'right' },
  { period: 'Jun 2019 - Aug 2020', role: 'Innovation Analyst - Technology Industrial Placement', company: 'Fidelity International', side: 'right' },
]

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
        gsap.from(item, { opacity: 0, x: item.classList.contains('tl-right') ? 30 : -30, duration: 0.6, delay: i * 0.1, scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="roadmap" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#0A0A1E' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Career Roadmap</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>Two careers, one mission</h2>
          <p style={{ color: '#8A8AAA', fontSize: '15px', maxWidth: '760px', margin: '0 auto', lineHeight: 1.6 }}>
            They met at Fidelity building Open Banking integrations for the Personal Investing Platform. Now the story comes full circle with AI agents that make actions on linked bank accounts far easier for users.
          </p>
        </div>

        <div className="full-circle" style={{ margin: '0 auto 56px', maxWidth: '760px', padding: '22px 18px', borderRadius: '18px', border: '1px solid #1A1A35', background: 'linear-gradient(135deg, #0B0B1E, #10102A)', position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 760 170" width="100%" height="170" style={{ display: 'block' }}>
            <path d="M40 95 C 170 10, 310 10, 380 85 C 450 160, 590 160, 720 75" stroke="#00D4FF66" strokeWidth="2" fill="none" />
            <path d="M40 115 C 170 30, 310 30, 380 105 C 450 180, 590 180, 720 95" stroke="#00F0C855" strokeWidth="2" fill="none" />
            <circle cx="380" cy="90" r="52" fill="none" stroke="#00D4FF88" strokeWidth="2" />
            <circle cx="380" cy="90" r="70" fill="none" stroke="#00F0C855" strokeWidth="1.5" strokeDasharray="8 7" />
            <text x="380" y="86" textAnchor="middle" fill="#E0E0E0" style={{ fontSize: '12px', fontFamily: 'Space Mono, monospace' }}>FULL CIRCLE</text>
            <text x="380" y="105" textAnchor="middle" fill="#8A8AAA" style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>Open Banking + AI</text>
          </svg>
        </div>

        <div className="roadmap-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Liutauras */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 24px 0', color: '#00D4FF' }}>Liutauras Mazonas — Co-founder</h3>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(180deg, #00D4FF, #00D4FF44)' }} />
              {LIUTAURAS.map((item) => (
                <div key={`${item.period}-${item.role}`} className="timeline-item" style={{ position: 'relative', marginBottom: '24px', paddingLeft: '20px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#00D4FF', border: '2px solid #0A0A1E' }} />
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', marginBottom: '4px' }}>{item.period}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600 }}>{item.role}</div>
                  <div style={{ fontSize: '13px', color: '#8A8AAA' }}>{item.company}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Khizar */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 24px 0', color: '#00F0C8' }}>Khizar Malik — Co-founder</h3>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(180deg, #00F0C8, #00F0C844)' }} />
              {KHIZAR.map((item) => (
                <div key={`${item.period}-${item.role}`} className="timeline-item tl-right" style={{ position: 'relative', marginBottom: '24px', paddingLeft: '20px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#00F0C8', border: '2px solid #0A0A1E' }} />
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', marginBottom: '4px' }}>{item.period}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600 }}>{item.role}</div>
                  <div style={{ fontSize: '13px', color: '#8A8AAA' }}>{item.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .roadmap-container { grid-template-columns: 1fr !important; gap: 48px !important; }
            .full-circle { padding: 14px 10px !important; margin-bottom: 44px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
