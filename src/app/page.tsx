import { fetchStats } from '@/data/scholarships'
import type { Metadata } from 'next'
import { HomePageClient } from './HomePageClient'

// ✅ SEO Metadata for Home Page (SSR)
export async function generateMetadata(): Promise<Metadata> {
    // Fetch real-time stats for dynamic meta description
    let stats
    try {
        stats = await fetchStats()
    } catch (error) {
        console.error('Failed to fetch stats for metadata:', error)
        stats = { totalScholarships: 10000, totalCountries: 50 }
    }

    const title = 'Find Scholarships & Educational Funding Worldwide'
    const description = `Discover ${stats.totalScholarships?.toLocaleString() || '10,000+'}+ verified scholarships, grants, and educational funding opportunities across ${stats.totalCountries || 50}+ countries. Free scholarship search platform helping 500K+ students achieve their educational dreams.`

    return {
        title,
        description,
        keywords: [
            'scholarships',
            'college scholarships',
            'international scholarships',
            'study abroad scholarships',
            'financial aid',
            'educational grants',
            'merit scholarships',
            'undergraduate scholarships',
            'graduate scholarships',
            'PhD funding',
            'student financial aid',
            'scholarship search',
            'free scholarships',
            'scholarship finder',
            'education funding'
        ],
        authors: [{ name: 'ScholarBridge', url: 'https://scholarbridge.com' }],
        creator: 'ScholarBridge',
        publisher: 'ScholarBridge',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: 'https://scholarbridge.com',
            siteName: 'ScholarBridge',
            title: 'ScholarBridge - Your Bridge to Educational Success',
            description,
            images: [
                {
                    url: '/images/image.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Students celebrating graduation - ScholarBridge connects students with scholarships worldwide'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'ScholarBridge - Find Your Perfect Scholarship Match',
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
            canonical: 'https://scholarbridge.com'
        }
    }
}

// ✅ SSR Page Component
export default async function HomePage() {
    // Fetch initial data server-side for better SEO
    let initialStats
    try {
        initialStats = await fetchStats()
    } catch (error) {
        console.error('Failed to fetch initial stats:', error)
        initialStats = null
    }

    return <HomePageClient initialStats={initialStats} />
}

// Enable SSR (default in Next.js App Router, but explicit for clarity)
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour
