import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CommunityLinks from "@/components/CommunityLinks";

export const metadata: Metadata = {
  title: "Community — OpenTracy",
  description:
    "Join the OpenTracy community. Connect with developers building and deploying Small Language Models. Contribute, follow the roadmap, and shape the future of AI.",
};

const roadmapItems = [
  {
    status: "in-progress",
    title: "Open Source RLHF Feedback",
    description:
      "Collect and integrate human feedback to fine-tune models with reinforcement learning.",
  },
  {
    status: "in-progress",
    title: "Training Router Open Source",
    description:
      "Open source routing engine to direct queries to the optimal model based on complexity.",
  },
  {
    status: "planned",
    title: "Collaborative Workspaces",
    description:
      "Share projects, datasets, and models with your team in real time.",
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
            Join thousands of developers building Small Language Models with
            OpenTracy.
          </p>
        </div>

        {/* Community Links */}
        <CommunityLinks />

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
                  <p className="mt-1 text-sm text-[#666666]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              href="https://github.com/OpenTracy/OpenTracy"
              variant="secondary"
            >
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
            We welcome contributions of all kinds: code, documentation, bug
            reports, and feature requests.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              href="https://github.com/OpenTracy/OpenTracy/blob/main/CONTRIBUTING.md"
              variant="primary"
            >
              View contributing guide
            </Button>
            <Button
              href="https://github.com/OpenTracy/OpenTracy/issues?q=is%3Aopen+label%3A%22good+first+issue%22"
              variant="secondary"
            >
              Good first issues
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
