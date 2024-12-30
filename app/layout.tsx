import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/Providers/AuthProvider";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

// Optimize font loading with display swap and preload
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add common weights for better typography
  variable: "--font-poppins", // Enable CSS variable for flexible usage
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Enhanced metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Blog Sphere",
    template: "%s | Blog Sphere",
  },
  description:
    "Create and share your stories with the world on Blog Sphere - The modern blogging platform",
  keywords: [
    "blog",
    "writing",
    "articles",
    "content creation",
    "blogging platform",
  ],
  authors: [{ name: "Blog Sphere Team" }],
  creator: "Ali Fouanne",
  publisher: "Ali Fouanne",
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html
        lang="en"
        suppressHydrationWarning={process.env.NODE_ENV === "production"}
        className={`${poppins.variable}`}
      >
        <head />
        <body className="min-h-screen bg-background  antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="blog-sphere-theme"
          >
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </AuthProvider>
  );
}
