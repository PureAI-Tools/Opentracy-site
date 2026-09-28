import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  if (!site.github) return NextResponse.json({ stars: null, repoUrl: null });

  try {
    const repoPath = new URL(site.github).pathname.replace(/\/$/, "");
    const response = await fetch(`https://api.github.com/repos${repoPath}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Lunar-Website",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          stars: null,
          repoUrl: site.github,
        },
        { status: 200 },
      );
    }

    const data = (await response.json()) as { stargazers_count?: number };

    return NextResponse.json({
      stars:
        typeof data.stargazers_count === "number"
          ? data.stargazers_count
          : null,
      repoUrl: site.github,
    });
  } catch {
    return NextResponse.json(
      { stars: null, repoUrl: site.github },
      { status: 200 },
    );
  }
}
