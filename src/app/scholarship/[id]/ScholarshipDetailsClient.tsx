'use client'

import Header from '@/components/Header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Scholarship } from '@/data/scholarships'
import { ArrowLeft, Award, BadgeCheck, Building2, Calendar, Clock, DollarSign, ExternalLink, GraduationCap, MapPin } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'

interface ScholarshipDetailsClientProps {
    scholarship: Scholarship
}

export function ScholarshipDetailsClient({ scholarship }: ScholarshipDetailsClientProps) {
    // Structured Data - Scholarship
    const scholarshipSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOccupationalCredential',
        name: scholarship.title,
        description: scholarship.description,
        credentialCategory: scholarship.level,
        educationalLevel: scholarship.level,
        competencyRequired: scholarship.field,
        offers: {
            '@type': 'Offer',
            offeredBy: {
                '@type': 'Organization',
                name: scholarship.organization
            },
            price: scholarship.amount || 'Varies',
            priceCurrency: scholarship.currency || 'USD',
            validThrough: scholarship.deadline
        },
        availableIn: {
            '@type': 'Country',
            name: scholarship.country
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
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Search Scholarships',
                item: 'https://scholarbridge.com/search'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: scholarship.title,
                item: `https://scholarbridge.com/scholarship/${scholarship.id}`
            }
        ]
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    const getDaysUntilDeadline = (deadline: string) => {
        const today = new Date()
        const deadlineDate = new Date(deadline)
        const diffTime = deadlineDate.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    const daysLeft = getDaysUntilDeadline(scholarship.deadline)

    const parseScholarshipDetails = () => {
        const desc = scholarship.description || ''

        const eligibility: string[] = []
        const eligibilityMatch = desc.match(/Eligibility:([^.]*(?:\.[^.]*){0,10}?)(?:Application:|Benefits:|Coverage:|Requirements:|$)/i)
        if (eligibilityMatch) {
            const eligText = eligibilityMatch[1].trim()
            const items = eligText.split(/[.;]\s+|(?:\.\s+)?(?:Must|Requires|Required|Minimum|Maximum|Include)/)
            items.forEach(item => {
                const cleaned = item
                    .trim()
                    .replace(/^(must|requires|required|minimum|maximum|include)/i, '')
                    .trim()
                if (cleaned && cleaned.length > 10) {
                    eligibility.push(cleaned.charAt(0).toUpperCase() + cleaned.slice(1))
                }
            })
        }

        const benefits: string[] = []
        const benefitsMatch = desc.match(
            /(?:Coverage|Covers|Benefits|Includes|Value):([^.]*(?:\.[^.]*){0,10}?)(?:Eligibility:|Application:|Requirements:|$)/i
        )
        if (benefitsMatch) {
            const benefitText = benefitsMatch[1].trim()
            const items = benefitText.split(/,|\band\b/i)
            items.forEach(item => {
                const cleaned = item
                    .trim()
                    .replace(/^(covers|includes?|provides?)\s+/i, '')
                    .trim()
                if (cleaned && cleaned.length > 5) {
                    benefits.push(cleaned.charAt(0).toUpperCase() + cleaned.slice(1))
                }
            })
        }

        if (eligibility.length === 0) {
            if (desc.includes('90%') || desc.includes('GPA')) eligibility.push('Minimum academic requirements apply (see description)')
            if (desc.includes('Citizen') || desc.includes('Permanent Resident'))
                eligibility.push('Citizenship or residency requirements apply')
            if (desc.includes('international')) eligibility.push('Open to international students')
            if (desc.includes('English') || desc.includes('IELTS') || desc.includes('TOEFL'))
                eligibility.push('English proficiency required')
            if (eligibility.length === 0) eligibility.push('Please check official website for detailed eligibility criteria')
        }

        if (benefits.length === 0) {
            if (desc.includes('tuition')) benefits.push('Tuition coverage')
            if (desc.includes('stipend') || desc.includes('living')) benefits.push('Living stipend')
            if (desc.includes('travel')) benefits.push('Travel allowance')
            if (desc.includes('insurance') || desc.includes('health')) benefits.push('Health insurance')
            if (benefits.length === 0 && scholarship.amount) benefits.push(`Award value: ${scholarship.amount}`)
            if (benefits.length === 0) benefits.push('Varies - see official website for details')
        }

        const documents = [
            'Academic transcripts',
            'Letter of motivation or personal statement',
            'Letters of recommendation',
            'CV/Resume',
            'Copy of passport or ID',
            'English proficiency certificate (if applicable)',
            'Additional documents as specified on official website'
        ]

        return { eligibility, benefits, documents }
    }

    const { eligibility, benefits, documents } = parseScholarshipDetails()

    return (
        <>
            {/* Structured Data */}
            <Script
                id='scholarship-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipSchema) }}
            />
            <Script
                id='breadcrumb-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className='min-h-screen bg-background'>
                <Header />

                <article className='py-8 md:py-12'>
                    <div className='container'>
                        <Button variant='ghost' asChild className='mb-6 -ml-2'>
                            <Link href='/search'>
                                <ArrowLeft className='mr-2 h-4 w-4' />
                                Back to Listings
                            </Link>
                        </Button>

                        <div className='grid lg:grid-cols-3 gap-8'>
                            <div className='lg:col-span-2 space-y-6'>
                                <Card className='border-border/50 shadow-card overflow-hidden'>
                                    <div className='h-2 bg-gradient-to-r from-primary to-accent' />
                                    <CardHeader className='pb-4'>
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            <Badge variant={scholarship.level === 'Master' ? 'default' : 'secondary'}>
                                                {scholarship.level}
                                            </Badge>
                                            <Badge variant='outline'>{scholarship.country}</Badge>
                                            <Badge variant='outline'>{scholarship.field}</Badge>
                                        </div>
                                        <CardTitle className='font-display text-2xl md:text-3xl text-card-foreground'>
                                            {scholarship.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className='space-y-4'>
                                        <div className='flex items-center gap-3 text-muted-foreground'>
                                            <Building2 className='h-5 w-5 shrink-0' />
                                            <span className='text-lg'>{scholarship.organization}</span>
                                        </div>
                                        {scholarship.is_verified ? (
                                            <div className='flex items-center gap-2 text-emerald-600'>
                                                <BadgeCheck className='h-5 w-5' />
                                                <span className='text-sm font-medium'>Verified Scholarship</span>
                                            </div>
                                        ) : null}
                                    </CardContent>
                                </Card>

                                <Card className='border-border/50 shadow-card'>
                                    <CardHeader>
                                        <CardTitle className='font-display text-xl'>About This Scholarship</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className='text-muted-foreground leading-relaxed'>{scholarship.description}</p>
                                    </CardContent>
                                </Card>

                                <Accordion type='single' collapsible className='space-y-4'>
                                    <AccordionItem
                                        value='eligibility'
                                        className='border border-border/50 rounded-xl px-6 bg-card shadow-card'
                                    >
                                        <AccordionTrigger className='font-display font-semibold hover:no-underline'>
                                            Eligibility Requirements
                                        </AccordionTrigger>
                                        <AccordionContent className='text-muted-foreground'>
                                            {!scholarship.is_verified && (
                                                <div className='mb-3 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded text-sm text-amber-800 dark:text-amber-200'>
                                                    ⚠️ Unverified - Please check the official website for accurate eligibility criteria
                                                </div>
                                            )}
                                            <ul className='list-disc list-inside space-y-2'>
                                                {eligibility.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value='benefits' className='border border-border/50 rounded-xl px-6 bg-card shadow-card'>
                                        <AccordionTrigger className='font-display font-semibold hover:no-underline'>
                                            Scholarship Benefits
                                        </AccordionTrigger>
                                        <AccordionContent className='text-muted-foreground'>
                                            {!scholarship.is_verified && (
                                                <div className='mb-3 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded text-sm text-amber-800 dark:text-amber-200'>
                                                    ⚠️ Unverified - Please check the official website for complete benefit details
                                                </div>
                                            )}
                                            <ul className='list-disc list-inside space-y-2'>
                                                {benefits.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem
                                        value='documents'
                                        className='border border-border/50 rounded-xl px-6 bg-card shadow-card'
                                    >
                                        <AccordionTrigger className='font-display font-semibold hover:no-underline'>
                                            Required Documents
                                        </AccordionTrigger>
                                        <AccordionContent className='text-muted-foreground'>
                                            <p className='text-sm mb-3'>
                                                Standard documents typically required. Verify exact requirements on the official website.
                                            </p>
                                            <ul className='list-disc list-inside space-y-2'>
                                                {documents.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div className='space-y-6'>
                                <Card
                                    className={`border-border/50 shadow-card ${daysLeft <= 30 && daysLeft > 0 ? 'ring-2 ring-destructive/20' : ''}`}
                                >
                                    <CardHeader className='pb-3'>
                                        <CardTitle className='font-display text-lg flex items-center gap-2'>
                                            <Calendar className='h-5 w-5 text-primary' />
                                            Application Deadline
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className='text-xl font-semibold text-foreground mb-2'>{formatDate(scholarship.deadline)}</p>
                                        {daysLeft > 0 ? (
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='h-4 w-4 text-muted-foreground' />
                                                <span className={daysLeft <= 30 ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                                                    {daysLeft} days remaining
                                                </span>
                                            </div>
                                        ) : (
                                            <Badge variant='destructive'>Deadline passed</Badge>
                                        )}
                                    </CardContent>
                                </Card>

                                <Card className='border-border/50 shadow-card'>
                                    <CardHeader className='pb-3'>
                                        <CardTitle className='font-display text-lg'>Quick Info</CardTitle>
                                    </CardHeader>
                                    <CardContent className='space-y-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                                                <MapPin className='h-5 w-5 text-primary' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-muted-foreground'>Country</p>
                                                <p className='font-medium text-foreground'>{scholarship.country}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                                                <GraduationCap className='h-5 w-5 text-primary' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-muted-foreground'>Level</p>
                                                <p className='font-medium text-foreground'>{scholarship.level}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                                                <Building2 className='h-5 w-5 text-primary' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-muted-foreground'>Field of Study</p>
                                                <p className='font-medium text-foreground'>{scholarship.field}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {scholarship.amount && (
                                    <Card className='shadow-card bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/50 dark:border-emerald-800/30'>
                                        <CardHeader className='pb-3'>
                                            <CardTitle className='font-display text-lg flex items-center gap-2'>
                                                <DollarSign className='h-5 w-5 text-emerald-600' />
                                                Scholarship Value
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='text-xl font-bold text-emerald-700 dark:text-emerald-400'>{scholarship.amount}</p>
                                            {scholarship.currency && (
                                                <p className='text-sm text-muted-foreground mt-1'>Currency: {scholarship.currency}</p>
                                            )}
                                        </CardContent>
                                    </Card>
                                )}

                                <div className='space-y-3'>
                                    <Button asChild size='lg' className='w-full shadow-button'>
                                        <a href={scholarship.link} target='_blank' rel='noopener noreferrer'>
                                            Apply Now
                                            <ExternalLink className='ml-2 h-4 w-4' />
                                        </a>
                                    </Button>
                                    <Button variant='outline' size='lg' className='w-full' asChild>
                                        <Link href='/search'>
                                            <ArrowLeft className='mr-2 h-4 w-4' />
                                            Back to Listings
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

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
