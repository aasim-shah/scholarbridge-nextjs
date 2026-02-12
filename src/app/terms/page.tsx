'use client';

import Link from "next/link";
import { Award } from "lucide-react";
import Header from "@/components/Header";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background ">
      <Header />

      <main className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: February 13, 2026
            </p>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using ScholarBridge, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                2. Service Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ScholarBridge provides a free platform for students to search and discover scholarship opportunities. 
                We aggregate information from various sources but do not guarantee the accuracy, completeness, or 
                availability of any scholarship listing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Verify scholarship information directly with providers</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to scrape or harvest data from the site</li>
                <li>Not misrepresent yourself when applying for scholarships</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                4. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ScholarBridge is provided "as is" without any warranties, express or implied. We do not guarantee 
                that you will receive a scholarship through our platform, and we are not responsible for any 
                decisions made based on information found on our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ScholarBridge and its operators shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                6. External Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service contains links to external scholarship providers. We are not responsible for the 
                content, accuracy, or practices of these third-party websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                7. Modifications to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the service after 
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                8. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us at:{" "}
                <a href="mailto:legal@scholarbridge.com" className="text-primary hover:underline">
                  legal@scholarbridge.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Award className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-foreground">ScholarBridge</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="/search" className="hover:text-foreground transition-colors">Browse</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 ScholarBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
