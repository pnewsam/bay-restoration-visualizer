import React, { SetStateAction, useEffect, useState } from "react";
import data from "../../data.json";
import { FieldNameMapping } from "types";

interface Row {
  [field: string]: string;
}

const columnDisplayNames: FieldNameMapping = {
  year: "Year",
  acres_chg_bay_surface: "Acres Change in Bay Surface",
  cumulative_chg_since1969: "Cumulative Change Since 1969",
};

const formatColumns = (data: any) =>
  Object.keys(data[0])
    .filter((name) => !["geography", "source"].includes(name))
    .map((name) => columnDisplayNames[name as keyof FieldNameMapping]);

export const BayRestorationTable = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // fetch("https://data.bayareametro.gov/resource/mba6-sgwr.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRows(data);
    //     const columnNames = formatColumns(data)
    //     setColumns(columnNames as never[]);
    //   });
    setRows(data as SetStateAction<never[]>);
    const columns = formatColumns(data);
    setColumns(columns as SetStateAction<never[]>);
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          {Boolean(columns?.length) &&
            columns.map((column) => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {Boolean(rows?.length) &&
          rows.map((row: Row) => (
            <tr>
              <td>{row.year}</td>
              <td>{row.acres_chg_bay_surface}</td>
              <td>{row.cumulative_chg_since1969}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default BayRestorationTable;
