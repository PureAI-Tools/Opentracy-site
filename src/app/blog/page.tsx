import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Lunar",
  description: "Updates, tutorials, and insights on LLM distillation, Small Language Models, cost optimization, and AI deployment. Learn how to ship smarter with Lunar.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-[#888888]">
            Updates, tutorials, and insights on LLM distillation and Small Language Models.
          </p>
        </div>

        {/* Posts */}
        <div className="mt-12 space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`border-b border-[#333333] pb-8 ${
                index === 0 ? "border-t pt-8" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time className="font-mono text-xs text-[#888888]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="font-mono text-xl font-bold uppercase tracking-tight group-hover:text-[#f59e0b] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-3 text-[#888888]">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 border border-[#333333] p-8">
          <h3 className="font-mono text-lg font-bold uppercase">
            Subscribe to updates
          </h3>
          <p className="mt-2 text-sm text-[#888888]">
            Get the latest posts delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#0a0a0a] border border-[#333333] px-4 py-2 font-mono text-sm placeholder:text-[#888888] focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
