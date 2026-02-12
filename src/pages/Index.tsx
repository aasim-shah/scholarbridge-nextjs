"use client";

import { useState, useMemo, useEffect } from "react";
import { ArrowRight, Search, Award, Globe, Users, TrendingUp, GraduationCap, BookOpen, Trophy } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import ScholarshipCard from "@/components/ScholarshipCard";
import CategoryTabs from "@/components/CategoryTabs";
import FilterSection from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { useScholarships } from "@/contexts/ScholarshipContext";
import { FeaturedScholarships } from "@/components/FeaturedScholarships";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PartnersSection } from "@/components/PartnersSection";
import { SuccessMetricsSection } from "@/components/SuccessMetricsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  const { scholarships, loading, error } = useScholarships();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Initially show 3 rows (12 items in 4-column grid)

  const ITEMS_PER_PAGE = 8; // Load 2 more rows (8 items) each time

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      if (selectedCategory && scholarship.category !== selectedCategory) return false;
      if (selectedCountry && selectedCountry !== "all" && scholarship.country !== selectedCountry) return false;
      if (selectedLevel && selectedLevel !== "all" && scholarship.level !== selectedLevel) return false;
      if (selectedField && selectedField !== "all" && scholarship.field !== selectedField) return false;
      return true;
    });
  }, [scholarships, selectedCategory, selectedCountry, selectedLevel, selectedField]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory, selectedCountry, selectedLevel, selectedField]);

  const visibleScholarships = filteredScholarships.slice(0, visibleCount);
  const hasMore = visibleCount < filteredScholarships.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedCountry("");
    setSelectedLevel("");
    setSelectedField("");
  };

  const hasActiveFilters = selectedCategory || selectedCountry || selectedLevel || selectedField;

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>ScholarBridge.com - Find Scholarships & Educational Funding Opportunities</title>
        <meta name="description" content="Discover thousands of scholarships from top universities and institutions worldwide. ScholarBridge connects students with educational funding opportunities to achieve their dreams." />
        <meta name="keywords" content="scholarships, education funding, student grants, university scholarships, study abroad, financial aid" />
        <meta property="og:title" content="ScholarBridge.com - Your Bridge to Educational Success" />
        <meta property="og:description" content="Access 10,000+ scholarships from 50+ countries. Free scholarship search platform helping students find educational funding opportunities." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ScholarBridge.com - Find Scholarships & Educational Funding" />
        <meta name="twitter:description" content="Discover thousands of scholarships from top universities worldwide." />
        <link rel="canonical" href="https://scholarbridge.com" />
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden ">
        {/* Background Elements */}
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute left-[15%] top-[30%] hidden lg:block">
          <div className="animate-float rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute right-[15%] top-[25%] hidden lg:block">
          <div className="animate-float animation-delay-200 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="absolute left-[20%] bottom-[25%] hidden lg:block">
          <div className="animate-float animation-delay-400 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm backdrop-blur-sm shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Trusted by 5000+ students worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up animation-delay-200 mb-6 text-2xl font-bold leading-tight tracking-tight sm:text-2xl md:text-4xl lg:text-5xl">
                Your Dream Education Is One Scholarship Away {" "}
                <span className="gradient-text"> Starts Here</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up animation-delay-400 mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Access thousands of scholarships from top universities and institutions. 
              Find your perfect match and unlock your potential.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up animation-delay-600 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/search">
                  Explore Scholarships
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-up animation-delay-800 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Free to Use
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Verified Opportunities
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Updated Daily
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "10,000+", label: "Scholarships Available" },
              { value: "50+", label: "Countries Covered" },
              { value: "500K+", label: "Students Helped" },
              { value: "$2B+", label: "Total Funding" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-up text-center"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-3xl font-bold gradient-text sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="">
        <div className="container">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Explore Scholarships
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                {filteredScholarships.length} scholarship{filteredScholarships.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary">
                <Link href="/search">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-6">
            <CategoryTabs 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mb-6 animate-fade-in">
              <FilterSection
                selectedCountry={selectedCountry}
                selectedLevel={selectedLevel}
                selectedField={selectedField}
                selectedCategory={selectedCategory}
                onCountryChange={setSelectedCountry}
                onLevelChange={setSelectedLevel}
                onFieldChange={setSelectedField}
                onCategoryChange={setSelectedCategory}
                onClearFilters={clearFilters}
              />
            </div>
          )}

          {/* Scholarship Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse">
                  <div className="flex gap-2 mb-4">
                    <div className="h-5 w-16 bg-muted rounded-full" />
                    <div className="h-5 w-20 bg-muted rounded-full ml-auto" />
                  </div>
                  <div className="h-5 w-full bg-muted rounded mb-2" />
                  <div className="h-4 w-2/3 bg-muted rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 w-1/2 bg-muted rounded" />
                    <div className="h-4 w-1/3 bg-muted rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
                <Search className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Connection Error
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                {error}
              </p>
              <p className="text-sm text-muted-foreground">
                Run <code className="bg-muted px-2 py-1 rounded text-xs">cd server && npm run dev</code> to start the API server.
              </p>
            </div>
          ) : filteredScholarships.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {visibleScholarships.map((scholarship, index) => (
                  <ScholarshipCard 
                    key={scholarship.id} 
                    scholarship={scholarship} 
                    index={index}
                  />
                ))}
              </div>
              {hasMore && (
                <div className="mt-8 flex justify-center">
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={handleLoadMore}
                    className="min-w-[200px]"
                  >
                    Load More Scholarships
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No scholarships found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to find more opportunities.
              </p>
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Featured Scholarships */}
      <FeaturedScholarships />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Partners */}
      <PartnersSection />

      {/* Success Metrics */}
      <SuccessMetricsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />

      {/* Newsletter */}
      <NewsletterSection />

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

export default Index;
