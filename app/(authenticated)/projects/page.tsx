import { ProjectCard } from "@/components/project-card";
import { Organization, OrganizationWithProjects } from "@/projects/types";
import { cookies } from "next/headers";
import { makeHttpGet } from "@/lib/utils";

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

export default async function Projects() {
  const projects = await getProjects();

  projects.sort((a, b) =>
    a.organization.createdAt > b.organization.createdAt ? 0 : -1
  );

  const mappedProjects = projects.flatMap((c) =>
    c.projects.map((proj) => ({
      project: {
        key: proj.key,
        name: proj.name,
        desc: proj.description,
        environments: proj.environments,
      },
      organization: { key: c.organization.key, name: c.organization.name },
    }))
  );

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">My Projects</h1>
      <div className="my-12 flex flex-wrap gap-6">
        {mappedProjects.map((x) => {
          return (
            <ProjectCard
              key={x.organization.key + "-" + x.project.key}
              data={x}
            />
          );
        })}
      </div>
    </main>
  );
}
