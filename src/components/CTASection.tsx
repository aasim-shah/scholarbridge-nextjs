import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-14 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="container relative text-center">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-5">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Start your journey today</span>
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4 max-w-2xl mx-auto">
          Your Dream Education Is One Scholarship Away
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Join over 500,000 students who have already found their perfect scholarship. 
          It's free, fast, and could change your life.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" variant="secondary" asChild className="font-semibold">
            <Link href="/search">
              Browse Scholarships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
