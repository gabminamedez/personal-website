import axios from "axios";

export const fetchDevPortfolioData = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vROpxixTTB8Bp-Rj-raotM6M0SIF5y-vr_rGDgY2y2GNf4nLKU1vdc3zelG0UKaFeUe74bNL1r45Nnt/pub?gid=0&single=true&output=tsv";

  const response = await axios.get(csvUrl);
  const parsedTSVData = parseTSV(response.data);

  return parsedTSVData;
};

const parseTSV = (tsvText: string) => {
  const rows = tsvText.split(/\r?\n/);
  const headers = rows[0].split("\t");

  const data = [];
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split("\t");
    const rowObject: any = {};
    for (let j = 0; j < headers.length; j++) {
      if (rowData[j] === "") {
        rowObject[headers[j]] = null;
      } else {
        rowObject[headers[j]] = rowData[j];
      }
    }
    data.push(rowObject);
  }

  return data;
};
