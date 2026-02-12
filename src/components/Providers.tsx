'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScholarshipProvider } from "@/contexts/ScholarshipContext";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ScholarshipProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ScholarshipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
