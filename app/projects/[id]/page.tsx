import { Project } from "@/projects/types";
import data from "@/projects/fakeData.json";
import ProjectDetails from "@/components/project-details";

async function getData(id: string): Promise<Project> {
  return data.filter((x) => x.id == id)[0] as Project;
}

export default async function Projects({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  return (
    <main className="min-h-screen container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">{data.name}</h1>
      {data.description ? (
        <h1 className="text-sm mt-2">{data.description}</h1>
      ) : (
        <></>
      )}
      {/* @ts-ignore */}
      <ProjectDetails />
    </main>
  );
}
