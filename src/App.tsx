import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Founders from './sections/Founders'
import Advisors from './sections/Advisors'
import Minions from './sections/Minions'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Waitlist from './sections/Waitlist'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
    }
  }, [])

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Founders />
      <Advisors />
      <Minions />
      <Features />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  )
}

export default App
