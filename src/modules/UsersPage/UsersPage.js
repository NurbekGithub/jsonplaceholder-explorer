import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>email</TableCell>
            <TableCell>address</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>website</TableCell>
            <TableCell>company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(
            ({ id, name, email, address, phone, website, company }) => {
              const fullAddress = `${address.city}, ${address.street}, ${address.zipcode}`;
              const fullCompany = `${company.name} - ${company.catchPhrase}`;
              return (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{fullAddress}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>
                    <a
                      href={`${website}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {website}
                    </a>
                  </TableCell>
                  <TableCell>{fullCompany}</TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
}
