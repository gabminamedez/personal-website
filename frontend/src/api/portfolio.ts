import axios from "axios";

import { parseTSV } from "src/api/general";

export const fetchDevPortfolioData = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vROpxixTTB8Bp-Rj-raotM6M0SIF5y-vr_rGDgY2y2GNf4nLKU1vdc3zelG0UKaFeUe74bNL1r45Nnt/pub?gid=0&single=true&output=tsv";

  const response = await axios.get(csvUrl);
  const parsedTSVData = parseTSV(response.data);

  return parsedTSVData;
};

export const fetchWritingPortfolioData = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_XYd-qGzvlmKrDAigvEE8c_CoifnDLNmXzBxWXElKA5z0nf5rPuipUfH3HKWWcQgWKRYS8haNQgbs/pub?gid=0&single=true&output=tsv";

  const response = await axios.get(csvUrl);
  const parsedTSVData = parseTSV(response.data);

  return parsedTSVData;
};
