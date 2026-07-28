import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiChevronDown } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Karachi Office',
    lines: ['1/6-P, PECHS, Block 6,', 'Laeeq Begum Road, Near Nursery Flyover,', 'Shahrah-e-Faisal, Karachi, Pakistan'],
  },
  {
    icon: FiMail,
    title: 'Email Sales & Support',
    lines: ['sales@de2solutions.com'],
    link: 'mailto:sales@de2solutions.com',
  },
  {
    icon: FiPhone,
    title: 'Call Direct',
    lines: ['+92 300 929 6413', '021-345 28723'],
    link: 'tel:+923009296413',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface-2 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface-3 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Let&apos;s Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            Ready to automate and integrate your business operations? Contact our team for a free consultation and live ERP demo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-5"
          >
            {contactInfo.map(({ icon: Icon, title, lines, link }) => (
              <div key={title} className="flex gap-4 p-5 bg-surface rounded-2xl border border-border hover:border-brand/30 hover:shadow-md transition-all duration-200 group">
                <div className="w-11 h-11 rounded-xl bg-brand/10 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-blue-500/25 flex items-center justify-center shrink-0 transition-all duration-200">
                  <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-foreground mb-1">{title}</h3>
                  {lines.map((line, i) =>
                    link && i === 0 ? (
                      <a key={line} href={link} className="block text-sm text-subtle hover:text-brand transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-subtle leading-relaxed">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Free Demo Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-brand p-6 text-white shadow-xl shadow-blue-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <h3 className="font-display font-bold text-xl mb-2">Free Custom Demo</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Experience DE Solutions ERP loaded with your business data scenarios. Schedule a 30-minute consultation at zero cost.
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-semibold">
                  <FiCheck size={16} />
                  No commitment required
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-6">Send Us a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                    <FiCheck size={32} />
                  </div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-2">Thank You! Message Sent</h4>
                  <p className="text-subtle text-sm max-w-sm">Our solution specialists will review your requirements and respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-subtle/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-subtle/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your Company Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-subtle/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a service category</option>
                        <option value="erp">Dynamic ERP Solutions</option>
                        <option value="custom">Custom Software Development</option>
                        <option value="mobile">Mobile Application (iOS/Android)</option>
                        <option value="cloud">Cloud Migration & Infrastructure</option>
                        <option value="integration">System & API Integration</option>
                        <option value="digital">Digital Marketing & SEO</option>
                      </select>
                      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-subtle pointer-events-none" size={18} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Your Message / Project Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your company workflow, modules required, or software goals..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-foreground placeholder:text-subtle/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:bg-brand-light transition-all text-base cursor-pointer"
                  >
                    <FiSend size={18} />
                    Send Inquiry
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
