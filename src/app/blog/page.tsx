import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — OpenTracy",
  description: "Updates, tutorials, and insights on LLM routing, cost optimization, and AI infrastructure.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container>
        <div className="blog-list-container">
          <header className="blog-list-header">
            <h1 className="blog-list-title">Writing</h1>
            <p className="blog-list-subtitle">
              Thoughts on LLM infrastructure, cost optimization, and building with AI.
            </p>
          </header>

          <div className="blog-list">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-list-item-link"
              >
                <article className="blog-list-entry">
                  <time className="blog-list-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
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
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
