import Link from "next/link";
import { MapPin, Calendar, GraduationCap, Tag, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scholarship } from "@/data/scholarships";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  index?: number;
}

const ScholarshipCard = ({ scholarship, index = 0 }: ScholarshipCardProps) => {
  const deadlineDate = new Date(scholarship.deadline);
  const today = new Date();
  const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  const isUrgent = daysUntilDeadline <= 30 && daysUntilDeadline > 0;
  const isExpired = daysUntilDeadline < 0;

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 animate-fade-in bg-card"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start  mb-2 justify-between gap-2">
          <Badge 
            variant={scholarship.level === "Master" ? "default" : "secondary"}
            className="shrink-0"
          >
            {scholarship.level}
          </Badge>
          <Badge variant="outline" className="shrink-0 text-xs">
            <Tag className="h-3 w-3 mr-1" />
            {scholarship.category}
          </Badge>
        </div>
        <p className="font-display font-semibold text-lg  leading-tight text-card-foreground  group-hover:text-primary transition-colors line-clamp-2">
          {scholarship.title} {/* Limit title to 10 words */}
        </p>
        <p className="text-sm text-muted-foreground">{scholarship.organization}</p>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
            <span>{scholarship.country}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <GraduationCap className="h-4 w-4 shrink-0 text-primary/70" />
            <span className="line-clamp-1">{scholarship.field}</span>
          </div>
          {scholarship.amount && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4 shrink-0 text-emerald-500" />
              <span className="font-medium text-emerald-600 dark:text-emerald-400 line-clamp-1">
                {scholarship.amount}
              </span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-primary/70" />
            <span className={isExpired ? "text-destructive" : isUrgent ? "text-amber-600 dark:text-amber-500 font-medium" : "text-muted-foreground"}>
              {isExpired 
                ? "Expired" 
                : isUrgent 
                  ? `${daysUntilDeadline} days left` 
                  : new Date(scholarship.deadline).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })
              }
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild className="w-full" variant="outline" size="sm">
          <Link href={`/scholarship/${scholarship.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ScholarshipCard;
