import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'ERP Solutions', href: '#services' },
      { label: 'Custom Development', href: '#services' },
      { label: 'System Integration', href: '#services' },
    ],
  },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    setActiveDropdown(null)
    const el = document.querySelector(href)
    if (el) {
      const navHeight = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'glass shadow-md shadow-blue-500/5 py-3'
            : 'bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-border/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-display font-bold text-base tracking-wider">DE</span>
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl text-foreground">
                DE <span className="text-brand">Solutions</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-muted hover:text-brand hover:bg-surface-2/60 transition-all duration-200 group cursor-pointer"
                  >
                    {link.label}
                    {link.children && (
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-brand' : ''}`}
                      />
                    )}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-brand group-hover:w-2/3 transition-all duration-300 rounded-full" />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-2 w-52 z-[110]"
                      >
                        <div className="bg-white rounded-xl shadow-xl shadow-blue-500/10 py-2 border border-border">
                          {link.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => handleNavClick(child.href)}
                              className="w-full text-left px-4 py-2.5 text-sm text-muted hover:text-brand hover:bg-surface-2 transition-colors duration-150 font-medium"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => handleNavClick('#contact')}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="hidden lg:flex items-center justify-center px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-500/25 hover:bg-brand-light transition-all duration-200 cursor-pointer"
              >
                Get Free Demo
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-surface-2 transition-colors cursor-pointer border border-border"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] bg-white flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-md">
                  <span className="text-white font-display font-bold text-sm">DE</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">
                  DE <span className="text-brand">Solutions</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl text-foreground hover:bg-surface-2 transition-colors border border-border"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3.5 rounded-xl text-base font-semibold text-foreground hover:text-brand hover:bg-surface-2 transition-all duration-200 border border-transparent hover:border-surface-3 flex items-center justify-between"
                  >
                    {link.label}
                  </motion.button>
                  {link.children && (
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-surface-3">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.href)}
                          className="w-full text-left px-4 py-2 text-sm text-subtle hover:text-brand transition-colors"
                        >
                          • {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-6 border-t border-border bg-surface">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3.5 bg-brand text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 text-center"
              >
                Get Free Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
