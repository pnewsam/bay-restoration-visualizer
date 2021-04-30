import React from "react";
import styles from "./styles.module.css";

export const text = {
  next: "Next page",
  prev: "Previous",
};

export interface Props {
  page: number;
  lastPage: number;
  prevPage?: () => void;
  nextPage?: () => void;
}

export const TablePagination = ({
  page,
  lastPage,
  prevPage,
  nextPage,
}: Props) => {
  const pageCount = `Page ${page} of ${lastPage}`;

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <div className={`pagination-list ${styles.pageCount}`}>
        <span>{pageCount}</span>
      </div>
      <button
        className="pagination-previous"
        disabled={!Boolean(prevPage)}
        onClick={prevPage}
      >
        {text.prev}
      </button>
      <button
        className="pagination-next"
        disabled={!Boolean(nextPage)}
        onClick={nextPage}
      >
        {text.next}
      </button>
    </nav>
  );
};

export default TablePagination;
