import { Flag, FileCode2, MoreHorizontal, ArrowUpDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ColumnDef } from "@tanstack/react-table";
import {
  EntryPerEnvironmentState,
  FeatureManagementEntry,
} from "@/feature-management/types";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";

export const getColumns = (
  environments: EntryPerEnvironmentState[]
): ColumnDef<FeatureManagementEntry>[] => {
  const formatRelativeTime = (dateString: string) => {
    const currentDate = new Date();
    const targetDate = new Date(dateString);

    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      return "Today";
    } else if (daysDifference === 1) {
      return "Yesterday";
    } else if (daysDifference > 1) {
      return `${daysDifference} days ago`;
    } else {
      return "Invalid date";
    }
  };

  const columnsPerEnvironments = environments.map<
    ColumnDef<FeatureManagementEntry>
  >((env) => {
    return {
      accessorKey: "environments",
      enableHiding: false,
      header: () => <div className="text-center w-[140px]">{env.name}</div>,
      cell: ({ row }) => {
        const envs: EntryPerEnvironmentState[] = row.getValue("environments");
        const type: "feature-flag" | "remote-config" = row.getValue("type");
        const value = envs.filter((e) => e.name == env.name)[0].state;

        const getReleaseStateBackgroundColor = () => {
          switch (value) {
            case "released":
              return "bg-emerald-400 dark:bg-emerald-600";
            case "soft-released":
              return "bg-yellow-400 dark:bg-yellow-600";
            case "disabled":
              return "bg-red-400 dark:bg-red-600";
          }
        };

        return (
          <div className="flex justify-center w-[140px]">
            <DropdownMenu>
              {type === "feature-flag" ? (
                <DropdownMenuTrigger>
                  <div
                    className={`h-6 w-6 rounded-full cursor-pointer ${getReleaseStateBackgroundColor()}`}
                  />
                </DropdownMenuTrigger>
              ) : (
                <Button variant="outline">View</Button>
              )}
              <DropdownMenuContent>
                <DropdownMenuItem
                  disabled={value === "disabled"}
                  className="cursor-pointer"
                >
                  Disable
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={value === "soft-released"}
                  className="cursor-pointer"
                >
                  Soft-Release
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={value === "released"}
                  className="cursor-pointer"
                >
                  Release
                </DropdownMenuItem>

                {value === "soft-released" ? (
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
          </div>
        );
      },
    };
  });

  return [
    {
      accessorKey: "type",
      enableHiding: false,
      header: () => <></>,
      cell: ({ row }) => {
        const type: "feature-flag" | "remote-config" = row.getValue("type");
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="rounded-full p-2 bg-muted">
                  {type === "feature-flag" ? (
                    <Flag className="h-4 w-4" />
                  ) : (
                    <FileCode2 className="h-4 w-4" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {type === "feature-flag"
                    ? "Feature Flag"
                    : "Remote Configuration"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      },
    },
    {
      accessorKey: "key",
      header: "Key",
      enableHiding: false,
      cell: () => {
        <></>;
      },
    },
    {
      accessorKey: "name",
      enableHiding: false,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="-ml-4"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const name: string = row.getValue("name");
        const key: any = row.getValue("key");
        const [copied, setCopied] = useState(false);

        return (
          <div className="font-medium min-w-[300px] flex items-center space-x-4">
            <div>
              <div>{name}</div>
              <div
                className={`text-xs text-muted-foreground ${
                  copied ? "" : "cursor-pointer hover:underline"
                }`}
                onClick={() => {
                  navigator.clipboard.writeText(key);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              >
                {copied ? `'${key}' has been copied to your clipboard` : key}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "serverOnly",
      header: "Server Only",
      cell: ({ row }) => {
        const isServerOnly: boolean = row.getValue("serverOnly");
        return isServerOnly ? (
          <div className="w-[110px]">
            <Badge variant="outline">Server-Only</Badge>
          </div>
        ) : (
          <></>
        );
      },
    },
    ...columnsPerEnvironments,
    {
      accessorKey: "createdOn",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="-ml-5"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            Created On
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const createdOn: string = row.getValue("createdOn");
        return <div className="w-[150px]">{formatRelativeTime(createdOn)}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const name: string = row.getValue("name");
        const type: "feature-flag" | "remote-config" = row.getValue("type");

        return (
          <AlertDialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer">
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Code References
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <AlertDialogTrigger className="text-red-500 dark:text-red-600">
                    Delete
                  </AlertDialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the{" "}
                  {type == "feature-flag"
                    ? "feature flag"
                    : "remote configuration"}{" "}
                  of '{name}'.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Button variant="destructive">Delete '{name}'</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        );
      },
    },
  ];
};
