"use client";

import { Code, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { useTheme } from "next-themes";
import { Project } from "@/projects/types";
import { isDark } from "@/lib/utils";
import { AdminSidebar } from "./admin";
import { ProjectsSidebar } from "./projects";
import { ProfileSidebar } from "./profile";

export const getButtonVariant = (
  expectedPath: string,
  currentPath: string
):
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined => {
  return currentPath === expectedPath ? "default" : "ghost";
};

export function Sidebar({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const { theme, systemTheme } = useTheme();

  return (
    <div className="sticky top-0 pb-4 border-r border-muted flex flex-col h-screen justify-between bg-primary-foreground">
      <div className="space-y-4 py-4 flex flex-col justify-between min-h-screen">
        <div className="px-4 py-2">
          <div className="mt-4 mb-12 pl-2">
            {isDark(theme!, systemTheme!) ? (
              <Icons.koopleDark />
            ) : (
              <Icons.koopleLight />
            )}
          </div>

          <ProfileSidebar />
          <ProjectsSidebar projects={projects} />
          <AdminSidebar />
        </div>

        <div className="px-4">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => router.push("https://danielagg.com")}
          >
            <Code className="mr-2 h-4 w-4" />
            SDKs
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => router.push("https://danielagg.com")}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </Button>
        </div>
      </div>
    </div>
  );
}
