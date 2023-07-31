"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RetentionRate = ({ rate }: { rate: number }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {new Intl.NumberFormat("en", {
            style: "percent",
            minimumFractionDigits: 2,
          }).format(rate)}
        </div>
        <p className="text-xs text-muted-foreground">
          No significant change compared to last month
        </p>
      </CardContent>
    </Card>
  );
};
