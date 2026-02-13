'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { generateBreadcrumbSchema, organizationSchema } from '@/lib/metadata'
import { Award, Clock, Mail, MapPin, Send } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

// Structured Data for Contact Page
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://scholarbridge.com' },
    { name: 'Contact Us', url: 'https://scholarbridge.com/contact' }
])

const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ScholarBridge',
    description: 'Get in touch with ScholarBridge support team for scholarship search assistance',
    url: 'https://scholarbridge.com/contact',
    mainEntity: {
        '@type': 'Organization',
        name: 'ScholarBridge',
        email: 'info@scholarbridge.com',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'info@scholarbridge.com',
            availableLanguage: ['English'],
            areaServed: 'Worldwide',
            hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00'
            }
        }
    }
}

export function ContactPageClient() {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: 'Message Sent!',
                description: "We'll get back to you within 24-48 hours."
            })
            setFormData({ name: '', email: '', subject: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

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
                id='contact-page-schema'
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />

            <div className='min-h-screen bg-background'>
                <Header />

                <article>
                    <section className='py-20 bg-gradient-to-b from-primary/5 to-background' role='banner'>
                        <div className='container'>
                            <div className='max-w-3xl mx-auto text-center'>
                                <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
                                    Contact <span className='gradient-text'>ScholarBridge</span> – We're Here to Help
                                </h1>
                                <p className='text-xl text-muted-foreground leading-relaxed'>
                                    Have questions about scholarships? Our support team is ready to assist you. We respond within 24-48
                                    hours.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className='py-16'>
                        <div className='container'>
                            <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                                <div>
                                    <h2 className='font-display text-2xl font-bold text-foreground mb-6'>How to Reach Us</h2>
                                    <div className='space-y-6'>
                                        <div className='flex gap-4' itemScope itemType='https://schema.org/ContactPoint'>
                                            <div className='flex-shrink-0'>
                                                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                                                    <Mail className='h-6 w-6 text-primary' />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-foreground mb-1'>Email Support</h3>
                                                <a
                                                    href='mailto:info@scholarbridge.com'
                                                    className='text-primary hover:underline'
                                                    itemProp='email'
                                                >
                                                    info@scholarbridge.com
                                                </a>
                                                <p className='text-sm text-muted-foreground mt-1'>
                                                    For scholarship inquiries and general support
                                                </p>
                                            </div>
                                        </div>

                                        <div className='flex gap-4'>
                                            <div className='flex-shrink-0'>
                                                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                                                    <Clock className='h-6 w-6 text-primary' />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-foreground mb-1'>Response Time</h3>
                                                <p className='text-muted-foreground'>24-48 hours</p>
                                                <p className='text-sm text-muted-foreground mt-1'>Monday to Friday, 9 AM - 5 PM EST</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-4'>
                                            <div className='flex-shrink-0'>
                                                <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                                                    <MapPin className='h-6 w-6 text-primary' />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-foreground mb-1'>Headquarters</h3>
                                                <p className='text-muted-foreground'>ScholarBridge Inc.</p>
                                                <p className='text-sm text-muted-foreground mt-1'>Serving students worldwide</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-8 p-6 bg-card border border-border rounded-xl'>
                                        <h3 className='font-semibold text-foreground mb-3'>Quick Answers in Our FAQ</h3>
                                        <p className='text-sm text-muted-foreground mb-4'>
                                            Before contacting us, check our comprehensive FAQ section for instant answers to common
                                            scholarship questions.
                                        </p>
                                        <Button variant='outline' asChild>
                                            <Link href='/#faq'>View Frequently Asked Questions</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div>
                                    <div className='bg-card border border-border rounded-xl p-6 md:p-8'>
                                        <h2 className='font-display text-2xl font-bold text-foreground mb-6'>Send Us a Message</h2>
                                        <form onSubmit={handleSubmit} className='space-y-4' aria-label='Contact form'>
                                            <div>
                                                <label htmlFor='name' className='text-sm font-medium text-foreground mb-2 block'>
                                                    Your Name <span className='text-destructive'>*</span>
                                                </label>
                                                <Input
                                                    id='name'
                                                    name='name'
                                                    type='text'
                                                    placeholder='John Doe'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='email' className='text-sm font-medium text-foreground mb-2 block'>
                                                    Email Address <span className='text-destructive'>*</span>
                                                </label>
                                                <Input
                                                    id='email'
                                                    name='email'
                                                    type='email'
                                                    placeholder='john@example.com'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    aria-required='true'
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='subject' className='text-sm font-medium text-foreground mb-2 block'>
                                                    Subject <span className='text-destructive'>*</span>
                                                </label>
                                                <Input
                                                    id='subject'
                                                    name='subject'
                                                    type='text'
                                                    placeholder='How can we help you?'
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    aria-required='true'
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor='message' className='text-sm font-medium text-foreground mb-2 block'>
                                                    Message <span className='text-destructive'>*</span>
                                                </label>
                                                <Textarea
                                                    id='message'
                                                    name='message'
                                                    placeholder='Tell us more about your inquiry...'
                                                    rows={6}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <Button type='submit' className='w-full' size='lg' disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    'Sending...'
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className='ml-2 h-4 w-4' />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </div>
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
                                <Link href='/contact' className='hover:text-foreground transition-colors' aria-current='page'>
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
