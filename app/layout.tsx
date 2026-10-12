import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile, siteUrl, experience, certification, education } from "@/data/profile";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${profile.name} | Senior Oracle APEX, Forms & PL/SQL Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Zain Ul Abdin",
    "Oracle APEX Developer",
    "Oracle Forms and Reports Developer",
    "Oracle PL/SQL Developer",
    "Oracle OAF Developer",
    "Oracle ERP Developer",
    "Head of IT",
    "Al-Khobar",
    "Saudi Arabia",
    "Oracle Database 19c",
    "Oracle Database 21c",
    "Oracle APEX Cloud Developer Certified",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} Portfolio`,
    title,
    description: profile.description,
    locale: "en_US",
    firstName: "Zain Ul",
    lastName: "Abdin",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0f" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: experience[0].role,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Al-Khobar",
    addressRegion: "Eastern Province",
    addressCountry: "SA",
  },
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: certification.name,
    recognizedBy: { "@type": "Organization", name: certification.issuer },
  },
  knowsAbout: [
    "Oracle APEX",
    "Oracle Forms",
    "Oracle Reports",
    "Oracle Application Framework",
    "PL/SQL",
    "Oracle Database",
    "Oracle ERP Cloud",
  ],
  knowsLanguage: ["English", "Urdu"],
  sameAs: [profile.linkedin],
};

// Runs before paint: applies the saved/system theme and enables reveal animations.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add('js')})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
