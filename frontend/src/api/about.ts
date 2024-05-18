import axios from "axios";

import { parseTSV } from "src/api/general";

export const fetchIntoItemsData = async () => {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb0FAqvpIYUrlvhhkToKvRys2GFS5u-jRjyG9CZsZ0q5mLNR1yJo_GU51dpo0S74hsCW4qxFfv3LRN/pub?gid=0&single=true&output=tsv";

  const response = await axios.get(csvUrl);
  const parsedTSVData = parseTSV(response.data);
  const shuffledData = shuffleData(parsedTSVData);

  return shuffledData;
};

const shuffleData = (data: any[]) => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  return data;
};
