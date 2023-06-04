"use client";

import { FeatureManagementEntry } from "@/feature-management/types";
import { AllViewTable } from "./all-view";
import { getColumns } from "./all-view-columns";

export const AllViewContainer = ({
  data,
}: {
  data: FeatureManagementEntry[];
}) => {
  return (
    <AllViewTable columns={getColumns(data[0].environments)} data={data} />
  );
};
