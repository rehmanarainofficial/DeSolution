import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'

const faqs = [
  {
    q: 'What types of businesses do you serve?',
    a: 'We serve small and medium enterprises (SMEs) as well as larger corporate clients across Pakistan. Our ERP solutions and custom software have been successfully deployed in retail, manufacturing, healthcare, education, logistics, real estate, and financial services.',
  },
  {
    q: 'How long does an ERP implementation typically take?',
    a: 'Implementation timeline depends on company size and process complexity. A standard SME ERP setup typically takes 3–6 weeks. Customized enterprise solutions may take 2–4 months. We provide a guaranteed project schedule during discovery.',
  },
  {
    q: 'Do you offer cloud-based ERP solutions?',
    a: 'Yes, our Dynamic ERP is available as a secure cloud-based SaaS solution. You can access your financial ledgers, inventory, and sales data from any device, anywhere, anytime.',
  },
  {
    q: 'What kind of support do you provide after deployment?',
    a: 'We provide dedicated post-deployment support including full staff training, software updates, data backups, and technical maintenance. Support is available via hotline, email, and live remote assistance.',
  },
  {
    q: 'Can you customize the ERP to fit our specific workflows?',
    a: 'Absolutely. We specialize in tailoring ERP modules and creating custom workflow extensions to match your exact operational requirements.',
  },
  {
    q: 'How is data security and backup handled in your systems?',
    a: 'Security is paramount. We implement role-based access control, SSL/TLS data encryption, regular automated database backups, and strict audit trails.',
  },
  {
    q: 'Do you offer free product demonstrations?',
    a: 'Yes! We offer live 30-minute product demonstrations customized to your industry. Contact us today to schedule your free demo.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Got <span className="gradient-text">Questions?</span> We Have Answers
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about our ERP solutions, development process, and support services.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIdx === i
            return (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen ? 'bg-white border-brand/40 shadow-lg shadow-blue-500/8' : 'bg-white border-border hover:border-brand/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <span className={`font-semibold text-base sm:text-lg transition-colors ${isOpen ? 'text-brand' : 'text-foreground'}`}>
                    {q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-brand text-white' : 'bg-surface-2 text-muted'
                  }`}>
                    {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-border/60">
                        <p className="text-subtle text-sm sm:text-base leading-relaxed pt-4">{a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
