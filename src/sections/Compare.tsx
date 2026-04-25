const COMPETITORS = [
  { name: 'Traditional accounting software', approach: 'Spreadsheet + manual entry', flexibility: 'Users do the work', speed: 'Slow', cost: 'GBP30-100/mo + your time' },
  { name: 'Robotic Process Automation (RPA)', approach: 'Hardcoded bots for specific tasks', flexibility: 'Inflexible, breaks when UI changes', speed: 'Fast but fragile', cost: 'GBP5K-20K setup per bot' },
  { name: 'Generic AI assistants (ChatGPT, etc.)', approach: 'Broad advice, no integrations', flexibility: 'Noisy, not task-specific', speed: 'Fast but unreliable', cost: 'GBP20/mo - advice only' },
  { name: 'Finance Minions', approach: 'Agent architecture with financial awareness', flexibility: 'Purpose-built, task-specific, auditable', speed: 'Handles real workflows end-to-end', cost: 'Affordable, subscription-based' },
]

export default function Compare() {
  return (
    <section id="compare" style={{ padding: 'clamp(48px, 7vw, 90px) clamp(20px, 5vw, 80px)', background: '#050510' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #0A0A1E, #0E0E28)', border: '1px solid #1A1A35', borderRadius: '20px', padding: 'clamp(24px, 3vw, 40px)', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', margin: '0 0 28px 0' }}>How we compare</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #1A1A35', fontWeight: 400 }}>Solution</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #1A1A35', fontWeight: 400 }}>Approach</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #1A1A35', fontWeight: 400 }}>Flexibility</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #1A1A35', fontWeight: 400 }}>Speed</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#555577', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #1A1A35', fontWeight: 400 }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr key={c.name} style={{ background: i === 3 ? 'rgba(0,212,255,0.04)' : 'transparent' }}>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #1A1A35', fontWeight: i === 3 ? 700 : 500, color: i === 3 ? '#00D4FF' : '#E0E0E0' }}>{c.name}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #1A1A35', color: '#8A8AAA' }}>{c.approach}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #1A1A35', color: '#8A8AAA' }}>{c.flexibility}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #1A1A35', color: '#8A8AAA' }}>{c.speed}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid #1A1A35', color: '#8A8AAA', fontWeight: i === 3 ? 600 : 400 }}>{c.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
