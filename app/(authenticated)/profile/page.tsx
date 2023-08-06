import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <main className="container flex flex-col bg-background">
      <div className="mt-12 flex items-center space-x-8">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="text-4xl">DA</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Daniel Agg</h1>
          <p className="text-muted-foreground">daniel.agg@outlook.com</p>
          <Badge variant="outline" className="mt-2">
            Administrator
          </Badge>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>
              Please make sure you are using your real data at all times.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-wrap gap-y-6">
            <div className="w-1/2 pr-3">
              <p className="text-sm"></p>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value="daniel.agg@outlook.com"
                type="email"
                className="w-full mt-1"
                disabled
              />
            </div>
            <div className="w-1/2 pl-3">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger className="w-full mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent id="language">
                  <SelectGroup>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-1/2 pr-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value="loremipsum12345"
                type="password"
                className="w-full mt-1"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
