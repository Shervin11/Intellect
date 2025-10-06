"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useTranslations } from "next-intl";
import { reviews, blogPosts } from "@/lib/data";
import claster from "@/assets/claster.png";
import medic from "@/assets/medic.png";
import languagePhoto from "@/assets/lang.png";
import bio from "@/assets/bio.png";
import teacher from "@/assets/teacher.jpg";
import hero1 from "@/assets/intellect.webp";
import Courses from "@/components/courses";
import { HeroSlider } from "@/components/home/hero-slider";
import { IntellectSection } from "@/components/home/intellect-section";
import { FeatureCards } from "@/components/home/feature-cards";
import { StatsSection } from "@/components/home/stats-section";
import { BlogSection } from "@/components/home/blog-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import TeacherCard from "@/components/teacherCard";
import { teachers } from "@/lib/data";
import "./styles/styles.css";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  const t = useTranslations("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sliderSlides = t.raw("slider") as Array<{
    title: string;
    description: string;
  }>;
  const slideImages = [claster, medic, languagePhoto, bio, teacher];

  const tabs = [
    t("hero_tabs.directions"),
    t("hero_tabs.results"),
    t("hero_tabs.teachers"),
  ];

  const intellectDescriptions = {
    directions: t("intellect_description_directions"),
    results: t("intellect_description_results"),
    teachers: t("intellect_description_teachers"),
  };

  const cardItems = t.raw("cards") as Array<{
    title: string;
    description: string;
  }>;

  const stats = [
    {
      number: "12+",
      label: t("stats_experience"),
      color: "text-blue-600",
    },
    {
      number: "2500+",
      label: t("stats_graduates"),
      color: "text-purple-600",
    },
    {
      number: "87%",
      label: t("stats_cluster_admission"),
      color: "text-indigo-600",
    },
    {
      number: "65+",
      label: t("stats_olympiad_winners"),
      color: "text-cyan-600",
    },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      <HeroSlider
        slides={sliderSlides}
        slideImages={slideImages}
        learnMoreText={t("learn_more_arrow")}
      />

      <IntellectSection
        tabs={tabs}
        descriptions={intellectDescriptions}
        images={[hero1, hero1]}
      />

      <FeatureCards cards={cardItems} learnMoreText={t("learn_more")} />

      <StatsSection stats={stats} title={t("stats_experience")} />

      <BlogSection
        blogPosts={blogPosts}
        title={t("blog_title")}
        subtitle={t("blog_subtitle")}
      />

      <ReviewsSection
        reviews={reviews}
        title={t("reviews_title")}
        subtitle={t("reviews_subtitle")}
      />

      <section id="courses" className="scroll-mt-20">
        <Courses />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-[1300px] my-24 mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
        >
          {t("hero_tabs.teachers")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TeacherCard teacher={teacher} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <ContactSection />
    </>
  );
}
