
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { type Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
import { siteMetadata } from "@/constants/data";
export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: [{ rel: "icon", url: siteMetadata.iconUrl }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
