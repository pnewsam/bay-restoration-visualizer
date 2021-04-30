import React, { useEffect } from "react";
import data from "data.json";
import { useBarChart } from "hooks";
import styles from "./styles.module.css";

export const BayRestorationBarChart = () => {
  useBarChart({ data, width: 1200, height: 400 });
  const stylesCaption = `has-text-centered ${styles.caption}`;

  return (
    <figure className={styles.root}>
      <figcaption className={stylesCaption}>
        Acres Change in Bay Surface by Year
      </figcaption>
      <div className={styles.chartWrapper}>
        <svg width="1200" height="400"></svg>
      </div>
    </figure>
  );
};

export default BayRestorationBarChart;
