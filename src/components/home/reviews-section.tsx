"use client"

import { motion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { StarIcon } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

interface Review {
  id: number
  translationKey: string
  avatar: string | StaticImageData
  rating: number
}

interface ReviewsSectionProps {
  reviews: Review[]
  title: string
  subtitle: string
}

function ReviewCard({
  translationKey,
  avatar,
  rating,
}: {
  translationKey: string
  avatar: string | StaticImageData
  rating: number
}) {
  const tReview = useTranslations(translationKey)

  return (
    <figure
      className={cn(
        "relative h-[261px] w-[448px] flex items-center justify-center cursor-pointer overflow-hidden rounded-xl border p-5 transition-all duration-200 hover:-translate-y-1",
        "border-gray-200 bg-white hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-700/50",
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={tReview("name")}
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
          <blockquote className="text-md leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
            "{tReview("text")}"
          </blockquote>
          <figcaption className="font-semibold text-[20px] text-gray-900 dark:text-white">{tReview("name")}</figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-400">{tReview("role")}</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-gray-300 dark:text-gray-600 text-3xl opacity-30">"</div>
    </figure>
  )
}

export function ReviewsSection({ reviews, title, subtitle }: ReviewsSectionProps) {
  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <motion.section
      className="py-20 dark:bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.id + "1"}
              translationKey={review.translationKey}
              avatar={review.avatar}
              rating={review.rating}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.id + "2"}
              translationKey={review.translationKey}
              avatar={review.avatar}
              rating={review.rating}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </motion.section>
  )
}
