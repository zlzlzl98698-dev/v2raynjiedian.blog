import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['airport', 'vpn', 'clash', 'resources']),
    tags: z.array(z.string()).default([]),
    cover: z.string().default('/images/default-cover.svg'),
    author: z.string().default('v2rayn节点编辑部'),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    pillar: z.string().optional(),
    topicSlug: z.string().optional(),
    brandSlug: z.string().optional(),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).default([]),
    relatedSlugs: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
