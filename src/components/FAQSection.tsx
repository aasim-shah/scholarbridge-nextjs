import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is ScholarBridge free to use?",
    answer: "Yes, ScholarBridge is completely free for students. We believe every student deserves access to scholarship information without any barriers.",
  },
  {
    question: "How often are new scholarships added?",
    answer: "Our team updates the database daily. We add new scholarships as soon as they become available and remove expired ones to keep the listings current.",
  },
  {
    question: "Can I apply for scholarships directly through ScholarBridge?",
    answer: "ScholarBridge provides detailed information and direct links to the official application pages. You'll apply through the scholarship provider's website to ensure a secure process.",
  },
  {
    question: "Are these scholarships available for international students?",
    answer: "Many of our listed scholarships are open to international students. You can use our country and level filters to find opportunities that match your eligibility.",
  },
  {
    question: "How do I know if a scholarship is legitimate?",
    answer: "Every scholarship on ScholarBridge is verified by our team. We only list opportunities from accredited universities, government bodies, and reputable organizations.",
  },
];

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about using ScholarBridge
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-5 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
