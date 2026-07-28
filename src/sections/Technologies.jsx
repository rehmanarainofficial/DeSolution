import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiJavascript, SiPhp,
  SiLaravel, SiVuedotjs, SiAngular, SiMysql, SiRedis,
  SiGit, SiLinux
} from 'react-icons/si'
import { HiOutlineCloud } from 'react-icons/hi'

const techs = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
  { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
  { icon: SiAngular, name: 'Angular', color: '#DD0031' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: HiOutlineCloud, name: 'AWS Cloud', color: '#FF9900' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiLinux, name: 'Linux', color: '#FCC624' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-foreground relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand text-xs sm:text-sm font-semibold mb-4">
            Tech Stack
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mb-4">
            Built with <span className="gradient-text">Modern Technologies</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            We leverage market-tested frameworks, databases, and cloud infrastructure for optimal performance and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {techs.map(({ icon: Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer text-center"
            >
              <div className="mb-2 transition-transform group-hover:scale-110">
                <Icon size={32} color={color} />
              </div>
              <span className="text-white/80 text-xs font-semibold group-hover:text-white transition-colors">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
