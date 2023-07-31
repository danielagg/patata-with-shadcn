"use client";

import { Row } from "@tanstack/react-table";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  FeatureManagementEntry,
  RemoteConfigEntry,
} from "@/feature-management/types";

export const RemoteConfigActions = ({
  row,
  currentEnvironment,
}: {
  row: Row<FeatureManagementEntry>;
  currentEnvironment: RemoteConfigEntry;
}) => {
  const type: "feature-flag" | "remote-config" = row.getValue("type");
  const key: string = row.getValue("key");
  const name: string = row.getValue("name");
  const envs: RemoteConfigEntry[] = row.getValue("environments");

  const getRemoteConfigValue = () => {
    if (type === "feature-flag") return null;

    return (envs as RemoteConfigEntry[]).filter(
      (e) => e.name == currentEnvironment.name
    )[0].remoteConfigValue;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <p>{key}</p>
          <DialogDescription>{getRemoteConfigValue()}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
