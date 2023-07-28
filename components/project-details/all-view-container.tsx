"use client";

import { FeatureManagementEntry } from "@/feature-management/types";
import { AllViewTable } from "./all-view";
import { getColumns } from "./all-view-columns";
import { useState } from "react";

export const AllViewContainer = ({
  data,
}: {
  data: FeatureManagementEntry[];
}) => {
  const [mutableData, setMutableData] = useState(data);

  return (
    <AllViewTable
      columns={getColumns(mutableData, setMutableData)}
      data={mutableData}
    />
  );
};
