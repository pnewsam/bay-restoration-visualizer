import { useEffect, useState } from "react";
import { deriveColumns } from "./utils";
import { Datum, TableConfiguration, Row, Column } from "types";

interface Params {
  data: Datum[];
  perPage?: number;
  tableConfig: TableConfiguration;
}

export const useTable = ({ data, perPage = 20, tableConfig }: Params) => {
  let [rows, setRows]: [Row[], any] = useState([]);
  const [columns, setColumns]: [Column[], any] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setRows(data);
    const formattedColumns = deriveColumns({
      datum: data[0] || {},
      exclusions: tableConfig.fieldExclusions,
      displayNameMapping: tableConfig.fieldNameMappings,
    });
    setColumns(formattedColumns);
  }, [data]);

  const cursorLeft = page * perPage;
  const cursorRight = cursorLeft + perPage;
  const lastPage = Math.floor(data.length / perPage);

  const nextPage = page + 1 <= lastPage ? () => setPage(page + 1) : undefined;
  const prevPage = page - 1 >= 0 ? () => setPage(page - 1 || 0) : undefined;

  rows = rows.slice(cursorLeft, cursorRight);

  return {
    columns,
    lastPage,
    nextPage,
    page,
    prevPage,
    rows,
    setPage,
  };
};
