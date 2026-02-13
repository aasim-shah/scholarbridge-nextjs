import type { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

// ✅ SEO Metadata for Contact Page
export const metadata: Metadata = {
    title: 'Contact Us - Get Help Finding Scholarships',
    description:
        'Need help finding scholarships? Contact ScholarBridge support team. We respond within 24-48 hours. Email: info@scholarbridge.com. Get answers to your scholarship questions.',
    keywords: [
        'contact scholarbridge',
        'scholarship help',
        'customer support',
        'scholarship questions',
        'get in touch',
        'support team',
        'scholarship assistance'
    ],
    authors: [{ name: 'ScholarBridge', url: 'https://scholarbridge.com' }],
    creator: 'ScholarBridge',
    publisher: 'ScholarBridge',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://scholarbridge.com/contact',
        siteName: 'ScholarBridge',
        title: "Contact ScholarBridge - We're Here to Help",
        description:
            "Get in touch with our scholarship support team. We're here to help you find the perfect educational funding opportunity.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Customer support - Contact ScholarBridge team'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact ScholarBridge',
        description: "Need help finding scholarships? We're here to assist you. Response time: 24-48 hours.",
        images: ['https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=630&fit=crop'],
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
        canonical: 'https://scholarbridge.com/contact'
    }
}

// ✅ SSR Page Component
export default function ContactPage() {
    return <ContactPageClient />
}
