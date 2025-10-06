'use client';

import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface TeamCardProps {
  nameKey: string;
  titleKey: string;
  descriptionKey: string;
  image: string | StaticImageData;
}

export default function TeamCard({
  nameKey,
  titleKey,
  descriptionKey,
  image
}: TeamCardProps) {
  const t = useTranslations('about');

  const name = t(nameKey);
  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-300",
        "bg-white border border-slate-200 text-slate-800",
        "dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100",
        "hover:shadow-2xl hover:-translate-y-1",
        "dark:hover:bg-slate-750"
      )}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-slate-200 dark:ring-slate-600">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {name}
            </h3>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            {title}
          </p>

          <div className="space-y-2">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {description.split("\n").map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}