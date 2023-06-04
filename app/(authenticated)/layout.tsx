import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar/side-bar";
import { Project } from "@/projects/types";
import data from "@/projects/fakeData.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potato with shadcn/ui",
  description: "Quick mockup of Koople using shadcn/ui",
};

async function getData(): Promise<Project[]> {
  return data as Project[];
}

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex">
              <div className="w-1/5 hidden lg:block">
                <Sidebar projects={data} />
              </div>
              <div className="w-full lg:w-4/5 flex flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
