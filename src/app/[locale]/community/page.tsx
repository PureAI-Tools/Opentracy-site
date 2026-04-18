import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Community — OpenTracy",
  description: "Join the OpenTracy community. Connect with developers building and deploying Small Language Models. Contribute, follow the roadmap, and shape the future of AI.",
};

const communityLinks = [
  {
    title: "GitHub",
    description: "Star the repo, report issues, and contribute to OpenTracy.",
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    href: "https://github.com",
    cta: "View source code",
  },
  {
    title: "Discord",
    description: "Chat with the team and help shape what we build next.",
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    href: "https://discord.gg",
    cta: "Join the conversation",
  },
  {
    title: "Twitter / X",
    description: "Follow for updates, releases, and behind-the-scenes.",
    icon: (
      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: "https://twitter.com",
    cta: "Follow us",
  },
];

const roadmapItems = [
  {
    status: "in-progress",
    title: "Open Source RLHF Feedback",
    description: "Collect and integrate human feedback to fine-tune models with reinforcement learning.",
  },
  {
    status: "in-progress",
    title: "Training Router Open Source",
    description: "Open source routing engine to direct queries to the optimal model based on complexity.",
  },
  {
    status: "planned",
    title: "Collaborative Workspaces",
    description: "Share projects, datasets, and models with your team in real time.",
  },
  {
    status: "planned",
    title: "Edge Deployment SDK",
    description: "Deploy SLMs to edge devices with a single command.",
  },
];


export default function CommunityPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Built with the community
          </h1>
          <p className="mt-4 text-[#666666]">
            Join thousands of developers building Small Language Models with OpenTracy.
          </p>
        </div>

        {/* Community Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="border border-[#e0e0e0] p-6 hover:border-white/30 transition-colors group"
            >
              <div className="text-[#666666] group-hover:text-[#111] transition-colors">
                {link.icon}
              </div>
              <h2 className="mt-4 font-mono text-lg font-bold uppercase">
                {link.title}
              </h2>
              <p className="mt-2 text-sm text-[#666666]">{link.description}</p>
              <div className="mt-4 font-mono text-xs text-[#0070f3] flex items-center gap-1">
                {link.cta} <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Roadmap */}
        <div className="mt-24">
          <h2 className="font-mono text-2xl font-bold uppercase tracking-tight text-center mb-12">
            Public Roadmap
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="border border-[#e0e0e0] p-4 flex items-start gap-4"
              >
                <div
                  className={`font-mono text-xs uppercase tracking-wider px-2 py-1 ${
                    item.status === "completed"
                      ? "bg-green-500/10 text-green-500 border border-green-500/30"
                      : item.status === "in-progress"
                      ? "bg-[#f59e0b]/10 text-[#0070f3] border border-[#f59e0b]/30"
                      : "bg-[#333333]/50 text-[#666666] border border-[#e0e0e0]"
                  }`}
                >
                  {item.status === "completed"
                    ? "Done"
                    : item.status === "in-progress"
                    ? "In Progress"
                    : "Planned"}
                </div>
                <div className="flex-1">
                  <h3 className="font-mono text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#666666]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="https://github.com" variant="secondary">
              View full roadmap on GitHub
            </Button>
          </div>
        </div>

        {/* Contribute CTA */}
        <div className="mt-24 border border-[#e0e0e0] p-12 text-center">
          <h2 className="font-mono text-2xl font-bold uppercase tracking-tight">
            Want to contribute?
          </h2>
          <p className="mt-4 text-[#666666] max-w-xl mx-auto">
            We welcome contributions of all kinds: code, documentation, bug reports, and feature requests.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="https://github.com" variant="primary">
              View contributing guide
            </Button>
            <Button href="https://github.com" variant="secondary">
              Good first issues
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
