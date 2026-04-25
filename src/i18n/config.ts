export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "pt"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export type Dictionary = {
  nav: {
    features: string;
    platform: string;
    docs: string;
    pricing: string;
    blog: string;
    github: string;
    getStarted: string;
    toggleMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footnote: string;
  };
  providers: {
    heading: string;
    plusMore: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    yourApp: string;
    yourAppSub: string;
    opentracy: string;
    opentracySub: string;
  };
  metrics: {
    providers: string;
    providersLabel: string;
    models: string;
    modelsLabel: string;
    overhead: string;
    overheadLabel: string;
    license: string;
    licenseLabel: string;
  };
  features: {
    title: string;
    titleAccent: string;
    subtitle: string;
    oneApi: {
      title: string;
      description: string;
      modelPills: string[];
      andMore: string;
    };
    realTimeTraces: {
      title: string;
      description: string;
    };
    costTracking: {
      title: string;
      description: string;
    };
    smartRouting: {
      title: string;
      description: string;
    };
    qualityMonitoring: {
      title: string;
      description: string;
    };
    modelDistillation: {
      title: string;
      description: string;
    };
  };
  sdk: {
    title: string;
    subtitle: string;
    openaiCompatible: {
      title: string;
      description: string;
    };
    automaticFallbacks: {
      title: string;
      description: string;
    };
    costOnResponse: {
      title: string;
      description: string;
    };
    fullStreaming: {
      title: string;
      description: string;
    };
  };
  cta: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footnote: string;
  };
  dashboard: {
    title: string;
    requestsToday: string;
    totalCost: string;
    avgQuality: string;
    recentTraces: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    bestValue: string;
    plans: {
      free: {
        name: string;
        description: string;
        cta: string;
        features: string[];
      };
      starter: {
        name: string;
        description: string;
        cta: string;
        features: string[];
      };
      enterprise: {
        name: string;
        description: string;
        cta: string;
        features: string[];
      };
    };
    billingNote: string;
    faqTitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  docs: {
    title: string;
    subtitle: string;
    quickstart: string;
    exploreTitle: string;
    categories: {
      gettingStarted: { title: string; description: string };
      modelsProviders: { title: string; description: string };
      routingStrategies: { title: string; description: string };
      observability: { title: string; description: string };
      evaluations: { title: string; description: string };
      selfHosting: { title: string; description: string };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
      company: string;
    }>;
  };
  community: {
    title: string;
    subtitle: string;
    discordCta: string;
    githubCta: string;
    stats: {
      githubStars: string;
      contributors: string;
      discordMembers: string;
    };
  };
  platform: {
    title: string;
    subtitle: string;
    badge: string;
    pills: string[];
    overview: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    sections: {
      gateway: { title: string; subtitle: string; features: string[] };
      routing: { title: string; subtitle: string; features: string[] };
      traces: { title: string; subtitle: string; features: string[] };
      costIntel: { title: string; subtitle: string; features: string[] };
      quality: { title: string; subtitle: string; features: string[] };
      evals: { title: string; subtitle: string; features: string[] };
      distillation: { title: string; subtitle: string; features: string[] };
      clustering: { title: string; subtitle: string; features: string[] };
      deployment: { title: string; subtitle: string; features: string[] };
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    emptyState: {
      badge: string;
      title: string;
      description: string;
      note: string;
    };
  };
  footer: {
    tagline: string;
    product: string;
    resources: string;
    legal: string;
    features: string;
    platform: string;
    pricing: string;
    docs: string;
    security: string;
    blog: string;
    community: string;
    github: string;
    discord: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
};
