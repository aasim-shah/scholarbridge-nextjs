import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import "@/index.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScholarBridge.com - Find Scholarships & Educational Funding Opportunities",
  description: "Discover thousands of scholarships, grants, and educational funding opportunities worldwide. Connect with your future through ScholarBridge - your comprehensive scholarship search platform.",
  keywords: "scholarships, grants, financial aid, educational funding, study abroad, college scholarships",
  authors: [{ name: "ScholarBridge" }],
  openGraph: {
    title: "ScholarBridge.com - Find Scholarships & Educational Funding Opportunities",
    description: "Discover thousands of scholarships, grants, and educational funding opportunities worldwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarBridge.com - Find Scholarships & Educational Funding Opportunities",
    description: "Discover thousands of scholarships, grants, and educational funding opportunities worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
