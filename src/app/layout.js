import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "يوسف الفضالي | مطور ويب ومصمم UI/UX",
  description:
    "يوسف الفضالي - مطور ويب متخصص في React و Next.js، مصمم UI/UX محترف، وخبير في بناء مواقع الويب العصرية وتحسين تجربة المستخدم.",
  keywords:
    "يوسف الفضالي, Youssef El-Fadaly, مطور ويب, Web Developer, مصمم UI/UX, UI UX Designer, React, Next.js, JavaScript, تطوير الواجهات الأمامية, Frontend Developer, تطوير مواقع, برمجة الويب",
  author: "يوسف الفضالي",
  generator: "Next.js",
  applicationName: "يوسف الفضالي - تطوير الويب والتصميم",
  robots: "index, follow",
  openGraph: {
    title: "يوسف الفضالي | مطور ويب ومصمم UI/UX",
    description:
      "مطور ويب متخصص في React و Next.js، مصمم UI/UX محترف، وخبير في تحسين تجربة المستخدم.",
    url: "https://yourwebsite.com",
    siteName: "يوسف الفضالي - تطوير الويب",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "يوسف الفضالي - مطور ويب ومصمم UI/UX",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "يوسف الفضالي | مطور ويب ومصمم UI/UX",
    description:
      "متخصص في تطوير الواجهات الأمامية باستخدام React و Next.js، وخبير في تصميم UI/UX.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
