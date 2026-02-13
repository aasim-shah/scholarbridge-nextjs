import { fetchStats } from '@/data/scholarships'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SearchPageContent } from './SearchPageClient'

// ✅ SEO Metadata for Search Page (SSR)
export async function generateMetadata(): Promise<Metadata> {
    // Fetch real-time stats for dynamic meta description
    let stats
    try {
        stats = await fetchStats()
    } catch (error) {
        console.error('Failed to fetch stats for metadata:', error)
        stats = { totalScholarships: 10000, totalCountries: 50 }
    }

    const title = 'Search Scholarships - Find Your Perfect Match'
    const description = `Search and filter ${stats.totalScholarships?.toLocaleString() || '10,000+'}+ verified scholarships by country, degree level, field of study, and funding type. Advanced scholarship search engine to find educational funding opportunities tailored to your profile.`

    return {
        title,
        description,
        keywords: [
            'scholarship search',
            'find scholarships',
            'scholarship finder',
            'filter scholarships',
            'scholarships by country',
            'scholarships by major',
            'degree level scholarships',
            'undergraduate scholarships',
            'graduate funding',
            'search financial aid',
            'scholarship database',
            'education grants search'
        ],
        authors: [{ name: 'ScholarBridge', url: 'https://scholarbridge.com' }],
        creator: 'ScholarBridge',
        publisher: 'ScholarBridge',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: 'https://scholarbridge.com/search',
            siteName: 'ScholarBridge',
            title: 'Search & Filter Scholarships - Advanced Scholarship Finder',
            description,
            images: [
                {
                    url: '/images/image.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Students studying - Search scholarships on ScholarBridge'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Search Scholarships - ScholarBridge',
            description,
            images: ['/images/image.webp'],
            creator: '@scholarbridge',
            site: '@scholarbridge'
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        },
        alternates: {
            canonical: 'https://scholarbridge.com/search'
        }
    }
}

// ✅ SSR Page Component
export default async function SearchPage() {
    // Fetch initial data server-side for better SEO
    let initialStats
    try {
        initialStats = await fetchStats()
    } catch (error) {
        console.error('Failed to fetch initial stats:', error)
        initialStats = null
    }

    return (
        <Suspense
            fallback={
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
                        <p className='text-muted-foreground'>Loading scholarships...</p>
                    </div>
                </div>
            }
        >
            <SearchPageContent />
        </Suspense>
    )
}

// Enable SSR
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour
