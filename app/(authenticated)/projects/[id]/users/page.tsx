import { UsersOfProjectAggregate } from "@/projects/types";
import data from "@/projects/sample/users.json";
import { UserStatistics } from "@/components/users/statistics";
import { UserCountDelta } from "@/components/users/user-count-delta";
import { NewUniqueUsers } from "@/components/users/new-unique-users";
import { RetentionRate } from "@/components/users/retention-rate";
import { UsersTable } from "@/components/users/table";

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
        <div className="w-1/3 flex flex-col gap-y-4">
          <UserCountDelta data={data.statistics} />
          <NewUniqueUsers count={16} delta={0.056} />
          <RetentionRate rate={0.32} />
        </div>
      </div>
      <div className="my-12">
        <h2 className="font-bold text-xl">User Identities</h2>
        <UsersTable data={data.users} />
      </div>
    </main>
  );
}
