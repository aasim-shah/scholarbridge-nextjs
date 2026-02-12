"use client";

import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Award, Shield, Lock, Eye, Database, Cookie } from "lucide-react";
import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Privacy Policy - ScholarBridge.com | Your Data Protection</title>
        <meta name="description" content="Read ScholarBridge.com's privacy policy to understand how we collect, use, and protect your personal information. Your privacy is our priority." />
        <meta name="keywords" content="privacy policy, data protection, user privacy, information security, GDPR" />
        <meta property="og:title" content="Privacy Policy - ScholarBridge.com" />
        <meta property="og:description" content="Transparent privacy practices at ScholarBridge. Learn how we protect your data and respect your privacy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://scholarbridge.com/privacy" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy <span className="gradient-text">Policy</span>
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
                  At ScholarBridge ("we", "our", or "us"), we take your privacy seriously. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website ScholarBridge.com and use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Information We Collect
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <p>When you register or use our services, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Name and email address</li>
                      <li>Educational background and interests</li>
                      <li>Country of residence</li>
                      <li>Academic level and field of study</li>
                      <li>Scholarship preferences and search history</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p>When you visit our website, we automatically collect:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Click patterns and interactions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    How We Use Your Information
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>We use the collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing personalized scholarship recommendations</li>
                    <li>Improving and optimizing our platform</li>
                    <li>Sending newsletters and updates (with your consent)</li>
                    <li>Analyzing user behavior to enhance user experience</li>
                    <li>Preventing fraud and ensuring platform security</li>
                    <li>Responding to your inquiries and support requests</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Data Security
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>
                    We implement industry-standard security measures to protect your personal information, 
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Regular security audits and monitoring</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet is 100% secure. While we strive to 
                    protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground m-0">
                    Cookies and Tracking Technologies
                  </h2>
                </div>
                
                <div className="text-muted-foreground space-y-3">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p>
                    You can control cookie preferences through your browser settings. Note that disabling 
                    certain cookies may impact functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Third-Party Services
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    We may share information with trusted third-party service providers who assist in operating 
                    our website and services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud hosting providers</li>
                    <li>Analytics services</li>
                    <li>Email service providers</li>
                    <li>Payment processors (if applicable)</li>
                  </ul>
                  <p>
                    These partners are contractually obligated to keep your information secure and use it only 
                    for the purposes we specify.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Your Privacy Rights
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your information</li>
                    <li>Export your data in a portable format</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at{" "}
                    <a href="mailto:info@ScholarBridge.com" className="text-primary hover:underline">
                      info@ScholarBridge.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Children's Privacy
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    Our services are intended for users aged 13 and above. We do not knowingly collect personal 
                    information from children under 13. If you believe we have collected information from a child 
                    under 13, please contact us immediately.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Changes to This Policy
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new policy on this page and updating the "Last updated" date. We encourage you 
                    to review this policy periodically.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
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

export default Privacy;
