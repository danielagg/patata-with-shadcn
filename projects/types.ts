export type Project = {
  id: string;
  name: string;
  description?: string;
  environments: { name: string; color: "blue" | "yellow" | "green" | "red" }[];
};
