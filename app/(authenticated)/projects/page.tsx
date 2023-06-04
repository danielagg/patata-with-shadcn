import { ProjectCard } from "@/components/project-card";
import { Project } from "@/projects/types";
import data from "@/projects/fakeData.json";

async function getData(): Promise<Project[]> {
  return data as Project[];
}

export default async function Projects() {
  const data = await getData();

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">My Projects</h1>
      <div className="my-12 flex flex-wrap gap-6">
        {data.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </main>
  );
}
