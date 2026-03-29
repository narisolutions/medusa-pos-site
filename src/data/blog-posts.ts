export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  publishedLabel: string;
  modifiedAt: string;
  readingTime: string;
  wordCount: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'introducing-medusa-pos',
    title: 'Introducing Medusa POS',
    description:
      'Why we built Medusa POS, who it is for, and what retailers can expect from an open-source desktop checkout app.',
    publishedAt: '2026-03-24',
    publishedLabel: 'Mar 24, 2026',
    modifiedAt: '2026-03-24',
    readingTime: '4 min read',
    wordCount: 750,
  },
  {
    slug: 'getting-started-with-medusa-pos',
    title: 'Getting Started with Medusa POS',
    description:
      'A practical setup guide: install, connect your Medusa backend, configure printers, and run your first checkout flow.',
    publishedAt: '2026-03-24',
    publishedLabel: 'Mar 24, 2026',
    modifiedAt: '2026-03-24',
    readingTime: '7 min read',
    wordCount: 1400,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | undefined;
  next: BlogPost | undefined;
} {
  const index = blogPosts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? blogPosts[index - 1] : undefined,
    next: index < blogPosts.length - 1 ? blogPosts[index + 1] : undefined,
  };
}
