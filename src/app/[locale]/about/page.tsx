"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import {
  StarIcon,
  GraduationCap,
  Globe,
  Trophy,
  Users,
  Target,
  Heart,
} from "lucide-react";
import { teachers, teamMembers } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TeacherCard from "@/components/teacherCard";
import TeamCard from "@/components/TeamCard";

export default function About() {
  const t = useTranslations();

  const stats = [
    {
      number: t("home.stats_experience"),
      label: t("home.stats_experience"),
      icon: GraduationCap,
    },
    {
      number: t("home.stats_graduates"),
      label: t("home.stats_graduates"),
      icon: Users,
    },
    {
      number: t("home.stats_cluster_admission"),
      label: t("home.stats_cluster_admission"),
      icon: StarIcon,
    },
    {
      number: t("home.stats_olympiad_winners"),
      label: t("home.stats_olympiad_winners"),
      icon: Trophy,
    },
  ];

  const values = [
    {
      title: t("home.cards.0.title"),
      description: t("home.cards.0.description"),
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: t("home.cards.1.title"),
      description: t("home.cards.1.description"),
      icon: Heart,
      gradient: "from-pink-500 to-rose-400",
    },
    {
      title: t("home.slider.2.title"),
      description: t("home.slider.2.description"),
      icon: Target,
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      title: t("home.slider.3.title"),
      description: t("home.slider.3.description"),
      icon: Globe,
      gradient: "from-purple-500 to-indigo-400",
    },
  ];

  return (
    <div className="min-h-screen dark:via-slate-900">
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-8 leading-tight">
              {t("header.about")}
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-medium">
            {t("about.description")}
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                nameKey={member.name}
                titleKey={member.title}
                descriptionKey={member.description}
                image={member.image}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent"
          >
            {t("home.hero_tabs.results")}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number.split(" ")[0]}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
            {t("home.hero_tabs.teachers")}
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

        <motion.section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                {t("home.learn_more")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                {t("contact.subtitle")}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-12 py-6 bg-white text-slate-800 hover:bg-slate-100 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {t("home.learn_more_arrow")}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
