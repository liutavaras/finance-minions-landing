import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MINIONS = [
  {
    name: 'Invoice Minion',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    inputs: 'Invoices, bank feed, vendor history',
    outputs: 'Auto-pay, reconciliation alerts',
    tasks: 'Auto-pay invoices on schedule, detect duplicates, alert on reconciliation, generate supplier payment forecast.',
  },
  {
    name: 'Expense Minion',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F0C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    inputs: 'Bank feed, receipts (via email), company card feed',
    outputs: 'Categorised expenses, tax-ready report',
    tasks: 'Auto-categorise expenses, enforce policy rules, flag outliers, produce VAT/Tax-ready breakdowns.',
  },
  {
    name: 'Tax Minion',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    inputs: 'Expense data, income streams, tax rules',
    outputs: 'Tax estimate, compliance checklist',
    tasks: 'Estimate VAT/corporate tax, track deadlines, generate compliance checklist, submit reminders.',
  },
  {
    name: 'Cashflow Minion',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    inputs: 'Bank balances, invoices, payroll schedule',
    outputs: 'Forecast, alerts, reserve strategy',
    tasks: 'Run 30/60/90-day cashflow forecast, alert when balance drops below thresholds, suggest reserve strategy.',
  },
  {
    name: 'Advisor Minion',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
    inputs: 'All data from other Minions',
    outputs: 'Suggestions, report summaries',
    tasks: 'Synthesise reports, compare performance to industry benchmarks, suggest cost savings and smarter money moves.',
  },
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
      gsap.utils.toArray<HTMLElement>('.minion-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 30, duration: 0.6, delay: i * 0.1, scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
      gsap.utils.toArray<HTMLElement>('.chat-step').forEach((block, i) => {
        gsap.from(block, { opacity: 0, scale: 0.9, duration: 0.4, delay: i * 0.06, scrollTrigger: { trigger: '.chat-builder', start: 'top 85%', toggleActions: 'play none none reverse' } })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="minions" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)', background: '#050510' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '2px' }}>Finance Minions</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 16px 0', lineHeight: 1.15 }}>Use ready-made agents or<br />build your own by chat</h2>
          <p style={{ color: '#8A8AAA', maxWidth: '760px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>Start with out-of-the-box business agents and then configure custom financial agents and workflows simply by talking to the portal.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '18px', marginBottom: '34px' }}>
          <div style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Out-of-the-box for business</div>
            <p style={{ margin: 0, color: '#B0B0CC', fontSize: '14px', lineHeight: 1.6 }}>
              Deploy prebuilt Minions for invoicing, expenses, tax, cashflow, and financial guidance from day one. They include proven defaults, controls, and review checkpoints.
            </p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #0A0A1E, #0E0E28)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#00F0C8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Configure-your-own mode</div>
            <p style={{ margin: 0, color: '#B0B0CC', fontSize: '14px', lineHeight: 1.6 }}>
              Ask for the workflow you want in plain language and the portal assembles an agent with the right triggers, actions, permissions, and approval gates.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px', marginBottom: '60px' }}>
          {MINIONS.map((m) => (
            <div key={m.name} className="minion-card" style={{ background: 'linear-gradient(135deg, #0E0E20, #121228)', border: '1px solid #1A1A35', borderRadius: '16px', padding: '28px', transition: 'border-color 0.3s, transform 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#00D4FF44'; e.currentTarget.style.transform = 'translateY(-4px)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1A1A35'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {m.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>{m.name}</h3>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Inputs</div>
                <div style={{ fontSize: '13px', color: '#8A8AAA' }}>{m.inputs}</div>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Outputs</div>
                <div style={{ fontSize: '13px', color: '#8A8AAA' }}>{m.outputs}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>What it does</div>
                <p style={{ fontSize: '14px', color: '#B0B0CC', lineHeight: 1.6, margin: 0 }}>{m.tasks}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-builder" style={{ background: 'linear-gradient(135deg, #0A0A1E, #0E0E28)', border: '1px solid #1A1A35', borderRadius: '20px', padding: 'clamp(28px, 4vw, 48px)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 12px 0' }}>Build custom agents by chatting with the portal</h3>
          <p style={{ fontSize: '13px', color: '#8A8AAA', textAlign: 'center', maxWidth: '760px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Example: "If VAT liability rises above threshold, move funds to reserve, pause non-critical spend, and send me a Monday summary."
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {CHAT_STEPS.map((b, i) => (
              <div key={b.label} className="chat-step" style={{ background: '#0E0E20', border: '1px solid #1A1A35', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Step {i + 1}</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#00D4FF', marginBottom: '6px' }}>{b.label}</div>
                <div style={{ fontSize: '12px', color: '#8A8AAA', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: '#555577', textAlign: 'center', marginTop: '20px', lineHeight: 1.5 }}>
            Every custom agent runs with transparent reasoning, human approvals where needed, and a full audit trail.
          </p>
        </div>
      </div>
    </section>
  )
}
