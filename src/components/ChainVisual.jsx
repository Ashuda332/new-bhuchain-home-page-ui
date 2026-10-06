import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CubeIcon } from './Icons'

const HEX = '0123456789abcdef'

function randomHash(len = 10) {
  let s = ''
  for (let i = 0; i < len; i++) s += HEX[Math.floor(Math.random() * 16)]
  return s
}

function makeBlock(height) {
  return {
    height,
    hash: `0x${randomHash(6)}…${randomHash(4)}`,
    txns: 40 + Math.floor(Math.random() * 180),
  }
}

const START_HEIGHT = 1_284_903

export default function ChainVisual() {
  const reduce = useReducedMotion()
  const [blocks, setBlocks] = useState(() => [
    makeBlock(START_HEIGHT + 2),
    makeBlock(START_HEIGHT + 1),
    makeBlock(START_HEIGHT),
  ])

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => {
      setBlocks((prev) => [makeBlock(prev[0].height + 1), ...prev.slice(0, 2)])
    }, 3200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="chain" aria-label="Live block feed illustration" role="img">
      <motion.div
        className="chain__ring"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />
      <motion.div
        className="chain__ring chain__ring--inner"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      <div className="chain__stack">
        <AnimatePresence mode="popLayout" initial={false}>
          {blocks.map((b, i) => (
            <motion.div
              key={b.height}
              layout
              className={`block ${i === 0 ? 'block--new' : ''}`}
              initial={{ opacity: 0, y: -40, scale: 0.85, rotateX: 40 }}
              animate={{ opacity: 1 - i * 0.22, y: 0, scale: 1 - i * 0.04, rotateX: 0 }}
              exit={{ opacity: 0, y: 30, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            >
              <div className="block__icon">
                <CubeIcon size={22} />
              </div>
              <div className="block__body">
                <div className="block__row">
                  <span className="block__label">Block</span>
                  <span className="block__height">#{b.height.toLocaleString('en-IN')}</span>
                </div>
                <div className="block__hash">{b.hash}</div>
                <div className="block__meta">
                  <span>{b.txns} txns</span>
                  <span className="block__status">
                    <span className="dot" /> Verified
                  </span>
                </div>
              </div>
              {i < blocks.length - 1 && (
                <span className="block__link" aria-hidden="true">
                  <motion.span
                    className="block__pulse"
                    animate={reduce ? undefined : { y: [0, 28], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  />
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
