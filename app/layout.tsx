import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar/side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potato with shadcn/ui",
  description: "Quick mockup of Koople using shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-background">{children}</div>
      </body>
    </html>
  );
}
