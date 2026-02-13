import { Providers } from '@/components/Providers'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import '@/index.css'
import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
    preload: true, // Preload for faster initial render
    fallback: ['system-ui', 'arial'], // System font fallback
    adjustFontFallback: true, // Reduce CLS by matching metrics
})

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta',
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
})

// Global metadata configuration (page-specific metadata in each page)
export const metadata: Metadata = {
    metadataBase: new URL('https://scholarbridge.com'),
    title: {
        template: '%s | ScholarBridge',
        default: 'ScholarBridge'
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    verification: {
        google: 'your-google-verification-code'
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                {/* Performance: Preconnect to external domains */}
                <link rel="preconnect" href="https://images.unsplash.com" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
                
                {/* Performance: Preload critical resources */}
                <link rel="preload" as="style" href="/fonts" />
            </head>
            <body className={`${dmSans.variable} ${plusJakarta.variable} font-sans antialiased`}>
                <Providers>
                    {children}
                    <Toaster />
                    <Sonner />
                </Providers>
            </body>
        </html>
    )
}
