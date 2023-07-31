import { UsersOfProjectAggregate } from "@/projects/types";
import data from "@/projects/sample/users.json";
import { UserStatistics } from "@/components/users/statistics";

async function getData(): Promise<UsersOfProjectAggregate> {
  return await Promise.resolve(data);
}

export default async function UsersOfProjects({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData();

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">Users of the Project</h1>

      <div className="mt-12">
        <UserStatistics data={data.statistics} />
      </div>
    </main>
  );
}
