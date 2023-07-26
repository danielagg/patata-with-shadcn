import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { Sidebar } from "@/components/sidebar/side-bar";
import { cookies } from "next/headers";
import {
  Organization,
  OrganizationWithProjects,
  Project,
} from "@/projects/types";
import { makeHttpGet } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Potato with shadcn/ui",
  description: "Quick mockup of Koople using shadcn/ui",
};

async function getAuthenticatedUser(): Promise<any> {
  const authToken = cookies().get("bearer")!.value;
  return makeHttpGet("/me", authToken);
}

// todo: extract (reusing)
async function getProjects(): Promise<OrganizationWithProjects[]> {
  const authToken = cookies().get("bearer")!.value;

  let result: OrganizationWithProjects[] = [];

  const organizations = await makeHttpGet<Organization[]>(
    "/organizations",
    authToken
  );

  for (let index = 0; index < organizations.length; index++) {
    const currentOrg = organizations[index];
    const projectsPerOrganization = await makeHttpGet<
      OrganizationWithProjects[]
    >(`/organizations/${currentOrg.key}`, authToken);

    result = result.concat(projectsPerOrganization);
  }

  return result;
}

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getProjects();
  const user = await getAuthenticatedUser();

  projects.sort((a, b) =>
    a.organization.createdAt > b.organization.createdAt ? 0 : -1
  );

  const projectsForSidebar = projects.flatMap((c) =>
    c.projects.map((proj) => ({
      project: { key: proj.key, name: proj.name },
      organization: { key: c.organization.key, name: c.organization.name },
    }))
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex">
              <div className="w-1/5 hidden lg:block">
                <Sidebar data={projectsForSidebar} />
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
