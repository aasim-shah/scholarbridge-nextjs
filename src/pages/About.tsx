"use client";

import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Award, Users, Target, Heart, TrendingUp, Globe } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>About Us - ScholarBridge.com | Connecting Students with Scholarships</title>
        <meta name="description" content="Learn about ScholarBridge.com - your trusted platform for discovering scholarships worldwide. We help students find and apply for educational funding opportunities." />
        <meta name="keywords" content="about scholarbridge, our mission, scholarship platform, education funding, student support" />
        <meta property="og:title" content="About ScholarBridge.com - Empowering Students Worldwide" />
        <meta property="og:description" content="Discover how ScholarBridge connects thousands of students with scholarship opportunities from top universities and institutions globally." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://scholarbridge.com/about" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="gradient-text">ScholarBridge</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridging the gap between ambitious students and life-changing scholarship opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At ScholarBridge, we believe that financial barriers should never stand in the way of educational dreams. 
                Our mission is to democratize access to scholarship information, making it easier for students worldwide 
                to discover and apply for funding opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've built a comprehensive platform that aggregates scholarships from universities, foundations, 
                governments, and private organizations, helping over 500,000 students achieve their educational goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">Scholarships</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text">$2B+</div>
                <div className="text-sm text-muted-foreground">Total Funding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at ScholarBridge
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Accessibility
              </h3>
              <p className="text-muted-foreground">
                Making scholarship information free and accessible to everyone, everywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Integrity
              </h3>
              <p className="text-muted-foreground">
                Providing verified, accurate, and up-to-date scholarship information you can trust.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Community
              </h3>
              <p className="text-muted-foreground">
                Building a supportive community of students helping each other succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ScholarBridge was founded in 2020 by a group of former scholarship recipients who understood 
                firsthand the challenges of finding and applying for educational funding. They experienced the 
                frustration of scattered information, outdated listings, and missed opportunities.
              </p>
              <p>
                What started as a simple database has evolved into a comprehensive platform that serves hundreds 
                of thousands of students annually. We've partnered with universities, foundations, and organizations 
                worldwide to bring you the most comprehensive and up-to-date scholarship information available.
              </p>
              <p>
                Today, ScholarBridge continues to grow and evolve, driven by our commitment to helping every 
                student achieve their educational dreams, regardless of their financial background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Ready to Find Your Scholarship?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students who have found their perfect scholarship match through ScholarBridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/search">Browse Scholarships</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
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

export default About;
