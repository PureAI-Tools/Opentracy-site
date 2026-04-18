import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import AsciiWindow, { AsciiPanel } from "@/components/AsciiWindow";

export const metadata: Metadata = {
  title: "Security — OpenTracy",
  description:
    "Learn about OpenTracy's security architecture, encryption, tenant isolation, and data protection measures.",
};

const securityStats = [
  { value: "AES-256", label: "encryption at rest" },
  { value: "TLS 1.2+", label: "encryption in transit" },
  { value: "100%", label: "tenant isolation" },
  { value: "0", label: "plaintext secrets" },
];

const architectureFeatures = [
  {
    title: "Encrypted by default",
    description:
      "All data is encrypted at rest and in transit. No exceptions, no opt-in required. Your models and traces are protected from the moment they enter our platform.",
    badge: "CORE",
  },
  {
    title: "Tenant Isolation",
    description:
      "Every customer operates in a fully isolated environment. Your data is never shared, mixed, or accessible to other tenants — at any layer.",
    badge: "CORE",
  },
  {
    title: "Bring Your Own Keys",
    description:
      "Use your own encryption keys for data at rest. Full control over your encryption lifecycle, rotation, and revocation.",
    badge: "ENTERPRISE",
  },
  {
    title: "Private Deployment",
    description:
      "Deploy OpenTracy entirely within your own network. Data never leaves your perimeter. Air-gapped mode available for regulated environments.",
    badge: "ENTERPRISE",
  },
];

const protectionItems = [
  "All data encrypted at rest (AES-256) and in transit (TLS 1.2+)",
  "Customer-managed encryption keys",
  "Automated backups with encryption and retention policies",
  "Multi-region redundancy with automatic failover",
  "Secure deletion with configurable retention",
];

const accessItems = [
  "Multi-factor authentication enforced",
  "Dual authentication — token-based and key-based",
  "API keys hashed and never stored in plaintext",
  "Strong password policies enforced",
  "Rate limiting on all API endpoints",
  "Service-to-service authentication between internal components",
];

const infraItems = [
  "Private network — no public database access",
  "Strict firewall rules at every layer",
  "Internal traffic never routed through the public internet",
  "Encrypted compute and storage volumes",
  "Explicit origin allow-lists — no wildcard CORS",
  "Infrastructure as Code — no manual changes, full auditability",
];

const monitoringItems = [
  "Structured logging on all services",
  "Access logs with IP, method, status, and latency",
  "Authentication events logged with context",
  "Failed login attempts tracked and flagged",
  "Key operations (create, revoke) logged with audit trail",
  "Configurable log retention policies",
];

const roadmapItems = [
  {
    title: "SOC 2 Type II",
    description:
      "Independent audit of security controls. Our practices are aligned — formal certification in progress.",
    status: "PLANNED",
  },
  {
    title: "GDPR",
    description:
      "Data deletion, retention, and encryption already in place. Formal compliance documentation underway.",
    status: "IN PROGRESS",
  },
  {
    title: "HIPAA",
    description:
      "Encryption, logging, and access controls ready. BAA documentation on the roadmap.",
    status: "PLANNED",
  },
  {
    title: "ISO 27001",
    description:
      "Security management practices aligned. Formal certification will follow SOC 2.",
    status: "PLANNED",
  },
];

