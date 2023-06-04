"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { getButtonVariant } from "./side-bar";
import { LayoutGrid, FileCog, Lock } from "lucide-react";

export const AdminSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const ADMIN_USER_ACCESS_CONTROL_PATH = "/admin/users";
  const ADMIN_ISSUE_TEMPLATES_PATH = "/admin/issues";
  const ADMIN_MANAGE_PROJECTS_PATH = "/admin/projects";

  return (
    <div className="py-6">
      <h2 className="mb-2 text-lg font-semibold tracking-tight">
        Admin Center
      </h2>
      <div className="space-y-1">
        <Button
          variant={getButtonVariant(ADMIN_USER_ACCESS_CONTROL_PATH, pathname)}
          onClick={() => router.push(ADMIN_USER_ACCESS_CONTROL_PATH)}
          size="sm"
          className="w-full justify-start"
        >
          <Lock className="mr-2 h-4 w-4" />
          User Access Control
        </Button>
        <Button
          variant={getButtonVariant(ADMIN_ISSUE_TEMPLATES_PATH, pathname)}
          onClick={() => router.push(ADMIN_ISSUE_TEMPLATES_PATH)}
          size="sm"
          className="w-full justify-start"
        >
          <FileCog className="mr-2 h-4 w-4" />
          Issue Templates
        </Button>
        <Button
          variant={getButtonVariant(ADMIN_MANAGE_PROJECTS_PATH, pathname)}
          onClick={() => router.push(ADMIN_MANAGE_PROJECTS_PATH)}
          size="sm"
          className="w-full justify-start"
        >
          <LayoutGrid className="mr-2 h-4 w-4" />
          Manage Projects
        </Button>
      </div>
    </div>
  );
};
