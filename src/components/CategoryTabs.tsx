import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/scholarships";
import { 
  Award, 
  Heart, 
  Microscope, 
  Trophy, 
  Sparkles, 
  Globe, 
  Building, 
  Briefcase 
} from "lucide-react";

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  "Merit-Based": Award,
  "Need-Based": Heart,
  "Research": Microscope,
  "Sports": Trophy,
  "Women in STEM": Sparkles,
  "International": Globe,
  "Government": Building,
  "Private": Briefcase,
};

const CategoryTabs = ({ selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2 -mb-2">
      <div className="flex gap-2 min-w-max">
        <Button
          variant={selectedCategory === "" ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange("")}
          className={cn(
            "rounded-full transition-all",
            selectedCategory === "" && "shadow-sm"
          )}
        >
          All
        </Button>
        {categories.map((category) => {
          const Icon = categoryIcons[category] || Award;
          const isSelected = selectedCategory === category;
          return (
            <Button
              key={category}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "rounded-full transition-all gap-1.5",
                isSelected && "shadow-sm"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
