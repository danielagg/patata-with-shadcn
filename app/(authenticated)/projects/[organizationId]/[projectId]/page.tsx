import ProjectDetails from "@/components/project-details";
import { makeHttpGet } from "@/lib/utils";
import { FeatureManagementPerProject } from "@/feature-management/types";

async function getData(
  organizationKey: string,
  projectKey: string
): Promise<FeatureManagementPerProject> {
  return makeHttpGet<FeatureManagementPerProject>(
    `/projects/${organizationKey}/${projectKey}/pipeline`
  );
}

export default async function Projects({
  params,
}: {
  params: { organizationId: string; projectId: string };
}) {
  const data = await getData(params.organizationId, params.projectId);

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">{data.name}</h1>
      {data.description ? (
        <h1 className="text-sm mt-2">{data.description}</h1>
      ) : (
        <></>
      )}
      {/* @ts-ignore */}
      <ProjectDetails data={data} />
    </main>
  );
}
