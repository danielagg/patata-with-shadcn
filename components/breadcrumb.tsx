"use client";

import { useRouter, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();

  // const getBreadcrumbs = () => {
  //   console.log(pathname.split("/").filter((x) => x));
  // };

  // getBreadcrumbs();

  return (
    <div className="flex gap-2 text-xs">
      {/* <Link className="cursor-pointer hover:underline" href="/projects">
        Home
      </Link> */}
      {/* <ChevronRight className="h-4 w-4" /> */}
      {/* <div className="cursor-pointer hover:underline">Issues</div> */}
    </div>
  );
}
