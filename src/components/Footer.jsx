import { motion } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin,
  FiTwitter, FiFacebook, FiInstagram, FiArrowRight
} from 'react-icons/fi'

const footerLinks = {
  Services: [
    { label: 'ERP Solutions', href: '#services' },
    { label: 'Custom Development', href: '#services' },
    { label: 'Mobile App Dev', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  Solutions: [
    { label: 'Sales & CRM', href: '#solutions' },
    { label: 'Purchases & AP', href: '#solutions' },
    { label: 'Inventory & Stock', href: '#solutions' },
    { label: 'General Ledger', href: '#solutions' },
    { label: 'Manufacturing', href: '#solutions' },
  ],
}

const socials = [
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const navHeight = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter Strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">Stay Ahead with DE Solutions</h3>
              <p className="text-white/60 text-sm">Get the latest insights on ERP implementation, business automation, and tech trends.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your business email"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand transition-all w-full sm:w-72"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-light transition-colors whitespace-nowrap shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-display font-bold text-base">DE</span>
              </div>
              <span className="font-display font-bold text-2xl">
                DE <span className="text-brand">Solutions</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Founded in 2018, DE Solutions automates small and medium businesses with enterprise ERP software, custom mobile/web apps, and IT consulting.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-6">
              <a href="mailto:sales@de2solutions.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-brand flex items-center justify-center transition-colors">
                  <FiMail size={15} />
                </div>
                sales@de2solutions.com
              </a>
              <a href="tel:+923009296413" className="flex items-center gap-3 text-sm text-white/70 hover:text-brand transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-brand flex items-center justify-center transition-colors">
                  <FiPhone size={15} />
                </div>
                +92 300 929 6413
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FiMapPin size={15} />
                </div>
                <span className="leading-snug">PECHS Block 6, Shahrah-e-Faisal, Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand flex items-center justify-center transition-all hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className="flex items-center gap-1.5 text-sm text-white/70 hover:text-brand transition-colors group text-left cursor-pointer"
                    >
                      <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} DE Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-brand transition-colors">Privacy Policy</button>
            <button className="hover:text-brand transition-colors">Terms of Service</button>
            <button className="hover:text-brand transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
