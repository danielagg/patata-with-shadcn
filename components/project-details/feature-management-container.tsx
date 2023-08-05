"use client";

import { FeatureManagementEntry } from "@/feature-management/types";
import { FeatureManagementTable } from "./feature-management-table";
import { getColumns } from "./feature-management-columns";
import { useState } from "react";

export const FeatureManagementContainer = ({
  data,
}: {
  data: FeatureManagementEntry[];
}) => {
  const [mutableData, setMutableData] = useState(data);

  return (
    <FeatureManagementTable
      columns={getColumns(mutableData, setMutableData)}
      data={mutableData}
      setData={setMutableData}
    />
  );
};
