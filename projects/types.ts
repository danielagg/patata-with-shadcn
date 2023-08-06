export type Project = {
  id: string;
  name: string;
  description?: string;
  environments: { name: string; color: "blue" | "yellow" | "green" | "red" }[];
};

export type UsersOfProjectStatistic = {
  name: string;
  total: number;
};

export type UsersOfProject = {
  identity: string;
  name: string;
  email: string;
};

export type UsersOfProjectAggregate = {
  statistics: UsersOfProjectStatistic[];
  users: UsersOfProject[];
};

export type ProjectSettings = {
  name: string;
  description: string;
  environments: { key: string; name: string }[];
};
