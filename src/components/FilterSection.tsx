import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useScholarships } from "@/contexts/ScholarshipContext";
import { categories as defaultCategories } from "@/data/scholarships";

interface FilterSectionProps {
  selectedCountry: string;
  selectedLevel: string;
  selectedField: string;
  selectedCategory: string;
  onCountryChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onFieldChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClearFilters: () => void;
}

const FilterSection = ({
  selectedCountry,
  selectedLevel,
  selectedField,
  selectedCategory,
  onCountryChange,
  onLevelChange,
  onFieldChange,
  onCategoryChange,
  onClearFilters,
}: FilterSectionProps) => {
  const { filterOptions } = useScholarships();
  const hasActiveFilters = selectedCountry || selectedLevel || selectedField || selectedCategory;

  // Use dynamic options from API, fall back to defaults
  const countries = filterOptions.countries.length > 0 ? filterOptions.countries : [];
  const levels = filterOptions.levels.length > 0 ? filterOptions.levels : [];
  const fields = filterOptions.fields.length > 0 ? filterOptions.fields : [];
  const categories = filterOptions.categories.length > 0 ? filterOptions.categories : defaultCategories;

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="font-display font-semibold text-lg text-card-foreground">
          Filter Scholarships
        </h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground self-start sm:self-auto"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Category
          </label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Country
          </label>
          <Select value={selectedCountry} onValueChange={onCountryChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All countries" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All countries</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Level
          </label>
          <Select value={selectedLevel} onValueChange={onLevelChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All levels" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All levels</SelectItem>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Field of Study
          </label>
          <Select value={selectedField} onValueChange={onFieldChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All fields" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all">All fields</SelectItem>
              {fields.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
