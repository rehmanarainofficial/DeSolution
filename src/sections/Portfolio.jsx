import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const categories = ['All', 'ERP', 'Web App', 'Mobile', 'E-Commerce']

const projects = [
  {
    title: 'Dynamic ERP System',
    category: 'ERP',
    tag: 'Enterprise',
    desc: 'Complete cloud-based ERP solution with sales, inventory, accounting, and manufacturing modules for a nationwide manufacturing company.',
    color: 'from-blue-600 to-blue-800',
    metrics: ['50% faster reporting', '30% inventory reduction', '3x user productivity'],
  },
  {
    title: 'Retail Chain Management',
    category: 'ERP',
    tag: 'Retail',
    desc: 'Multi-branch retail management system with real-time POS, stock tracking, and centralized reporting across 12 store locations.',
    color: 'from-sky-500 to-blue-600',
    metrics: ['12 branches connected', 'Real-time sync', 'Mobile POS'],
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Web App',
    tag: 'Healthcare',
    desc: 'Comprehensive hospital management portal with patient records, appointment scheduling, billing, and pharmacy modules.',
    color: 'from-cyan-500 to-blue-600',
    metrics: ['10k+ patients', 'HIPAA compliant', '99.9% uptime'],
  },
  {
    title: 'Logistics Tracking App',
    category: 'Mobile',
    tag: 'Logistics',
    desc: 'React Native mobile application for real-time fleet tracking, delivery management, and driver communication for a logistics firm.',
    color: 'from-blue-600 to-indigo-700',
    metrics: ['200+ drivers', 'GPS tracking', 'iOS & Android'],
  },
  {
    title: 'B2B Marketplace Platform',
    category: 'E-Commerce',
    tag: 'B2B',
    desc: 'Enterprise B2B e-commerce platform with bulk ordering, custom pricing tiers, credit management, and supplier integration.',
    color: 'from-blue-500 to-cyan-600',
    metrics: ['500+ products', 'Custom pricing', 'Bulk orders'],
  },
  {
    title: 'School ERP System',
    category: 'ERP',
    tag: 'Education',
    desc: 'End-to-end school management system covering student enrollment, fee collection, timetable, and parent communication portal.',
    color: 'from-sky-500 to-blue-700',
    metrics: ['2000+ students', 'Fee automation', 'Parent app'],
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            A selection of our most impactful work across ERP implementations, web applications, and enterprise solutions.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-brand text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-muted border border-border hover:border-brand/30 hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid with layout animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-brand/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Card Header visual gradient */}
                  <div className={`relative h-44 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <div className="flex justify-between items-start z-10">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                        {project.tag}
                      </span>
                      <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl z-10 leading-snug">{project.title}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-subtle text-sm leading-relaxed mb-4">{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                      {project.metrics.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-surface-2 text-brand text-xs font-medium rounded-lg border border-surface-3">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => {
                      const contact = document.querySelector('#contact')
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all cursor-pointer"
                  >
                    Request Similar Solution
                    <FiArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
