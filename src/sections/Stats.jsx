import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CountUp } from 'countup.js'
import { HiOutlineCode, HiOutlineUsers, HiOutlineGlobe, HiOutlineClock } from 'react-icons/hi'

const stats = [
  { icon: HiOutlineCode, value: 500, suffix: '+', label: 'Projects Completed', desc: 'Across ERP, web, and mobile' },
  { icon: HiOutlineUsers, value: 200, suffix: '+', label: 'Happy Clients', desc: 'SME to enterprise level' },
  { icon: HiOutlineGlobe, value: 8, suffix: '+', label: 'Industries Served', desc: 'From retail to manufacturing' },
  { icon: HiOutlineClock, value: 99, suffix: '%', label: 'Client Retention', desc: 'Long-term partnership focus' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [val, setVal] = useState(value)
  const countUpRef = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    countUpRef.current = new CountUp(ref.current, value, {
      duration: 2.5,
      suffix,
      useEasing: true,
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && countUpRef.current) {
          countUpRef.current.start()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, suffix])

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white">
      {val}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 sm:py-20 bg-brand overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                <Icon size={24} />
              </div>

              <div className="flex items-center justify-center gap-0.5 mb-2">
                <Counter value={value} suffix={suffix} />
              </div>

              <div className="font-display font-semibold text-white text-base sm:text-lg mb-1">{label}</div>
              <div className="text-white/70 text-xs sm:text-sm">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
