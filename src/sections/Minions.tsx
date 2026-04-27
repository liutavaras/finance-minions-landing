import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MINIONS = [
  { name: 'Invoice Minion', image: '/minion-invoice.png', inputs: 'Invoices, bank feed, vendor history', outputs: 'Auto-pay, reconciliation alerts', tasks: 'Auto-pay invoices on schedule, detect duplicates, alert on reconciliation, generate supplier payment forecast.', gradient: 'linear-gradient(135deg, rgba(0,180,216,0.06), rgba(0,180,216,0.01))', borderColor: 'rgba(0,180,216,0.1)' },
  { name: 'Tax Minion', image: '/minion-tax.png', inputs: 'Expense data, income streams, tax rules', outputs: 'Tax estimate, compliance checklist', tasks: 'Estimate VAT/corporate tax, track deadlines, generate compliance checklist, submit reminders.', gradient: 'linear-gradient(135deg, rgba(157,78,221,0.06), rgba(157,78,221,0.01))', borderColor: 'rgba(157,78,221,0.1)' },
  { name: 'Advisor Minion', image: '/minion-advisor.png', inputs: 'All data from other Minions', outputs: 'Suggestions, report summaries', tasks: 'Synthesise reports, compare performance to industry benchmarks, suggest cost savings and smarter money moves.', gradient: 'linear-gradient(135deg, rgba(67,97,238,0.06), rgba(67,97,238,0.01))', borderColor: 'rgba(67,97,238,0.1)' },
]

const CHAT_STEPS = [
  { label: 'Describe the job', desc: 'Tell the portal what you want in plain English.' },
  { label: 'Map data + permissions', desc: 'Select connected accounts, apps, and approval rules.' },
  { label: 'Deploy and monitor', desc: 'Launch instantly, then tune using live feedback and audit logs.' },
]

