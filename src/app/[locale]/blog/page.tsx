import type { Metadata } from "next";
import Container from "@/components/Container";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "../../../data/posts";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return { title: `${dict.blog.title} — Lunar`, description: dict.blog.subtitle };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <Container>
          <div className="blog-empty-state">
            <div className="blog-empty-card">
              <h1 className="blog-empty-title">{dict.blog.emptyState.title}</h1>
              <p className="blog-empty-note">{dict.blog.emptyState.note}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container>
        <div className="blog-list-container">
          <header className="blog-list-header">
            <h1 className="blog-list-title">{dict.blog.title}</h1>
            <p className="blog-list-subtitle">{dict.blog.subtitle}</p>
          </header>

          <BlogList posts={posts} locale={locale} />
        </div>
      </Container>
    </div>
  );
}
