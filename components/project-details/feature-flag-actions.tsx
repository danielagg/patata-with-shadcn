"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FeatureFlagEntry,
  FeatureFlagState,
  FeatureManagementEntry,
} from "@/feature-management/types";
import { Row } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

export const FeatureFlagActions = ({
  row,
  setData,
  currentEnvironment,
}: {
  row: Row<FeatureManagementEntry>;
  setData: Dispatch<SetStateAction<FeatureManagementEntry[]>>;
  currentEnvironment: FeatureFlagEntry;
}) => {
  const envs: FeatureFlagEntry[] = row.getValue("environments");
  const type: "feature-flag" | "remote-config" = row.getValue("type");

  const getFeatureFlagValue = () => {
    if (type === "remote-config") return null;

    return (envs as FeatureFlagEntry[]).filter(
      (e) => e.name == currentEnvironment.name
    )[0].state;
  };

  const changeStatus = (newStatus: FeatureFlagState) => {
    setData((prevEntries: FeatureManagementEntry[]) => {
      return prevEntries.map((entry) => {
        if (
          entry.key === row.getValue("key") &&
          entry.type === "feature-flag"
        ) {
          // we've reached the current feature flag we are changing the status
          return {
            // we're copying each property, except the 'state' under 'environments', which needs to update
            ...entry,
            environments: entry.environments.map((x) =>
              x.key === currentEnvironment.key ? { ...x, state: newStatus } : x
            ) as FeatureFlagEntry[],
          };
        }

        return entry;
      });
    });
  };

  const getReleaseStateBackgroundColor = () => {
    const featureFlagValue = envs.filter(
      (e) => e.name == currentEnvironment.name
    )[0].state;

    switch (featureFlagValue) {
      case "released":
        return "bg-emerald-400 dark:bg-emerald-600";
      case "soft-released":
        return "bg-yellow-400 dark:bg-yellow-600";
      case "disabled":
        return "bg-red-400 dark:bg-red-600";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={`h-6 w-6 rounded-full cursor-pointer ${getReleaseStateBackgroundColor()}`}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          disabled={getFeatureFlagValue() === "disabled"}
          className="cursor-pointer"
          onClick={() => changeStatus("disabled")}
        >
          Disable
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={getFeatureFlagValue() === "soft-released"}
          className="cursor-pointer"
          onClick={() => changeStatus("soft-released")}
        >
          Soft-Release
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={getFeatureFlagValue() === "released"}
          className="cursor-pointer"
          onClick={() => changeStatus("released")}
        >
          Release
        </DropdownMenuItem>

        {getFeatureFlagValue() === "soft-released" ? (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Edit Soft-Release Audience
            </DropdownMenuItem>
          </>
        ) : (
          <></>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
