import React from "react";

const FixedTable = ({ children }) => (
  <table style={{ width: "100%", tableLayout: "fixed" }}>
    {children}
  </table>
);

export default FixedTable;
