"use client";

import {
  FolderGit2,
  ChevronsUpDown,
  Users2,
  Settings,
  Key,
  Siren,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { getButtonVariant } from "./side-bar";

export const ProjectsSidebar = ({
  data,
}: {
  data: {
    project: { key: string; name: string };
    organization: { key: string; name: string };
  }[];
}) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="py-6">
      <div className="space-y-1">
        <Collapsible
          open={showAllProjects}
          onOpenChange={setShowAllProjects}
          className="space-y-2"
        >
          <div className="flex items-center justify-between space-x-4">
            <h4 className="mb-2 text-lg font-semibold tracking-tight">
              My Projects
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <ScrollArea className="max-h-[235px] overflow-y-auto  ">
            <>
              {data.slice(0, 3).map((x) => {
                return (
                  <ProjectButton
                    key={x.organization.key + "-" + x.project.key}
                    data={x}
                  />
                );
              })}
            </>
            <CollapsibleContent className="space-y-2">
              {data.slice(3, data.length).map((x) => {
                return (
                  <ProjectButton
                    key={x.organization.key + "-" + x.project.key}
                    data={x}
                  />
                );
              })}
            </CollapsibleContent>
          </ScrollArea>
        </Collapsible>
      </div>
    </div>
  );
};

const ProjectButton = ({
  data,
}: {
  data: {
    project: { key: string; name: string };
    organization: { key: string; name: string };
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const variant = getButtonVariant(`/projects/${data.project}`, pathname);
  return (
    <>
      <Button
        variant={variant}
        size="sm"
        className="w-full items-start justify-start h-12 pt-2"
        onClick={() =>
          router.push(`/projects/${data.organization.key}/${data.project.key}`)
        }
      >
        <FolderGit2 className="mr-2 mt-1 h-4 w-4" />
        <div className="flex flex-col justify-start text-left">
          <div>{data.project.name}</div>
          <div className="text-xs text-muted-foreground">
            {data.organization.name}
          </div>
        </div>
      </Button>
      {variant === "default" ? (
        <div className="pl-4 flex flex-col mt-2">
          <Button variant="ghost" className="w-full justify-start text-sm">
            <Users2 className="h-4 w-4 mr-2" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            <Key className="h-4 w-4 mr-2" />
            API Keys
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            <Siren className="h-4 w-4 mr-2" />
            Audit Logs
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
