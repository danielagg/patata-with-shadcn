import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "@/feature-management/fakeData.json";
import { AllViewTable } from "./all-view";
import { getColumns } from "./all-view-columns";
import { AllViewContainer } from "./all-view-container";
import { FeatureManagementPerProject } from "@/feature-management/types";

export default async function ProjectDetails({
  data,
}: {
  data: FeatureManagementPerProject;
}) {
  return (
    <Tabs defaultValue="feature-flags" className="mt-6">
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
        <AllViewContainer data={data.fea} />
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
