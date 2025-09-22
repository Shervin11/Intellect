"use client"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-cards"
import "./styles/styles.css"
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react"
import Image from "next/image"
import hero1 from "@/assets/intellect.webp"
import { ArrowRight, Calendar, StarIcon, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { reviews } from "@/lib/data"

import { EffectCards, Pagination } from "swiper/modules"
import { Autoplay } from "swiper/modules"
import { blogPosts } from "@/lib/data"

export default function Home() {
  const t = useTranslations()
  const [text, setText] = React.useState("Направления")
  const { scrollYProgress } = useScroll()
  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const ReviewCard = ({
    avatar,
    name,
    role,
    text,
    rating,
  }: {
    avatar: string
    name: string
    role: string
    text: string
    rating: number
  }) => {
    return (
      <figure
        className={cn(
          "relative h-[261px] w-[448px] flex items-center justify-center cursor-pointer overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1",
          "border-gray-200 bg-white hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700/50",
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                />
              ))}
            </div>
            <blockquote className="text-md leading-relaxed text-gray-700 dark:text-gray-300 mb-3">"{text}"</blockquote>
            <figcaption className="font-semibold text-[20px] text-gray-900 dark:text-white">{name}</figcaption>
            <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-gray-300 dark:text-gray-600 text-3xl opacity-30">"</div>
      </figure>
    )
  }

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
          {[
            {
              title: "Подготовка к 4-5 кластеру",
              description:
                "Интенсивные курсы по математике, физике и химии — гарантия поступления на IT, медицину и инженерию. Средний балл наших студентов — 175+.",
              icon: "🎯",
              gradient: "from-blue-500 to-indigo-600",
              image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=500&fit=crop&q=80&auto=format",
            },
            {
              title: "Медицинские дисциплины",
              description:
                "Анатомия, гистология, физиология и биохимия — объясняем сложное простым языком. Идеально для поступления в медицинский и первого курса.",
              icon: "🩺",
              gradient: "from-purple-500 to-pink-600",
              image:
                "https://images.unsplash.com/photo-1507842217343-583bb7270b6b?w=500&h=500&fit=crop&q=80&auto=format",
            },
            {
              title: "Иностранные языки",
              description:
                "Английский, китайский, русский — с носителями и носителями методик. Готовим к IELTS, HSK, TOEFL. Результаты от 6.5 до 8.0.",
              icon: "🇺🇸🇨🇳🇷🇺",
              gradient: "from-green-500 to-teal-600",
              image:
                "https://images.unsplash.com/photo-1492309100216-4e4b9b3a0b5e?w=500&h=500&fit=crop&q=80&auto=format",
            },
            {
              title: "Олимпиады по химии и биологии",
              description:
                "Побеждайте на республиканских и международных олимпиадах. Наши ученики — призёры «Зулфиё», «Олимп», «Шарк Таланти».",
              icon: "🏆",
              gradient: "from-orange-500 to-red-600",
              image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=500&fit=crop&q=80&auto=format",
            },
            {
              title: "Индивидуальные программы",
              description:
                "Гибкий график, личный преподаватель, диагностика слабых мест. Подготовка под твои цели — от 3 до 12 месяцев.",
              icon: "📝",
              gradient: "from-cyan-500 to-blue-600",
              image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=500&fit=crop&q=80&auto=format",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`h-[400px] md:h-[520px] w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br ${slide.gradient} text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="relative z-10 md:w-1/2 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0 md:pr-8">
                  <motion.div className="text-4xl sm:text-5xl md:text-6xl mb-4">{slide.icon}</motion.div>

                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg opacity-90 max-w-md mx-auto md:mx-0 leading-relaxed mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.button
                    className="self-center md:self-start px-6 py-3 cursor-pointer bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Узнать подробнее →
                  </motion.button>
                </div>

                <div className="relative z-10 md:w-1/2 h-full flex items-center justify-center">
                  <motion.div
                    className="w-full h-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  >
                    <Image
                      src={slide.image || "/placeholder.svg"}
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
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Направления", "Результаты", "Преподаватели"].map((tab) => (
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
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 30, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  {text === "Направления" && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                      <span className="font-medium text-blue-800 dark:text-blue-300">Intellect</span> — это центр, где
                      готовят к поступлению в топовые вузы Узбекистана и мира:{" "}
                      <span className="font-bold">IT, медицина, инженерия, лингвистика</span>.
                    </p>
                  )}
                  {text === "Результаты" && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                      Наши студенты поступают на{" "}
                      <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        4-5 кластер с баллами от 170 до 195
                      </span>
                      . 87% — призёры олимпиад по химии и биологии.
                    </p>
                  )}
                  {text === "Преподаватели" && (
                    <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                      Занятия ведут{" "}
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">кандидаты наук</span>,{" "}
                      <span className="font-bold text-purple-700 dark:text-purple-400">победители олимпиад</span> и{" "}
                      <span className="font-bold text-pink-600 dark:text-pink-400">
                        сертифицированные преподаватели IELTS/HSK
                      </span>
                      .
                    </p>
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
              <SwiperSlide className="rounded-2xl overflow-hidden">
                <Image
                  src={hero1 || "/placeholder.svg"}
                  alt="Intellect Campus"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-2xl overflow-hidden">
                <Image
                  src={hero1 || "/placeholder.svg"}
                  alt="Intellect Classroom"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="grid max-w-[1300px] m-auto gap-6 md:grid-cols-2 md:gap-8 my-[100px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: "🎯",
            title: "Подготовка к 4-5 кластеру",
            description:
              "92% наших студентов поступают на 4-5 кластер с баллами от 170 до 195. Индивидуальный подход к каждому — от диагностики до финального теста.",
            gradient: "from-blue-500 to-indigo-600",
          },
          {
            icon: "🏆",
            title: "Олимпиады по химии и биологии",
            description:
              "Наши ученики — призёры республиканских олимпиад «Зулфиё», «Олимп», «Шарк Таланти». Готовим к победам с 9 класса.",
            gradient: "from-purple-500 to-pink-600",
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
            <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-800 border border-border shadow-xl transition-all duration-300 relative overflow-hidden group">
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
                <motion.h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground" whileHover={{ x: 5 }}>
                  {card.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-muted-foreground relative z-10">{card.description}</p>
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
                  Узнать подробнее
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        className="rounded-3xl my-[50px] max-w-[1300px] m-auto p-6 sm:p-8 md:p-10 bg-card dark:bg-slate-800 border border-border shadow-xl overflow-hidden"
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
          Наши результаты цифрами
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
              number: "12+",
              label: "Лет опыта",
              color: "text-blue-600",
            },
            {
              number: "2500+",
              label: "Выпускников",
              color: "text-purple-600",
            },
            {
              number: "87%",
              label: "Поступили на 4-5 кластер",
              color: "text-indigo-600",
            },
            {
              number: "65+",
              label: "Призёров олимпиад",
              color: "text-cyan-600",
            },
          ].map((stat, index) => (
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

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 dark:bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.05)_0%,transparent_50%)]"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight mb-6">
                Полезные материалы
                <br />
                <span className="text-primary">для абитуриентов</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Читайте наши статьи, чтобы подготовиться к поступлению, олимпиадам и экзаменам.
                <br />
                Реальные советы от преподавателей и выпускников.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="group relative overflow-hidden border border-border/40 bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 rounded-2xl cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-2xl aspect-video">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge
                      variant="secondary"
                      className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full border"
                    >
                      {post.categoryLabel}
                    </Badge>
                  </div>

                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-6 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </CardContent>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:shadow-primary/40 transition-shadow">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Что говорят наши студенты</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Реальные истории успеха от тех, кто поступил, выиграл олимпиаду или сдал IELTS.
            </p>
          </motion.div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.id + "1"} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </motion.section>
    </>
  )
}
