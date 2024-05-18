export const parseTSV = (tsvText: string) => {
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
