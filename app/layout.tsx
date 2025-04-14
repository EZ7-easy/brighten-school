import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multilingual App",
  description: "App with Uzbek, Russian and English support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
