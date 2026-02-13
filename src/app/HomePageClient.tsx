'use client'

import CategoryTabs from '@/components/CategoryTabs'
import FilterSection from '@/components/FilterSection'
import Header from '@/components/Header'
import ScholarshipCard from '@/components/ScholarshipCard'
import { Button } from '@/components/ui/button'
import { useScholarships } from '@/contexts/ScholarshipContext'
import type { ScholarshipStats } from '@/data/scholarships'
import { ArrowRight, Award, BookOpen, GraduationCap, Search, Trophy } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useMemo, useState } from 'react'

// Dynamic imports for below-the-fold components (reduces initial JS bundle)
const CTASection = dynamic(() => import('@/components/CTASection').then(mod => ({ default: mod.CTASection })), {
    loading: () => <div className="h-64 animate-pulse bg-muted" />,
})
const FAQSection = dynamic(() => import('@/components/FAQSection').then(mod => ({ default: mod.FAQSection })), {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
})
const FeaturedScholarships = dynamic(() => import('@/components/FeaturedScholarships').then(mod => ({ default: mod.FeaturedScholarships })), {
    loading: () => <div className="h-64 animate-pulse bg-muted" />,
})
const HowItWorksSection = dynamic(() => import('@/components/HowItWorksSection').then(mod => ({ default: mod.HowItWorksSection })), {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
})
const NewsletterSection = dynamic(() => import('@/components/NewsletterSection').then(mod => ({ default: mod.NewsletterSection })), {
    loading: () => <div className="h-64 animate-pulse bg-muted" />,
})
const PartnersSection = dynamic(() => import('@/components/PartnersSection').then(mod => ({ default: mod.PartnersSection })), {
    loading: () => <div className="h-48 animate-pulse bg-muted" />,
})
const SuccessMetricsSection = dynamic(() => import('@/components/SuccessMetricsSection').then(mod => ({ default: mod.SuccessMetricsSection })), {
    loading: () => <div className="h-64 animate-pulse bg-muted" />,
})
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
    loading: () => <div className="h-96 animate-pulse bg-muted" />,
})

// Structured Data for SEO
const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ScholarBridge',
    alternateName: 'ScholarBridge.com',
    url: 'https://scholarbridge.com',
    description: 'Find scholarships and educational funding opportunities worldwide',
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://scholarbridge.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
    }
}

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ScholarBridge',
    url: 'https://scholarbridge.com',
    logo: 'https://scholarbridge.com/logo.png',
    description: 'Leading scholarship search platform connecting students with educational funding opportunities worldwide',
    foundingDate: '2024',
    email: 'info@scholarbridge.com',
    sameAs: ['https://twitter.com/scholarbridge', 'https://facebook.com/scholarbridge', 'https://linkedin.com/company/scholarbridge'],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
    },
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@scholarbridge.com',
        contactType: 'Customer Service',
        availableLanguage: ['English']
    }
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://scholarbridge.com'
        }
    ]
}

interface HomePageClientProps {
    initialStats: ScholarshipStats | null
}

