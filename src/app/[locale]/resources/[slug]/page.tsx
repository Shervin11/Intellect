"use client";

import { useTranslations } from "next-intl";
import { getResourceBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

interface ResourceDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = params;
  const t = useTranslations();

  const rawResource = getResourceBySlug(slug);

  if (!rawResource) {
    return (
      <div className="container mx-auto py-12 px-6 md:px-10 text-center text-foreground">
        <h1 className="text-4xl font-bold text-primary font-serif">{t("contact.resource_not_found")}</h1>
        <p className="mt-4 text-lg">{t("contact.resource_not_found_message")}</p>
      </div>
    );
  }

  const resource = {
    ...rawResource,
    title: t(rawResource.titleKey),
    description: t(rawResource.descriptionKey),
    fullContent: t(rawResource.fullContentKey),
    tags: rawResource.tagsKeys.map((key) => t(key)),
  };

  return (
    <div className="container mx-auto py-12 px-6 md:px-10 bg-background">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-lg shadow-lg p-8 md:p-12 border border-border"
      >
        <h1 className="text-4xl font-bold text-primary mb-4 font-serif">{resource.title}</h1>
        <p className="text-lg mb-6">{resource.description}</p>

        {resource.previewImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={resource.previewImage}
              alt={`Preview for ${resource.title}`}
              width={700}
              height={400}
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full h-auto"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {resource.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div
          className="prose prose-lg max-w-none text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: resource.fullContent }}
        />
      </motion.article>
    </div>
  );
}
