import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { CubeIcon } from './Icons'

const HEX = '0123456789abcdef'
const hash = (n) => Array.from({ length: n }, () => HEX[Math.floor(Math.random() * 16)]).join('')

const BLOCKS = Array.from({ length: 10 }, (_, i) => ({
  height: 1_284_890 + i,
  hash: `0x${hash(6)}…${hash(4)}`,
  txns: 40 + Math.floor(Math.random() * 180),
  age: `${(10 - i) * 3}s ago`,
}))

function BlockCard({ b }) {
  return (
    <div className="ticker__card">
      <span className="ticker__icon">
        <CubeIcon size={18} />
      </span>
      <div>
        <div className="ticker__height">#{b.height.toLocaleString('en-IN')}</div>
        <div className="ticker__hash">{b.hash}</div>
      </div>
      <div className="ticker__meta">
        <span>{b.txns} txns</span>
        <span>{b.age}</span>
      </div>
    </div>
  )
}

export default function LiveBlocks() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="section" id="blocks">
      <div className="container">
        <SectionHeading
          eyebrow="Live chain"
          title="New blocks, every few seconds"
          text="A constant stream of verified activity across the Bhuchain network."
        />
        <div className="ticker__controls">
          <button
            type="button"
            className="btn btn--ghost btn--sm"
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? 'Play feed' : 'Pause feed'}
          </button>
        </div>
      </div>

      <div className={`ticker ${paused ? 'ticker--paused' : ''}`}>
        <div className="ticker__track">
          <ul className="ticker__group" aria-label="Recent blocks">
            {BLOCKS.map((b) => (
              <li key={b.height}>
                <BlockCard b={b} />
              </li>
            ))}
          </ul>
          <ul className="ticker__group" aria-hidden="true">
            {BLOCKS.map((b) => (
              <li key={b.height}>
                <BlockCard b={b} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
