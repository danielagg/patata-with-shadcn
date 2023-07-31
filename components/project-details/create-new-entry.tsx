"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FeatureManagementEntry } from "@/feature-management/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction, useState } from "react";

export const CreateNewEntry = ({
  setData,
}: {
  setData: Dispatch<SetStateAction<FeatureManagementEntry[]>>;
}) => {
  const [newEntryType, setNewEntryType] = useState<
    "feature-flag" | "remote-config"
  >("feature-flag");

  const [key, setKey] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSave = () => {
    setData((prevEntries: FeatureManagementEntry[]) => [
      createNewEntry(prevEntries[0]),
      ...prevEntries,
    ]);
  };

  const createNewEntry = (
    sample: FeatureManagementEntry
  ): FeatureManagementEntry => {
    return {
      type: newEntryType,
      key,
      name,
      serverOnly: false,
      environments: sample.environments.map((env) => {
        return { ...env, state: "disabled" };
      }),
      createdOn: new Date().toISOString(),
    };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-8">Create new</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">Create new entry</DialogTitle>
          <DialogDescription>
            Create a new Feature Flag or Remote Configuration.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <RadioGroup
            value={newEntryType}
            onValueChange={(newValue: "feature-flag" | "remote-config") =>
              setNewEntryType(newValue)
            }
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="feature-flag" id="r1" />
              <Label htmlFor="r1">Feature Flag</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remote-configuration" id="r2" />
              <Label htmlFor="r2">Remote Configuration</Label>
            </div>
          </RadioGroup>

          <div className="mt-4">
            <Label htmlFor="ff">Name</Label>
            <Input
              autoFocus
              className="mt-1"
              placeholder={`The name of the ${
                newEntryType === "feature-flag"
                  ? "Feature Flag"
                  : "Remote Configuration"
              }`}
              value={name}
              onChange={(newValue) => setName(newValue.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="ff">Key</Label>
            <Input
              className="mt-1"
              placeholder={`The key of the ${
                newEntryType === "feature-flag"
                  ? "Feature Flag"
                  : "Remote Configuration"
              }`}
              value={key}
              onChange={(newValue) => setKey(newValue.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={() => onSave()}>
              Save new entry
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
