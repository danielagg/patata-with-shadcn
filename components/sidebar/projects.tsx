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
import { Project } from "@/projects/types";
import { usePathname, useRouter } from "next/navigation";
import { getButtonVariant } from "./side-bar";

export const ProjectsSidebar = ({ projects }: { projects: Project[] }) => {
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
              {projects.slice(0, 3).map((project) => {
                return <ProjectButton key={project.id} project={project} />;
              })}
            </>
            <CollapsibleContent className="space-y-2">
              {projects.slice(3, projects.length).map((project) => {
                return <ProjectButton key={project.id} project={project} />;
              })}
            </CollapsibleContent>
          </ScrollArea>
        </Collapsible>
      </div>
    </div>
  );
};

const ProjectButton = ({ project }: { project: Project }) => {
  const router = useRouter();
  const pathname = usePathname();

  // user is currently visiting at least the root (might be on subsequent/child) route of the current project
  const isUserIdlingOnCurrentProject = pathname.startsWith(
    `/projects/${project.id}`
  );

  return (
    <>
      <Button
        variant={getButtonVariant(`/projects/${project.id}`, pathname)}
        size="sm"
        className="w-full justify-start"
        onClick={() => router.push(`/projects/${project.id}`)}
      >
        <FolderGit2 className="mr-2 h-4 w-4" />
        {project.name}
      </Button>
      {isUserIdlingOnCurrentProject ? (
        <div className="pl-4 flex flex-col mt-2">
          <Button
            variant={getButtonVariant(
              `/projects/${project.id}/users`,
              pathname
            )}
            className="w-full justify-start text-sm"
            onClick={() => router.push(`/projects/${project.id}/users`)}
          >
            <Users2 className="h-4 w-4 mr-2" />
            Users
          </Button>
          <Button
            variant={getButtonVariant(
              `/projects/${project.id}/settings`,
              pathname
            )}
            className="w-full justify-start text-sm"
            onClick={() => router.push(`/projects/${project.id}/settings`)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button
            variant={getButtonVariant(
              `/projects/${project.id}/api-keys`,
              pathname
            )}
            onClick={() => router.push(`/projects/${project.id}/api-keys`)}
            className="w-full justify-start text-sm"
          >
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
