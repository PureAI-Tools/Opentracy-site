import Link from "next/link";
import Container from "@/components/Container";
import { getAllPosts } from "@/data/posts";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container>
        <div className="blog-list-container">
          <header className="blog-list-header">
            <h1 className="blog-list-title">{dict.blog.title}</h1>
            <p className="blog-list-subtitle">
              {dict.blog.subtitle}
            </p>
          </header>

          <div className="blog-list">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="blog-list-item-link"
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
