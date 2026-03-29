import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { blogPosts } from '../data/blog-posts';

export function GET(context: APIContext) {
  return rss({
    title: 'Medusa POS Blog',
    description:
      'Product updates, practical guides, and setup tutorials for running Medusa POS in real stores.',
    site: context.site!.toString(),
    items: blogPosts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedAt),
      description: post.description,
      link: `/blog/${post.slug}`,
    })),
    trailingSlash: false,
  });
}
