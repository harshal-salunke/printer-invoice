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
import Iframe from "react-iframe";

const sampleData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
];

class PrinterInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIframe: false,
    };
  }

  handlePrintIconClick = () => {
    this.setState((prevState) => ({
      showIframe: !prevState.showIframe,
    }));
  };

  closeIframe = () => {
    this.setState({
      showIframe: false,
    });
  };

  render() {
    const printIcon = require("./printer.png");
    return (
      <div style={{ margin: "100px auto", width: "80%" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell align="right" width={"10%"}>
                    <img
                      src={printIcon}
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                      data-testId="orderPrint"
                      alt="print icon"
                      onClick={this.handlePrintIconClick}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {this.state.showIframe && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={this.closeIframe}
          >
            <Iframe
              url="/invoice-table-data"
              width="90%"
              height="90%"
              border="none"
              display="block"
              position="relative"
            />
          </div>
        )}
      </div>
    );
  }
}

export default PrinterInvoice;
