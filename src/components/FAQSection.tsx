import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { generateFAQSchema } from '@/lib/metadata'
import Script from 'next/script'

const faqs = [
    {
        question: 'Is ScholarBridge free to use?',
        answer: 'Yes, ScholarBridge is completely free for students. We believe every student deserves access to scholarship information without any barriers. You can search, filter, and browse all 10,000+ scholarships at no cost.'
    },
    {
        question: 'How often are new scholarships added?',
        answer: 'Our team updates the scholarship database daily. We continuously monitor universities, foundations, governments, and private organizations worldwide to add new scholarships as soon as they become available and remove expired ones to keep the listings current and accurate.'
    },
    {
        question: 'Can I apply for scholarships directly through ScholarBridge?',
        answer: "ScholarBridge provides detailed scholarship information and direct links to the official application pages. You'll apply through the scholarship provider's website to ensure a secure process and meet their specific requirements. This also ensures your application data remains private."
    },
    {
        question: 'Are these scholarships available for international students?',
        answer: 'Yes! Many of our listed scholarships are open to international students from around the world. You can use our advanced country and level filters to find opportunities that match your specific eligibility criteria and location. We feature scholarships from 50+ countries.'
    },
    {
        question: 'How do I know if a scholarship is legitimate?',
        answer: 'Every scholarship on ScholarBridge is carefully verified by our research team. We only list opportunities from accredited universities, government bodies, and reputable organizations. We never charge fees and legitimate scholarships never ask for application fees either.'
    }
]

// Generate FAQ Schema for SEO
const faqSchema = generateFAQSchema(faqs)

export function FAQSection() {
    return (
        <>
            <Script id='faq-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className='py-12 md:py-16 bg-background' id='faq' itemScope itemType='https://schema.org/FAQPage'>
                <div className='container max-w-3xl'>
                    <div className='text-center mb-10'>
                        <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-3'>
                            Frequently Asked Questions About Scholarships
                        </h2>
                        <p className='text-muted-foreground max-w-lg mx-auto'>
                            Get instant answers to common questions about finding and applying for scholarships
                        </p>
                    </div>

                    <Accordion type='single' collapsible className='space-y-3'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className='bg-card border border-border rounded-lg px-5 data-[state=open]:shadow-md transition-shadow'
                                itemScope
                                itemProp='mainEntity'
                                itemType='https://schema.org/Question'
                            >
                                <AccordionTrigger
                                    className='text-left font-semibold text-foreground hover:no-underline py-4'
                                    itemProp='name'
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    className='text-muted-foreground pb-4 leading-relaxed'
                                    itemScope
                                    itemProp='acceptedAnswer'
                                    itemType='https://schema.org/Answer'
                                >
                                    <span itemProp='text'>{faq.answer}</span>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    )
}
