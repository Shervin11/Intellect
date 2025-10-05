"use client"

import { motion, AnimatePresence } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination } from "swiper/modules"
import * as React from "react"
import "swiper/css"
import "swiper/css/effect-cards"

interface IntellectSectionProps {
  tabs: string[]
  descriptions: {
    directions: string
    results: string
    teachers: string
  }
  images: StaticImageData[]
}

export function IntellectSection({ tabs, descriptions, images }: IntellectSectionProps) {
  const [text, setText] = React.useState(tabs[0])

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      } as const,
    },
  }

  return (
    <motion.section className="my-20 max-w-[1300px] dark:bg-slate-800 mx-auto bg-card dark:bg-card-dark relative overflow-hidden rounded-4xl border border-border/30 p-6 sm:p-10 md:p-16 shadow-2xl">
      <div className="absolute inset-0 -z-10 dark:bg-slate-800 rounded-4xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/10 to-pink-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants} className="relative">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-600 dark:from-blue-300 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent leading-tight"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Intellect
            </motion.h1>
            <motion.div
              className="absolute -bottom-2 left-0 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  className={`px-3 cursor-pointer dark:text-white sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    text === tab
                      ? "text-primary-foreground bg-blue-600"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  onClick={() => setText(tab)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 30, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                {text === tabs[0] && (
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">{descriptions.directions}</p>
                )}
                {text === tabs[1] && (
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">{descriptions.results}</p>
                )}
                {text === tabs[2] && (
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">{descriptions.teachers}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div variants={floatingVariants} animate="animate" className="rounded-3xl overflow-hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            pagination={{ clickable: true }}
            className="swiper-card !h-[400px] sm:!h-[480px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Intellect ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  )
}
