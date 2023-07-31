"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const NewUniqueUsers = ({
  count,
  delta,
}: {
  count: number;
  delta: number;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">New Unique Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {count > 0 ? "+" : "-"}
          {new Intl.NumberFormat("en", {
            style: "percent",
            minimumFractionDigits: 2,
          }).format(delta)}
        </div>
        <p className="text-xs text-muted-foreground">
          {count} {count > 0 ? " more " : " less "} new users compared to last
          month
        </p>
      </CardContent>
    </Card>
  );
};
