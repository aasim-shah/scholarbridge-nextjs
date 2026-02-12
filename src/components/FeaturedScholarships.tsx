import { Flame, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScholarships } from "@/contexts/ScholarshipContext";

export function FeaturedScholarships() {
  const { scholarships } = useScholarships();
  const featured = scholarships.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
              <Flame className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Trending Now
              </h2>
              <p className="text-sm text-muted-foreground">Most viewed scholarships this week</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" asChild className="text-primary">
            <Link href="/search">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((scholarship, index) => (
            <Card 
              key={scholarship.id}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {scholarship.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {scholarship.country}
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {scholarship.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {scholarship.organization}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {scholarship.level}
                  </Badge>
                  <Button variant="ghost" size="sm" asChild className="text-primary p-0 h-auto">
                    <Link href={`/scholarship/${scholarship.id}`}>
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
