import { notFound } from "next/navigation"
import { getResourceBySlug } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { createTranslator } from "next-intl"

export default async function ResourceDetailPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { slug, locale } = params

  let messages
  try {
    messages = (await import(`../../../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  const t = createTranslator({ locale, messages })

  const rawResource = getResourceBySlug(slug)

  if (!rawResource) {
    notFound()
  }

  const resource = {
    ...rawResource,
    title: t(rawResource.titleKey),
    description: t(rawResource.descriptionKey),
    fullContent: t(rawResource.fullContentKey),
    tags: rawResource.tagsKeys.map((key) => t(key)),
  }

  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto py-12 px-6 md:px-10 relative z-10">
        <article className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 p-8 md:p-12 border-b border-border/50">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 font-serif leading-tight">
              {resource.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{resource.description}</p>
          </div>

          <div className="p-8 md:p-12">
            {resource.previewImage && (
              <div className="mb-8 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={resource.previewImage || "/placeholder.svg"}
                  alt={`Preview for ${resource.title}`}
                  width={700}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="rounded-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              {resource.tags.map((tag, index) => (
                <Badge
                  key={tag}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-600 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 px-4 py-2 text-sm font-medium"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="bg-gradient-to-br from-card/50 to-muted/20 rounded-xl p-8 border border-border/30">
              <div
                className="prose prose-lg max-w-none text-foreground leading-relaxed prose-headings:bg-gradient-to-r prose-headings:from-blue-600 prose-headings:to-purple-600 prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: resource.fullContent }}
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
