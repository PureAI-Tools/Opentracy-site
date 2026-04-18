export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "pt"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export type Dictionary = {
  nav: {
    features: string;
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
    subtitle: string;
    oneApi: {
      title: string;
      description: string;
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
  blog: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    product: string;
    resources: string;
    legal: string;
    features: string;
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
