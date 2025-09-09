"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, CheckCircleIcon } from "lucide-react";
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
        className="bg-card rounded-lg p-6 shadow-md border border-border flex flex-col h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(215, 196, 163, 0.1), 0 2px 4px -1px rgba(215, 196, 163, 0.06)",
        }}
        whileHover={{
          y: -3,
          boxShadow:
            "0 10px 15px -3px rgba(59, 107, 165, 0.1), 0 4px 6px -2px rgba(59, 107, 165, 0.05)",
        }}
      >
        <h3 className="text-xl font-semibold text-primary mb-2 font-serif">
          {resource.title}
        </h3>
        <p className="text-foreground text-sm mb-4 flex-grow">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-muted text-foreground border-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
          {resource.isOfficial && (
            <span className="flex items-center text-primary">
              <CheckCircleIcon className="w-4 h-4 mr-1" /> {t("catalog.official")}
            </span>
          )}
          {resource.isVerified && (
            <span className="flex items-center text-primary">
              <CheckCircleIcon className="w-4 h-4 mr-1" /> {t("catalog.verified")}
            </span>
          )}
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
    <div className="container mx-auto py-12 px-6 md:px-10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 pointer-events-none"></div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-10 font-serif relative z-10"
      >
        {t("catalog.title")}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 flex flex-col md:flex-row gap-4 items-center relative z-10"
      >
        <div className="relative w-full md:w-1/2">
          <Input
            type="text"
            placeholder={t("catalog.search_placeholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 rounded-md border border-input focus:ring-primary focus:border-primary w-full"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-1/2 justify-center md:justify-end">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filters.includes(tag) ? "default" : "outline"}
              onClick={() => handleFilterToggle(tag)}
              className={`${
                filters.includes(tag)
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-card text-foreground border-secondary hover:bg-muted"
              } transition-colors duration-200`}
            >
              {tag}
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} t={t} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground text-lg">
            {t("catalog.no_resources_found")}
          </p>
        )}
      </div>
    </div>
  );
}
