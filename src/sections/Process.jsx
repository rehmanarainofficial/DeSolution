import { motion } from 'framer-motion'
import {
  HiOutlineSearch, HiOutlineLightBulb, HiOutlineCode,
  HiOutlineBeaker, HiOutlineCheckCircle, HiOutlineSupport
} from 'react-icons/hi'

const steps = [
  {
    step: '01',
    icon: HiOutlineSearch,
    title: 'Discovery & Analysis',
    desc: 'We thoroughly evaluate your business requirements with domain experts to identify core operational challenges and workflows.',
  },
  {
    step: '02',
    icon: HiOutlineLightBulb,
    title: 'Solution Design',
    desc: 'A comprehensive solution blueprint is designed, outlining system architecture, module mappings, and timeline milestones.',
  },
  {
    step: '03',
    icon: HiOutlineCode,
    title: 'Development & Build',
    desc: 'Our engineering team builds your ERP modules or custom applications using clean, scalable, and maintainable code standard.',
  },
  {
    step: '04',
    icon: HiOutlineBeaker,
    title: 'Testing & Quality Assurance',
    desc: 'Comprehensive end-to-end testing, user acceptance testing, and data validation ensure reliable performance before launch.',
  },
  {
    step: '05',
    icon: HiOutlineCheckCircle,
    title: 'Deployment & Training',
    desc: 'We deploy the system smoothly and deliver hands-on staff training to ensure rapid adoption and zero downtime.',
  },
  {
    step: '06',
    icon: HiOutlineSupport,
    title: 'Support & Evolution',
    desc: 'Dedicated ongoing support, system updates, and continuous maintenance ensure your ERP scales alongside your growth.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Our Methodology
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            How We <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            A proven six-step methodology that guarantees on-time delivery, quality assurance, and seamless business integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map(({ step, icon: Icon, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative group flex flex-col justify-between h-full bg-white rounded-2xl p-6 sm:p-7 border border-border hover:border-brand/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <span className="font-display font-black text-2xl text-brand/30 group-hover:text-brand transition-colors">
                    {step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-brand transition-colors">
                  {title}
                </h3>
                <p className="text-subtle text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
