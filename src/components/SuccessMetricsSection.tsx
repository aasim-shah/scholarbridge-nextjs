import { TrendingUp, DollarSign, GraduationCap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    icon: DollarSign,
    value: "$2.5B+",
    label: "Scholarships Awarded",
    description: "Total value of scholarships successfully matched through our platform",
  },
  {
    icon: GraduationCap,
    value: "85,000+",
    label: "Students Funded",
    description: "Students who received scholarships they discovered on ScholarBridge"
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Higher Success Rate",
    description: "Students using ScholarBridge are 3x more likely to secure funding"
  },
  {
    icon: Clock,
    value: "< 5 min",
    label: "Average Search Time",
    description: "Find relevant scholarships in minutes, not hours",
  },
];

export function SuccessMetricsSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Proven Impact
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real numbers that demonstrate our commitment to student success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="font-semibold text-sm text-foreground mb-2">{metric.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
