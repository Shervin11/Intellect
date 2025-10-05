"use client"

import { motion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

interface SliderSlide {
  title: string
  description: string
}

interface HeroSliderProps {
  slides: SliderSlide[]
  slideImages: StaticImageData[]
  learnMoreText: string
}

export function HeroSlider({ slides, slideImages, learnMoreText }: HeroSliderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // reduced from 0.8 to 0.4
      className="py-[50px] max-w-[1300px] mx-auto px-4"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-top rounded-3xl overflow-hidden"
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={`h-[400px] md:h-[520px] w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }} // reduced from 0.2 to 0.1
            >
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              <div className="relative z-10 md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0 md:pr-8">
                <motion.div className="text-4xl sm:text-5xl md:text-6xl mb-4">
                  {["🎯", "🩺", "🇺🇸🇨🇳🇷🇺", "🏆", "📝"][index]}
                </motion.div>

                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }} // reduced from 0.3 to 0.15
                >
                  {slide.title}
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base md:text-lg opacity-90 max-w-md mx-auto md:mx-0 leading-relaxed mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }} // reduced from 0.5 to 0.25
                >
                  {slide.description}
                </motion.p>

                <motion.button
                  className="self-center md:self-start px-6 py-3 cursor-pointer bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl" // reduced duration from 300 to 200
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }} // reduced from 0.7 to 0.35
                >
                  {learnMoreText}
                </motion.button>
              </div>

              <div className="relative z-10 md:w-1/2 h-full flex items-center justify-center">
                <motion.div
                  className="w-full h-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }} // reduced from 0.6 to 0.3
                >
                  <Image
                    src={slideImages[index] || "/placeholder.svg"}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
