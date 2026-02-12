"use client";

import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Award, FileText, AlertCircle, Scale, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Terms of Service - ScholarBridge.com | User Agreement</title>
        <meta name="description" content="Read ScholarBridge.com's terms of service to understand the rules and guidelines for using our scholarship platform." />
        <meta name="keywords" content="terms of service, user agreement, terms and conditions, legal, usage policy" />
        <meta property="og:title" content="Terms of Service - ScholarBridge.com" />
        <meta property="og:description" content="Terms and conditions for using ScholarBridge.com. Learn about your rights and responsibilities as a user." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://scholarbridge.com/terms" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: February 12, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome to ScholarBridge ("we", "our", or "us"). By accessing or using our website 
                  ScholarBridge.com and related services (collectively, the "Service"), you agree to be bound 
                  by these Terms of Service ("Terms"). Please read them carefully.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Acceptance of Terms
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>
                    By accessing or using ScholarBridge, you acknowledge that you have read, understood, and 
                    agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                    please do not use our Service.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time. Your continued use of the Service 
                    after changes are posted constitutes acceptance of the modified Terms.
                  </p>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Eligibility
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>You must meet the following requirements to use our Service:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 13 years of age</li>
                    <li>Have the legal capacity to enter into a binding agreement</li>
                    <li>Not be prohibited from using the Service under applicable laws</li>
                    <li>Provide accurate and complete information during registration</li>
                  </ul>
                </div>
              </div>

              {/* User Accounts */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  User Accounts
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>When you create an account with us, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Notify us immediately of any unauthorized account access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                  <p>
                    We reserve the right to suspend or terminate accounts that violate these Terms or engage 
                    in fraudulent or illegal activities.
                  </p>
                </div>
              </div>

              {/* Use of Service */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Acceptable Use
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>You agree to use the Service only for lawful purposes. You must not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit malicious code or viruses</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Collect or harvest data from other users</li>
                    <li>Use automated systems (bots) without permission</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Engage in harassment or abusive behavior</li>
                  </ul>
                </div>
              </div>

              {/* Content and Intellectual Property */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Intellectual Property Rights
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    All content on ScholarBridge, including text, graphics, logos, images, and software, is the 
                    property of ScholarBridge or its licensors and is protected by copyright, trademark, and 
                    other intellectual property laws.
                  </p>
                  <p>
                    You may not copy, modify, distribute, sell, or lease any part of our Service without explicit 
                    written permission. Limited rights are granted to access and use the Service for personal, 
                    non-commercial purposes only.
                  </p>
                </div>
              </div>

              {/* Scholarship Information */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Scholarship Information Disclaimer
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    ScholarBridge aggregates scholarship information from various sources. While we strive to 
                    provide accurate and up-to-date information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We do not guarantee the accuracy, completeness, or timeliness of any information</li>
                    <li>Scholarship details, deadlines, and requirements may change without notice</li>
                    <li>We are not responsible for scholarship application outcomes</li>
                    <li>Users should verify all information directly with scholarship providers</li>
                    <li>We do not endorse or recommend specific scholarships</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Third-Party Links and Services
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    Our Service may contain links to third-party websites or services. We are not responsible 
                    for the content, privacy policies, or practices of third-party sites. Your use of third-party 
                    services is at your own risk.
                  </p>
                </div>
              </div>

              {/* Disclaimer of Warranties */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Disclaimer of Warranties
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Merchantability and fitness for a particular purpose</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Accuracy or reliability of information</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCHOLARBRIDGE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF 
                    PROFITS, DATA, OR OPPORTUNITIES, ARISING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use or inability to use the Service</li>
                    <li>Unauthorized access to your account or data</li>
                    <li>Errors or omissions in scholarship information</li>
                    <li>Third-party conduct or content</li>
                  </ul>
                </div>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Indemnification
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    You agree to indemnify and hold harmless ScholarBridge and its officers, directors, employees, 
                    and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
                    arising from your use of the Service or violation of these Terms.
                  </p>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Termination
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    We may terminate or suspend your access to the Service immediately, without prior notice, for 
                    any reason, including breach of these Terms.
                  </p>
                  <p>
                    You may terminate your account at any time by contacting us. Upon termination, your right to 
                    use the Service will cease immediately.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Governing Law and Dispute Resolution
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                    where ScholarBridge is registered, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising from these Terms or your use of the Service shall be resolved through 
                    binding arbitration or in the courts of competent jurisdiction.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Changes to These Terms
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of material 
                    changes by posting the updated Terms on this page with a new "Last updated" date. Your 
                    continued use after changes constitutes acceptance.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:info@ScholarBridge.com" className="text-primary hover:underline">
                      info@ScholarBridge.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-foreground">Website:</strong>{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact Form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
};

export default Terms;
