import React from "react";
import data from "../../data.json";
import { useFetchJson, useTable } from "hooks";
import { BAY_RESTORATION_TABLE_CONFIG } from "constants/index";
import { Row } from "types";

export const BayRestorationTable = () => {
  // const data = useFetchJson({
  //   url: "https://data.bayareametro.gov/resource/mba6-sgwr.json",
  //   dependencies: [],
  // });
  const { rows, columns } = useTable({
    data,
    tableConfig: BAY_RESTORATION_TABLE_CONFIG,
  });

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            {Boolean(columns?.length) &&
              columns.map((column) => <th key={column}>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {Boolean(rows?.length) &&
            rows.map((row: Row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.acres_chg_bay_surface}</td>
                <td>{row.cumulative_chg_since1969}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BayRestorationTable;
