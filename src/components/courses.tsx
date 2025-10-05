"use client";

import type React from "react";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, CheckCircleIcon, BookOpen, Star } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { resources as rawResources } from "@/lib/data";

interface Resource {
  id: string | number;
  href: string;
  title: string;
  description: string;
  tags: string[];
  isOfficial?: boolean;
  isVerified?: boolean;
}

interface ResourceCardProps {
  resource: Resource;
  t: (key: string) => string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, t }) => {
  return (
    <Link href={resource.href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative bg-card dark:bg-slate-800 rounded-2xl p-6 border border-border flex flex-col h-full cursor-pointer overflow-hidden shadow-xl transition-all duration-300"
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {resource.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
            {resource.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.map((tag, index) => (
              <Badge
                key={tag}
                className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-3 text-sm">
            {resource.isOfficial && (
              <span className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                <Star className="w-4 h-4 mr-1 fill-current" />{" "}
                {t("catalog.official")}
              </span>
            )}
            {resource.isVerified && (
              <span className="flex items-center text-green-600 dark:text-green-400 font-medium">
                <CheckCircleIcon className="w-4 h-4 mr-1 fill-current" />{" "}
                {t("catalog.verified")}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Courses() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterToggle = (tag: string) => {
    setFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const translatedResources = rawResources.map((res) => ({
    ...res,
    title: t(res.titleKey),
    description: t(res.descriptionKey),
    tags: res.tagsKeys.map((tagKey: string) => t(tagKey)),
  }));

  const filteredResources = translatedResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters =
      filters.length === 0 ||
      filters.every((filter) => resource.tags.includes(filter));
    return matchesSearch && matchesFilters;
  });

  const allTags = [...new Set(translatedResources.flatMap((r) => r.tags))];

  return (
    <div className="relative overflow-hidden dark:bg-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
          style={{ scaleX }}
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
      </div>
      <div className="container mx-auto py-16 px-6 md:px-10 relative z-10">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
          style={{ scaleX }}
        />
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 text-primary"
          >
            <span className="relative">
              {t("catalog.title")}
              <motion.span
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-foreground max-w-2xl mx-auto"
          >
            Explore our curated collection of premium courses and resources
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12 bg-card dark:bg-slate-800 rounded-2xl p-6 border border-border shadow-xl"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative w-full lg:w-1/2">
              <Input
                type="text"
                placeholder={t("catalog.search_placeholder")}
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-12 pr-4 py-3 rounded-xl border-border bg-background focus:ring-2 focus:ring-primary/50 w-full text-lg"
              />
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-3 w-full lg:w-1/2 justify-center lg:justify-end">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={filters.includes(tag) ? "default" : "outline"}
                  onClick={() => handleFilterToggle(tag)}
                  className={`${
                    filters.includes(tag)
                      ? "bg-primary text-primary-foreground border-0 shadow-lg"
                      : "bg-background text-foreground border-border hover:bg-muted"
                  } transition-all duration-300 rounded-xl px-4 py-2`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <ResourceCard resource={resource} t={t} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full text-center py-16"
            >
              <div className="bg-card dark:bg-card rounded-2xl p-8 border border-border shadow-xl max-w-md mx-auto">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  {t("catalog.no_resources_found")}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
