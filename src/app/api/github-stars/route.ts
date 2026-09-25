import { NextResponse } from "next/server";

const REPO_OWNER = "lunar-org-ai";
const REPO_NAME = "lunar-router";
const GITHUB_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(GITHUB_API_URL, {
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
          repoUrl: `https://github.com/${REPO_OWNER}/${REPO_NAME}`,
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
      repoUrl: `https://github.com/${REPO_OWNER}/${REPO_NAME}`,
    });
  } catch {
    return NextResponse.json(
      { stars: null, repoUrl: `https://github.com/${REPO_OWNER}/${REPO_NAME}` },
      { status: 200 },
    );
  }
}
