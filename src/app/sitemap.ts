import { fetchScholarships } from '@/data/scholarships'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://scholarbridge.com'

    // Static pages with proper priorities
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        }
    ]

    // Dynamic scholarship pages
    let scholarshipPages: MetadataRoute.Sitemap = []

    try {
        // Fetch all scholarships (paginate if needed for large datasets)
        const { data: scholarships } = await fetchScholarships({ limit: 10000 })

        scholarshipPages = scholarships.map(scholarship => ({
            url: `${baseUrl}/scholarship/${scholarship.id}`,
            lastModified: scholarship.updated_at ? new Date(scholarship.updated_at) : new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8
        }))

        console.log(`✅ Generated sitemap with ${scholarships.length} scholarship pages`)
    } catch (error) {
        console.error('❌ Failed to generate scholarship sitemaps:', error)
    }

    return [...staticPages, ...scholarshipPages]
}

// Revalidate sitemap every 24 hours
export const revalidate = 86400