export function HomePageClient({ initialStats }: HomePageClientProps) {
    const { scholarships, loading, error } = useScholarships()
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedLevel, setSelectedLevel] = useState('')
    const [selectedField, setSelectedField] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const [visibleCount, setVisibleCount] = useState(12)

    const ITEMS_PER_PAGE = 8

    const filteredScholarships = useMemo(() => {
        return scholarships.filter(scholarship => {
            if (selectedCategory && scholarship.category !== selectedCategory) return false
            if (selectedCountry && selectedCountry !== 'all' && scholarship.country !== selectedCountry) return false
            if (selectedLevel && selectedLevel !== 'all' && scholarship.level !== selectedLevel) return false
            if (selectedField && selectedField !== 'all' && scholarship.field !== selectedField) return false
            return true
        })
    }, [scholarships, selectedCategory, selectedCountry, selectedLevel, selectedField])

    useEffect(() => {
        setVisibleCount(12)
    }, [selectedCategory, selectedCountry, selectedLevel, selectedField])

    const visibleScholarships = filteredScholarships.slice(0, visibleCount)
    const hasMore = visibleCount < filteredScholarships.length

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE)
    }

    const clearFilters = () => {
        setSelectedCategory('')
        setSelectedCountry('')
        setSelectedLevel('')
        setSelectedField('')
    }

    const hasActiveFilters = selectedCategory || selectedCountry || selectedLevel || selectedField

    // Use server-provided stats if available, fallback to defaults
    const stats = initialStats || {
        totalScholarships: 10000,
        totalCountries: 50
    }

    return (
        <>
            {/* Structured Data */}
            <Script id='website-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            <Script
                id='organization-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id='breadcrumb-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className='min-h-screen bg-background'>
                <Header />

                {/* Hero Section */}
                <section className='relative min-h-screen overflow-hidden' role='banner' aria-label='Hero section'>
                    {/* Background Elements - Optimized for mobile */}
                    <div className='hero-grid absolute inset-0' aria-hidden="true" />
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' aria-hidden="true">
                        <div className='h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-primary/10 blur-[80px] md:blur-[100px] will-change-transform' style={{ transform: 'translateZ(0)' }} />
                    </div>

                    {/* Floating Elements - Hidden on mobile for performance */}
                    <div className='absolute left-[15%] top-[30%] hidden xl:block' aria-hidden="true">
                        <div className='animate-float rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm will-change-transform'>
                            <GraduationCap className='h-8 w-8 text-primary' />
                        </div>
                    </div>
                    <div className='absolute right-[15%] top-[25%] hidden xl:block' aria-hidden="true">
                        <div className='animate-float animation-delay-200 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm will-change-transform'>
                            <BookOpen className='h-8 w-8 text-primary' />
                        </div>
                    </div>
                    <div className='absolute left-[20%] bottom-[25%] hidden xl:block' aria-hidden="true">
                        <div className='animate-float animation-delay-400 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm will-change-transform'>
                            <Trophy className='h-8 w-8 text-primary' />
                        </div>
                    </div>

                    {/* Content */}
                    <div className='container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 md:py-20'>
                        <div className='mx-auto max-w-4xl text-center'>
                            {/* Badge */}
                            <div className='animate-fade-up mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm backdrop-blur-sm shadow-lg'>
                                <span className='flex h-2 w-2 rounded-full bg-primary' />
                                <span className='text-muted-foreground'>Trusted by 500,000+ students worldwide</span>
                            </div>

                            {/* Headline - Optimized H1 for SEO & AI with priority rendering */}
                            <h1 className='animate-fade-up animation-delay-200 mb-4 md:mb-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl'>
                                Find Scholarships & Educational Funding Worldwide –{' '}
                                <span className='gradient-text'>Your Dream Education Starts Here</span>
                            </h1>

                            {/* Subheadline - Enhanced with entity clarity */}
                            <p className='animate-fade-up animation-delay-400 mx-auto mb-6 md:mb-8 max-w-2xl text-base md:text-lg text-muted-foreground sm:text-xl'>
                                Search {(stats.totalScholarships || 10000).toLocaleString()}+ verified scholarships from top universities,
                                governments, and foundations across {stats.totalCountries || 50}+ countries. Free scholarship finder helping
                                students secure educational funding.
                            </p>

                            {/* CTAs */}
                            <div className='animate-fade-up animation-delay-600 flex flex-col items-center gap-3 md:gap-4 sm:flex-row sm:justify-center'>
                                <Button size='lg' asChild className='group w-full sm:w-auto'>
                                    <Link href='/search'>
                                        Explore Scholarships
                                        <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                                    </Link>
                                </Button>
                                <Button size='lg' variant='outline' asChild className='w-full sm:w-auto'>
                                    <a href='#how-it-works'>How It Works</a>
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className='animate-fade-up animation-delay-800 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground'>
                                <div className='flex items-center gap-2'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-green-500' />
                                    Free to Use
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-green-500' />
                                    Verified Opportunities
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='h-1.5 w-1.5 rounded-full bg-green-500' />
                                    Updated Daily
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className='mt-20 grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4'>
                            {[
                                { value: `${(stats.totalScholarships || 10000).toLocaleString()}+`, label: 'Scholarships Available' },
                                { value: `${stats.totalCountries || 50}+`, label: 'Countries Covered' },
                                { value: '500K+', label: 'Students Helped' },
                                { value: '$2B+', label: 'Total Funding' }
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className='animate-fade-up text-center'
                                    style={{ animationDelay: `${800 + index * 100}ms` }}
                                >
                                    <div className='text-3xl font-bold gradient-text sm:text-4xl'>{stat.value}</div>
                                    <div className='mt-1 text-sm text-muted-foreground'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <main>
                    <section className=''>
                        <div className='container'>
                            {/* Section Header */}
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
                                <div>
                                    <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground'>
                                        Browse Latest Scholarships
                                    </h2>
                                    <p className='text-muted-foreground text-sm mt-1'>
                                        {filteredScholarships.length} verified scholarship{filteredScholarships.length !== 1 ? 's' : ''}{' '}
                                        available
                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Button variant='outline' size='sm' onClick={() => setShowFilters(!showFilters)}>
                                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                                    </Button>
                                    <Button variant='ghost' size='sm' asChild className='text-primary'>
                                        <Link href='/search'>
                                            View all
                                            <ArrowRight className='ml-1 h-4 w-4' />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Category Tabs */}
                            <div className='mb-6'>
                                <CategoryTabs selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                            </div>

                            {/* Advanced Filters */}
                            {showFilters && (
                                <div className='mb-6 animate-fade-in'>
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
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div key={i} className='bg-card rounded-xl border border-border p-6 animate-pulse'>
                                            <div className='flex gap-2 mb-4'>
                                                <div className='h-5 w-16 bg-muted rounded-full' />
                                                <div className='h-5 w-20 bg-muted rounded-full ml-auto' />
                                            </div>
                                            <div className='h-5 w-full bg-muted rounded mb-2' />
                                            <div className='h-4 w-2/3 bg-muted rounded mb-4' />
                                            <div className='space-y-2'>
                                                <div className='h-4 w-1/2 bg-muted rounded' />
                                                <div className='h-4 w-1/3 bg-muted rounded' />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : error ? (
                                <div className='text-center py-16 bg-card rounded-xl border border-border'>
                                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4'>
                                        <Search className='h-8 w-8 text-destructive' />
                                    </div>
                                    <h3 className='font-display text-xl font-semibold text-foreground mb-2'>Connection Error</h3>
                                    <p className='text-muted-foreground mb-4 max-w-md mx-auto'>{error}</p>
                                    <p className='text-sm text-muted-foreground'>
                                        Run <code className='bg-muted px-2 py-1 rounded text-xs'>cd server && npm run dev</code> to start
                                        the API server.
                                    </p>
                                </div>
                            ) : filteredScholarships.length > 0 ? (
                                <>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                                        {visibleScholarships.map((scholarship, index) => (
                                            <ScholarshipCard key={scholarship.id} scholarship={scholarship} index={index} />
                                        ))}
                                    </div>
                                    {hasMore && (
                                        <div className='mt-8 flex justify-center'>
                                            <Button variant='default' size='lg' onClick={handleLoadMore} className='min-w-[200px]'>
                                                Load More Scholarships
                                            </Button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className='text-center py-16 bg-card rounded-xl border border-border'>
                                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4'>
                                        <Search className='h-8 w-8 text-muted-foreground' />
                                    </div>
                                    <h3 className='font-display text-xl font-semibold text-foreground mb-2'>No scholarships found</h3>
                                    <p className='text-muted-foreground mb-4'>Try adjusting your filters to find more opportunities.</p>
                                    {hasActiveFilters && (
                                        <Button variant='outline' onClick={clearFilters}>
                                            Clear all filters
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                </main>

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
                <footer className='py-8 bg-card border-t border-border'>
                    <div className='container'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
                                    <Award className='h-4 w-4 text-primary-foreground' />
                                </div>
                                <span className='font-display font-semibold text-foreground'>ScholarBridge</span>
                            </div>
                            <nav className='flex items-center gap-6 text-sm text-muted-foreground'>
                                <Link href='/' className='hover:text-foreground transition-colors'>
                                    Home
                                </Link>
                                <Link href='/search' className='hover:text-foreground transition-colors'>
                                    Browse
                                </Link>
                                <Link href='/about' className='hover:text-foreground transition-colors'>
                                    About
                                </Link>
                                <Link href='/contact' className='hover:text-foreground transition-colors'>
                                    Contact
                                </Link>
                                <Link href='/privacy' className='hover:text-foreground transition-colors'>
                                    Privacy
                                </Link>
                                <Link href='/terms' className='hover:text-foreground transition-colors'>
                                    Terms
                                </Link>
                            </nav>
                            <p className='text-sm text-muted-foreground'>© 2026 ScholarBridge. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
