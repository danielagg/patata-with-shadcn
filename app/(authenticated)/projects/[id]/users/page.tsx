import { UsersOfProjectAggregate } from "@/projects/types";
import data from "@/projects/sample/users.json";
import { UserStatistics } from "@/components/users/statistics";
import { UserCountDelta } from "@/components/users/userCountDelta";

async function getData(): Promise<UsersOfProjectAggregate> {
  return await Promise.resolve(data);
}

export default async function UsersOfProjects() {
  const data = await getData();

  return (
    <main className="container flex flex-col bg-background">
      <h1 className="text-5xl font-bold mt-12">Users of the Project</h1>

      <div className="mt-12 flex items-start gap-4">
        <UserStatistics data={data.statistics} />
        <div className="w-1/3">
          <UserCountDelta data={data.statistics} />
        </div>
      </div>
    </main>
  );
}
