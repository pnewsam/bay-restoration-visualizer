import { useEffect, useState } from "react";
import { deriveColumns } from "./utils";
import { TableConfiguration, Row, Column } from "types";

interface Datum {
  [field: string]: string;
}

interface Params {
  data: Datum[];
  tableConfig: TableConfiguration;
}

export const useTable = ({ data, tableConfig }: Params) => {
  const [rows, setRows]: [Row[], any] = useState([]);
  const [columns, setColumns]: [Column[], any] = useState([]);

  useEffect(() => {
    setRows(data);
    const formattedColumns = deriveColumns({
      datum: data[0],
      exclusions: tableConfig.fieldExclusions,
      displayNameMapping: tableConfig.fieldNameMappings,
    });
    setColumns(formattedColumns);
  }, [data]);

  return {
    rows,
    columns,
  };
};
