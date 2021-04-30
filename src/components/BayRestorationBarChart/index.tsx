import React, { useEffect } from "react";
import { useBarChart } from "hooks";
import { formatChartData } from "./utils";
import { Datum } from "types";
import styles from "./styles.module.css";

const CHART_WIDTH = 1200;
const CHART_HEIGHT = 400;

interface Props {
  data: Datum[];
}

export const BayRestorationBarChart = ({ data }: Props) => {
  let chartData = formatChartData(data);

  useBarChart({ data: chartData, width: CHART_WIDTH, height: CHART_HEIGHT });

  const stylesCaption = `has-text-centered ${styles.caption}`;

  return (
    <figure className={styles.root}>
      <figcaption className={stylesCaption}>
        Acres Change in Bay Surface by Year
      </figcaption>
      <div className={styles.chartWrapper}>
        <svg width={CHART_WIDTH} height={CHART_HEIGHT}></svg>
      </div>
    </figure>
  );
};

export default BayRestorationBarChart;
