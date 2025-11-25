import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noel Trip B2B - Uzbekistan Inbound Tourism",
  description: "B2B platform for travel agencies receiving tourists from around the world to Uzbekistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
