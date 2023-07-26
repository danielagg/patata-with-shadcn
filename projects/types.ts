import { Enviroment } from "@/feature-management/types";

export type Organization = {
  id: string;
  ownerId: string;
  key: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  role: "OWNER" | "ADMIN" | string;
};

export type OrganizationWithProjects = {
  organization: Organization;
  projects: Project[];
};

export type Project = {
  id: string;
  ownerId: string;
  organizationId: string;
  key: string;
  path: string;
  name: string;
  description: string;
  environments: Enviroment[];
  features: {
    id: string;
    key: string;
  }[];
  remoteConfigs: {
    id: string;
    key: string;
  }[];
};
