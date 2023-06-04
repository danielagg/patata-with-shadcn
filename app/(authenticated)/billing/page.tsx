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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Billing() {
  return (
    <main className="container flex flex-col bg-background">
      <div className="mt-12">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between w-full">
              <div className="text-4xl">Startup Plan</div>
              <div className="text-2xl font-bold">€99/month</div>
            </CardTitle>
            <CardDescription>Perfect for medium sized teams.</CardDescription>
          </CardHeader>
          <CardContent className="w-full flex flex-wrap gap-y-6">
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              <li>All core features included</li>
              <li>1 million requests per month</li>
              <li>Up to 5 seats</li>
            </ul>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button>Switch Plan</Button>
            <Button variant="destructive">Cancel Subscription</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <div className="flex justify-between w-full items-center">
          <h2 className="text-2xl font-bold">Billing History</h2>
          <Button variant="outline">Download All Invoices</Button>
        </div>

        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead>Period</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>June, 2023</TableCell>
              <TableCell>
                <Badge variant="outline">Upcoming</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May, 2023</TableCell>
              <TableCell>
                <Badge variant="default">Paid</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="-my-2">
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April, 2023</TableCell>
              <TableCell>
                <Badge variant="default">Paid</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="-my-2">
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>March, 2023 (2nd attempt)</TableCell>
              <TableCell>
                <Badge variant="default">Paid</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="-my-2">
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>March, 2023</TableCell>
              <TableCell>
                <Badge variant="destructive">Declined by your Bank</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feb, 2023</TableCell>
              <TableCell>
                <Badge variant="default">Paid</Badge>
              </TableCell>
              <TableCell>Credit Card (ending in 1234)</TableCell>
              <TableCell>€99</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="-my-2">
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
