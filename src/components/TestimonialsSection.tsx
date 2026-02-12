import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Master's Student, MIT",
    content: "ScholarBridge helped me find a full scholarship that covered my entire tuition. The filtering system made it so easy to find relevant opportunities!",
    rating: 5,
  },
  {
    name: "James Miller",
    role: "PhD Candidate, Oxford",
    content: "I discovered scholarships I never knew existed. Within 3 months of using ScholarBridge, I secured funding for my doctoral research.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Undergraduate, Stanford",
    content: "The category-based search saved me so much time. Highly recommend to any student looking for financial aid opportunities.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Students Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join thousands of students who found their perfect scholarship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