const trustDocuments = [
  { name: "Security Architecture Overview" },
  { name: "Data Processing Agreement" },
  { name: "Vendor Security Questionnaire" },
  { name: "Infrastructure Diagram" },
  { name: "Encryption & Key Management Details" },
  { name: "Tenant Isolation Whitepaper" },
];

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto fade-in">
          <Badge variant="accent" className="mb-6">
            SECURITY-FIRST ARCHITECTURE
          </Badge>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1]">
            Your data never touches{" "}
            <span className="highlight-box">plaintext.</span>
          </h1>
          <p className="mt-6 text-lg text-[#666666] max-w-2xl mx-auto">
            Everything is encrypted, isolated, and auditable. Security isn&apos;t
            a feature we added — it&apos;s how OpenTracy was built from day one.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 border border-[#e0e0e0] bg-[#f8f8f8]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {securityStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 text-center ${i < securityStats.length - 1 ? "md:border-r md:border-[#e0e0e0]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[#e0e0e0]" : ""}`}
              >
                <div className="font-mono text-lg font-bold text-[#0070f3]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ASCII Monitor */}
        <div className="mt-16">
          <AsciiWindow
            title="LUNAR / SECURITY STATUS"
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AsciiPanel title="ENCRYPTION">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[SYS]</span> At rest:{" "}
                    <span className="success">AES-256</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[SYS]</span> In transit:{" "}
                    <span className="success">TLS 1.2+</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[SYS]</span> Keys:{" "}
                    <span className="success">customer-managed</span>
                  </div>
                </div>
              </AsciiPanel>
              <AsciiPanel title="ACCESS">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[AUTH]</span> MFA:{" "}
                    <span className="success">enforced</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[AUTH]</span> Tokens:{" "}
                    <span className="success">verified</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[AUTH]</span> Secrets:{" "}
                    <span className="success">zero plaintext</span>
                  </div>
                </div>
              </AsciiPanel>
              <AsciiPanel title="ISOLATION">
                <div className="space-y-1 font-mono text-xs">
                  <div className="log-line">
                    <span className="timestamp">[NET]</span> Network:{" "}
                    <span className="success">private</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[NET]</span> Tenants:{" "}
                    <span className="success">fully isolated</span>
                  </div>
                  <div className="log-line">
                    <span className="timestamp">[NET]</span> Database:{" "}
                    <span className="success">no public access</span>
                  </div>
                </div>
              </AsciiPanel>
            </div>
            <div className="mt-4">
              <div className="progress-bar">
                <div className="progress-bar-fill" />
              </div>
              <div className="mt-3 font-mono text-xs text-[#666666]">
                <span className="blink-caret">
                  All systems operational
                </span>
              </div>
            </div>
          </AsciiWindow>
        </div>

        <div className="section-divider mt-24" />

        {/* Architecture */}
        <div className="mt-24">
          <SectionHeading
            title="Security Architecture"
            subtitle="Defense in depth at every layer. No shortcuts."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureFeatures.map((feature) => (
              <Card key={feature.title} className="relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-mono text-lg font-bold uppercase">
                    {feature.title}
                  </h3>
                  <span
                    className={`shrink-0 font-mono text-[10px] uppercase tracking-wider px-2 py-1 ${
                      feature.badge === "CORE"
                        ? "bg-green-500/10 text-green-500 border border-green-500/30"
                        : "bg-[#f59e0b]/10 text-[#0070f3] border border-[#f59e0b]/30"
                    }`}
                  >
                    {feature.badge}
                  </span>
                </div>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="section-divider mt-24" />

        {/* Security Posture */}
        <div className="mt-24">
          <SectionHeading
            title="Security Posture"
            subtitle="Comprehensive controls across every layer of the stack."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Data Protection", items: protectionItems },
              { title: "Access Control", items: accessItems },
              { title: "Infrastructure", items: infraItems },
              { title: "Logging & Monitoring", items: monitoringItems },
            ].map((section) => (
              <div
                key={section.title}
                className="border border-[#e0e0e0] p-6 bg-[#f8f8f8]"
              >
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-5 flex items-center gap-2">
                  <span>///</span> {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        [+]
                      </span>
                      <span className="text-[#444444]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mt-24" />

        {/* Compliance Roadmap */}
        <div className="mt-24">
          <SectionHeading
            title="Compliance Roadmap"
            subtitle="Building toward formal certifications."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="border border-[#e0e0e0] p-6 bg-[#f8f8f8] flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl text-[#666666]">◈</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#f59e0b]/10 text-[#0070f3] border border-[#f59e0b]/30">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-mono text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666666] leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mt-24" />

        {/* Trust Center */}
        <div className="mt-24 border border-[#e0e0e0] bg-[#f8f8f8]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:border-r border-[#e0e0e0]">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-2">
                /// Trust Center
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                Available to customers and qualified prospects.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {trustDocuments.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-2 text-sm py-2"
                  >
                    <span className="text-green-500 font-mono text-xs">
                      [+]
                    </span>
                    <span className="text-[#444444]">{doc.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-mono text-xl font-bold uppercase mb-3">
                Need security details?
              </h3>
              <p className="text-sm text-[#666666] mb-6 leading-relaxed">
                Our team responds within 24 hours with architecture diagrams,
                encryption details, and completed vendor questionnaires.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Button href="#" variant="primary">
                  Request access
                </Button>
                <Button href="#" variant="secondary">
                  Contact security team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight">
            Your data. Your keys. Your network.
          </h2>
          <p className="mt-4 text-[#666666]">
            Have security requirements? Our team works directly with yours to
            meet them.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/pricing" variant="primary">
              Start Enterprise trial
            </Button>
            <Button href="#" variant="secondary">
              Book security review
            </Button>
          </div>
          <div className="mt-16 border-t border-[#e0e0e0] pt-8">
            <h3 className="font-mono text-sm uppercase tracking-wider text-[#666666]">
              Responsible Disclosure
            </h3>
            <p className="mt-2 text-sm text-[#666666]">
              Found a vulnerability? Email{" "}
              <span className="text-[#0070f3]">security@opentracy.com</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
