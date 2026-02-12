"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { Search as SearchIcon, Award } from "lucide-react";
import Header from "@/components/Header";
import ScholarshipCard from "@/components/ScholarshipCard";
import FilterSection from "@/components/FilterSection";
import CategoryTabs from "@/components/CategoryTabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useScholarships } from "@/contexts/ScholarshipContext";

const Search = () => {
  const { scholarships } = useScholarships();
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(12); // Initially show 3 rows (12 items in 4-column grid)

  const ITEMS_PER_PAGE = 8; // Load 2 more rows (8 items) each time

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery ||
        scholarship.title.toLowerCase().includes(searchLower) ||
        scholarship.organization.toLowerCase().includes(searchLower) ||
        scholarship.country.toLowerCase().includes(searchLower) ||
        scholarship.field.toLowerCase().includes(searchLower) ||
        scholarship.category.toLowerCase().includes(searchLower);

      const matchesCountry = !selectedCountry || selectedCountry === "all" || scholarship.country === selectedCountry;
      const matchesLevel = !selectedLevel || selectedLevel === "all" || scholarship.level === selectedLevel;
      const matchesField = !selectedField || selectedField === "all" || scholarship.field === selectedField;
      const matchesCategory = !selectedCategory || scholarship.category === selectedCategory;

      return matchesSearch && matchesCountry && matchesLevel && matchesField && matchesCategory;
    });
  }, [searchQuery, selectedCountry, selectedLevel, selectedField, selectedCategory]);

  // Reset visible count when search query or filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedCountry, selectedLevel, selectedField, selectedCategory]);

  const visibleScholarships = filteredScholarships.slice(0, visibleCount);
  const hasMore = visibleCount < filteredScholarships.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const clearFilters = () => {
    setSelectedCountry("");
    setSelectedLevel("");
    setSelectedField("");
    setSelectedCategory("");
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCountry || selectedLevel || selectedField || selectedCategory || searchQuery;

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Search Scholarships - ScholarBridge.com | Find Your Perfect Match</title>
        <meta name="description" content="Search and filter thousands of scholarships by country, field of study, academic level, and more. Find your perfect scholarship match on ScholarBridge.com" />
        <meta name="keywords" content="search scholarships, filter scholarships, find scholarships, scholarship database, study opportunities" />
        <meta property="og:title" content="Search Scholarships - ScholarBridge.com" />
        <meta property="og:description" content="Browse and search our comprehensive database of scholarships. Filter by country, level, field of study and find opportunities that match your profile." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://scholarbridge.com/search" />
      </Head>
      <Header />

      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Scholarships
          </h1>
          <p className="text-muted-foreground">
            Search and filter through our database of scholarships
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title, organization, country, or field..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base bg-card"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-6">
          <CategoryTabs 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Filters */}
        <div className="mb-8">
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredScholarships.length}</span> scholarship{filteredScholarships.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Results Grid */}
        {filteredScholarships.length > 0 ? (
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
                  variant="outline" 
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
              <SearchIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No scholarships found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find more opportunities.
            </p>
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            )}
          </div>
        )}
      </main>

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

export default Search;
