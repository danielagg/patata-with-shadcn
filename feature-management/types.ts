export type FeatureFlagsPerProject = {
  pipeline: { order: number; key: string; name: string }[];
  releaseToggles: {
    createdAt: number;
    key: string;
    name: string;
    serverOnly: boolean;
    configurations: {
      environmentKey: string;
      targeting:
        | "ENABLED_FOR_ALL"
        | "ENABLED_FOR_SOME_USERS"
        | "DISABLED_FOR_ALL";
    }[];
  }[];
};

export type Enviroment = {
  key: string;
  name: string;
  color: string;
};
