import React from "react";
import { generatePdfDocument1 } from "./generatePdfDocument1";
import { generatePdfDocument2 } from "./generatePdfDocument2";

const App = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <button onClick={generatePdfDocument1}>
          Download PDF Report version 1
        </button>
      </div>
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <button onClick={generatePdfDocument2}>
          Download PDF Report version 2
        </button>
      </div>
    </>
  );
};

export default App;
