"use client"

import { motion } from "motion/react"

interface Stat {
  number: string
  label: string
  color: string
}

interface StatsSectionProps {
  stats: Stat[]
  title: string
}

export function StatsSection({ stats, title }: StatsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 } as const,
    },
  }

  return (
    <motion.section
      className="rounded-3xl my-[50px] max-w-[1300px] m-auto p-6 sm:p-8 md:p-10 bg-card dark:bg-slate-800 border border-border shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} className="text-center" variants={itemVariants}>
            <div className="relative">
              <motion.div
                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 ${stat.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.05,
                }}
              >
                {stat.number}
              </motion.div>
              <motion.div
                className="text-xs sm:text-sm font-medium text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.15 }}
              >
                {stat.label}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
