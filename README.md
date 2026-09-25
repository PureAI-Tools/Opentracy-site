# Lunar

Marketing site for Lunar, an enterprise AI lab specializing in reinforcement learning environments and Small Language Models (SLMs). Engagements cover environment design, data curation, training, evaluation, and deployment with client teams. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The site supports English (`/en`), Portuguese (`/pt`), and Spanish (`/es`).

```sh
npm run lint
npx tsc --noEmit
npm run build
```

## Brand and UI

- White and soft lilac surfaces, charcoal typography, and a warm yellow Lunar accent.
- Plus Jakarta Sans for the interface and JetBrains Mono for code.
- Orbital L symbol with a yellow satellite and custom rounded vector lettering, plus the illustrated moon companion.
- Logo exports in `public/brand/`: color, white, monochrome, standalone symbol, and transparent PNG. Favicons, app icons, and sharing images use the same geometry.
- Two interactive project examples: a resource-allocation RL environment and a document-extraction SLM, each with its challenge, implementation, deliverables, and evaluation criteria.
- Two equally prominent specializations, available independently or combined. Agents and integrations support these projects.
- Animated RL allocation example with an actual deterministic one-step learning loop, action values, rewards, pause, manual stepping, reset, and environment constraints. It stops after four episodes and respects reduced motion and viewport visibility.
- The AI Lab page at `/[locale]/enterprise` is an interactive research playground: a pointer-reactive agent, a system loop, RL environments, local evaluation fixtures, and a small-model workflow. It uses native graphics rather than platform screenshots.
- Clear engagement process and deliverables, with commercial contact as the primary action.
- Supporting technology section with a real evaluation interface. Python, TypeScript, and cURL examples remain available in the documentation.
- Product screenshots with keyboard-accessible fullscreen dialogs.
- Native mobile navigation dialog, keyboard tabs, visible focus, and reduced-motion support.

Shared styling lives in `src/app/lunar.css`; homepage layouts are in `src/app/ai-lab.css`, the research page in `src/app/research-lab.css`, and the shared RL animation in `src/app/rl-environment.css`. Homepage, navigation, and commercial copy are in `src/i18n/aiLab.ts`; research and animation copy are in `src/i18n/researchLab.ts` and `src/i18n/rlEnvironment.ts`. Software documentation copy is in `src/i18n/lunar.ts`; other page translations remain in `src/i18n/dictionaries/`.

Logo geometry is shared by the React components and asset generator through `src/lib/brand.json`. Run `node scripts/generate-brand-assets.mjs` after changing it to regenerate the static brand assets.

## Routes

The main journey is home → capabilities and engagement process → project conversation. The Enterprise page expands on AI lab services. Software infrastructure, docs, and community are secondary resources; existing platform, pricing, and getting-started routes remain available.

The getting-started page offers the cloud console and the repository's deployment instructions. The localized docs page introduces the OpenAI-compatible integration; detailed documentation is proxied under `/docs`.

## Service destinations

Public branding is Lunar. Existing service destinations are preserved until new hostnames are confirmed. Configure these independently when migrating:

- `NEXT_PUBLIC_SITE_URL`: canonical website origin.
- `NEXT_PUBLIC_APP_URL`: cloud console destination.
- `NEXT_PUBLIC_DEMO_URL`: contact/demo scheduling destination.
- `DOCS_ORIGIN`: origin used by the documentation proxy.
- `NEXT_PUBLIC_POSTHOG_ENABLED`: set to `true` to turn on PostHog analytics. Off by default; when off, PostHog is not bundled and no events are sent.
- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`: PostHog project token, required when analytics is enabled.

Defaults live in `src/lib/site.ts` and `next.config.ts`. The GitHub repository is `lunar-org-ai/lunar-router`. Existing legal/security email addresses remain valid destinations behind Lunar contact labels.

The Python and TypeScript examples use `LUNAR_BASE_URL` and `LUNAR_API_KEY`; set these to the endpoint (including `/v1`) and key from your workspace. Provider charges are separate from platform plans.

The external application and documentation service are separate deployments; their branding must be migrated in their own repositories.
