// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/data/constants/fonts";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const SITE_URL = "https://youssef-el-fadaly.vercel.app";

// 🖼️ استخدم JPG/PNG كبيرة للـ OG/Twitter
const PROFILE_IMAGE_PATH = "/profile.jpg"; // أو "/images/works/profile.jpg"

// ✉️ إيميل
const EMAIL = "tgtgygyuossef@gmail.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Youssef El Fadaly — Web Developer & UI/UX Designer",
  description:
    "Professional portfolio showcasing modern websites and creative UI/UX designs by Youssef El Fadaly.",

  keywords: [
    "Youssef El Fadaly",
    "web developer portfolio",
    "UI/UX designer",
    "Next.js projects",
    "React developer",
    "frontend developer",
    "modern websites",
    "SEO optimized websites",
    "freelance web design",
    "يوسف الفضالي",
    "برمجه مواقع",
    "تصميم مواقع",
    "انشاء ويب سايت",
    "متجر الكتروني",
  ],

  authors: [{ name: "Youssef El Fadaly", url: `mailto:${EMAIL}` }],
  creator: "Youssef El Fadaly",
  publisher: "Youssef El Fadaly",

  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      ar: `${SITE_URL}/ar`,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Youssef El Fadaly — Portfolio",
    title: "Youssef El Fadaly — Web Developer & UI/UX Designer",
    description:
      "Explore the portfolio of Youssef El Fadaly, a web developer and UI/UX designer creating modern, responsive, SEO-friendly websites.",
    images: [
      {
        url: PROFILE_IMAGE_PATH, // 🔹 لازم JPG/PNG
        width: 1200,
        height: 630,
        alt: "Preview — Youssef El Fadaly Portfolio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Youssef El Fadaly — Web Developer & UI/UX Designer",
    description:
      "Modern, responsive, SEO-friendly websites by Youssef El Fadaly (Next.js, React, Tailwind).",
    images: [PROFILE_IMAGE_PATH], // 🔹 نفس JPG/PNG
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // ✅ حدّث المسارات لتطابق مكان الملفات الفعلي داخل /public
  icons: {
    icon: [
      { url: "/profile.ico" }, // favicon الرئيسي
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // (اختياري) لو عملت Apple Touch Icon لاحقًا:
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/profile.ico"],
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} antialiased overflow-x-hidden bg-[#f8f8f8] dark:bg-cool-black relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
