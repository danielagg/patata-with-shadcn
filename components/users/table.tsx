"use client";

import { UsersOfProject } from "@/projects/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UsersTable = ({ data }: { data: UsersOfProject[] }) => {
  return (
    <Table className="mt-2">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Identity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => {
          return (
            <TableRow key={user.identity}>
              <TableCell> {user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.identity}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
