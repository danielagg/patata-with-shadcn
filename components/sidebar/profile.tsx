"use client";

import { Home, UserCircle, CreditCard } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { getButtonVariant } from "./side-bar";

export const ProfileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const HOME_PATH = "/projects";
  const PROFILE_PATH = "/profile";
  const BILLING_PATH = "/billing";

  return (
    <div className="space-y-1">
      <Button
        variant={getButtonVariant(HOME_PATH, pathname)}
        onClick={() => router.push(HOME_PATH)}
        size="sm"
        className="w-full justify-start"
      >
        <Home className="mr-2 h-4 w-4" />
        Home
      </Button>
      <Button
        variant={getButtonVariant(PROFILE_PATH, pathname)}
        onClick={() => router.push(PROFILE_PATH)}
        size="sm"
        className="w-full justify-start"
      >
        <UserCircle className="mr-2 h-4 w-4" />
        My Profile
      </Button>
      <Button
        variant={getButtonVariant(BILLING_PATH, pathname)}
        onClick={() => router.push(BILLING_PATH)}
        size="sm"
        className="w-full justify-start"
      >
        <CreditCard className="mr-2 h-4 w-4" />
        Billing
      </Button>
    </div>
  );
};
