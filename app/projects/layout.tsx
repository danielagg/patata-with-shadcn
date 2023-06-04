import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar/side-bar";
import { Project } from "@/projects/types";
import data from "@/projects/fakeData.json";

async function getData(): Promise<Project[]> {
  return data as Project[];
}

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen">
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
  );
}
