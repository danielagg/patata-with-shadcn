import { ProjectCard } from "@/components/project-card";
import { Project } from "@/projects/types";
import data from "@/projects/fakeData.json";

async function getData(): Promise<Project[]> {
  return data as Project[];
}

export default async function Projects() {
  const data = await getData();

  return (
    <main className="min-h-screen container flex flex-col bg-background">
      <h1 className=" text-5xl font-bold mt-12">Your Projects</h1>
      <div className="mt-12 flex flex-wrap gap-6">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </main>
  );
}
