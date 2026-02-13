import { fetchScholarshipById } from '@/data/scholarships'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ScholarshipDetailsClient } from './ScholarshipDetailsClient'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const { id } = await params
        const scholarship = await fetchScholarshipById(id)

        if (!scholarship) {
            return {
                title: 'Scholarship Not Found',
                description: 'The requested scholarship could not be found.'
            }
        }

        // Create CTR-optimized title
        const titleParts = [scholarship.title]
        if (scholarship.organization) {
            titleParts.push(scholarship.organization)
        }
        if (scholarship.country) {
            titleParts.push(scholarship.country)
        }
        const title = titleParts.join(' - ')

        // Create rich description with key details
        const descParts = []
        if (scholarship.amount) {
            descParts.push(`${scholarship.amount} scholarship`)
        } else {
            descParts.push('Scholarship opportunity')
        }
        descParts.push(`for ${scholarship.level} students in ${scholarship.field}`)
        if (scholarship.country) {
            descParts.push(`in ${scholarship.country}`)
        }
        const deadline = new Date(scholarship.deadline)
        const formattedDeadline = deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        descParts.push(`| Deadline: ${formattedDeadline}`)

        const description =
            descParts.join(' ') + '. ' + (scholarship.description?.slice(0, 120) || 'Apply now for this scholarship opportunity.')

        // Generate keywords
        const keywords = [
            scholarship.title,
            scholarship.organization,
            `${scholarship.country} scholarship`,
            `${scholarship.level} scholarship`,
            `${scholarship.field} scholarship`,
            scholarship.amount || 'funded scholarship',
            'international scholarship',
            'study abroad',
            'scholarship application',
            `${scholarship.country} ${scholarship.level}`
        ].filter(Boolean)

        return {
            title,
            description,
            keywords,
            openGraph: {
                title,
                description,
                type: 'article',
                url: `https://scholarbridge.com/scholarship/${scholarship.id}`,
                images: [
                    {
                        url: `https://scholarbridge.com/images/og-scholarship.svg`,
                        width: 1200,
                        height: 630,
                        alt: scholarship.title
                    }
                ],
                locale: 'en_US',
                siteName: 'ScholarBridge'
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: ['https://scholarbridge.com/images/og-scholarship.svg']
            },
            alternates: {
                canonical: `https://scholarbridge.com/scholarship/${scholarship.id}`
            },
            other: {
                'article:published_time': scholarship.created_at || new Date().toISOString(),
                'article:modified_time': scholarship.updated_at || new Date().toISOString(),
                'article:section': scholarship.field,
                'article:tag': keywords.join(',')
            }
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return {
            title: 'Scholarship Details',
            description: 'View scholarship details on ScholarBridge.'
        }
    }
}

export default async function ScholarshipDetailsPage({ params }: PageProps) {
    const { id } = await params
    let scholarship

    try {
        scholarship = await fetchScholarshipById(id)
    } catch (error) {
        console.error('Error fetching scholarship:', error)
        notFound()
    }

    if (!scholarship) {
        notFound()
    }

    return <ScholarshipDetailsClient scholarship={scholarship} />
}
