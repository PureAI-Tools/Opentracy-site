import { Metadata } from "next";
import Container from "@/components/Container";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy — OpenTracy",
  description:
    "Learn how OpenTracy collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto fade-in">
          <Badge variant="accent" className="mb-6">
            PRIVACY POLICY
          </Badge>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#666666] font-mono">
            Last updated: March 8, 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 max-w-3xl mx-auto space-y-16">
          {/* Introduction */}
          <section>
            <p className="text-sm text-[#444444] leading-relaxed">
              This Privacy Policy describes how OpenTracy (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
              your personal information when you use our website (opentracy.com),
              console (app.opentracy.com), APIs, documentation, and related
              services (collectively, the &quot;Services&quot;). By using our
              Services, you agree to the practices described in this policy.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">01.</span> Information We Collect
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-6">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Account Information
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  When you create an account, we collect your name, email
                  address, and password. If you sign up through a third-party
                  provider (e.g., GitHub, Google), we receive your name, email,
                  and profile information from that provider.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Usage Data
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  We automatically collect information about how you interact
                  with our Services, including IP address, browser type, device
                  information, pages visited, features used, timestamps, and
                  referring URLs.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Customer Data
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  When you use our platform for model distillation, evaluation,
                  or deployment, you may submit data including production traces,
                  model configurations, training data, and evaluation results
                  (&quot;Customer Data&quot;). You retain all rights to your
                  Customer Data. We process it solely to provide the Services.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Payment Information
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  Payment processing is handled by third-party processors. We do
                  not store credit card numbers. We retain billing addresses,
                  transaction history, and subscription details.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Cookies &amp; Tracking
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  We use cookies and similar technologies for authentication,
                  security, preferences, and analytics. You can manage cookie
                  preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">02.</span> How We Use Your
              Information
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <ul className="space-y-3">
                {[
                  "Provide, operate, and maintain the Services",
                  "Process transactions and manage your account",
                  "Send service-related communications (updates, security alerts, support)",
                  "Improve, personalize, and develop new features",
                  "Monitor and analyze usage patterns and performance",
                  "Detect, prevent, and address fraud, abuse, and security issues",
                  "Comply with legal obligations and enforce our agreements",
                  "Respond to your requests, comments, and questions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 mt-0.5 shrink-0 font-mono">
                      [+]
                    </span>
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">03.</span> How We Share Your
              Information
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We do not sell your personal information. We may share
                information in the following circumstances:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Service Providers",
                    description:
                      "Third-party vendors who help us operate the Services (hosting, analytics, payment processing, support). They access data only as needed and under contractual obligations.",
                  },
                  {
                    title: "Legal Requirements",
                    description:
                      "When required by law, regulation, legal process, or governmental request. We will notify you when legally permitted.",
                  },
                  {
                    title: "Business Transfers",
                    description:
                      "In connection with a merger, acquisition, reorganization, or sale of assets. Your data will remain subject to the terms of this policy.",
                  },
                  {
                    title: "With Your Consent",
                    description:
                      "When you explicitly authorize us to share information with a third party.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-mono text-sm font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">04.</span> Data Retention
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We retain your personal information for as long as your account
                is active or as needed to provide you Services. We retain and
                use your information as necessary to comply with legal
                obligations, resolve disputes, and enforce our agreements. When
                you delete your account, we remove your personal data within 30
                days, except where retention is required by law. Customer Data is
                deleted according to your configured retention policies or
                within 30 days of account termination.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">05.</span> Data Security
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We implement industry-standard security measures to protect your
                data. All data is encrypted at rest (AES-256) and in transit (TLS
                1.2+). We maintain strict access controls, audit logging, and
                tenant isolation. For more details, see our{" "}
                <a
                  href="/security"
                  className="text-[#0070f3] hover:underline"
                >
                  Security page
                </a>
                . No method of transmission or storage is 100% secure. If you
                have concerns, contact us at{" "}
                <span className="text-[#0070f3]">privacy@opentracy.com</span>.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">06.</span> Your Rights
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="space-y-3">
                {[
                  "Access — Request a copy of the personal data we hold about you",
                  "Correction — Request correction of inaccurate or incomplete data",
                  "Deletion — Request deletion of your personal data",
                  "Portability — Request a machine-readable copy of your data",
                  "Restriction — Request restriction of processing in certain circumstances",
                  "Objection — Object to processing based on legitimate interests",
                  "Withdraw Consent — Where processing is based on consent, withdraw it at any time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 mt-0.5 shrink-0 font-mono">
                      [+]
                    </span>
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#666666] leading-relaxed mt-4">
                To exercise any of these rights, contact us at{" "}
                <span className="text-[#0070f3]">privacy@opentracy.com</span>.
                We will respond within 30 days.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">07.</span> International Data
              Transfers
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place, including standard contractual clauses and
                equivalent protections for international transfers of personal
                data.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">08.</span> Children&apos;s
              Privacy
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                Our Services are not directed to individuals under the age of
                16. We do not knowingly collect personal information from
                children. If we learn we have collected data from a child under
                16, we will delete it promptly. If you believe a child has
                provided us with personal data, please contact us at{" "}
                <span className="text-[#0070f3]">privacy@opentracy.com</span>.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">09.</span> Changes to This Policy
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                this page and updating the &quot;Last updated&quot; date. Your
                continued use of the Services after any changes constitutes
                acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">10.</span> Contact Us
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                If you have questions about this Privacy Policy or our data
                practices, contact us at:
              </p>
              <div className="mt-4 space-y-2 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">Email</span>
                  <span className="text-[#0070f3]">privacy@opentracy.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">Web</span>
                  <span className="text-[#0070f3]">opentracy.com</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
