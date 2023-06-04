import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5 flex flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
