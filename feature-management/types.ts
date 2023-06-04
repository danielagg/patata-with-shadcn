export type EntryPerEnvironmentState = {
  key: string;
  name: string;
  state: "released" | "soft-released" | "disabled";
};

export type FeatureManagementEntry = {
  type: "feature-flag" | "remote-config";
  key: string;
  name: string;
  serverOnly: boolean;
  environments: EntryPerEnvironmentState[];
  createdOn: string;
};
