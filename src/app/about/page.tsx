import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { generateBreadcrumbSchema, organizationSchema } from '@/lib/metadata'
import { Award, Globe, Heart, Target, TrendingUp, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

// ✅ SEO Metadata for About Page
export const metadata: Metadata = {
    title: 'About Us - Our Mission to Democratize Educational Funding',
    description:
        "Learn about ScholarBridge's mission to make educational funding accessible to students worldwide. We've helped 500,000+ students secure $2B+ in scholarships across 50+ countries. Discover our story and values.",
    keywords: [
        'about scholarbridge',
        'scholarship platform',
        'educational funding mission',
        'student success stories',
        'scholarship organization',
        'education accessibility',
        'our mission',
        'company values'
    ],
    authors: [{ name: 'ScholarBridge', url: 'https://scholarbridge.com' }],
    creator: 'ScholarBridge',
    publisher: 'ScholarBridge',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://scholarbridge.com/about',
        siteName: 'ScholarBridge',
        title: 'About ScholarBridge - Making Education Accessible Worldwide',
        description:
            'Discover how ScholarBridge is democratizing access to educational funding. Join 500K+ students who found their scholarships through our platform.',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
                width: 1200,
                height: 630,
                alt: 'Team collaboration - ScholarBridge team helping students worldwide'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About ScholarBridge - Our Mission',
        description: "Learn how we're helping 500K+ students find scholarships and secure $2B+ in educational funding.",
        images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop'],
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
        canonical: 'https://scholarbridge.com/about'
    }
}

// Structured Data for About Page
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://scholarbridge.com' },
    { name: 'About Us', url: 'https://scholarbridge.com/about' }
])

const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ScholarBridge',
    description:
        "Learn about ScholarBridge's mission to democratize access to educational funding and help students worldwide secure scholarships",
    url: 'https://scholarbridge.com/about',
    mainEntity: {
        '@type': 'Organization',
        name: 'ScholarBridge',
        description: 'Leading scholarship search platform connecting students with educational funding opportunities',
        foundingDate: '2024',
        numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '50+'
        }
    }
}

export default function AboutPage() {
    return (
        <>
            {/* Structured Data */}
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
            <Script
                id='about-page-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />

            <div className='min-h-screen bg-background'>
                <Header />

                <article>
                    <section className='py-20 bg-gradient-to-b from-primary/5 to-background' role='banner'>
                        <div className='container'>
                            <div className='max-w-3xl mx-auto text-center'>
                                <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
                                    About <span className='gradient-text'>ScholarBridge</span> – Democratizing Educational Funding Access
                                </h1>
                                <p className='text-xl text-muted-foreground leading-relaxed'>
                                    Bridging the gap between ambitious students and life-changing scholarship opportunities worldwide since
                                    2024.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='py-16'>
                        <div className='container'>
                            <div className='grid md:grid-cols-2 gap-12 items-center'>
                                <div>
                                    <h2 className='font-display text-3xl font-bold text-foreground mb-4'>
                                        Our Mission: Making Education Accessible
                                    </h2>
                                    <p className='text-muted-foreground mb-4 leading-relaxed'>
                                        At <strong>ScholarBridge</strong>, we believe that financial barriers should never stand in the way
                                        of educational dreams. Our mission is to{' '}
                                        <strong>democratize access to scholarship information</strong>, making it easier for students
                                        worldwide to discover and apply for funding opportunities.
                                    </p>
                                    <p className='text-muted-foreground leading-relaxed'>
                                        We've built a comprehensive platform that aggregates scholarships from universities, foundations,
                                        governments, and private organizations, helping over <strong>500,000 students</strong> achieve their
                                        educational goals and secure over <strong>$2 billion in funding</strong>.
                                    </p>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='bg-card border border-border rounded-xl p-6 text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3'>
                                            <Users className='h-6 w-6 text-primary' />
                                        </div>
                                        <div className='text-3xl font-bold gradient-text'>500K+</div>
                                        <div className='text-sm text-muted-foreground'>Students Helped</div>
                                    </div>
                                    <div className='bg-card border border-border rounded-xl p-6 text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3'>
                                            <Award className='h-6 w-6 text-primary' />
                                        </div>
                                        <div className='text-3xl font-bold gradient-text'>10K+</div>
                                        <div className='text-sm text-muted-foreground'>Scholarships</div>
                                    </div>
                                    <div className='bg-card border border-border rounded-xl p-6 text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3'>
                                            <Globe className='h-6 w-6 text-primary' />
                                        </div>
                                        <div className='text-3xl font-bold gradient-text'>50+</div>
                                        <div className='text-sm text-muted-foreground'>Countries</div>
                                    </div>
                                    <div className='bg-card border border-border rounded-xl p-6 text-center'>
                                        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3'>
                                            <TrendingUp className='h-6 w-6 text-primary' />
                                        </div>
                                        <div className='text-3xl font-bold gradient-text'>$2B+</div>
                                        <div className='text-sm text-muted-foreground'>Total Funding</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='py-16 bg-card/50'>
                        <div className='container'>
                            <div className='max-w-3xl mx-auto text-center mb-12'>
                                <h2 className='font-display text-3xl font-bold text-foreground mb-4'>Core Values Driving Our Platform</h2>
                                <p className='text-muted-foreground'>The principles that guide everything we do at ScholarBridge</p>
                            </div>
                            <div className='grid md:grid-cols-3 gap-8'>
                                <div className='text-center'>
                                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4'>
                                        <Target className='h-8 w-8 text-primary' />
                                    </div>
                                    <h3 className='font-display text-xl font-semibold text-foreground mb-2'>Accessibility</h3>
                                    <p className='text-muted-foreground'>
                                        Making scholarship information free and accessible to everyone, everywhere.
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4'>
                                        <Heart className='h-8 w-8 text-primary' />
                                    </div>
                                    <h3 className='font-display text-xl font-semibold text-foreground mb-2'>Integrity</h3>
                                    <p className='text-muted-foreground'>
                                        Providing verified, accurate, and up-to-date scholarship information you can trust.
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4'>
                                        <Users className='h-8 w-8 text-primary' />
                                    </div>
                                    <h3 className='font-display text-xl font-semibold text-foreground mb-2'>Community</h3>
                                    <p className='text-muted-foreground'>
                                        Building a supportive community of students helping each other succeed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='py-20 bg-primary/5'>
                        <div className='container'>
                            <div className='max-w-3xl mx-auto text-center'>
                                <h2 className='font-display text-3xl font-bold text-foreground mb-4'>
                                    Ready to Start Your Scholarship Journey?
                                </h2>
                                <p className='text-muted-foreground mb-8'>
                                    Join thousands of students who have found their perfect scholarship match through ScholarBridge.
                                </p>
                                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                    <Button size='lg' asChild>
                                        <Link href='/search'>Browse Scholarships</Link>
                                    </Button>
                                    <Button size='lg' variant='outline' asChild>
                                        <Link href='/contact'>Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

                <footer className='py-8 bg-card border-t border-border' role='contentinfo'>
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
