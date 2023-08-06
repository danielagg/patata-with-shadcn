import data from "@/projects/sample/settings.json";
import { ProjectSettings } from "@/projects/types";
import { Edit } from "./edit";

async function getData(): Promise<ProjectSettings> {
  return await Promise.resolve(data);
}

export default async function UsersOfProjects() {
  const data = await getData();

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold my-12">Settings</h1>

      <Edit data={data} />
    </main>
  );
}
