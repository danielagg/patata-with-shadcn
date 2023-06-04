import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Project } from "@/projects/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  const Environment = ({
    name,
    color,
  }: {
    name: string;
    color: "blue" | "yellow" | "green" | "red";
  }) => {
    const getColor = () => {
      switch (color) {
        case "blue":
          return "bg-blue-600";
        case "yellow":
          return "bg-yellow-600";
        case "green":
          return "bg-green-600";
        case "red":
          return "bg-red-600";
      }
    };

    return (
      <li className="flex items-center space-x-2 text-sm text-muted-foreground">
        <div className={`h-2 w-2 rounded-full ${getColor()}`} />
        <div>{name}</div>
      </li>
    );
  };
  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          {project.description ? (
            <CardDescription>{project.description}</CardDescription>
          ) : (
            <></>
          )}
        </CardHeader>
        <CardContent>
          <p>Environments</p>
          <ul>
            {project.environments.map((e) => {
              return <Environment name={e.name} color={e.color} />;
            })}
          </ul>
        </CardContent>
      </div>

      <CardFooter>
        <Button className="w-full">Go to Project</Button>
      </CardFooter>
    </Card>
  );
};
