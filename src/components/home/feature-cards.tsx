"use client"

import { motion } from "motion/react"

interface CardItem {
  title: string
  description: string
}

interface FeatureCardsProps {
  cards: CardItem[]
  learnMoreText: string
}

export function FeatureCards({ cards, learnMoreText }: FeatureCardsProps) {
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
      className="grid max-w-[1300px] m-auto gap-6 md:grid-cols-2 md:gap-8 my-[100px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            transition: { duration: 0.2 },
          }}
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-800 border border-border shadow-xl transition-all duration-200 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              initial={false}
            />

            <motion.div
              className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${
                index === 0 ? "from-blue-500 to-indigo-600" : "from-purple-500 to-pink-600"
              } p-[2px] relative z-10`}
            >
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                <motion.span
                  className="text-xl sm:text-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                >
                  {index === 0 ? "🎯" : "🏆"}
                </motion.span>
              </div>
            </motion.div>

            <div>
              <motion.h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground" whileHover={{ x: 5 }}>
                {card.title}
              </motion.h3>
              <p className="text-sm sm:text-base text-muted-foreground relative z-10">{card.description}</p>
            </div>

            <div className="mt-4 sm:mt-6">
              <motion.button
                className="px-3 cursor-pointer py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {learnMoreText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}
