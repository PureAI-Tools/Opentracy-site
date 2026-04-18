import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import { i18n } from "@/i18n/config";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return i18n.locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found — OpenTracy",
    };
  }

  return {
    title: `${post.title} — OpenTracy`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let inBlockquote = false;
    let blockquoteContent: string[] = [];

    const processInlineFormatting = (text: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      const regex = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }
        if (match[1]) {
          parts.push(<strong key={match.index}>{match[1]}</strong>);
        } else if (match[2]) {
          parts.push(<code key={match.index} className="blog-inline-code">{match[2]}</code>);
        } else if (match[3] && match[4]) {
          parts.push(
            <a key={match.index} href={match[4]} className="blog-link">
              {match[3]}
            </a>
          );
        }
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }
      return parts.length > 0 ? parts : [text];
    };

    const flushBlockquote = (index: number) => {
      if (blockquoteContent.length > 0) {
        elements.push(
          <blockquote key={`bq-${index}`} className="blog-blockquote">
            {blockquoteContent.map((line, i) => (
              <p key={i}>{processInlineFormatting(line)}</p>
            ))}
          </blockquote>
        );
        blockquoteContent = [];
        inBlockquote = false;
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${index}`} className="blog-code-block">
              <pre>
                <code>{codeContent.join("\n")}</code>
              </pre>
            </div>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          flushBlockquote(index);
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith("> ")) {
        inBlockquote = true;
        blockquoteContent.push(line.slice(2));
        return;
      } else if (inBlockquote) {
        flushBlockquote(index);
      }

      if (line.startsWith("# ")) {
        return; // Skip h1 since we render title separately
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="blog-h2">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="blog-h3">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith("- **") && line.includes("**:")) {
        const boldEnd = line.indexOf("**:", 4);
        const boldText = line.slice(4, boldEnd);
        const rest = line.slice(boldEnd + 3);
        elements.push(
          <li key={index} className="blog-list-item">
            <strong>{boldText}:</strong>{rest}
          </li>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="blog-list-item">
            {processInlineFormatting(line.slice(2))}
          </li>
        );
      } else if (/^\d+\.\s/.test(line)) {
        const text = line.replace(/^\d+\.\s/, "");
        elements.push(
          <li key={index} className="blog-list-item blog-list-ordered">
            {processInlineFormatting(text)}
          </li>
        );
      } else if (line.startsWith("|")) {
        if (line.includes("---")) return; // skip separator rows
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        const isHeader = index > 0 && lines[index + 1]?.includes("---");
        elements.push(
          <div key={index} className={`blog-table-row ${isHeader ? "blog-table-header" : ""}`}>
            {cells.map((cell, i) => (
              <span key={i} className="blog-table-cell">{cell}</span>
            ))}
          </div>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={index} className="h-6" />);
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={index} className="blog-bold-line">
            {line.slice(2, -2)}
          </p>
        );
      } else {
        elements.push(
          <p key={index} className="blog-paragraph">
            {processInlineFormatting(line)}
          </p>
        );
      }
    });

    flushBlockquote(lines.length);
    return elements;
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container>
        <article className="blog-article">
          {/* Back link */}
          <Link href={`/${locale}/blog`} className="blog-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
            </svg>
            Back to blog
          </Link>

          {/* Header */}
          <header className="blog-header">
            <h1 className="blog-title">{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-author">OpenTracy Team</span>
              <span className="blog-meta-sep">/</span>
              <time className="blog-date">
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="blog-meta-sep">/</span>
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <p className="blog-summary">{post.summary}</p>
          </header>

          {/* Divider */}
          <hr className="blog-divider" />

          {/* Content */}
          <div className="blog-content">
            {renderContent(post.content)}
          </div>

          {/* Prev / Next navigation */}
          <nav className="blog-nav">
            {prevPost ? (
              <Link href={`/${locale}/blog/${prevPost.slug}`} className="blog-nav-link blog-nav-prev">
                <span className="blog-nav-label">Previous</span>
                <span className="blog-nav-title">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/${locale}/blog/${nextPost.slug}`} className="blog-nav-link blog-nav-next">
                <span className="blog-nav-label">Next</span>
                <span className="blog-nav-title">{nextPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>
      </Container>
    </div>
  );
}
