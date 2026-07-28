import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiOutlineChip, HiOutlineCode, HiOutlineDeviceMobile,
  HiOutlineCloud, HiOutlineCog, HiOutlineSpeakerphone
} from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: HiOutlineChip,
    title: 'Enterprise Resource Planning',
    desc: 'A ready-made, off-the-shelf ERP solution available on cloud. Designed for small and medium businesses with a focus on user-friendliness and modern accounting.',
    features: ['Sales & Accounts Receivable', 'Inventory Management', 'General Ledger', 'Manufacturing Module'],
    color: 'from-blue-500/10 to-blue-600/5',
    accent: '#007DC1',
  },
  {
    icon: HiOutlineCode,
    title: 'Custom Software Development',
    desc: 'Tailored solutions for unique business processes that readymade software cannot address. Domain experts analyze, plan, develop, and deliver with thorough QA.',
    features: ['Custom ERP Modules', 'CRM Systems', 'Business Process Automation', 'API Integrations'],
    color: 'from-cyan-500/10 to-cyan-600/5',
    accent: '#0891b2',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'Mobile App Development',
    desc: 'Intuitive and high-performance mobile applications for iOS and Android platforms, enabling your team and customers to stay connected anywhere.',
    features: ['iOS & Android Apps', 'React Native', 'Cross-Platform Solutions', 'UI/UX Design'],
    color: 'from-sky-500/10 to-sky-600/5',
    accent: '#0284c7',
  },
  {
    icon: HiOutlineCloud,
    title: 'Cloud Solutions',
    desc: 'Deploy your business applications on the cloud for enhanced scalability, reliability, and accessibility. Reduce infrastructure costs significantly.',
    features: ['Cloud Migration', 'SaaS Development', 'Cloud Hosting', 'Data Backup & Recovery'],
    color: 'from-blue-400/10 to-blue-500/5',
    accent: '#007DC1',
  },
  {
    icon: HiOutlineCog,
    title: 'System Integration',
    desc: 'Seamlessly connect your existing systems and third-party tools through robust API integrations to create a unified and efficient business ecosystem.',
    features: ['API Development', 'Third-party Integrations', 'Data Migration', 'Legacy System Modernization'],
    color: 'from-slate-500/10 to-slate-600/5',
    accent: '#475569',
  },
  {
    icon: HiOutlineSpeakerphone,
    title: 'Digital Marketing',
    desc: 'Grow your online presence with our comprehensive digital marketing services including social media management, SEO, and targeted advertising campaigns.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Performance Analytics'],
    color: 'from-blue-500/10 to-blue-600/5',
    accent: '#007DC1',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true, rootMargin: '0px 0px -50px 0px' })

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-surface-2 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Comprehensive <span className="gradient-text">Software Services</span>
          </h2>
          <p className="text-subtle text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Quality, commitment, and compliance with professional standards are primary goals. We deliver solutions that contribute to your growth and increased market share.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,125,193,0.12)' }}
                className="group relative bg-white rounded-2xl p-7 border border-border hover:border-brand/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-brand/0 group-hover:border-brand/20 transition-all duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 group-hover:bg-brand/10 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={26} className="text-brand" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-brand transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed mb-5">{service.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
