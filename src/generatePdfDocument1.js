import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePdfDocument1 = () => {
  const downloadVersion1 = {
    pageSize: {
      width: 1000, // 11 inches in points (1 inch = 72 points)
      height: 730, // 8.5 inches in points (1 inch = 72 points)
    },
    pageOrientation: "landscape",
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
      { text: "Location: Long Rusu", style: "boldText", margin: [0, 25, 0, 0] },
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
        margin: [0, 25, 0, 10],
        fontSize: 14,
      },
      {
        table: {
          headerRows: 1,
          widths: [150, 250, "*", "*"],
          body: [
            [
              {
                text: "Bottle no/ SBC No.",
                style: "tableHeader",
              },
              { text: "Plant part", style: "tableHeader", alignment: "center" },
              {
                text: "Volume Reported by Community\n(mL)",
                style: "tableHeader",
              },
              {
                text: "Volume Verified by SBC\n(mL)",
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
                fontSize: 12,
                bold: true,
                margin: [0, 10, 0, 0],
              },
              {},
              {
                text: "4,771",
                style: "tableBodyRight",
                bold: true,
                fontSize: 12,
                margin: [0, 10, 0, 0],
              },
              {
                text: "4,837.5",
                style: "tableBodyRight",
                bold: true,
                fontSize: 12,
                margin: [0, 10, 0, 0],
              },
            ],
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        text: "Verified by",
        style: "boldText",
        margin: [0, 25, 0, 5],
        fontSize: 14,
      },
      {
        text: "Name: Nur Ain/Danisah binti Ismail",
        style: "regularText",
        margin: [0, 8, 0, 5],
        fontSize: 12,
      },
      {
        text: "Date: 2 July 2024",
        style: "regularText",
        margin: [0, 8, 0, 5],
        fontSize: 12,
      },
      {
        text: "This result is electronically generated. No signature is needed.",
        style: "italicText",
        fontSize: 10,
      },
    ],
    styles: {
      "align-center": {
        margin: [0, 5, 0, 0],
      },
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 2],
      },
      subheader: {
        fontSize: 14,
        margin: [0, 0, 0, 10],
      },
      boldText: {
        bold: true,
        fontSize: 14,
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
        fontSize: 12,
        color: "black",
        lineHeight: 1.2,
        alignment: "center",
      },
      tableBody: {
        fontSize: 11,
        alignment: "center", // Center-aligns all cells with this style
        lineHeight: 1.2,
      },
      tableBodyRight: {
        fontSize: 11,
        alignment: "right",
        lineHeight: 1.2,
      },
    },
  };

  pdfMake.createPdf(downloadVersion1).download("report-version-1.pdf");
};
