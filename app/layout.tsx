import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});
const displayFont = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rasel Birds of eden — কাঁথা, বেডশিট, লেপ ও তোষক",
  description:
    "আপনার ঘরের জন্য মানসম্মত দেশীয় কাঁথা, বেডশিট, লেপ ও তোষক। সারাদেশে হোম ডেলিভারি।",
};
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4efe6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className="bg-background" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${bodyFont.variable} ${displayFont.variable}`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
