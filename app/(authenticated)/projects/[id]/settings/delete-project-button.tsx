"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const DeleteProjectButton = ({
  projectName,
}: {
  projectName: string;
}) => {
  const [
    userInputtedProjectNameForConfirmation,
    setUserInputtedProjectNameForConfirmation,
  ] = useState("");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="space-y-4">
            <p>
              This is an irreversible action. After the deletion of your
              project, <span className="font-bold">{projectName}</span>, you
              will not be able to recover it.
            </p>
            <div>
              <Label htmlFor="user-confirmation">
                Please type here the project's name before confirming the
                deletion
              </Label>
              <Input
                id="user-confirmation"
                value={userInputtedProjectNameForConfirmation}
                className="w-full mt-1"
                onChange={(newValue) =>
                  setUserInputtedProjectNameForConfirmation(
                    newValue.target.value
                  )
                }
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Button
              variant="destructive"
              disabled={projectName !== userInputtedProjectNameForConfirmation}
            >
              Delete Project
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
