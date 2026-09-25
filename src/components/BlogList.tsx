"use client";

import Link from "next/link";
import { useAnalytics } from "@/lib/analytics";
import type { Post } from "@/data/posts";

export default function BlogList({
  posts,
  locale,
}: {
  posts: Post[];
  locale: string;
}) {
  const posthog = useAnalytics();

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${locale}/blog/${post.slug}`}
          className="blog-list-item-link"
          onClick={() =>
            posthog?.capture("blog_post_clicked", {
              post_slug: post.slug,
              post_title: post.title,
              tags: post.tags,
            })
          }
        >
          <article className="blog-list-entry">
            <time className="blog-list-date">
              {new Date(post.date).toLocaleDateString(locale, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <div className="blog-list-content">
              <h2 className="blog-list-entry-title">{post.title}</h2>
              <p className="blog-list-entry-summary">{post.summary}</p>
              <div className="blog-list-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
