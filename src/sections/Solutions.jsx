import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineShoppingCart, HiOutlineTruck, HiOutlineCalculator,
  HiOutlineChartBar, HiOutlineCog, HiOutlineDatabase
} from 'react-icons/hi'
import { FiChevronRight, FiCheck } from 'react-icons/fi'

const solutions = [
  {
    id: 'sales',
    icon: HiOutlineShoppingCart,
    label: 'Sales & Receivable',
    title: 'Sales & Accounts Receivable',
    description: 'Complete sales management cycle from quotation generation to invoicing, receipts, and customer ledgers.',
    features: [
      'Customer account management with branch support',
      'Sales quotations, orders, and delivery notes',
      'Customer invoices, credit notes, and payments',
      'Point of sale definitions for cash sales',
      'Multi-currency customer accounts support',
      'Company logo branding on all sales documents',
    ],
  },
  {
    id: 'purchase',
    icon: HiOutlineTruck,
    label: 'Purchases & Payable',
    title: 'Purchases & Accounts Payable',
    description: 'Streamlined procurement cycle with supplier management, purchase orders, goods receipts, and payables.',
    features: [
      'Supplier account management & price lists',
      'Purchase orders and goods receival notes (GRN)',
      'Supplier price lists and payment terms',
      'Debit notes and credit note recording',
      'Supplier payment allocations and settlements',
      'Scanned document attachment support',
    ],
  },
  {
    id: 'inventory',
    icon: HiOutlineDatabase,
    label: 'Inventory & Stock',
    title: 'Inventory & Stock Management',
    description: 'Real-time multi-location inventory tracking with automated reorder alerts and cost management.',
    features: [
      'Complete stock item catalog with categories',
      'Item categories and location warehouse management',
      'Inter-location stock transfers and adjustments',
      'Re-order level alerts for low inventory',
      'Average material cost calculation formulas',
      'Barcode scanner integration support',
    ],
  },
  {
    id: 'accounting',
    icon: HiOutlineCalculator,
    label: 'General Ledger',
    title: 'General Ledger & Financial Accounting',
    description: 'Full double-entry financial accounting with multi-currency, journal entries, and fiscal year closing.',
    features: [
      'Chart of Accounts, classes, and groups',
      'Journal entries and automated budget tracking',
      'Drill-down ledger account enquiries',
      'Fiscal year closing and retained earnings',
      'Fixed asset depreciation management',
      'Hijri and Gregorian calendar support',
    ],
  },
  {
    id: 'reports',
    icon: HiOutlineChartBar,
    label: 'Reports & Analytics',
    title: 'Reports & Business Analytics',
    description: 'Comprehensive reporting suite with PDF export, Excel exports, and automated email delivery.',
    features: [
      'Print, email, and PDF export for all reports',
      'Excel export functionality for custom analysis',
      'Periodic and financial year comparison reports',
      'Direct customer document emailing',
      'Graphical analysis dashboards',
      'Tax & audit compliance reporting',
    ],
  },
  {
    id: 'manufacturing',
    icon: HiOutlineCog,
    label: 'Manufacturing',
    title: 'Manufacturing & Production Control',
    description: 'Full production lifecycle management from Bills of Materials (BOM) to work orders and asset tracking.',
    features: [
      'Bills of materials (BOM) management',
      'Work center inquiries and job entry',
      'Advanced production planning workflows',
      'Simple assembly and kitting features',
      'Fixed assets lifecycle management',
      'Cost center and dimension tracking',
    ],
  },
]

export default function Solutions() {
  const [active, setActive] = useState('sales')

  const current = solutions.find((s) => s.id === active)

  return (
    <section id="solutions" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-surface-2 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
            Complete ERP Modules
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground mb-4">
            Everything Your Business <span className="gradient-text">Needs</span>
          </h2>
          <p className="text-subtle text-base sm:text-lg max-w-2xl mx-auto">
            Our Dynamic ERP covers all modules required for modern enterprise operations — fully integrated and cloud-ready.
          </p>
        </motion.div>

        {/* Main layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start"
        >
          {/* Tabs: Horizontal scrollable on Mobile/Tablet, Vertical stack on Desktop */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col overflow-x-auto pb-3 lg:pb-0 gap-2 sm:gap-3 scrollbar-none">
            {solutions.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink cursor-pointer ${
                  active === id
                    ? 'bg-white border-brand/30 shadow-md shadow-blue-500/10 text-brand font-semibold'
                    : 'bg-white/60 border-border hover:bg-white hover:border-brand/20 text-muted'
                }`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    active === id ? 'bg-brand text-white' : 'bg-surface-2 text-brand'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{label}</p>
                </div>
                {active === id && <FiChevronRight size={18} className="hidden lg:block ml-auto text-brand" />}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-md"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                      <current.icon size={28} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">{current.title}</h3>
                      <p className="text-subtle text-xs sm:text-sm mt-1 leading-relaxed">{current.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 my-6">
                    {current.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-border/60 hover:border-brand/20 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FiCheck size={12} className="text-brand" />
                        </div>
                        <span className="text-xs sm:text-sm text-muted font-medium leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <button
                      onClick={() => {
                        const contact = document.querySelector('#contact')
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="flex items-center gap-2 text-brand text-sm font-semibold hover:gap-3 transition-all cursor-pointer"
                    >
                      Schedule Demo for this Module
                      <FiChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