export default function Minions() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.minions-heading', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } })
      gsap.utils.toArray<HTMLElement>('.minion-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 40, duration: 0.6, delay: i * 0.1, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
      gsap.utils.toArray<HTMLElement>('.chat-step').forEach((block, i) => {
        gsap.from(block, { opacity: 0, scale: 0.92, duration: 0.5, delay: i * 0.1, scrollTrigger: { trigger: '.chat-builder', start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
      gsap.from('.arch-diagram', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.arch-diagram', start: 'top 85%', toggleActions: 'play none none reverse' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="minions" style={{ padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)', background: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="minions-heading" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span className="label-mono" style={{ color: '#00b4d8' }}>AI Agents</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, margin: '16px 0 16px 0', lineHeight: 1.15, color: '#0a1628', letterSpacing: '-1.5px' }}>
            Your personal finance army.
          </h2>
          <p style={{ color: '#8896a4', maxWidth: '640px', margin: '0 auto', fontSize: '17px', lineHeight: 1.6 }}>
            Start with out-of-the-box business agents and then configure custom financial agents and workflows simply by talking to the portal.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(0,180,216,0.03)', border: '1px solid rgba(0,180,216,0.08)', borderRadius: '20px', padding: '24px' }}>
            <div className="label-mono" style={{ color: '#00b4d8', fontSize: '11px', marginBottom: '8px' }}>Out-of-the-box for business</div>
            <p style={{ margin: 0, color: '#8896a4', fontSize: '14px', lineHeight: 1.6 }}>
              Deploy prebuilt Minions for invoicing, tax, and financial guidance from day one. They include proven defaults, controls, and review checkpoints.
            </p>
          </div>
          <div style={{ background: 'rgba(82,183,136,0.03)', border: '1px solid rgba(82,183,136,0.08)', borderRadius: '20px', padding: '24px' }}>
            <div className="label-mono" style={{ color: '#52b788', fontSize: '11px', marginBottom: '8px' }}>Configure-your-own mode</div>
            <p style={{ margin: 0, color: '#8896a4', fontSize: '14px', lineHeight: 1.6 }}>
              Ask for the workflow you want in plain language and the portal assembles an agent with the right triggers, actions, permissions, and approval gates.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {MINIONS.map((m) => (
            <div key={m.name} className="minion-card" style={{ background: '#fafbfc', border: `1px solid ${m.borderColor}`, borderRadius: '24px', padding: '28px', transition: 'transform 0.3s, box-shadow 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 24, 69, 0.04)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <img src={m.image} alt={m.name} style={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover', background: m.gradient, padding: '4px' }} />
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#0a1628' }}>{m.name}</h3>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '10px', marginBottom: '4px' }}>Inputs</div>
                <div style={{ fontSize: '13px', color: '#8896a4' }}>{m.inputs}</div>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '10px', marginBottom: '4px' }}>Outputs</div>
                <div style={{ fontSize: '13px', color: '#8896a4' }}>{m.outputs}</div>
              </div>
              <div>
                <div className="label-mono" style={{ color: '#00b4d8', fontSize: '10px', marginBottom: '4px' }}>What it does</div>
                <p style={{ fontSize: '14px', color: '#8896a4', lineHeight: 1.6, margin: 0 }}>{m.tasks}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat builder — centered steps */}
        <div className="chat-builder" style={{ background: '#fafbfc', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 48px)', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 12px 0', color: '#0a1628' }}>
            Build custom agents by chatting with the portal
          </h3>
          <p style={{ fontSize: '14px', color: '#8896a4', textAlign: 'center', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Example: "If VAT liability rises above threshold, move funds to reserve, pause non-critical spend, and send me a Monday summary."
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {CHAT_STEPS.map((b, i) => (
              <div key={b.label} className="chat-step" style={{ flex: '1 1 200px', maxWidth: '260px', background: '#fff', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '16px', padding: '20px' }}>
                <div className="label-mono" style={{ color: '#b0bcc8', fontSize: '10px', marginBottom: '6px' }}>Step {i + 1}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0a1628', marginBottom: '6px' }}>{b.label}</div>
                <div style={{ fontSize: '13px', color: '#8896a4', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13px', color: '#b0bcc8', textAlign: 'center', marginTop: '20px', lineHeight: 1.5 }}>
            Every custom agent runs with transparent reasoning, human approvals where needed, and a full audit trail.
          </p>
        </div>

        {/* Architecture diagram — moved from Features */}
        <div className="arch-diagram" style={{ background: '#fafbfc', border: '1px solid rgba(0, 24, 69, 0.04)', borderRadius: '24px', padding: 'clamp(20px, 3vw, 36px)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 8px 0', color: '#0a1628' }}>How it all connects</h3>
          <p style={{ textAlign: 'center', color: '#8896a4', fontSize: '14px', margin: '0 0 20px 0', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            Banks, email, and accounting feed Open Banking and integrations into FM — then insights, agents, and MCP links to frontier models.
          </p>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <svg viewBox="0 0 920 400" role="img" aria-label="Architecture diagram" style={{ display: 'block', minWidth: '720px', width: '100%', maxWidth: '920px', margin: '0 auto', height: 'auto' }}>
              <defs>
                <linearGradient id="fmHubGradLight2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f5f7fa" /><stop offset="100%" stopColor="#fff" /></linearGradient>
                <marker id="arrowFmInLight2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#00b4d8" /></marker>
                <marker id="arrowFmOutLight2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#52b788" /></marker>
              </defs>
              <path d="M 218 58 Q 320 58 400 168" fill="none" stroke="#00b4d8" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmInLight2)" />
              <path d="M 218 188 Q 320 188 400 200" fill="none" stroke="#00b4d8" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmInLight2)" />
              <path d="M 218 318 Q 320 318 400 232" fill="none" stroke="#00b4d8" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmInLight2)" />
              <path d="M 520 168 Q 560 60 598 52" fill="none" stroke="#52b788" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 520 200 Q 580 200 598 188" fill="none" stroke="#52b788" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 520 232 Q 580 310 598 318" fill="none" stroke="#52b788" strokeWidth="2" strokeOpacity="0.25" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 718 188 L 752 130" fill="none" stroke="#52b788" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 718 200 L 752 200" fill="none" stroke="#52b788" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 718 212 L 752 270" fill="none" stroke="#52b788" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmOutLight2)" />
              <path d="M 698 318 L 752 300" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmInLight2)" />
              <path d="M 698 330 L 752 330" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmInLight2)" />
              <path d="M 698 342 L 752 360" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeOpacity="0.2" markerEnd="url(#arrowFmInLight2)" />
              <rect x="18" y="22" width="72" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="54" y="40" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Barclays</text>
              <rect x="96" y="22" width="58" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="125" y="40" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">HSBC</text>
              <rect x="162" y="22" width="56" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="190" y="40" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Revolut</text>
              <text x="118" y="18" textAnchor="middle" fill="#b0bcc8" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>
              <rect x="20" y="54" width="198" height="40" rx="10" fill="rgba(0,180,216,0.04)" stroke="rgba(0,180,216,0.12)" />
              <text x="119" y="80" textAnchor="middle" fill="#0a1628" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">BANKS (OpenBanking)</text>
              <rect x="18" y="132" width="78" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="57" y="150" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Outlook</text>
              <rect x="104" y="132" width="62" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="135" y="150" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Gmail</text>
              <text x="118" y="128" textAnchor="middle" fill="#b0bcc8" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>
              <rect x="20" y="164" width="198" height="40" rx="10" fill="rgba(10,22,40,0.02)" stroke="#e8ecef" />
              <text x="119" y="190" textAnchor="middle" fill="#0a1628" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">EMAIL PROVIDERS</text>
              <rect x="18" y="262" width="52" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="44" y="280" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Xero</text>
              <rect x="76" y="262" width="50" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="101" y="280" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Sage</text>
              <rect x="132" y="262" width="86" height="26" rx="8" fill="#fff" stroke="#e8ecef" /><text x="175" y="280" textAnchor="middle" fill="#8896a4" fontSize="9" fontFamily="system-ui, sans-serif">QuickBooks</text>
              <text x="118" y="258" textAnchor="middle" fill="#b0bcc8" fontSize="8" fontFamily="'Space Mono', monospace">etc.</text>
              <rect x="20" y="294" width="198" height="40" rx="10" fill="rgba(10,22,40,0.02)" stroke="#e8ecef" />
              <text x="119" y="320" textAnchor="middle" fill="#0a1628" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ACCOUNTING SOFTWARE</text>
              <rect x="400" y="155" width="120" height="130" rx="16" fill="url(#fmHubGradLight2)" stroke="#00b4d8" strokeWidth="2" />
              <text x="460" y="228" textAnchor="middle" fill="#00b4d8" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">FM</text>
              <rect x="598" y="34" width="132" height="36" rx="10" fill="#fff" stroke="#e8ecef" />
              <text x="664" y="58" textAnchor="middle" fill="#0a1628" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Insights</text>
              <rect x="598" y="170" width="120" height="40" rx="10" fill="rgba(82,183,136,0.04)" stroke="rgba(82,183,136,0.2)" />
              <text x="658" y="196" textAnchor="middle" fill="#52b788" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Agents</text>
              <rect x="752" y="112" width="148" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="826" y="133" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Invoice Executer</text>
              <rect x="752" y="182" width="148" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="826" y="203" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Debt Manager</text>
              <rect x="752" y="252" width="148" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="826" y="273" textAnchor="middle" fill="#b0bcc8" fontSize="10" fontFamily="system-ui, sans-serif">etc.</text>
              <rect x="598" y="300" width="100" height="40" rx="10" fill="rgba(0,180,216,0.04)" stroke="rgba(0,180,216,0.15)" />
              <text x="648" y="326" textAnchor="middle" fill="#00b4d8" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">MCP</text>
              <rect x="752" y="284" width="88" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="796" y="305" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Claude</text>
              <rect x="752" y="322" width="88" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="796" y="343" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">OpenAI</text>
              <rect x="752" y="360" width="88" height="32" rx="8" fill="#fff" stroke="#e8ecef" /><text x="796" y="381" textAnchor="middle" fill="#8896a4" fontSize="10" fontFamily="system-ui, sans-serif">Gemini</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
