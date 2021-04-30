import React from "react";
import { useTable } from "hooks";
import { BAY_RESTORATION_TABLE_CONFIG } from "constants/index";
import { Datum, Row } from "types";
import styles from "./styles.module.css";

interface Props {
  data: Datum[];
}

export const BayRestorationTable = ({ data }: Props) => {
  const { rows, columns, nextPage, prevPage, page, lastPage } = useTable({
    data: data || [],
    tableConfig: BAY_RESTORATION_TABLE_CONFIG,
    perPage: 10,
  });

  const pageCount = `Page ${page} of ${lastPage}`;

  return (
    <div>
      <table className="table is-bordered is-striped is-hoverable is-narrow is-fullwidth">
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
      <nav className="pagination" role="navigation" aria-label="pagination">
        <div className={`pagination-list ${styles.pageCount}`}>
          <span>{pageCount}</span>
        </div>
        <button
          className="pagination-previous"
          disabled={!Boolean(prevPage)}
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="pagination-next"
          disabled={!Boolean(nextPage)}
          onClick={nextPage}
        >
          Next page
        </button>
      </nav>
    </div>
  );
};

export default BayRestorationTable;
