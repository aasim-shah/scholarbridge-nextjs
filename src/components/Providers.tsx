'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ScholarshipProvider } from '@/contexts/ScholarshipContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { useMemo } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    // Memoize QueryClient to prevent recreating on every render
    const queryClient = useMemo(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        gcTime: 5 * 60 * 1000, // 5 minutes (formerly cacheTime)
                        refetchOnWindowFocus: false, // Reduce unnecessary refetches on mobile
                        retry: 1 // Reduce retry attempts for faster failure
                    }
                }
            }),
        []
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute='class'
                defaultTheme='light'
                enableSystem
                disableTransitionOnChange // Prevent flash during theme change
            >
                <ScholarshipProvider>
                    <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
                </ScholarshipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
