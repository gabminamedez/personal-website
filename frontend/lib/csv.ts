export function parseCsvRows(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || (ch === "\r" && next === "\n")) {
      row.push(field);
      field = "";
      if (row.some((cell) => cell.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      if (ch === "\r") i++;
    } else if (ch !== "\r") {
      field += ch;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    if (row.some((cell) => cell.trim() !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

export function parseSheetRows<T>(
  text: string,
  expectedHeaders: readonly string[],
  toRow: (headers: string[], cells: string[]) => T | null,
): T[] {
  if (text.includes("<!DOCTYPE html>") || text.includes("accounts.google.com")) {
    throw new Error("Sheet CSV response was not valid data");
  }

  const rows = parseCsvRows(text);
  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const missing = expectedHeaders.filter((h) => !headers.includes(h));
  if (missing.length > 0) {
    throw new Error(`Sheet missing columns: ${missing.join(", ")}`);
  }

  return rows
    .slice(1)
    .map((cells) => toRow(headers, cells))
    .filter((row): row is T => row !== null);
}
