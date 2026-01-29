import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Badge from "@/components/Badge";
import { getPostBySlug, getAllPosts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found — Lunar",
    };
  }

  return {
    title: `${post.title} — Lunar`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let codeLanguage = "";

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${index}`}
              className="bg-[#0a0a0a] border border-[#333333] p-4 overflow-x-auto my-4 font-mono text-sm"
            >
              <code>{codeContent.join("\n")}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLanguage = line.slice(3);
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1
            key={index}
            className="font-mono text-2xl font-bold uppercase tracking-tight mt-8 mb-4"
          >
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="font-mono text-xl font-bold uppercase tracking-tight mt-8 mb-4"
          >
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="font-mono text-lg font-bold mt-6 mb-3"
          >
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="ml-4 text-[#cccccc]">
            {line.slice(2)}
          </li>
        );
      } else if (line.startsWith("|")) {
        // Simple table handling
        elements.push(
          <div key={index} className="font-mono text-sm text-[#888888] my-1">
            {line}
          </div>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-4" />);
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={index} className="font-bold my-2">
            {line.slice(2, -2)}
          </p>
        );
      } else {
        elements.push(
          <p key={index} className="text-[#cccccc] leading-relaxed">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        <article className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
          >
            ← Back to blog
          </Link>

          {/* Header */}
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
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
            <h1 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[#888888]">{post.summary}</p>
          </header>

          {/* Content */}
          <div className="mt-12 border-t border-[#333333] pt-12">
            {renderContent(post.content)}
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t border-[#333333] pt-8">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="font-mono text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
              >
                ← All posts
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#888888]">Share:</span>
                <a
                  href="#"
                  className="text-[#888888] hover:text-white transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#888888] hover:text-white transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </Container>
    </div>
  );
}
