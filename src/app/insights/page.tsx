import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Latest insights and thought leadership on AI strategy, governance, and implementation in financial services.',
};

// Mock blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Navigating the Regulatory Maze: AI Governance in Financial Services',
    excerpt: 'How financial institutions can build robust AI governance frameworks that meet regulatory requirements while enabling innovation.',
    category: 'Governance',
    date: '2024-01-15',
    readTime: '5 min read',
    image: '/images/blog/AI Governance Pillars in Financial Services.png',
    slug: 'navigating-regulatory-maze-ai-governance-financial-services',
  },
  {
    id: 2,
    title: 'Unlocking AI Potential: Building a Center of Excellence',
    excerpt: 'A comprehensive guide to establishing an AI Center of Excellence that drives measurable business outcomes.',
    category: 'Strategy',
    date: '2024-01-10',
    readTime: '7 min read',
    image: '/images/blog/AI-CoE-Consult.jpg',
    slug: 'unlocking-ai-potential-financial-firm-center-excellence',
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Insights
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300">
              Latest insights and thought leadership on AI strategy, governance, and implementation in financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 dark:text-gray-200">
                    <Link href={`/insights/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI strategy and governance delivered to your inbox. No spam, just valuable content.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
} 