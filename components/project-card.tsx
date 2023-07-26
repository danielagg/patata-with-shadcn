import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export const ProjectCard = ({
  data,
}: {
  data: {
    project: {
      key: string;
      name: string;
      desc: string;
      environments: {
        id: string;
        key: string;
        name: string;
        createdAt: number;
        color: string;
      }[];
    };
    organization: {
      key: string;
      name: string;
    };
  };
}) => {
  const Environment = ({
    name,
    color,
  }: {
    name: string;
    color: string; //"blue" | "yellow" | "green" | "red";
  }) => {
    // const getColor = () => {
    //   switch (color) {
    //     case "blue":
    //       return "bg-blue-600";
    //     case "yellow":
    //       return "bg-yellow-600";
    //     case "green":
    //       return "bg-green-600";
    //     case "red":
    //       return "bg-red-600";
    //   }
    // };

    return (
      <li className="flex items-center space-x-2 text-sm text-muted-foreground">
        <div
          className={`h-2 w-2 rounded-full`}
          style={{ backgroundColor: color }}
        />
        <div>{name}</div>
      </li>
    );
  };
  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>{data.project.name}</CardTitle>
          {data.project.desc != null ? (
            <CardDescription>{data.project.desc}</CardDescription>
          ) : (
            <></>
          )}
        </CardHeader>
        <CardContent>
          <p>Environments</p>
          <ul>
            {data.project.environments?.map((e) => {
              return <Environment key={e.name} name={e.name} color={e.color} />;
            })}
          </ul>
        </CardContent>
      </div>

      <CardFooter>
        <Link
          href={`/projects/${data.organization.key}/${data.project.key}`}
          className="w-full"
        >
          <Button className="w-full">Go to Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
