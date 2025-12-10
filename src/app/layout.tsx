import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenon | Full-Stack Developer",
  description: "Full-stack developer specializing in modern web applications with React, Next.js, Java Spring Boot, and PostgreSQL.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Java", "Spring Boot", "PostgreSQL", "Web Development"],
  authors: [{ name: "Kenon" }],
  openGraph: {
    title: "Kenon | Full-Stack Developer",
    description: "Building modern, scalable web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
