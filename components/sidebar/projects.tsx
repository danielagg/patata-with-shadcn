"use client";

import { FolderGit2, ChevronsUpDown } from "lucide-react";
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
              Your Projects
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

  return (
    <Button
      variant={getButtonVariant(`/projects/${project.id}`, pathname)}
      size="sm"
      className="w-full justify-start"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <FolderGit2 className="mr-2 h-4 w-4" />
      {project.name}
    </Button>
  );
};
