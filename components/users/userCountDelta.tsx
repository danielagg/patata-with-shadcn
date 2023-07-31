"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersOfProjectStatistic } from "@/projects/types";

export const UserCountDelta = ({
  data,
}: {
  data: UsersOfProjectStatistic[];
}) => {
  const getUsageChangeSinceLastMonth = () => {
    const currentMonth = data[data.length - 1].total;
    const lastMonth = data[data.length - 2].total;

    return new Intl.NumberFormat("en", {
      style: "percent",
      minimumFractionDigits: 2,
    }).format(1 - lastMonth / currentMonth);
  };

  const getExactDifferenceInUsageSinceLastMonth = () => {
    const currentMonth = data[data.length - 1].total;
    const lastMonth = data[data.length - 2].total;

    return currentMonth - lastMonth;
  };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">User Count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {getUsageChangeSinceLastMonth()}
        </div>
        <p className="text-xs text-muted-foreground">
          {getExactDifferenceInUsageSinceLastMonth()}{" "}
          {getExactDifferenceInUsageSinceLastMonth() > 0 ? " more " : " less "}{" "}
          users compared to last month
        </p>
      </CardContent>
    </Card>
  );
};
