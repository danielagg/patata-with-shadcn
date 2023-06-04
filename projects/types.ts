export type Project = {
  name: string;
  description?: string;
  environments: { name: string; color: "blue" | "yellow" | "green" | "red" }[];
};
