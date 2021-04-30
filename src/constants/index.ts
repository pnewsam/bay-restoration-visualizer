import { TableConfiguration } from "types";

export const BAY_RESTORATION_TABLE_CONFIG: TableConfiguration = {
  fieldNameMappings: Object.freeze({
    year: "Year",
    acres_chg_bay_surface: "Acres Change in Bay Surface",
    cumulative_chg_since1969: "Cumulative Change Since 1969",
  }),
  fieldExclusions: ["geography", "source"],
};
