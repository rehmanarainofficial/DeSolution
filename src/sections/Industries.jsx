import { motion } from 'framer-motion'
import {
  HiOutlineShoppingBag, HiOutlineOfficeBuilding, HiOutlineTruck,
  HiOutlineAcademicCap, HiOutlineHeart, HiOutlineHome,
  HiOutlineBeaker, HiOutlineCurrencyDollar
} from 'react-icons/hi'

const industries = [
  { icon: HiOutlineShoppingBag, label: 'Retail & E-Commerce', desc: 'POS, inventory, and multi-store management.' },
  { icon: HiOutlineOfficeBuilding, label: 'Manufacturing', desc: 'BOM, work orders, and production planning.' },
  { icon: HiOutlineTruck, label: 'Distribution & Logistics', desc: 'Fleet, warehouse, and supply chain ops.' },
  { icon: HiOutlineAcademicCap, label: 'Education', desc: 'Student management, fees, and HR modules.' },
  { icon: HiOutlineHeart, label: 'Healthcare', desc: 'Patient records, billing, and pharmacy.' },
  { icon: HiOutlineHome, label: 'Real Estate', desc: 'Property management and sales tracking.' },
  { icon: HiOutlineBeaker, label: 'Pharmaceuticals', desc: 'Batch tracking, expiry, and compliance.' },
  { icon: HiOutlineCurrencyDollar, label: 'Financial Services', desc: 'Accounting, auditing, and reporting.' },
]

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Decorative background text - clipped safely */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[70px] sm:text-[140px] lg:text-[180px] font-display font-black text-surface opacity-80 tracking-tighter whitespace-nowrap">
          INDUSTRIES
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Tailored for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            Our deep domain expertise across vertical sectors allows us to deliver solutions customized to your operational needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {industries.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-border hover:border-brand/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-2 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-blue-500/25 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <Icon size={24} className="text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-2 group-hover:text-brand transition-colors">
                  {label}
                </h3>
                <p className="text-subtle text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
