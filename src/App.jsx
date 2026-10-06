import { MotionConfig, motion, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import LiveBlocks from './components/LiveBlocks'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <LiveBlocks />
        <CallToAction />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
