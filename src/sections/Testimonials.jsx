import { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { HiStar } from 'react-icons/hi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO, Karachi Trading Co.',
    initial: 'A',
    color: 'bg-blue-600',
    rating: 5,
    text: 'DE Solutions transformed our business operations. The ERP implementation was smooth and the team was highly professional. Our operational efficiency improved by 40% within weeks of going live.',
  },
  {
    name: 'Fatima Malik',
    role: 'Director, MedCare Pharma',
    initial: 'F',
    color: 'bg-cyan-600',
    rating: 5,
    text: 'The custom software they built for us handles our complex pharmaceutical compliance and batch tracking requirements seamlessly. Their support team is always responsive.',
  },
  {
    name: 'Hassan Sheikh',
    role: 'GM Operations, Pak Logistics',
    initial: 'H',
    color: 'bg-sky-600',
    rating: 5,
    text: 'Our fleet management and delivery tracking has never been more accurate. The mobile app DE Solutions built has drastically reduced miscommunication with our drivers.',
  },
  {
    name: 'Sara Khan',
    role: 'Principal, Beacon Academy',
    initial: 'S',
    color: 'bg-indigo-600',
    rating: 5,
    text: 'The school management ERP completely automated our fee collection, student records, and grade reporting. Parents love the portal. It saves our admin team hours daily.',
  },
  {
    name: 'Omar Farooq',
    role: 'Owner, Premier Retail Chain',
    initial: 'O',
    color: 'bg-blue-700',
    rating: 5,
    text: 'Managing 12 branches from a single dashboard was a dream. DE Solutions made it a reality. Real-time inventory visibility has saved us from stock-outs repeatedly.',
  },
]

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState(null)

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-surface-2 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-surface-3 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-surface-3 text-brand text-xs sm:text-sm font-semibold mb-4">
              Client Testimonials
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-foreground">
              Trusted by <span className="gradient-text">Businesses</span> Nationwide
            </h2>
            <p className="text-subtle text-base sm:text-lg max-w-2xl mt-3">
              Hear directly from our clients about their transformation with DE Solutions ERP and custom software.
            </p>
          </motion.div>

          {/* Nav arrows integrated in section header */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-2 border border-border shadow-sm flex items-center justify-center text-foreground hover:text-brand hover:border-brand/30 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-2 border border-border shadow-sm flex items-center justify-center text-foreground hover:text-brand hover:border-brand/30 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSwiper={setSwiperInstance}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-xl hover:shadow-blue-500/8 hover:border-brand/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <HiStar key={i} size={18} className="text-amber-400" />
                      ))}
                    </div>

                    <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-border mt-auto">
                    <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-display font-bold text-base shadow-md flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{t.name}</p>
                      <p className="text-subtle text-xs font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
