import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raghav Alag | Personal Portfolio",
  description:
    "Personal portfolio of Raghav Alag showcasing expertise in marketing strategy, business consulting, banking operations, GTM strategy, market research, data analytics, and business growth.",
  authors: [
    {
      name: "Raghav Alag",
    },
  ],
  creator: "Raghav Alag",
  keywords: [
    "Raghav Alag",
    "Personal Portfolio",
    "Marketing Strategist",
    "Business Strategy",
    "Consulting",
    "Go-To-Market Strategy",
    "Market Research",
    "Consumer Insights",
    "Data Analytics",
    "Banking Operations",
    "Brand Strategy",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}