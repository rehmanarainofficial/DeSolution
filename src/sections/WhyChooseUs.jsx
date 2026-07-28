import { motion } from 'framer-motion'
import {
  HiOutlineClock, HiOutlineSupport, HiOutlineShieldCheck,
  HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineStar
} from 'react-icons/hi'

const reasons = [
  {
    icon: HiOutlineLightBulb,
    title: 'Deep Domain Expertise',
    desc: 'Our founding team brings over 10 years of hands-on experience in enterprise software development and business consulting.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Proven Track Record',
    desc: 'Hundreds of successful implementations nationwide across retail, manufacturing, logistics, healthcare, and education.',
  },
  {
    icon: HiOutlineClock,
    title: 'On-Time Project Delivery',
    desc: 'Agile development methodologies and clear project management keep implementations on schedule and within budget.',
  },
  {
    icon: HiOutlineSupport,
    title: '24/7 Ongoing Support',
    desc: 'Our dedicated customer success and technical support team is always available to ensure uninterrupted operations.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Dedicated Engineering Team',
    desc: 'You get direct access to experienced developers, solution architects, and consultants dedicated to your project.',
  },
  {
    icon: HiOutlineStar,
    title: 'SME-Friendly Pricing',
    desc: 'Enterprise-grade software capabilities at cost-effective, transparent pricing tailored to growing businesses.',
  },
]

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="why-choose-us" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-surface-2/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-6">
              Why DE Solutions
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-6 leading-tight">
              The Partner You Can <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-subtle text-base sm:text-lg leading-relaxed mb-8">
              We empower startups and established enterprises by installing robust controls over core processes. We prioritize client satisfaction, continuous system enhancement, and long-term partnership.
            </p>

            {/* Responsive Stat Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 text-center p-4 rounded-2xl bg-surface border border-border">
              {[
                { num: '200+', label: 'Businesses' },
                { num: '98%', label: 'Satisfaction' },
                { num: '8+', label: 'Years Exp.' },
              ].map(({ num, label }) => (
                <div key={label} className="p-2">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-brand">{num}</div>
                  <div className="text-subtle text-xs sm:text-sm font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-brand-light transition-all cursor-pointer text-center"
            >
              Start Your Project
            </button>
          </motion.div>

          {/* Right Column: Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-surface rounded-xl p-5 border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 group-hover:bg-brand group-hover:text-white text-brand flex items-center justify-center mb-3 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-1.5">{title}</h3>
                  <p className="text-subtle text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
