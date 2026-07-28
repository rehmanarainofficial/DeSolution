import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheckCircle, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

const values = [
  { icon: FiAward, title: 'Quality First', desc: 'We never compromise on the quality of our solutions and services.' },
  { icon: FiUsers, title: 'Client-Centric', desc: 'Your growth and success is our primary mission and motivation.' },
  { icon: FiTrendingUp, title: 'Continuous Growth', desc: 'We continuously improve through technology enhancements and feedback.' },
]

const highlights = [
  'Founded in 2018 with 10+ years of domain expertise',
  'Specialized in ERP, CRM, web and mobile applications',
  'Digital marketing and social media solutions',
  'Successfully serving small and medium enterprises',
  'Hundreds of successful implementations nationwide',
  'ISO-compliant processes and quality standards',
]

function useAnimation() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true, rootMargin: '0px 0px -50px 0px' })
  return { ref, inView }
}

export default function About() {
  const { ref, inView } = useAnimation()

  return (
    <section id="about" className="section-padding bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface-2 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-sm font-medium mb-4">
            About DE Solutions
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Powering Business <span className="gradient-text">Since 2018</span>
          </h2>
          <p className="text-subtle text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            We help new startups and established businesses in their successful journey by building strong controls over business processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-muted text-base leading-relaxed mb-6">
              DE Solutions was founded by a group of consultants with deep experience in software development, implementation, project management, training, maintenance, and support services. Our primary mission is to automate small and medium businesses with a wide range of enterprise applications.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              We make business automation possible with our diverse industry experience, research, and smart use of innovative technologies — ranging from ERP systems, web and mobile applications, to social media and digital marketing.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle size={18} className="text-brand mt-0.5 flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-brand text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:bg-brand-light transition-all"
            >
              Contact Us Today
            </motion.button>
          </motion.div>

          {/* Right: Visual cards */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden bg-brand p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
              <div className="relative">
                <div className="text-5xl font-display font-bold mb-2">10+</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">Years of Combined Experience</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our founding team brings over a decade of hands-on expertise in enterprise software development and business consulting.
                </p>
              </div>
            </div>

            {/* Value cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-brand" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-foreground mb-1">{title}</h4>
                  <p className="text-subtle text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
