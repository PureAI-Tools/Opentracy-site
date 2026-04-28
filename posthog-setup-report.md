<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the OpenTracy marketing site. PostHog was already partially set up (`posthog-js` installed, `PostHogProvider` wrapping the app, and `cta_clicked` tracking in `Button.tsx`). This integration extended coverage to navigation interactions, language switching, mobile menu engagement, community card clicks, and blog post navigation — all areas that were previously untracked.

**Files created:**
- `src/components/BlogList.tsx` — Client component that renders the blog post list with `blog_post_clicked` tracking
- `src/components/DiscordCommunityCard.tsx` — Client component for the Discord community card with `discord_community_clicked` tracking

**Files modified:**
- `src/components/Navbar.tsx` — Added `usePostHog` and 4 new capture calls
- `src/app/[locale]/blog/page.tsx` — Replaced inline blog list with `BlogList` client component
- `src/app/[locale]/page.tsx` — Replaced inline Discord card with `DiscordCommunityCard` client component

**Environment variables updated** in `.env.local`:
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `cta_clicked` | Button/CTA click with label, href, and variant (pre-existing) | `src/components/Button.tsx` |
| `nav_link_clicked` | User clicks a desktop or mobile navigation link | `src/components/Navbar.tsx` |
| `language_switched` | User switches locale via the language switcher | `src/components/Navbar.tsx` |
| `mobile_menu_toggled` | User opens or closes the mobile hamburger menu | `src/components/Navbar.tsx` |
| `github_cta_clicked` | User clicks the GitHub stars badge or Get Started link in the navbar | `src/components/Navbar.tsx` |
| `discord_community_clicked` | User clicks the Discord community card on the homepage | `src/components/DiscordCommunityCard.tsx` |
| `blog_post_clicked` | User clicks a blog post entry on the blog list page | `src/components/BlogList.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/397841/dashboard/1511286
- **CTA Clicks — Daily Trend:** https://us.posthog.com/project/397841/insights/9YC4BJfT
- **GitHub CTA Clicks by Source:** https://us.posthog.com/project/397841/insights/MfViz8w0
- **Top Navigation Links Clicked:** https://us.posthog.com/project/397841/insights/yewz0bUp
- **Community Engagement Funnel:** https://us.posthog.com/project/397841/insights/xvfCZssL
- **Language Distribution:** https://us.posthog.com/project/397841/insights/u581iRkm

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
