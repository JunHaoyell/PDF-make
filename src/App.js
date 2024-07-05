import React from "react";
import pdfMake, { fonts } from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdfDocument1 = () => {
  const downloadVersion1 = {
    content: [
      {
        text: "Sinisana Apps Report Sheet",
        style: "header",
        alignment: "center",
      },
      {
        text: "Plant materials and Essential oils",
        style: "subheader",
        alignment: "center",
      },
      { text: "STOCK TRANSFER:", style: "boldText", fontSize: 14 },
      { text: "Location: Long Rusu", style: "boldText", margin: [0, 20, 0, 0] },
      {
        text: "Date of sample received: 1 July 2024",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "Total number sent: 5 bottles",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "Sent by: Jeffrey Parang Taden",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "OIL VERIFICATION",
        style: "boldText",
        margin: [0, 20, 0, 5],
        fontSize: 14,
      },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto"],
          body: [
            [
              {
                text: "Bottle no/ SBC No.",
                style: "tableHeader",
              },
              { text: "Plant part", style: "tableHeader", alignment: "center" },
              {
                text: "Volume Reported by Community (mL)",
                style: "tableHeader",
              },
              {
                text: "Volume Verified by SBC (mL)",
                style: "tableHeader",
              },
            ],
            [
              { text: "12\n24/BRK-12", style: ["tableBody"] },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "995", style: ["tableBodyRight", "align-center"] },
              { text: "1063", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "13\n24/BRK-13", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "940", style: ["tableBodyRight", "align-center"] },
              { text: "980.5", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "14\n24/BRK-14", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "1146", style: ["tableBodyRight", "align-center"] },
              { text: "1134", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "15\n24/BRK-15", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "740", style: ["tableBodyRight", "align-center"] },
              { text: "700", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "16\n24/BRK-16", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "950", style: ["tableBodyRight", "align-center"] },
              { text: "960", style: ["tableBodyRight", "align-center"] },
            ],
            [
              {
                text: "Total:",
                colSpan: 2,
                alignment: "right",
                style: "tableBody",
                fontSize: 10,
                bold: true,
              },
              {},
              {
                text: "4,771",
                style: "tableBodyRight",
                bold: true,
                fontSize: 10,
              },
              {
                text: "4,837.5",
                style: "tableBodyRight",
                bold: true,
                fontSize: 10,
              },
            ],
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        text: "Verified by",
        style: "boldText",
        margin: [0, 20, 0, 5],
        fontSize: 14,
      },
      {
        text: "Name: Nur Ain/Danisah binti Ismail",
        style: "regularText",
        margin: [0, 8, 0, 5],
      },
      { text: "Date: 2 July 2024", style: "regularText", margin: [0, 8, 0, 5] },
      {
        text: "This result is electronically generated. No signature is needed.",
        style: "italicText",
      },
    ],
    styles: {
      "align-center": {
        margin: [0, 5, 0, 0],
      },
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
        lineHeight: 1.2,
      },
      subheader: {
        fontSize: 14,
        italics: true,
        margin: [0, 0, 0, 10],
        lineHeight: 1.2,
      },
      boldText: {
        bold: true,
        fontSize: 10,
        lineHeight: 1.2,
      },
      regularText: {
        fontSize: 10,
        lineHeight: 1.2,
      },
      italicText: {
        italics: true,
        fontSize: 8,
        margin: [0, 20, 0, 0],
        lineHeight: 1.2,
      },
      tableHeader: {
        bold: true,
        fontSize: 10,
        color: "black",
        lineHeight: 1.2,
        alignment: "center",
      },
      tableBody: {
        fontSize: 10,
        alignment: "center", // Center-aligns all cells with this style
        lineHeight: 1.2,
      },
      tableBodyRight: {
        fontSize: 10,
        alignment: "right",
        lineHeight: 1.2,
      },
    },
  };

  pdfMake.createPdf(downloadVersion1).download("report-version-1.pdf");
};

