import { Metadata } from 'next'

// Base URL for the site
const BASE_URL = 'https://scholarbridge.com'

// Home Page Metadata
export const homeMetadata: Metadata = {
    title: 'ScholarBridge - Find Scholarships & Educational Funding Worldwide',
    description:
        'Discover 10,000+ verified scholarships, grants, and educational funding opportunities across 50+ countries. Free scholarship search platform helping 500K+ students achieve their dreams.',
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
        'PhD funding'
    ],
    alternates: {
        canonical: BASE_URL
    },
    openGraph: {
        title: 'ScholarBridge - Find Scholarships & Educational Funding Worldwide',
        description:
            'Discover 10,000+ verified scholarships across 50+ countries. Free platform helping 500K+ students achieve their dreams.',
        url: BASE_URL,
        type: 'website',
        images: [
            {
                url: `${BASE_URL}/og-home.jpg`,
                width: 1200,
                height: 630,
                alt: 'ScholarBridge - Your Bridge to Educational Success'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ScholarBridge - Find Scholarships & Educational Funding Worldwide',
        description: 'Discover 10,000+ verified scholarships across 50+ countries.',
        images: [`${BASE_URL}/twitter-home.jpg`]
    }
}

// Search Page Metadata
export const searchMetadata: Metadata = {
    title: 'Search Scholarships - Find Your Perfect Educational Funding Match',
    description:
        'Search and filter 10,000+ scholarships by country, degree level, field of study, and category. Advanced scholarship finder with real-time filtering to match your academic goals.',
    keywords: [
        'scholarship search',
        'find scholarships',
        'scholarship finder',
        'search financial aid',
        'college scholarship database',
        'international scholarship search',
        'scholarship filter',
        'scholarship by country',
        'scholarship by major'
    ],
    alternates: {
        canonical: `${BASE_URL}/search`
    },
    openGraph: {
        title: 'Search Scholarships - Find Your Perfect Educational Funding Match',
        description:
            'Search 10,000+ verified scholarships with advanced filters. Find opportunities by country, degree level, and field of study.',
        url: `${BASE_URL}/search`,
        type: 'website',
        images: [
            {
                url: `${BASE_URL}/og-search.jpg`,
                width: 1200,
                height: 630,
                alt: 'Search Scholarships on ScholarBridge'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Search Scholarships - Find Your Perfect Match',
        description: 'Advanced scholarship search with filters by country, level, and field.',
        images: [`${BASE_URL}/twitter-search.jpg`]
    }
}

// About Page Metadata
export const aboutMetadata: Metadata = {
    title: 'About ScholarBridge - Connecting Students with Educational Opportunities',
    description:
        'Learn about ScholarBridge mission to democratize access to education funding. Discover how we helped 500K+ students secure $2B+ in scholarships across 50+ countries since 2024.',
    keywords: [
        'about scholarbridge',
        'scholarship platform',
        'educational funding mission',
        'student financial aid platform',
        'scholarship database company'
    ],
    alternates: {
        canonical: `${BASE_URL}/about`
    },
    openGraph: {
        title: 'About ScholarBridge - Connecting Students with Educational Opportunities',
        description: 'Trusted by 500K+ students worldwide. Learn how ScholarBridge helps students find and secure educational funding.',
        url: `${BASE_URL}/about`,
        type: 'website',
        images: [
            {
                url: `${BASE_URL}/og-about.jpg`,
                width: 1200,
                height: 630,
                alt: 'About ScholarBridge - Our Mission'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About ScholarBridge',
        description: 'Trusted by 500K+ students worldwide. Learn about our mission.',
        images: [`${BASE_URL}/twitter-about.jpg`]
    }
}

// Contact Page Metadata
export const contactMetadata: Metadata = {
    title: 'Contact ScholarBridge - Get Help Finding Scholarships',
    description:
        'Contact ScholarBridge support team for scholarship search assistance. Email info@scholarbridge.com or use our contact form. We respond within 24-48 hours, Monday-Friday.',
    keywords: [
        'contact scholarbridge',
        'scholarship help',
        'scholarship support',
        'educational funding assistance',
        'scholarbridge customer service'
    ],
    alternates: {
        canonical: `${BASE_URL}/contact`
    },
    openGraph: {
        title: 'Contact ScholarBridge - Get Help Finding Scholarships',
        description: 'Need help finding scholarships? Contact our support team. Email info@scholarbridge.com or use our contact form.',
        url: `${BASE_URL}/contact`,
        type: 'website',
        images: [
            {
                url: `${BASE_URL}/og-contact.jpg`,
                width: 1200,
                height: 630,
                alt: 'Contact ScholarBridge Support'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact ScholarBridge',
        description: 'Get help finding scholarships. Email info@scholarbridge.com',
        images: [`${BASE_URL}/twitter-contact.jpg`]
    }
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    }
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }
}

// Organization Schema (for all pages)
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ScholarBridge',
    alternateName: 'ScholarBridge.com',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Leading scholarship search platform connecting students with educational funding opportunities worldwide',
    foundingDate: '2024',
    email: 'info@scholarbridge.com',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@scholarbridge.com',
        contactType: 'Customer Service',
        availableLanguage: ['English']
    },
    sameAs: ['https://twitter.com/scholarbridge', 'https://facebook.com/scholarbridge', 'https://linkedin.com/company/scholarbridge'],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
    }
}
