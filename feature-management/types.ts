export type FeatureFlagState = "released" | "soft-released" | "disabled";

interface BaseEnvironmentEntry {
  key: string;
  name: string;
}

export interface FeatureFlagEntry extends BaseEnvironmentEntry {
  type: "feature-flag";
  state: FeatureFlagState;
}

export interface RemoteConfigEntry extends BaseEnvironmentEntry {
  type: "remote-config";
  remoteConfigValue: string;
}

export type FeatureManagementEntry =
  | {
      type: "feature-flag";
      key: string;
      name: string;
      serverOnly: boolean;
      environments: FeatureFlagEntry[];
      createdOn: string;
    }
  | {
      type: "remote-config";
      key: string;
      name: string;
      serverOnly: boolean;
      environments: RemoteConfigEntry[];
      createdOn: string;
    };
