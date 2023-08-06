"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { ProjectSettings } from "@/projects/types";
import { DeleteProjectButton } from "./delete-project-button";

export const Edit = ({ data }: { data: ProjectSettings }) => {
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);

  return (
    <Card>
      <CardContent className="w-full flex flex-wrap gap-y-6 pt-6">
        <div className="w-1/2 pr-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            className="w-full mt-1"
            onChange={(newValue) => setName(newValue.target.value)}
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(newValue) => setDescription(newValue.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="gap-x-2">
        <Button>Save Changes</Button>
        <DeleteProjectButton projectName={data.name} />
      </CardFooter>
    </Card>
  );
};
