"use client";
import { useTranslations } from "next-intl";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "./styles/styles.css";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  AnimatePresence,
} from "motion/react";

import { EffectCards, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

export default function Home() {
  const t = useTranslations("HomePage");
  const [text, setText] = React.useState("Overview");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-[50px]"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper-top"
          slidesPerView={1}
        >
          {[
            {
              title: "Advanced Mathematics",
              description:
                "Master calculus, algebra, and geometry with expert guidance",
              icon: "📐",
              gradient: "from-blue-500 to-indigo-600",
            },
            {
              title: "Science & Physics",
              description:
                "Explore the wonders of physics, chemistry, and biology",
              icon: "🔬",
              gradient: "from-purple-500 to-pink-600",
            },
            {
              title: "Language Arts",
              description: "Develop strong communication and writing skills",
              icon: "📚",
              gradient: "from-green-500 to-teal-600",
            },
            {
              title: "Computer Science",
              description:
                "Learn programming, algorithms, and digital literacy",
              icon: "💻",
              gradient: "from-orange-500 to-red-600",
            },
            {
              title: "Test Preparation",
              description: "Excel in SAT, IELTS, and university entrance exams",
              icon: "🎯",
              gradient: "from-cyan-500 to-blue-600",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`h-[300px] w-full sm:h-[400px] flex flex-col items-center justify-center bg-gradient-to-br ${slide.gradient} text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl`}
              >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="absolute top-4 right-4 text-6xl sm:text-8xl opacity-20">
                  {slide.icon}
                </div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl sm:text-6xl mb-4"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  >
                    {slide.icon}
                  </motion.div>

                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg opacity-90 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.button
                    className="mt-6 px-6 py-3 cursor-pointer bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.section
        className="my-10 bg-card dark:bg-card relative overflow-hidden rounded-3xl bg-gradient-to-br from-background to-muted border border-border p-4 sm:p-8 md:p-12 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-5 md:mb-8" variants={itemVariants}>
              <motion.h1
                className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 text-blue-800 dark:text-white"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative">
                  Intellect
                  <motion.span
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {["Overview", "Mission", "Values"].map((tab) => (
                  <motion.button
                    key={tab}
                    className={`px-3 cursor-pointer dark:text-white sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {text === "Overview" && (
                    <p className="text-sm sm:text-base md:text-lg text-foreground">
                      Intellect is a private educational center located in
                      Tashkent, Uzbekistan.
                    </p>
                  )}
                  {text === "Mission" && (
                    <p className="text-sm sm:text-base md:text-lg text-foreground">
                      The mission of the educational center is to provide
                      quality education to students and help them achieve their
                      educational goals.
                    </p>
                  )}
                  {text === "Values" && (
                    <p className="text-sm sm:text-base md:text-lg text-foreground">
                      The educational center values academic excellence,
                      creativity, and social responsibility.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div variants={floatingVariants} animate="animate">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Pagination]}
              pagination={{ clickable: true }}
              className="swiper-card"
            >
              <SwiperSlide>
                <motion.div
                  className="h-full w-[140px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                  whileHover={{ rotateY: 10 }}
                >
                  Slide 1
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  className="h-full w-[140px] bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                  whileHover={{ rotateY: 10 }}
                >
                  Slide 2
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-2 md:gap-8 my-[100px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: "🚀",
            title: "Work Experience",
            description:
              "This educational center has more than 10 years of experience and has achieved great success during this time.",
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            icon: "⭐",
            title: "Quality Services",
            description:
              "We have had more than 2000+ graduates, and they have been admitted to universities of their choice, with some now working.",
            gradient: "from-purple-500 to-pink-500",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-card border border-border shadow-xl transition-all duration-300 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <motion.div
                className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${card.gradient} p-[2px] relative z-10`}
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
                    {card.icon}
                  </motion.span>
                </div>
              </motion.div>

              <div>
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground"
                  whileHover={{ x: 5 }}
                >
                  {card.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-muted-foreground relative z-10">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-6">
                <motion.button
                  className="px-3 cursor-pointer py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="rounded-3xl my-[50px] p-6 sm:p-8 md:p-10 bg-card dark:bg-card border border-border shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our Impact By Numbers
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              number: "10+",
              label: "Years of Experience",
              color: "text-blue-600",
            },
            {
              number: "2000+",
              label: "Graduates",
              color: "text-purple-600",
            },
            {
              number: "50+",
              label: "Teachers",
              color: "text-indigo-600",
            },
            {
              number: "95%",
              label: "Successful Students",
              color: "text-cyan-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 ${stat.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1,
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  className="text-xs sm:text-sm font-medium text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
