import { notFound } from "next/navigation";
import { getResourceBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { createTranslator } from "next-intl";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function ResourceDetailPage({ params }: Props) {
  const { slug, locale } = params;

  let messages;
  try {
    messages = (await import(`../../../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const t = createTranslator({ locale, messages });

  const rawResource = getResourceBySlug(slug);

  if (!rawResource) {
    notFound();
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
      <article className="bg-card rounded-lg shadow-lg p-8 md:p-12 border border-border">
        <h1 className="text-4xl font-bold text-primary mb-4 font-serif">
          {resource.title}
        </h1>
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
      </article>
    </div>
  );
}
