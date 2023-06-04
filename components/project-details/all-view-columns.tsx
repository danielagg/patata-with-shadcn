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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  EntryPerEnvironmentState,
  FeatureManagementEntry,
} from "@/feature-management/types";
import { Button } from "../ui/button";

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
      header: () => <div className="text-center w-[140px]">{env.name}</div>,
      cell: ({ row }) => {
        const envs: EntryPerEnvironmentState[] = row.getValue("environments");
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
              <DropdownMenuTrigger>
                <div
                  className={`h-6 w-6 rounded-full cursor-pointer ${getReleaseStateBackgroundColor()}`}
                />
              </DropdownMenuTrigger>
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
      header: () => <></>,
      cell: ({ row }) => {
        const type: string = row.getValue("type");
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
      accessorKey: "name",
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
      cell: (test) => {
        const name: string = test.row.getValue("name");

        console.log(test.row.original);

        // const key: string = row.getValue("key");
        return (
          <div className="font-medium min-w-[300px] flex items-center space-x-4">
            <div>
              <div>{name}</div>
              {/* <div className="text-xs text-muted-foreground">{key}</div> */}
            </div>
          </div>
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
        return <div>{formatRelativeTime(createdOn)}</div>;
      },
    },
    {
      id: "actions",
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Code References</DropdownMenuItem>
              <DropdownMenuItem
              // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                <div className="text-red-700">Delete</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};
