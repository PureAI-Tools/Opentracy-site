import { Metadata } from "next";
import Container from "@/components/Container";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Terms of Service — OpenTracy",
  description:
    "Terms and conditions governing the use of OpenTracy's platform and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 bg-grid min-h-screen">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto fade-in">
          <Badge variant="accent" className="mb-6">
            TERMS OF SERVICE
          </Badge>
          <h1 className="font-mono text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.1]">
            Terms of Service
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
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the services provided by OpenTracy (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), including our website
              (opentracy.com), console (app.opentracy.com), APIs,
              documentation, and related services (collectively, the
              &quot;Services&quot;). By accessing or using the Services, you
              agree to be bound by these Terms. If you do not agree, do not use
              the Services.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">01.</span> Eligibility
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                You must be at least 16 years old to use the Services. If you
                are using the Services on behalf of an organization, you
                represent and warrant that you have the authority to bind that
                organization to these Terms. &quot;You&quot; refers to both you
                individually and the organization you represent.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">02.</span> Account Registration
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-4">
              <p className="text-sm text-[#444444] leading-relaxed">
                To access certain features, you must create an account. You
                agree to:
              </p>
              <ul className="space-y-3">
                {[
                  "Provide accurate and complete registration information",
                  "Maintain the security of your account credentials",
                  "Notify us immediately of any unauthorized access",
                  "Accept responsibility for all activity under your account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 mt-0.5 shrink-0 font-mono">
                      [+]
                    </span>
                    <span className="text-[#444444]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#666666] leading-relaxed">
                We reserve the right to suspend or terminate accounts that
                violate these Terms or pose a security risk.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">03.</span> Use of Services
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-6">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Permitted Use
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  You may use the Services for lawful purposes in accordance
                  with these Terms. We grant you a limited, non-exclusive,
                  non-transferable, revocable license to access and use the
                  Services during your subscription term.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Restrictions
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Reverse engineer, decompile, or disassemble the Services",
                    "Use the Services to build a competing product or service",
                    "Access the Services through automated means (except authorized APIs)",
                    "Interfere with the operation or security of the Services",
                    "Use the Services to transmit malware, spam, or harmful content",
                    "Sublicense, resell, or redistribute the Services without authorization",
                    "Violate any applicable law or regulation in your use of the Services",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="text-red-500 mt-0.5 shrink-0 font-mono">
                        [x]
                      </span>
                      <span className="text-[#444444]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">04.</span> Customer Data
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-4">
              <p className="text-sm text-[#444444] leading-relaxed">
                You retain all rights, title, and interest in your Customer
                Data. &quot;Customer Data&quot; includes production traces,
                model configurations, training data, evaluation results, and
                any other data you submit to the Services.
              </p>
              <ul className="space-y-3">
                {[
                  "We process Customer Data solely to provide and improve the Services",
                  "We do not use Customer Data to train our own models or for any other purpose",
                  "We do not share Customer Data with third parties except as required to operate the Services",
                  "You are responsible for ensuring you have the right to submit Customer Data",
                  "Upon termination, Customer Data is deleted per your retention settings or within 30 days",
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

          {/* Section 5 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">05.</span> Payment &amp; Billing
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-4">
              <p className="text-sm text-[#444444] leading-relaxed">
                Certain Services require payment. By subscribing to a paid plan,
                you agree to:
              </p>
              <ul className="space-y-3">
                {[
                  "Pay all fees according to the pricing in effect at the time of purchase",
                  "Provide accurate billing information and keep it up to date",
                  "Fees are non-refundable except as required by law or stated in our refund policy",
                  "We may change pricing with 30 days notice before your next billing cycle",
                  "Unpaid fees may result in suspension or termination of access",
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

          {/* Section 6 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">06.</span> Intellectual Property
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-6">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Our IP
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  The Services, including all software, algorithms, interfaces,
                  documentation, and branding, are owned by OpenTracy and protected
                  by intellectual property laws. Nothing in these Terms grants
                  you ownership of any part of the Services.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Your Models
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  Models you create, fine-tune, or distill using the Services
                  belong to you. You retain all rights to the output models
                  generated through the platform, subject to any applicable
                  third-party license terms of the base models used.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#0070f3] mb-3">
                  /// Feedback
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  If you provide feedback, suggestions, or ideas about the
                  Services, you grant us a non-exclusive, royalty-free,
                  perpetual, irrevocable license to use and incorporate that
                  feedback without obligation to you.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">07.</span> Service Availability
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We strive to maintain high availability but do not guarantee
                uninterrupted access. We may modify, suspend, or discontinue
                any part of the Services at any time. For paid plans, service
                level commitments are defined in your applicable Service Level
                Agreement (SLA). We will provide reasonable notice before
                discontinuing material functionality.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">08.</span> Limitation of
              Liability
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-4">
              <p className="text-sm text-[#444444] leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUNAR SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR
                RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-sm text-[#444444] leading-relaxed">
                OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF
                THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID
                US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">09.</span> Disclaimer of
              Warranties
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">10.</span> Indemnification
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                You agree to indemnify, defend, and hold harmless OpenTracy and its
                officers, directors, employees, and agents from any claims,
                losses, damages, liabilities, and expenses (including legal
                fees) arising from your use of the Services, violation of these
                Terms, or infringement of any third-party rights.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">11.</span> Termination
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6 space-y-4">
              <p className="text-sm text-[#444444] leading-relaxed">
                Either party may terminate these Terms at any time. You may
                terminate by closing your account. We may terminate or suspend
                your access immediately if you breach these Terms.
              </p>
              <p className="text-sm text-[#444444] leading-relaxed">
                Upon termination: your license to use the Services ends
                immediately; we will delete your Customer Data according to your
                retention settings or within 30 days; provisions that by their
                nature should survive (including liability, indemnification, and
                intellectual property) will remain in effect.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">12.</span> Governing Law
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of the jurisdiction in which OpenTracy is incorporated, without
                regard to conflict of law principles. Any disputes arising from
                these Terms shall be resolved in the competent courts of that
                jurisdiction.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">13.</span> Changes to These Terms
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                We may update these Terms from time to time. We will notify you
                of material changes by posting the updated Terms on this page
                and updating the &quot;Last updated&quot; date. For material
                changes, we will provide at least 30 days notice. Your continued
                use of the Services after any changes constitutes acceptance of
                the updated Terms.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-mono text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
              <span className="text-[#0070f3]">14.</span> Contact Us
            </h2>
            <div className="border border-[#e0e0e0] bg-[#f8f8f8] p-6">
              <p className="text-sm text-[#444444] leading-relaxed">
                If you have questions about these Terms, contact us at:
              </p>
              <div className="mt-4 space-y-2 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-[#666666]">Email</span>
                  <span className="text-[#0070f3]">legal@opentracy.com</span>
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
