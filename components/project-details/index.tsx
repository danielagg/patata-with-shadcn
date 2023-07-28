import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureManagementEntry } from "@/feature-management/types";
import data from "@/feature-management/fakeData.json";
import { AllViewContainer } from "./all-view-container";
import { useEffect, useState } from "react";

async function getOverviewData(): Promise<FeatureManagementEntry[]> {
  return data as FeatureManagementEntry[];
}

export default async function ProjectDetails() {
  const overViewData = await getOverviewData();

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
        <AllViewContainer data={overViewData} />
      </TabsContent>
      <TabsContent value="feature-flags">
        <AllViewContainer
          data={overViewData.filter((x) => x.type === "feature-flag")}
        />
      </TabsContent>
      <TabsContent value="remote-configs">
        <AllViewContainer
          data={overViewData.filter((x) => x.type === "remote-config")}
        />
      </TabsContent>
    </Tabs>
  );
}