const generatePdfDocument2 = () => {
  const downloadVersion2 = {
    content: [
      {
        text: "Sinisana Apps Report Sheet",
        style: "header",
        alignment: "center",
      },
      {
        text: "Plant materials and Essential oils",
        style: "subheader",
        alignment: "center",
      },
      { text: "STOCK TRANSFER:", style: "boldText", fontSize: 14 },
      { text: "Location: Long Rusu", style: "boldText", margin: [0, 20, 0, 0] },
      {
        text: "Date of sample received: 1 July 2024",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "Total number sent: 5 bottles",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "Sent by: Jeffrey Parang Taden",
        style: "boldText",
        margin: [0, 5, 0, 0],
      },
      {
        text: "OIL VERIFICATION",
        style: "boldText",
        margin: [0, 20, 0, 5],
        fontSize: 14,
      },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "auto", "auto"],
          body: [
            [
              {
                text: "Bottle no/ SBC No.",
                style: "tableHeader",
              },
              { text: "Plant part", style: "tableHeader", alignment: "center" },
              {
                text: "Volume Reported by Community (mL)",
                style: "tableHeader",
              },
              {
                text: "Volume Verified by SBC (mL)",
                style: "tableHeader",
              },
            ],
            [
              { text: "12\n24/BRK-12", style: ["tableBody"] },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "995", style: ["tableBodyRight", "align-center"] },
              { text: "1063", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "13\n24/BRK-13", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "940", style: ["tableBodyRight", "align-center"] },
              { text: "980.5", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "14\n24/BRK-14", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "1146", style: ["tableBodyRight", "align-center"] },
              { text: "1134", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "15\n24/BRK-15", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "740", style: ["tableBodyRight", "align-center"] },
              { text: "700", style: ["tableBodyRight", "align-center"] },
            ],
            [
              { text: "16\n24/BRK-16", style: "tableBody" },
              { text: "Fruit", style: ["tableBody", "align-center"] },
              { text: "950", style: ["tableBodyRight", "align-center"] },
              { text: "960", style: ["tableBodyRight", "align-center"] },
            ],
            [
              {},
              {},
              {
                text: "Total:\t\t4,771",
                style: "tableBodyRight",
                bold: true,
                fontSize: 10,
              },
              {
                text: "Total:\t\t4,837.5",
                style: "tableBodyRight",
                bold: true,
                fontSize: 10,
              },
            ],
          ],
        },
        layout: "default", // Default layout provides borders for each cell
      },
      {
        text: "Verified by",
        style: "boldText",
        margin: [0, 20, 0, 5],
        fontSize: 14,
      },
      {
        text: "Name: Nur Ain/Danisah binti Ismail",
        style: "regularText",
        margin: [0, 8, 0, 5],
      },
      { text: "Date: 2 July 2024", style: "regularText", margin: [0, 8, 0, 5] },
      {
        text: "This result is electronically generated. No signature is needed.",
        style: "italicText",
      },
    ],
    styles: {
      "align-center": {
        margin: [0, 5, 0, 0],
      },
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 5],
        lineHeight: 1.2,
      },
      subheader: {
        fontSize: 14,
        italics: true,
        margin: [0, 0, 0, 10],
        lineHeight: 1.2,
      },
      boldText: {
        bold: true,
        fontSize: 10,
        lineHeight: 1.2,
      },
      regularText: {
        fontSize: 10,
        lineHeight: 1.2,
      },
      italicText: {
        italics: true,
        fontSize: 8,
        margin: [0, 20, 0, 0],
        lineHeight: 1.2,
      },
      tableHeader: {
        bold: true,
        fontSize: 10,
        color: "black",
        lineHeight: 1.2,
        alignment: "center",
      },
      tableBody: {
        fontSize: 8,
        alignment: "center", // Center-aligns all cells with this style
        lineHeight: 1.2,
      },
      tableBodyRight: {
        fontSize: 8,
        alignment: "right",
        lineHeight: 1.2,
      },
    },
  };

  pdfMake.createPdf(downloadVersion2).download("report-version-2.pdf");
};

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
