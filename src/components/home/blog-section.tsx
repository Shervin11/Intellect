"use client"

import { motion } from "motion/react"
import Image, { type StaticImageData } from "next/image"
import { useTranslations } from "next-intl"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"

interface BlogPost {
  id: number
  translationKey: string
  image: StaticImageData
  date: string
  author: string
}

interface BlogSectionProps {
  blogPosts: BlogPost[]
  title: string
  subtitle: string
}

export function BlogSection({ blogPosts, title, subtitle }: BlogSectionProps) {
  const t = useTranslations()

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="py-20 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.05)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => {
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="group relative overflow-hidden border border-border/40 darkbg-slate-800 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 rounded-2xl cursor-pointer h-full flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden rounded-t-2xl aspect-video">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={t(`${post.translationKey}.title`)}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                    <Badge
                      variant="secondary"
                      className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full border"
                    >
                      {t(`${post.translationKey}.categoryLabel`)}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-tight">
                        {" "}
                        {t(`${post.translationKey}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {t(`${post.translationKey}.excerpt`)}
                      </p>
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
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {" "}
                    <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:shadow-primary/40 transition-shadow">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
