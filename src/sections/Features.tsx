import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  { title: 'Plain English commands', desc: '"Pay all invoices under 14 days old and set a reminder to review vendor contracts next month." No code, no setup wizards.', icon: '💬' },
  { title: 'Open Banking ready', desc: 'Pre-built integrations with major UK and EU banks via standardised Open Banking APIs. 95%+ coverage.', icon: '🏦' },
  { title: 'Built-in audit trail', desc: 'Every decision a Minion makes is logged with full reasoning, data sources, and timestamps. You can always ask "why?"', icon: '📋' },
  { title: 'Multi-tenant by design', desc: 'Securely serves thousands of small businesses with isolated data, shared infrastructure, and zero cross-contamination.', icon: '🏗️' },
  { title: 'Fast iteration', desc: 'New agents can be assembled in hours, not months. The shared building block architecture means rapid experimentation.', icon: '⚡' },
  { title: 'Never replace a human', desc: 'Minions handle the repetitive 80% — not the strategic 20%. Founders stay in control, save time, and make better decisions.', icon: '🤝' },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 30, duration: 0.6, delay: i * 0.08, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
      gsap.from('.arch-diagram', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.arch-diagram', start: 'top 85%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#0A0A1E' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Features</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>What makes Finance Minions different</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px', marginBottom: '80px' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '28px', transition: 'border-color 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF44' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35' }}>
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>{f.title}</h3>
              <p style={{ color: '#8A8AAA', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* FM architecture flow (inputs → hub → outputs) */}
        <div className="arch-diagram" style={{ background: 'linear-gradient(135deg, #0A0A1E, #0E0E28)', border: '1px solid #1A1A35', borderRadius: '20px', padding: 'clamp(20px, 3vw, 36px)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 8px 0' }}>How it all connects</h3>
          <p style={{ textAlign: 'center', color: '#8A8AAA', fontSize: '13px', margin: '0 0 20px 0', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Banks, email, and accounting feed Open Banking and integrations into FM — then insights, agents, and MCP links to frontier models.
          </p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <svg
              viewBox="0 0 920 400"
              role="img"
              aria-label="Diagram: data sources flow into FM hub, then out to Insights, Agents, and MCP"
              style={{ display: 'block', minWidth: '720px', width: '100%', maxWidth: '920px', margin: '0 auto', height: 'auto' }}
            >
              <defs>
                <linearGradient id="fmHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#121228" />
                  <stop offset="100%" stopColor="#0E0E20" />
                </linearGradient>
                <marker id="arrowFmIn" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#00D4FF" />
                </marker>
                <marker id="arrowFmOut" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#00F0C8" />
                </marker>
              </defs>

              {/* Curved connectors: sources → FM */}
              <path d="M 218 58 Q 320 58 400 168" fill="none" stroke="#00D4FF" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmIn)" />
              <path d="M 218 188 Q 320 188 400 200" fill="none" stroke="#00D4FF" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmIn)" />
              <path d="M 218 318 Q 320 318 400 232" fill="none" stroke="#00D4FF" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmIn)" />

              {/* FM → outputs */}
              <path d="M 520 168 Q 560 60 598 52" fill="none" stroke="#00F0C8" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmOut)" />
              <path d="M 520 200 Q 580 200 598 188" fill="none" stroke="#00F0C8" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmOut)" />
              <path d="M 520 232 Q 580 310 598 318" fill="none" stroke="#00F0C8" strokeWidth="2" strokeOpacity="0.55" markerEnd="url(#arrowFmOut)" />

              {/* Agents → sub-agents */}
              <path d="M 718 188 L 752 130" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />
              <path d="M 718 200 L 752 200" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />
              <path d="M 718 212 L 752 270" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />

              {/* MCP → models */}
              <path d="M 698 318 L 752 300" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />
              <path d="M 698 330 L 752 330" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />
              <path d="M 698 342 L 752 360" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeOpacity="0.45" markerEnd="url(#arrowFmOut)" />

              {/* --- Left: Banks --- */}
              <rect x="18" y="22" width="72" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="54" y="40" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Barclays</text>
              <rect x="96" y="22" width="58" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="125" y="40" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">HSBC</text>
              <rect x="162" y="22" width="56" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="190" y="40" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Revolut</text>
              <text x="118" y="18" textAnchor="middle" fill="#555577" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>

              <rect x="20" y="54" width="198" height="40" rx="10" fill="rgba(0,212,255,0.08)" stroke="#00D4FF55" />
              <text x="119" y="80" textAnchor="middle" fill="#E0E0E0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">BANKS (OpenBanking)</text>

              {/* --- Email --- */}
              <rect x="18" y="132" width="78" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="57" y="150" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Outlook</text>
              <rect x="104" y="132" width="62" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="135" y="150" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Gmail</text>
              <text x="118" y="128" textAnchor="middle" fill="#555577" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>

              <rect x="20" y="164" width="198" height="40" rx="10" fill="rgba(0,212,255,0.06)" stroke="#1A1A35" />
              <text x="119" y="190" textAnchor="middle" fill="#E0E0E0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">EMAIL PROVIDERS</text>

              {/* --- Accounting --- */}
              <rect x="18" y="262" width="52" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="44" y="280" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Xero</text>
              <rect x="76" y="262" width="50" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="101" y="280" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Sage</text>
              <rect x="132" y="262" width="86" height="26" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="175" y="280" textAnchor="middle" fill="#B0B0CC" fontSize="9" fontFamily="system-ui, sans-serif">QuickBooks</text>
              <text x="118" y="258" textAnchor="middle" fill="#555577" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>

              <rect x="20" y="294" width="198" height="40" rx="10" fill="rgba(0,212,255,0.06)" stroke="#1A1A35" />
              <text x="119" y="320" textAnchor="middle" fill="#E0E0E0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ACCOUNTING SOFTWARE</text>

              {/* --- Center: FM --- */}
              <rect x="400" y="155" width="120" height="130" rx="16" fill="url(#fmHubGrad)" stroke="#00D4FF" strokeWidth="2" />
              <text x="460" y="228" textAnchor="middle" fill="#00D4FF" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">FM</text>

              {/* --- Right: Insights --- */}
              <rect x="598" y="34" width="132" height="36" rx="10" fill="#0E0E20" stroke="#1A1A35" />
              <text x="664" y="58" textAnchor="middle" fill="#E0E0E0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Insights</text>

              {/* --- Agents --- */}
              <rect x="598" y="170" width="120" height="40" rx="10" fill="rgba(0,240,200,0.08)" stroke="#00F0C855" />
              <text x="658" y="196" textAnchor="middle" fill="#00F0C8" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Agents</text>

              <rect x="752" y="112" width="148" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="826" y="133" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Executer</text>
              <rect x="752" y="182" width="148" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="826" y="203" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Debt Manager</text>
              <rect x="752" y="252" width="148" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="826" y="273" textAnchor="middle" fill="#8A8AAA" fontSize="10" fontFamily="system-ui, sans-serif">etc.</text>

              {/* --- MCP --- */}
              <rect x="598" y="300" width="100" height="40" rx="10" fill="rgba(0,212,255,0.08)" stroke="#00D4FF44" />
              <text x="648" y="326" textAnchor="middle" fill="#00D4FF" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">MCP</text>

              <rect x="752" y="284" width="88" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="796" y="305" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Claude</text>
              <rect x="752" y="322" width="88" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="796" y="343" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">OpenAI</text>
              <rect x="752" y="360" width="88" height="32" rx="8" fill="#0E0E20" stroke="#1A1A35" />
              <text x="796" y="381" textAnchor="middle" fill="#B0B0CC" fontSize="10" fontFamily="system-ui, sans-serif">Gemini</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
