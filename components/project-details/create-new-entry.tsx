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
import { useState } from "react";

export const CreateNewEntry = () => {
  const [newEntryType, setNewEntryType] = useState<
    "feature-flag" | "remote-config"
  >("feature-flag");

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
              id="ff"
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
              id="ff"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save new entry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
