import { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Security — Lunar",
  description: "Learn about Lunar's security practices, compliance certifications, and data protection measures.",
};

const securityFeatures = [
  {
    title: "Tenant Isolation",
    description:
      "Complete data isolation between customers. Your traces and models are never shared or accessible to others.",
    icon: "┌──┐\n│▪▪│\n└──┘",
  },
  {
    title: "Bring Your Own Keys",
    description:
      "Use your own encryption keys for data at rest. Full control over your encryption lifecycle.",
    icon: "┌──┐\n│⚿ │\n└──┘",
  },
  {
    title: "Audit Logs",
    description:
      "Comprehensive logging of all actions. Export logs to your SIEM for compliance and monitoring.",
    icon: "┌──┐\n│≡ │\n└──┘",
  },
  {
    title: "VPC Deployment",
    description:
      "Deploy Lunar within your VPC. Data never leaves your network perimeter.",
    icon: "┌──┐\n│◈◈│\n└──┘",
  },
];

const complianceItems = [
  {
    title: "SOC 2 Type II",
    status: "certified",
    description: "Independently audited security controls for service organizations.",
  },
  {
    title: "GDPR",
    status: "compliant",
    description: "Full compliance with EU data protection regulations.",
  },
  {
    title: "HIPAA",
    status: "available",
    description: "BAA available for healthcare organizations on Enterprise plans.",
  },
  {
    title: "ISO 27001",
    status: "in-progress",
    description: "Information security management certification in progress.",
  },
];

const securityChecklist = [
  { category: "Data Protection", items: [
    "AES-256 encryption at rest",
    "TLS 1.3 encryption in transit",
    "Customer-managed encryption keys",
    "Automatic data retention policies",
  ]},
  { category: "Access Control", items: [
    "Role-based access control (RBAC)",
    "SSO / SAML 2.0 integration",
    "Multi-factor authentication",
    "API key rotation and scoping",
  ]},
  { category: "Infrastructure", items: [
    "SOC 2 certified cloud providers",
    "Multi-region redundancy",
    "DDoS protection",
    "Regular penetration testing",
  ]},
  { category: "Monitoring", items: [
    "24/7 security monitoring",
    "Anomaly detection",
    "Incident response team",
    "Vulnerability scanning",
  ]},
];

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Enterprise Security
          </h1>
          <p className="mt-4 text-[#888888]">
            Built for teams with strict compliance requirements. Your data is encrypted, isolated, and under your control.
          </p>
        </div>

        {/* Security Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature) => (
            <Card key={feature.title}>
              <pre className="ascii-art mb-4">{feature.icon}</pre>
              <h3 className="font-mono text-lg font-bold uppercase">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[#888888]">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Compliance */}
        <div className="mt-24">
          <SectionHeading
            title="Compliance"
            subtitle="Meeting the highest standards for security and privacy."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item) => (
              <div key={item.title} className="border border-[#333333] p-6">
                <div
                  className={`inline-block font-mono text-xs uppercase tracking-wider px-2 py-1 mb-4 ${
                    item.status === "certified"
                      ? "bg-green-500/10 text-green-500 border border-green-500/30"
                      : item.status === "compliant"
                      ? "bg-green-500/10 text-green-500 border border-green-500/30"
                      : item.status === "available"
                      ? "bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30"
                      : "bg-[#333333]/50 text-[#888888] border border-[#333333]"
                  }`}
                >
                  {item.status}
                </div>
                <h3 className="font-mono text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#888888]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Checklist */}
        <div className="mt-24">
          <SectionHeading
            title="Security Posture"
            subtitle="Comprehensive security controls across all layers."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityChecklist.map((section) => (
              <div key={section.category} className="border border-[#333333] p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#888888] mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="text-[#f59e0b]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Center */}
        <div className="mt-24 border border-[#333333] p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-mono text-2xl font-bold uppercase tracking-tight">
                Trust Center
              </h2>
              <p className="mt-4 text-[#888888]">
                Access our security documentation, compliance reports, and penetration test summaries. Available to customers and prospects under NDA.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Button href="#" variant="primary">
                  Request access
                </Button>
                <Button href="#" variant="secondary">
                  Contact security team
                </Button>
              </div>
            </div>
            <div className="border border-[#333333] p-6 bg-[#0a0a0a]">
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#888888] mb-4">
                Available documents
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-[#888888]">→</span>
                  SOC 2 Type II Report
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#888888]">→</span>
                  Penetration Test Summary
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#888888]">→</span>
                  Security Whitepaper
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#888888]">→</span>
                  Data Processing Agreement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#888888]">→</span>
                  Vendor Security Questionnaire
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Responsible Disclosure */}
        <div className="mt-16 text-center">
          <h3 className="font-mono text-lg font-bold uppercase">
            Responsible Disclosure
          </h3>
          <p className="mt-2 text-sm text-[#888888] max-w-xl mx-auto">
            Found a security vulnerability? We appreciate responsible disclosure. Please email security@lunar.dev with details.
          </p>
        </div>
      </Container>
    </div>
  );
}
