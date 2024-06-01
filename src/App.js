import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrinterInvoice from "./PrinterInvoice";
import InvoiceTableData from "./InvoiceTableData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrinterInvoice />} />
        <Route path="/invoice-table-data" element={<InvoiceTableData />} />
      </Routes>
    </Router>
  );
}

export default App;
