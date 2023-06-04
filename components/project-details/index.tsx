import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureManagementEntry } from "@/feature-management/types";
import data from "@/feature-management/fakeData.json";
import { AllViewTable } from "./all-view";
import { getColumns } from "./all-view-columns";
import { AllViewContainer } from "./all-view-container";

async function getOverviewData(): Promise<FeatureManagementEntry[]> {
  return data as FeatureManagementEntry[];
}

export default async function ProjectDetails() {
  const overview = await getOverviewData();

  return (
    <Tabs defaultValue="all" className="mt-6">
      <TabsList>
        <TabsTrigger className="px-10" value="all">
          All
        </TabsTrigger>
        <TabsTrigger className="px-10" value="feature-flags">
          Feature Flags
        </TabsTrigger>
        <TabsTrigger className="px-10" value="remote-configs">
          Remote Configs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <AllViewContainer data={overview} />
      </TabsContent>
      <TabsContent value="feature-flags">
        <AllViewContainer
          data={overview.filter((x) => x.type === "feature-flag")}
        />
      </TabsContent>
      <TabsContent value="remote-configs">
        <AllViewContainer
          data={overview.filter((x) => x.type === "remote-config")}
        />
      </TabsContent>
    </Tabs>
  );
}
