import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const sampleData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
  { id: 4, name: "John Doe", age: 40 },
  { id: 5, name: "Jane Smith", age: 15 },
  { id: 6, name: "Bob Johnson", age: 56 },
  { id: 7, name: "John Doe", age: 65 },
  { id: 8, name: "Jane Smith", age: 71 },
  { id: 9, name: "Bob Johnson", age: 55 },
  { id: 10, name: "John Doe", age: 66 },
  { id: 11, name: "Jane Smith", age: 45 },
  { id: 12, name: "Bob Johnson", age: 23 },
  { id: 13, name: "Jane Smith", age: 10 },
  { id: 14, name: "Bob Johnson", age: 45 },
  { id: 15, name: "John Doe", age: 66 },
];

class InvoiceTableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIframe: false,
    };
  }

  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default InvoiceTableData;
