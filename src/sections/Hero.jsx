import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiCheck } from 'react-icons/fi'
import { HiOutlineChip, HiOutlineCloud, HiOutlineDatabase } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiPostgresql, SiPython } from 'react-icons/si'
import { CountUp } from 'countup.js'

const floatingIcons = [
  { icon: SiReact, color: '#61DAFB', label: 'React', top: '15%', left: '4%', delay: 0 },
  { icon: SiNodedotjs, color: '#339933', label: 'Node.js', top: '60%', left: '3%', delay: 0.5 },
  { icon: SiPostgresql, color: '#336791', label: 'PostgreSQL', top: '15%', right: '4%', delay: 0.3 },
  { icon: SiPython, color: '#3776AB', label: 'Python', top: '65%', right: '3%', delay: 0.7 },
  { icon: HiOutlineCloud, color: '#007DC1', label: 'Cloud', top: '40%', left: '2%', delay: 1 },
  { icon: HiOutlineDatabase, color: '#007DC1', label: 'Database', top: '40%', right: '2%', delay: 0.2 },
]

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Team Members' },
]

function StatCounter({ value, suffix, label }) {
  const containerRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(value)
  const countUpRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    countUpRef.current = new CountUp(containerRef.current, value, {
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

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [value, suffix])

  return (
    <div className="text-center p-3 sm:p-4">
      <div className="flex items-center justify-center">
        <span ref={containerRef} className="font-display font-bold text-3xl sm:text-4xl text-brand">
          {displayValue}{suffix}
        </span>
      </div>
      <p className="text-subtle text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const blob2X = useTransform(springX, (v) => -v * 0.5)
  const blob2Y = useTransform(springY, (v) => -v * 0.5)

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set((clientX - left - width / 2) / 35)
    mouseY.set((clientY - top - height / 2) / 35)
  }

  const scrollToSection = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const navHeight = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      onMouseMove={handleMouseMove}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Background gradient blobs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-20 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-surface-2 rounded-full blur-3xl opacity-70 animate-blob pointer-events-none"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-20 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-surface-3 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000 pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, color, label, top, left, right, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
          style={{ top, left, right }}
          className="absolute hidden xl:block z-10"
        >
          <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
            <div className="glass rounded-2xl p-3 shadow-lg shadow-blue-500/10 border border-surface-3 hover:scale-110 transition-transform">
              <Icon size={24} color={color} />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Founded 2018 · Trusted by 200+ Businesses Nationwide
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.15] mb-6"
          >
            Automate &amp; Integrate <br />
            <span className="gradient-text">Your Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subtle text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Our products cover the full spectrum of enterprise requirements — from Cloud ERP to custom software, mobile apps, and business process automation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-brand text-white font-semibold rounded-xl shadow-xl shadow-blue-500/25 hover:bg-brand-light transition-all text-base animate-pulse-glow cursor-pointer"
            >
              Get Free Demo
              <FiArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-foreground font-semibold rounded-xl border-2 border-border hover:border-brand hover:text-brand transition-all text-base cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-surface-2 flex items-center justify-center">
                <FiPlay size={12} className="ml-0.5 text-brand" />
              </div>
              View Our Work
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 text-xs sm:text-sm text-subtle font-medium"
          >
            {['ISO-Compliant Standards', 'Cloud-Ready ERP', '24/7 Dedicated Support', 'Free Implementation Demo'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 bg-surface-2/60 px-3 py-1.5 rounded-lg border border-surface-3">
                <FiCheck size={16} className="text-brand shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-2xl glass border border-border shadow-xl shadow-blue-500/5"
          >
            {stats.map(({ value, suffix, label }) => (
              <StatCounter key={label} value={value} suffix={suffix} label={label} />
            ))}
          </motion.div>
        </div>

        {/* Hero Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-16 sm:mt-20 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-blue-500/10 bg-surface">
            {/* Browser top chrome */}
            <div className="bg-surface border-b border-border flex items-center gap-2 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 mx-4 px-4 py-1 rounded-lg bg-white border border-border text-xs text-subtle text-center font-mono truncate">
                https://app.de2solutions.com/dashboard
              </div>
            </div>

            {/* Mockup Dashboard Content */}
            <div className="p-4 sm:p-6 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {[
                  { label: 'Total Revenue', value: 'PKR 2.4M', change: '+12%', color: 'text-emerald-600' },
                  { label: 'Active Orders', value: '847', change: '+5%', color: 'text-emerald-600' },
                  { label: 'Inventory Items', value: '3,291', change: '+2%', color: 'text-emerald-600' },
                  { label: 'Suppliers', value: '156', change: '-1%', color: 'text-rose-500' },
                ].map(({ label, value, change, color }) => (
                  <div key={label} className="bg-surface rounded-xl p-3 sm:p-4 border border-border">
                    <p className="text-subtle text-xs mb-1 font-medium">{label}</p>
                    <p className="font-display font-bold text-base sm:text-xl text-foreground">{value}</p>
                    <p className={`text-xs font-semibold ${color} mt-1`}>{change} this month</p>
                  </div>
                ))}
              </div>

              {/* Chart simulation */}
              <div className="bg-surface rounded-xl p-4 border border-border h-36 flex items-end justify-center">
                <div className="flex items-end gap-1.5 sm:gap-3 h-24 w-full px-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 65].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-md bg-brand/20 relative"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.7 + i * 0.04, duration: 0.4 }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 bg-brand rounded-t-md" style={{ height: '35%' }} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI Widget Cards (Desktop) */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 top-1/3 hidden lg:block z-20"
          >
            <div className="glass rounded-xl p-3.5 shadow-xl border border-surface-3 w-48">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <FiCheck size={13} className="text-emerald-600" />
                </div>
                <span className="text-xs font-bold text-foreground">Invoice Auto-Synced</span>
              </div>
              <p className="text-subtle text-[11px]">PKR 145,000 · Net 30</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 top-1/4 hidden lg:block z-20"
          >
            <div className="glass rounded-xl p-3.5 shadow-xl border border-surface-3 w-48">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-lg bg-brand/10 flex items-center justify-center">
                  <HiOutlineChip size={14} className="text-brand" />
                </div>
                <span className="text-xs font-bold text-foreground">ERP AI Insights</span>
              </div>
              <p className="text-subtle text-[11px]">Efficiency up 18% YoY</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
