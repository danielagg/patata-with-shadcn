"use client";

import {
  Home,
  UserCircle,
  Bell,
  ClipboardList,
  LineChart,
  FolderOpen,
  LayoutGrid,
  FileCog,
  HelpCircle,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { Icons } from "./icons";
import { useTheme } from "next-themes";

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const HOME_PATH = "/";
  const PROFILE_PATH = "/profile";
  const NOTIFICATIONS_PATH = "/notifications";
  const ISSUES_PATH = "/issues";
  const MY_PROJECTS_PATH = "/projects";
  const KPIS_PATH = "/kpis";
  const ADMIN_USER_ACCESS_CONTROL_PATH = "/admin/users";
  const ADMIN_ISSUE_TEMPLATES_PATH = "/admin/issues";
  const ADMIN_MANAGE_PROJECTS_PATH = "/admin/projects";

  const getButtonVariant = (
    path: string
  ):
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined => {
    // exact match on home, else it's a fuzzy match
    if (path == "/") {
      return pathname == "/" ? "default" : "ghost";
    }

    return pathname.indexOf(path) > -1 ? "default" : "ghost";
  };

  return (
    <div className="sticky top-0 pb-4 border-r border-muted flex flex-col h-screen justify-between bg-primary-foreground">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="mt-4 mb-12 pl-2">
            {theme == "dark" ? <Icons.koopleDark /> : <Icons.koopleLight />}
          </div>

          <div className="space-y-1">
            <Button
              variant={getButtonVariant(HOME_PATH)}
              onClick={() => router.push(HOME_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button
              variant={getButtonVariant(PROFILE_PATH)}
              onClick={() => router.push(PROFILE_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <UserCircle className="mr-2 h-4 w-4" />
              My Profile
            </Button>
            <Button
              variant={getButtonVariant(NOTIFICATIONS_PATH)}
              onClick={() => router.push(NOTIFICATIONS_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
          </div>
        </div>

        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Issues & Projects
          </h2>
          <div className="space-y-1">
            <Button
              variant={getButtonVariant(ISSUES_PATH)}
              onClick={() => router.push(ISSUES_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Issues
            </Button>
            <Button
              variant={getButtonVariant(MY_PROJECTS_PATH)}
              onClick={() => router.push(MY_PROJECTS_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              My Projects
            </Button>
            <Button
              variant={getButtonVariant(KPIS_PATH)}
              onClick={() => router.push(KPIS_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <LineChart className="mr-2 h-4 w-4" />
              KPIs
            </Button>
          </div>
        </div>

        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Admin Center
          </h2>
          <div className="space-y-1">
            <Button
              variant={getButtonVariant(ADMIN_USER_ACCESS_CONTROL_PATH)}
              onClick={() => router.push(ADMIN_USER_ACCESS_CONTROL_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <Lock className="mr-2 h-4 w-4" />
              User Access Control
            </Button>
            <Button
              variant={getButtonVariant(ADMIN_ISSUE_TEMPLATES_PATH)}
              onClick={() => router.push(ADMIN_ISSUE_TEMPLATES_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <FileCog className="mr-2 h-4 w-4" />
              Issue Templates
            </Button>
            <Button
              variant={getButtonVariant(ADMIN_MANAGE_PROJECTS_PATH)}
              onClick={() => router.push(ADMIN_MANAGE_PROJECTS_PATH)}
              size="sm"
              className="w-full justify-start"
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Manage Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
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
  );
}
